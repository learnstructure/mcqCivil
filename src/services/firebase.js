import { initializeApp } from "firebase/app";
import { 
  getFirestore, 
  collection, 
  addDoc, 
  getDocs, 
  query, 
  orderBy, 
  serverTimestamp 
} from "firebase/firestore";
import { getAnalytics, isSupported } from "firebase/analytics";
import { validateQuestionSubmission } from "@/services/validation";

export const firebaseConfig = {
  apiKey: import.meta.env.VITE_API_KEY || "AIzaSyAju82YlDPioFEJs8VhfQePqWBOvXuMP28",
  authDomain: "civilengineering-mcq.firebaseapp.com",
  projectId: "civilengineering-mcq",
  storageBucket: "civilengineering-mcq.appspot.com",
  messagingSenderId: "840081321566",
  appId: "1:840081321566:web:ce09ab681d776017e20ecf",
  measurementId: "G-76898C6T74"
};

// Initialize Firebase
export const app = initializeApp(firebaseConfig);
export const db = getFirestore(app);

// Safe Analytics initialization
let analytics = null;
if (typeof window !== "undefined") {
  isSupported().then(yes => {
    if (yes) {
      analytics = getAnalytics(app);
    }
  }).catch(() => {
    // Analytics not supported in this environment
  });
}

export { analytics };

// ==========================================
// Crowdsourced Question Contribution Services
// ==========================================

const CACHE_KEY = "civilmcq_contributions_cache";
const CACHE_TIME_KEY = "civilmcq_contributions_cache_time";
const CACHE_TTL_MS = 60 * 60 * 1000; // 1 hour client cache

/**
 * Submit a student-contributed MCQ to Firestore
 */
export async function submitQuestionContribution(payload, existingCommunity = []) {
  // Run anti-spam, gibberish & duplicate validation
  const validation = validateQuestionSubmission(payload, existingCommunity);
  if (!validation.isValid) {
    throw new Error(validation.error || "Invalid question submission.");
  }

  const contributionsRef = collection(db, "contributed_questions");
  const docData = {
    subjectSlug: payload.subjectSlug || "som",
    subjectTitle: payload.subjectTitle || "Strength of Materials",
    question: payload.question.trim(),
    optionA: payload.optionA.trim(),
    optionB: payload.optionB.trim(),
    optionC: payload.optionC.trim(),
    optionD: payload.optionD.trim(),
    ans: payload.ans.toUpperCase(),
    explanation: (payload.explanation || "").trim(),
    contributorName: (payload.contributorName || "Anonymous").trim(),
    contributorCollege: (payload.contributorCollege || "").trim(),
    contributorEmail: (payload.contributorEmail || "").trim(),
    status: "approved", // Automatically approved for community leaderboard or can be filtered
    createdAt: serverTimestamp(),
  };

  const docRef = await addDoc(contributionsRef, docData);

  // Invalidate local cache so author sees their submission immediately
  try {
    localStorage.removeItem(CACHE_KEY);
    localStorage.removeItem(CACHE_TIME_KEY);
  } catch (e) {
    // ignore
  }

  return { id: docRef.id, ...docData };
}

/**
 * Fetch all contributed questions with 1-hour localStorage caching to avoid Firestore read costs
 */
export async function fetchContributionsWithCache(forceRefresh = false) {
  try {
    if (!forceRefresh && typeof window !== "undefined") {
      const cached = localStorage.getItem(CACHE_KEY);
      const cachedTime = localStorage.getItem(CACHE_TIME_KEY);
      if (cached && cachedTime && Date.now() - Number(cachedTime) < CACHE_TTL_MS) {
        return JSON.parse(cached);
      }
    }

    const q = query(
      collection(db, "contributed_questions"),
      orderBy("createdAt", "desc")
    );
    const snapshot = await getDocs(q);
    const list = [];
    snapshot.forEach((doc) => {
      const data = doc.data();
      list.push({
        id: doc.id,
        ...data,
        createdAt: data.createdAt?.toDate?.() ? data.createdAt.toDate().toISOString() : new Date().toISOString(),
      });
    });

    if (typeof window !== "undefined") {
      try {
        localStorage.setItem(CACHE_KEY, JSON.stringify(list));
        localStorage.setItem(CACHE_TIME_KEY, String(Date.now()));
      } catch (e) {
        // quota exceeded or private mode
      }
    }

    return list;
  } catch (error) {
    console.error("Error fetching contributions:", error);
    // Fallback to cache if offline
    try {
      const cached = localStorage.getItem(CACHE_KEY);
      if (cached) return JSON.parse(cached);
    } catch (e) {
      // ignore
    }
    return [];
  }
}

/**
 * Compute Leaderboard Rankings and Contributor Badges
 */
export function computeLeaderboard(contributions = []) {
  const map = new Map();

  contributions.forEach((c) => {
    const rawName = (c.contributorName || "Anonymous").trim();
    if (rawName.toLowerCase() === "anonymous") return; // Keep anonymous submissions out of ranked hall of fame

    const rawEmail = (c.contributorEmail || "").toLowerCase().trim();
    // Unique key: prioritize email if provided, otherwise fallback to normalized name
    const key = rawEmail ? `email:${rawEmail}` : `name:${rawName.toLowerCase()}`;

    if (!map.has(key)) {
      map.set(key, {
        name: rawName,
        college: c.contributorCollege || "",
        count: 0,
        subjects: new Set(),
        lastActive: c.createdAt,
      });
    }
    const item = map.get(key);
    item.count += 1;
    // Keep the longest/most complete display name
    if (rawName.length > item.name.length) item.name = rawName;
    if (c.subjectTitle) item.subjects.add(c.subjectTitle);
    if (!item.college && c.contributorCollege) item.college = c.contributorCollege;
  });

  const sorted = Array.from(map.values()).sort((a, b) => b.count - a.count);

  return sorted.map((contributor, index) => {
    let badge = "Contributor";
    let badgeColor = "bg-slate-100 text-slate-700 dark:bg-slate-800 dark:text-slate-300";

    if (index === 0 && contributor.count >= 3) {
      badge = "Legend";
      badgeColor = "bg-amber-100 text-amber-800 dark:bg-amber-950 dark:text-amber-300 border-amber-300";
    } else if (index === 1 && contributor.count >= 2) {
      badge = "Master";
      badgeColor = "bg-slate-200 text-slate-800 dark:bg-slate-800 dark:text-slate-200";
    } else if (index === 2 && contributor.count >= 1) {
      badge = "Expert";
      badgeColor = "bg-amber-50 text-amber-700 dark:bg-amber-950/50 dark:text-amber-400";
    } else if (contributor.count >= 5) {
      badge = "Senior Contributor";
      badgeColor = "bg-sky-100 text-sky-800 dark:bg-sky-950 dark:text-sky-300";
    }

    return {
      rank: index + 1,
      ...contributor,
      subjectsCount: contributor.subjects.size,
      badge,
      badgeColor,
    };
  });
}
