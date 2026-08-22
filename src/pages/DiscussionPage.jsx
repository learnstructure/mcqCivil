import React, { useEffect, useMemo } from 'react';
import { useParams, useLocation, Navigate } from 'react-router-dom';
import { getSubjectBySlug } from '@/data/subjects';
import DiscussionView from '@/components/mcq/DiscussionView';

export default function DiscussionPage() {
  const { subject, id } = useParams();
  const location = useLocation();

  const questionData = useMemo(() => {
    // If state was passed via React Router Link
    if (location.state && location.state.ques) {
      return {
        id: location.state.id,
        ques: location.state.ques,
        quesno: location.state.quesno,
        ansA: location.state.ansA,
        ansB: location.state.ansB,
        ansC: location.state.ansC,
        ansD: location.state.ansD,
        correct: location.state.correct,
        pathname: subject,
      };
    }

    // Otherwise, find question from data registry
    const sub = getSubjectBySlug(subject);
    if (!sub) return null;

    const matchedQ = sub.questions.find((q) => q.id === id);
    if (!matchedQ) return null;

    return {
      id: matchedQ.id,
      ques: matchedQ.question,
      quesno: matchedQ.serialno,
      ansA: matchedQ.optionA,
      ansB: matchedQ.optionB,
      ansC: matchedQ.optionC,
      ansD: matchedQ.optionD,
      correct: matchedQ.correct,
      pathname: subject,
    };
  }, [subject, id, location.state]);

  useEffect(() => {
    if (questionData) {
      document.title = `Discussion: Q#${questionData.quesno} - ${subject} | Civil Engineering MCQ`;
    }
  }, [questionData, subject]);

  if (!questionData) {
    return <Navigate to={`/${subject}`} replace />;
  }

  return (
    <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8 animate-fadeIn">
      <DiscussionView
        ques={questionData.ques}
        quesno={questionData.quesno}
        ansA={questionData.ansA}
        ansB={questionData.ansB}
        ansC={questionData.ansC}
        ansD={questionData.ansD}
        correct={questionData.correct}
        pathname={questionData.pathname}
        id={questionData.id}
      />
    </div>
  );
}
