/**
 * Study Progress Tracking Service using localStorage
 * Stores attempted questions, correctness, timestamps, and calculates stats.
 */

const PROGRESS_STORAGE_KEY = 'civil_mcq_user_progress_v1';

/**
 * Progress data structure in localStorage:
 * {
 *   answers: {
 *     [questionId]: {
 *       subjectSlug: string,
 *       isCorrect: boolean,
 *       selectedOption: string,
 *       timestamp: number
 *     }
 *   },
 *   lastActiveDate: string (YYYY-MM-DD),
 *   streak: number
 * }
 */

function getStoredData() {
  try {
    const raw = localStorage.getItem(PROGRESS_STORAGE_KEY);
    if (!raw) return { answers: {}, lastActiveDate: null, streak: 0 };
    return JSON.parse(raw);
  } catch {
    return { answers: {}, lastActiveDate: null, streak: 0 };
  }
}

function saveStoredData(data) {
  try {
    localStorage.setItem(PROGRESS_STORAGE_KEY, JSON.stringify(data));
    window.dispatchEvent(new CustomEvent('mcq_progress_updated', { detail: data }));
  } catch (err) {
    console.error('Failed to save progress to localStorage:', err);
  }
}

function getTodayString() {
  const d = new Date();
  return `${d.getFullYear()}-${String(d.getMonth() + 1).padStart(2, '0')}-${String(d.getDate()).padStart(2, '0')}`;
}

/**
 * Record a user's answer attempt on a question
 */
export function recordAnswerAttempt(questionId, subjectSlug, isCorrect, selectedOption) {
  if (!questionId) return;

  const data = getStoredData();
  const today = getTodayString();

  // Calculate study streak
  if (data.lastActiveDate !== today) {
    if (data.lastActiveDate) {
      const last = new Date(data.lastActiveDate);
      const now = new Date(today);
      const diffDays = Math.round((now - last) / (1000 * 60 * 60 * 24));
      if (diffDays === 1) {
        data.streak = (data.streak || 0) + 1;
      } else if (diffDays > 1) {
        data.streak = 1;
      }
    } else {
      data.streak = 1;
    }
    data.lastActiveDate = today;
  }

  data.answers[questionId] = {
    subjectSlug: subjectSlug || 'general',
    isCorrect: Boolean(isCorrect),
    selectedOption: selectedOption || '',
    timestamp: Date.now(),
    date: today
  };

  saveStoredData(data);
}

/**
 * Check if a question was previously answered
 */
export function getQuestionStatus(questionId) {
  const data = getStoredData();
  return data.answers[questionId] || null;
}

/**
 * Calculate overall summary stats across all subjects
 */
export function getOverallProgressStats() {
  const data = getStoredData();
  const answers = Object.values(data.answers || {});
  const today = getTodayString();

  const totalAttempted = answers.length;
  const totalCorrect = answers.filter((a) => a.isCorrect).length;
  const totalIncorrect = totalAttempted - totalCorrect;
  const accuracy = totalAttempted > 0 ? Math.round((totalCorrect / totalAttempted) * 100) : 0;
  const answeredToday = answers.filter((a) => a.date === today).length;

  return {
    totalAttempted,
    totalCorrect,
    totalIncorrect,
    accuracy,
    answeredToday,
    streak: data.streak || (answeredToday > 0 ? 1 : 0),
    hasProgress: totalAttempted > 0
  };
}

/**
 * Calculate subject-specific progress stats
 */
export function getSubjectProgressStats(subjectSlug, totalQuestionsCount = 0) {
  const data = getStoredData();
  const answers = Object.values(data.answers || {}).filter((a) => a.subjectSlug === subjectSlug);

  const attempted = answers.length;
  const correct = answers.filter((a) => a.isCorrect).length;
  const accuracy = attempted > 0 ? Math.round((correct / attempted) * 100) : 0;
  const percentage = totalQuestionsCount > 0 ? Math.min(100, Math.round((attempted / totalQuestionsCount) * 100)) : 0;

  return {
    attempted,
    correct,
    accuracy,
    percentage,
    total: totalQuestionsCount
  };
}

/**
 * Reset all user progress
 */
export function resetUserProgress() {
  try {
    localStorage.removeItem(PROGRESS_STORAGE_KEY);
    window.dispatchEvent(new CustomEvent('mcq_progress_updated', { detail: null }));
  } catch (err) {
    console.error('Failed to reset progress:', err);
  }
}
