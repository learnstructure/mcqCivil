import React, { useState, useEffect } from 'react';
import { collection, getDocs, addDoc, serverTimestamp } from 'firebase/firestore';
import { db } from '@/services/firebase';
import { MessageSquare, Send, User, CheckCircle2, ArrowLeft, Clock } from 'lucide-react';
import { useNavigate } from 'react-router-dom';

export default function DiscussionView({
  ques,
  quesno,
  ansA,
  ansB,
  ansC,
  ansD,
  correct,
  pathname,
  id,
}) {
  const navigate = useNavigate();
  const safeId = id ? id.slice(0, 30) : '';
  const [comments, setComments] = useState([]);
  const [loading, setLoading] = useState(true);
  const [submitting, setSubmitting] = useState(false);
  const [author, setAuthor] = useState('');
  const [commentText, setCommentText] = useState('');
  const [notification, setNotification] = useState(null);

  useEffect(() => {
    let isMounted = true;
    const fetchComments = async () => {
      try {
        setLoading(true);
        const colRef = collection(db, pathname, safeId, 'comments');
        const snapshot = await getDocs(colRef);
        if (!snapshot.empty) {
          const list = [];
          snapshot.forEach((doc) => {
            const data = doc.data();
            list.push({
              id: doc.id,
              name: data.name || 'Anonymous',
              comment: data.comment || '',
              time: data.timestamp ? new Date(data.timestamp.toDate()).toLocaleDateString() : null,
            });
          });
          if (isMounted) setComments(list);
        } else {
          if (isMounted) setComments([]);
        }
      } catch (err) {
        console.error('Error fetching comments:', err);
      } finally {
        if (isMounted) setLoading(false);
      }
    };

    if (pathname && safeId) {
      fetchComments();
    }
    return () => {
      isMounted = false;
    };
  }, [pathname, safeId]);

  const handleSubmit = async (e) => {
    e.preventDefault();
    if (!author.trim() || !commentText.trim()) return;

    try {
      setSubmitting(true);
      const colRef = collection(db, pathname, safeId, 'comments');
      await addDoc(colRef, {
        name: author.trim(),
        comment: commentText.trim(),
        createdAt: new Date().toISOString(),
      });

      setComments((prev) => [
        ...prev,
        {
          id: Date.now().toString(),
          name: author.trim(),
          comment: commentText.trim(),
          time: 'Just now',
        },
      ]);

      setCommentText('');
      setNotification('Your reply has been posted successfully!');
      setTimeout(() => setNotification(null), 4000);
    } catch (err) {
      console.error('Error posting comment:', err);
      setNotification('Failed to post reply. Please try again.');
    } finally {
      setSubmitting(false);
    }
  };

  const options = [
    { key: 'a', label: 'A', text: ansA },
    { key: 'b', label: 'B', text: ansB },
    { key: 'c', label: 'C', text: ansC },
    { key: 'd', label: 'D', text: ansD },
  ];

  return (
    <div className="max-w-4xl mx-auto space-y-6">
      {/* Back Button */}
      <button
        onClick={() => navigate(-1)}
        type="button"
        className="inline-flex items-center gap-2 px-4 py-2 rounded-xl bg-slate-100 hover:bg-slate-200 dark:bg-slate-800 dark:hover:bg-slate-700 text-slate-700 dark:text-slate-200 text-sm font-medium transition"
      >
        <ArrowLeft className="w-4 h-4" />
        <span>Back to Subject Questions</span>
      </button>

      {/* Question Card */}
      <div className="glass-card rounded-2xl p-6 sm:p-8">
        <div className="flex items-center gap-2 text-xs font-semibold uppercase tracking-wider text-sky-600 dark:text-sky-400 mb-2">
          <span>Question #{quesno}</span>
          <span>•</span>
          <span className="capitalize">{pathname}</span>
        </div>
        <h1 className="text-xl sm:text-2xl font-bold text-slate-900 dark:text-white leading-relaxed mb-6">
          {ques}
        </h1>

        <div className="grid grid-cols-1 sm:grid-cols-2 gap-3 mb-4">
          {options.map((opt) => {
            const isCorrect = correct === opt.key;
            return (
              <div
                key={opt.key}
                className={`p-4 rounded-xl border transition-all flex items-start gap-3 ${
                  isCorrect
                    ? 'border-emerald-500 bg-emerald-50/90 dark:bg-emerald-950/40 text-emerald-950 dark:text-emerald-200 ring-1 ring-emerald-500'
                    : 'border-slate-200 dark:border-slate-800 bg-slate-50/50 dark:bg-slate-900/40 text-slate-700 dark:text-slate-300'
                }`}
              >
                <span
                  className={`w-6 h-6 rounded-lg text-xs flex items-center justify-center font-bold flex-shrink-0 ${
                    isCorrect
                      ? 'bg-emerald-500 text-white'
                      : 'bg-slate-200 dark:bg-slate-800 text-slate-700 dark:text-slate-400'
                  }`}
                >
                  {opt.label}
                </span>
                <span className="text-sm flex-1">{opt.text}</span>
                {isCorrect && (
                  <CheckCircle2 className="w-5 h-5 text-emerald-600 dark:text-emerald-400 flex-shrink-0" />
                )}
              </div>
            );
          })}
        </div>

        <div className="p-3 rounded-xl bg-emerald-100/70 dark:bg-emerald-950/40 border border-emerald-200 dark:border-emerald-900 text-xs font-medium text-emerald-800 dark:text-emerald-300 flex items-center gap-2">
          <CheckCircle2 className="w-4 h-4 text-emerald-600 dark:text-emerald-400 flex-shrink-0" />
          <span>Correct Answer: Option ({correct?.toUpperCase()})</span>
        </div>
      </div>

      {/* Discussion Forum Section */}
      <div className="glass-card rounded-2xl p-6 sm:p-8 space-y-6">
        <div className="flex items-center justify-between pb-4 border-b border-slate-100 dark:border-slate-800">
          <div className="flex items-center gap-2.5 font-bold text-lg text-slate-900 dark:text-white">
            <MessageSquare className="w-5 h-5 text-sky-500" />
            <h2>Discussion & Community Explanations ({comments.length})</h2>
          </div>
        </div>

        {/* Existing Comments List */}
        {loading ? (
          <div className="py-8 text-center text-sm text-slate-500 dark:text-slate-400 animate-pulse">
            Loading discussions...
          </div>
        ) : comments.length === 0 ? (
          <div className="py-8 text-center bg-slate-50 dark:bg-slate-900/40 rounded-2xl border border-dashed border-slate-200 dark:border-slate-800 p-6">
            <MessageSquare className="w-8 h-8 text-slate-400 mx-auto mb-2 opacity-60" />
            <p className="text-sm font-medium text-slate-700 dark:text-slate-300">
              No replies yet on this question.
            </p>
            <p className="text-xs text-slate-500 dark:text-slate-400 mt-1">
              Have an explanation or insight? Be the first to share your thoughts below!
            </p>
          </div>
        ) : (
          <div className="space-y-4">
            {comments.map((c) => (
              <div
                key={c.id}
                className="p-4 rounded-xl bg-slate-50 dark:bg-slate-900/60 border border-slate-200/80 dark:border-slate-800/80 space-y-2"
              >
                <div className="flex items-center justify-between">
                  <div className="flex items-center gap-2">
                    <div className="w-7 h-7 rounded-full bg-gradient-to-tr from-sky-500 to-teal-400 text-white font-bold text-xs flex items-center justify-center">
                      {c.name.charAt(0).toUpperCase()}
                    </div>
                    <span className="font-semibold text-sm text-slate-800 dark:text-slate-200">
                      {c.name}
                    </span>
                  </div>
                  {c.time && (
                    <span className="text-[11px] text-slate-400 flex items-center gap-1">
                      <Clock className="w-3 h-3" />
                      {c.time}
                    </span>
                  )}
                </div>
                <p className="text-sm text-slate-600 dark:text-slate-300 whitespace-pre-wrap leading-relaxed pl-9">
                  {c.comment}
                </p>
              </div>
            ))}
          </div>
        )}

        {/* New Comment Form */}
        <form onSubmit={handleSubmit} className="pt-4 border-t border-slate-100 dark:border-slate-800 space-y-3">
          <h3 className="text-sm font-semibold text-slate-900 dark:text-white">
            Leave your answer, clarification or note
          </h3>

          {notification && (
            <div className="p-3 rounded-xl bg-sky-50 dark:bg-sky-950/50 border border-sky-200 dark:border-sky-800 text-xs text-sky-800 dark:text-sky-300 animate-fadeIn">
              {notification}
            </div>
          )}

          <div>
            <input
              type="text"
              placeholder="Your name or nickname..."
              required
              value={author}
              onChange={(e) => setAuthor(e.target.value)}
              className="w-full px-4 py-2.5 rounded-xl border border-slate-200 dark:border-slate-700 bg-white dark:bg-slate-900 text-slate-900 dark:text-white text-sm outline-none focus:ring-2 focus:ring-sky-500 focus:border-transparent transition"
            />
          </div>

          <div>
            <textarea
              rows={4}
              placeholder="Write your explanation, steps, or question here..."
              required
              value={commentText}
              onChange={(e) => setCommentText(e.target.value)}
              className="w-full px-4 py-2.5 rounded-xl border border-slate-200 dark:border-slate-700 bg-white dark:bg-slate-900 text-slate-900 dark:text-white text-sm outline-none focus:ring-2 focus:ring-sky-500 focus:border-transparent transition"
            />
          </div>

          <button
            type="submit"
            disabled={submitting}
            className="inline-flex items-center gap-2 px-5 py-2.5 rounded-xl bg-sky-600 hover:bg-sky-500 text-white font-medium text-sm shadow-md shadow-sky-600/20 disabled:opacity-50 transition"
          >
            <Send className="w-4 h-4" />
            <span>{submitting ? 'Posting...' : 'Post Reply'}</span>
          </button>
        </form>
      </div>
    </div>
  );
}
