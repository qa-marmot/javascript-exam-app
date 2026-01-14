import { CheckCircle, XCircle, RotateCcw, BookOpen, Home } from "lucide-react";
import { linkify } from "../utils/linkify";

export default function ResultView({ exam }) {
  const {
    questionSets,
    selectedLevel,
    score,
    answers,
    getScoreLevel,
    handleReset,
    handleBackToMenu,
  } = exam;

  const questions = questionSets[selectedLevel];
  const result = getScoreLevel();

  const categoryStats = {};
  questions.forEach((q) => {
    if (!categoryStats[q.category])
      categoryStats[q.category] = { total: 0, correct: 0 };
    categoryStats[q.category].total++;
  });
  answers.forEach((a) => {
    const question = questions.find((q) => q.id === a.questionId);
    if (a.isCorrect) categoryStats[question.category].correct++;
  });

  const levelNames = {
    beginner: "初級",
    intermediate: "中級",
    advanced: "上級",
  };

  return (
    <div className="min-h-screen bg-gradient-to-br from-blue-50 to-indigo-100 p-6">
      <div className="max-w-4xl mx-auto">
        <div className="bg-white rounded-2xl shadow-xl p-8">
          <div className="text-center mb-8">
            <h1 className="text-3xl font-bold text-gray-800 mb-2">試験結果</h1>
            <p className="text-gray-600">
              JavaScript理解度チェック試験 {levelNames[selectedLevel]}
            </p>
          </div>

          <div className="bg-gradient-to-r from-blue-500 to-indigo-600 rounded-xl p-8 text-white text-center mb-8">
            <div className="text-6xl font-bold mb-4">
              {score}/{questions.length}
            </div>
            <div className="text-2xl mb-2">
              正解率: {Math.round((score / questions.length) * 100)}%
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
                const percentage = Math.round(
                  (stats.correct / stats.total) * 100
                );
                return (
                  <div key={category} className="bg-gray-50 rounded-lg p-4">
                    <div className="flex justify-between items-center mb-2">
                      <span className="font-semibold text-gray-700">
                        {category}
                      </span>
                      <span className="text-gray-600">
                        {stats.correct}/{stats.total} ({percentage}%)
                      </span>
                    </div>
                    <div className="w-full bg-gray-200 rounded-full h-3">
                      <div
                        className={`h-3 rounded-full transition-all ${
                          percentage >= 70
                            ? "bg-green-500"
                            : percentage >= 50
                            ? "bg-yellow-500"
                            : "bg-red-500"
                        }`}
                        style={{ width: `${percentage}%` }}
                      ></div>
                    </div>
                  </div>
                );
              })}
            </div>
          </div>

          <div className="mb-8">
            <h2 className="text-xl font-bold text-gray-800 mb-4">
              復習が必要な問題
            </h2>
            <div className="space-y-3">
              {answers
                .filter((a) => !a.isCorrect)
                .sort((a, b) => a.questionId - b.questionId) // ← ここで問題番号順にソート
                .map((a) => {
                  const question = questions.find((q) => q.id === a.questionId);
                  return (
                    <div
                      key={a.questionId}
                      className="bg-red-50 border-l-4 border-red-500 rounded-lg p-4"
                    >
                      <div className="font-semibold text-gray-800 mb-2 break-words">
                        問題{a.questionId}: {question.question}
                      </div>
                      <div className="text-sm text-gray-600 mb-1 break-words">
                        <span className="text-red-600 font-semibold">
                          あなたの回答:
                        </span>{" "}
                        {question.options[a.selected]}
                      </div>
                      <div className="text-sm text-gray-600 mb-2 break-words">
                        <span className="text-green-600 font-semibold">
                          正解:
                        </span>{" "}
                        {question.options[a.correct]}
                      </div>
                      <div className="text-sm text-gray-700 bg-white p-3 rounded break-words whitespace-pre-wrap">
                        {linkify(question.explanation)}
                      </div>
                    </div>
                  );
                })}
              {answers.filter((a) => !a.isCorrect).length === 0 && (
                <div className="text-center text-green-600 font-semibold py-4">
                  全問正解です!素晴らしい!
                </div>
              )}
            </div>
          </div>

          <div className="grid grid-cols-2 gap-4">
            <button
              onClick={handleBackToMenu}
              className="w-full bg-gray-500 text-white py-4 rounded-xl font-semibold hover:bg-gray-600 transition-all flex items-center justify-center shadow-lg"
            >
              <Home className="mr-2" /> メニューに戻る
            </button>
            <button
              onClick={handleReset}
              className="w-full bg-gradient-to-r from-blue-500 to-indigo-600 text-white py-4 rounded-xl font-semibold hover:from-blue-600 hover:to-indigo-700 transition-all flex items-center justify-center shadow-lg"
            >
              <RotateCcw className="mr-2" /> もう一度挑戦する
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}
