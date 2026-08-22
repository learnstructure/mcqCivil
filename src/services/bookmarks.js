/**
 * Question Bookmark / Star Service using localStorage
 * Allows students to save difficult or important questions for quick revision.
 */

const BOOKMARKS_STORAGE_KEY = 'civil_mcq_user_bookmarks_v1';

function getStoredBookmarks() {
  try {
    const raw = localStorage.getItem(BOOKMARKS_STORAGE_KEY);
    if (!raw) return {};
    return JSON.parse(raw);
  } catch {
    return {};
  }
}

function saveStoredBookmarks(data) {
  try {
    localStorage.setItem(BOOKMARKS_STORAGE_KEY, JSON.stringify(data));
    window.dispatchEvent(new CustomEvent('mcq_bookmarks_updated', { detail: data }));
  } catch (err) {
    console.error('Failed to save bookmarks:', err);
  }
}

export function isQuestionBookmarked(questionId) {
  if (!questionId) return false;
  const bookmarks = getStoredBookmarks();
  return Boolean(bookmarks[questionId]);
}

export function toggleQuestionBookmark(questionId, mcqData = null) {
  if (!questionId) return false;
  const bookmarks = getStoredBookmarks();
  let nowBookmarked = false;

  if (bookmarks[questionId]) {
    delete bookmarks[questionId];
    nowBookmarked = false;
  } else {
    bookmarks[questionId] = {
      id: questionId,
      savedAt: Date.now(),
      ...(mcqData ? { question: mcqData.question, subjectSlug: mcqData.subjectSlug } : {})
    };
    nowBookmarked = true;
  }

  saveStoredBookmarks(bookmarks);
  return nowBookmarked;
}

export function getAllBookmarkedIds() {
  const bookmarks = getStoredBookmarks();
  return Object.keys(bookmarks);
}

export function getBookmarksCount() {
  return Object.keys(getStoredBookmarks()).length;
}
