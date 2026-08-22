import React, { useState, useEffect, useMemo, useCallback } from 'react';
import { useParams, Link } from 'react-router-dom';
import { 
  getSubjectBySlug, 
  TECHNICAL_SUBJECTS 
} from '@/data/subjects';
import { dataSOM } from '@/data/dataSOM';
import { dataStructure } from '@/data/dataStructure';
import { dataRCC } from '@/data/dataRCC';
import { dataGeotechnical } from '@/data/dataGeotechnical';
import { dataSurveying } from '@/data/dataSurveying';
import { dataBuildingMat } from '@/data/dataBuildingMat';
import { dataEstimating } from '@/data/dataEstimating';
import { dataConstructionManagement } from '@/data/dataConstructionManagement';
import { dataEconomics } from '@/data/dataEconomics';
import { dataDrawing } from '@/data/dataDrawing';
import { dataProfessional } from '@/data/dataProfessional';
import { dataGkGeography } from '@/data/dataGkGeography';
import { dataGkOrganization } from '@/data/dataGkOrganization';

import TestQuestion from '@/components/test/TestQuestion';
import TimerBadge from '@/components/test/TimerBadge';
import QuestionNavigator from '@/components/test/QuestionNavigator';
import TestResultsModal from '@/components/test/TestResultsModal';
import { ArrowLeft, RotateCcw } from 'lucide-react';

function sampleRandom(arr, count) {
  if (!arr || arr.length === 0) return [];
  const shuffled = [...arr].sort(() => 0.5 - Math.random());
  return shuffled.slice(0, Math.min(count, arr.length));
}

