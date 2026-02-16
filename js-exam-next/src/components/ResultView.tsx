"use client";

import { RotateCcw, BookOpen, Home } from "lucide-react";

// --- 型定義 ---

type StudyLevel = "beginner" | "intermediate" | "advanced";

interface Question {
  id: string; // 回答と紐付けるために必要
  category: string;
  question: string;
  options: string[];
  correct: number;
  explanation: string;
  url: string;
}

interface Answer {
  questionId: string;
  isCorrect: boolean;
}

interface ScoreResult {
  level: string;
  color: string;
  message: string;
}

interface ExamContext {
  questionSets: Record<StudyLevel, Question[]>;
  selectedLevel: StudyLevel;
  score: number;
  answers: Answer[];
  getScoreLevel: () => ScoreResult;
  handleReset: () => void;
  handleBackToMenu: () => void;
}

interface ResultViewProps {
  exam: ExamContext;
}

// 分野別統計の型
interface CategoryStat {
  total: number;
  correct: number;
}

export default function ResultView({ exam }: ResultViewProps) {
  const {
    questionSets,
    selectedLevel,
    score,
    answers,
    getScoreLevel,
    handleReset,
    handleBackToMenu,
  } = exam;

  const questions = questionSets[selectedLevel] || [];
  const result = getScoreLevel();

  // ===== 分野別集計 =====
  const categoryStats: Record<string, CategoryStat> = {};

  questions.forEach((q) => {
    if (!categoryStats[q.category]) {
      categoryStats[q.category] = { total: 0, correct: 0 };
    }
    categoryStats[q.category].total++;
  });

  answers.forEach((a) => {
    const question = questions.find((q) => q.id === a.questionId);
    if (!question) return;
    if (a.isCorrect) {
      categoryStats[question.category].correct++;
    }
  });

  const levelNames: Record<StudyLevel, string> = {
    beginner: "初級",
    intermediate: "中級",
    advanced: "上級",
  };

  return (
    <div className="min-h-screen bg-gradient-to-r from-blue-50 to-indigo-100 p-6 text-gray-900">
      <div className="max-w-4xl mx-auto">
        <div className="bg-white rounded-2xl shadow-xl p-8">
          <div className="text-center mb-8">
            <h1 className="text-3xl font-bold text-gray-800 mb-2">試験結果</h1>
            <p className="text-gray-600">
              JavaScript スキルチェック {levelNames[selectedLevel]}
            </p>
          </div>

          <div className="bg-gradient-to-r from-blue-500 to-indigo-600 rounded-xl p-8 text-white text-center mb-8">
            <div className="text-6xl font-bold mb-4">
              {score}/{questions.length}
            </div>
            <div className="text-2xl mb-2">
              正解率: {questions.length > 0 ? Math.round((score / questions.length) * 100) : 0}%
            </div>
            <div
              className={`text-xl font-semibold ${result.color} bg-white px-6 py-2 rounded-full inline-block mt-4`}
            >
              {result.level}
            </div>
            <p className="mt-4 text-blue-50">{result.message}</p>
          </div>

          <div className="mb-8">
            <h2 className="text-xl font-bold text-gray-800 mb-4 flex items-center">
              <BookOpen className="mr-2" /> 分野別正解率
            </h2>
            <div className="space-y-3">
              {Object.entries(categoryStats).map(([category, stats]) => {
                const percentage = stats.total > 0 
                  ? Math.round((stats.correct / stats.total) * 100) 
                  : 0;
                return (
                  <div key={category} className="bg-gray-50 rounded-lg p-4">
                    <div className="flex justify-between items-center mb-2">
                      <span className="font-semibold text-gray-700">
                        {category}
                      </span>
                      <span className="text-gray-600">
                        {stats.correct} / {stats.total} ({percentage}%)
                      </span>
                    </div>
                    <div className="w-full bg-gray-200 rounded-full h-3 overflow-hidden">
                      <div
                        className={`h-3 rounded-full transition-all duration-500 ${
                          percentage >= 70
                            ? "bg-green-500"
                            : percentage >= 50
                            ? "bg-yellow-500"
                            : "bg-red-500"
                        }`}
                        style={{ width: `${percentage}%` }}
                      />
                    </div>
                  </div>
                );
              })}
            </div>
          </div>

          <div className="grid grid-cols-2 gap-4">
            <button
              onClick={handleBackToMenu}
              className="w-full bg-gray-500 text-white py-4 rounded-xl font-semibold hover:bg-gray-600 transition-colors flex items-center justify-center"
            >
              <Home className="mr-2" /> メニューに戻る
            </button>
            <button
              onClick={handleReset}
              className="w-full bg-gradient-to-r from-blue-500 to-indigo-600 text-white py-4 rounded-xl font-semibold hover:from-blue-600 hover:to-indigo-700 transition-all flex items-center justify-center"
            >
              <RotateCcw className="mr-2" /> もう一度挑戦する
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}