import { initializeApp } from "firebase/app";
import { getFirestore } from "firebase/firestore";
import { getAnalytics, isSupported } from "firebase/analytics";

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