export default function TestRunnerPage() {
  const { subject } = useParams();

  const isFullMock = subject === 'civil';
  const isGkMock = subject === 'gk';

  const timeMinutes = isFullMock ? 45 : 10;

  // Generate randomized question set
  const generateQuestions = useCallback(() => {
    let raw = [];
    if (isFullMock) {
      raw = [
        ...sampleRandom(dataSOM, 4),
        ...sampleRandom(dataStructure, 4),
        ...sampleRandom(dataRCC, 5),
        ...sampleRandom(dataGeotechnical, 5),
        ...sampleRandom(dataSurveying, 5),
        ...sampleRandom(dataBuildingMat, 5),
        ...sampleRandom(dataEstimating, 4),
        ...sampleRandom(dataConstructionManagement, 5),
        ...sampleRandom(dataEconomics, 5),
        ...sampleRandom(dataDrawing, 5),
        ...sampleRandom(dataProfessional, 3),
      ];
    } else if (isGkMock) {
      raw = [
        ...sampleRandom(dataGkGeography, 10),
        ...sampleRandom(dataGkOrganization, 5),
      ];
    } else {
      const sub = getSubjectBySlug(subject);
      const source = sub ? sub.rawQuestions : dataSOM;
      raw = sampleRandom(source, 15);
    }

    return raw.map((q, idx) => ({
      ...q,
      serialno: idx + 1,
    }));
  }, [subject, isFullMock, isGkMock]);

  const [questions, setQuestions] = useState(() => generateQuestions());
  const [answers, setAnswers] = useState({}); // { [serialno]: 'a' | 'b' | 'c' | 'd' }
  const [minutes, setMinutes] = useState(timeMinutes);
  const [seconds, setSeconds] = useState(0);
  const [isSubmitted, setIsSubmitted] = useState(false);
  const [showResultsModal, setShowResultsModal] = useState(false);

  const subjectTitle = useMemo(() => {
    if (isFullMock) return 'Full Civil Engineering Mock Exam';
    if (isGkMock) return 'Loksewa General Knowledge Test';
    const s = getSubjectBySlug(subject);
    return s ? `${s.title} Quick Test` : 'Subject Test';
  }, [subject, isFullMock, isGkMock]);

  useEffect(() => {
    document.title = `${subjectTitle} | Civil Engineering MCQ`;
  }, [subjectTitle]);

  // Countdown timer effect
  useEffect(() => {
    if (isSubmitted) return;

    const timer = setInterval(() => {
      setSeconds((prevSec) => {
        if (prevSec > 0) {
          return prevSec - 1;
        } else {
          setMinutes((prevMin) => {
            if (prevMin > 0) {
              return prevMin - 1;
            } else {
              clearInterval(timer);
              handleSubmitTest();
              return 0;
            }
          });
          return 59;
        }
      });
    }, 1000);

    return () => clearInterval(timer);
  }, [isSubmitted]);

  const handleSelectAnswer = (serialno, optionKey) => {
    if (isSubmitted) return;
    setAnswers((prev) => ({
      ...prev,
      [serialno]: optionKey,
    }));
  };

  const handleSubmitTest = () => {
    setIsSubmitted(true);
    setShowResultsModal(true);
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  const handleRetake = () => {
    setQuestions(generateQuestions());
    setAnswers({});
    setMinutes(timeMinutes);
    setSeconds(0);
    setIsSubmitted(false);
    setShowResultsModal(false);
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  // Compute test metrics
  const answeredCount = Object.keys(answers).length;
  let score = 0;
  let incorrectCount = 0;

  questions.forEach((q) => {
    const userAns = answers[q.serialno];
    if (userAns) {
      if (userAns === q.correct) {
        score += 1;
      } else {
        incorrectCount += 1;
      }
    }
  });

  const unansweredCount = questions.length - answeredCount;

  return (
    <div className="max-w-4xl mx-auto px-4 sm:px-6 py-8 space-y-6 animate-fadeIn">
      
      {/* Top Header */}
      <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-3 pb-3 border-b border-slate-200 dark:border-slate-800">
        <div>
          <Link
            to="/test"
            className="inline-flex items-center gap-1.5 text-xs font-semibold text-sky-600 dark:text-sky-400 hover:underline mb-1"
          >
            <ArrowLeft className="w-3.5 h-3.5" />
            <span>Back to Tests</span>
          </Link>
          <h1 className="text-xl sm:text-2xl font-bold text-slate-900 dark:text-white">
            {subjectTitle}
          </h1>
        </div>

        {isSubmitted && (
          <button
            type="button"
            onClick={handleRetake}
            className="inline-flex items-center gap-2 px-4 py-2 rounded-xl bg-sky-600 hover:bg-sky-500 text-white text-xs font-semibold shadow-md transition"
          >
            <RotateCcw className="w-3.5 h-3.5" />
            <span>Retake Test</span>
          </button>
        )}
      </div>

      {/* Timer Badge */}
      <TimerBadge
        minutes={minutes}
        seconds={seconds}
        answeredCount={answeredCount}
        totalQuestions={questions.length}
        onSubmit={handleSubmitTest}
        isSubmitted={isSubmitted}
      />

      {/* Question Navigator Palette */}
      <QuestionNavigator
        totalQuestions={questions.length}
        answers={answers}
        questions={questions}
        isSubmitted={isSubmitted}
      />

      {/* Questions Stack */}
      <div className="space-y-4">
        {questions.map((q) => (
          <TestQuestion
            key={q.serialno}
            serialno={q.serialno}
            question={q.question}
            optionA={q.optionA}
            optionB={q.optionB}
            optionC={q.optionC}
            optionD={q.optionD}
            correct={q.correct}
            selectedAnswer={answers[q.serialno]}
            onSelectAnswer={handleSelectAnswer}
            isSubmitted={isSubmitted}
          />
        ))}
      </div>

      {/* Bottom Submit action if not yet submitted */}
      {!isSubmitted && (
        <div className="text-center py-6">
          <button
            type="button"
            onClick={handleSubmitTest}
            className="px-8 py-3.5 rounded-2xl bg-gradient-to-r from-emerald-600 to-teal-600 hover:from-emerald-500 hover:to-teal-500 text-white font-bold text-sm shadow-xl shadow-emerald-600/30 transition hover:scale-105 active:scale-95"
          >
            Submit and Check Score ({answeredCount} / {questions.length} answered)
          </button>
        </div>
      )}

      {/* Results Modal */}
      {showResultsModal && (
        <TestResultsModal
          score={score}
          totalQuestions={questions.length}
          incorrectCount={incorrectCount}
          unansweredCount={unansweredCount}
          onRetake={handleRetake}
          onClose={() => setShowResultsModal(false)}
          subjectTitle={subjectTitle}
        />
      )}

    </div>
  );
}
