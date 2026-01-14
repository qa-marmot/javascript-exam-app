import React, { useState } from "react";
import { CheckCircle, XCircle, RotateCcw, BookOpen, Home } from "lucide-react";
import {
  beginnerQuestions,
  intermediateQuestions,
  advancedQuestions,
} from "./questions";
import { linkify } from "./utils/linkify";

const questionSets = {
  beginner: beginnerQuestions,
  intermediate: intermediateQuestions,
  advanced: advancedQuestions,
};

export default function ExamApp() {
  const [selectedLevel, setSelectedLevel] = useState(null);
  const [currentQuestion, setCurrentQuestion] = useState(0);
  const [selectedAnswer, setSelectedAnswer] = useState(null);
  const [isAnswered, setIsAnswered] = useState(false);
  const [score, setScore] = useState(0);
  const [showResult, setShowResult] = useState(false);
  const [answers, setAnswers] = useState([]);

  // 配列をシャッフルする関数
  const shuffleArray = (array) => {
    const shuffled = [...array];
    for (let i = shuffled.length - 1; i > 0; i--) {
      const j = Math.floor(Math.random() * (i + 1));
      [shuffled[i], shuffled[j]] = [shuffled[j], shuffled[i]];
    }
    return shuffled;
  };

  const handleLevelSelect = (level) => {
    // 問題をシャッフル
    const originalQuestions = questionSets[level];
    const shuffledQuestions = shuffleArray(originalQuestions);

    // シャッフルした問題を保存
    questionSets[level] = shuffledQuestions;

    setSelectedLevel(level);
    setCurrentQuestion(0);
    setSelectedAnswer(null);
    setIsAnswered(false);
    setScore(0);
    setShowResult(false);
    setAnswers([]);
  };

  const handleAnswer = (optionIndex) => {
    if (isAnswered) return;

    const questions = questionSets[selectedLevel];
    setSelectedAnswer(optionIndex);
    setIsAnswered(true);

    const isCorrect = optionIndex === questions[currentQuestion].correct;

    setAnswers([
      ...answers,
      {
        questionId: questions[currentQuestion].id,
        selected: optionIndex,
        correct: questions[currentQuestion].correct,
        isCorrect: isCorrect,
      },
    ]);

    if (isCorrect) {
      setScore(score + 1);
    }
  };

  const handleNext = () => {
    const questions = questionSets[selectedLevel];
    if (currentQuestion < questions.length - 1) {
      setCurrentQuestion(currentQuestion + 1);
      setSelectedAnswer(null);
      setIsAnswered(false);
    } else {
      setShowResult(true);
    }
  };

  const handleReset = () => {
    setCurrentQuestion(0);
    setSelectedAnswer(null);
    setIsAnswered(false);
    setScore(0);
    setShowResult(false);
    setAnswers([]);
  };

  const handleBackToMenu = () => {
    setSelectedLevel(null);
    handleReset();
  };

  const getScoreLevel = () => {
    const questions = questionSets[selectedLevel];
    const percentage = (score / questions.length) * 100;
    if (percentage >= 70)
      return {
        level: "合格",
        color: "text-green-600",
        message: "おめでとうございます!合格ラインに達しています。",
      };
    if (percentage >= 50)
      return {
        level: "惜しい",
        color: "text-yellow-600",
        message: "もう少しです。復習して再挑戦しましょう。",
      };
    return {
      level: "要復習",
      color: "text-red-600",
      message: "基礎から復習することをお勧めします。",
    };
  };

  // レベル選択画面
  if (!selectedLevel) {
    return (
      <div className="min-h-screen bg-gradient-to-br from-blue-50 to-indigo-100 p-6">
        <div className="max-w-4xl mx-auto">
          <div className="bg-white rounded-2xl shadow-xl p-8 text-center">
            <h1 className="text-4xl font-bold text-gray-800 mb-4">
              JavaScript理解度チェック試験
            </h1>
            <p className="text-gray-600 mb-8">確認試験</p>

            <div className="mb-8">
              <p className="text-lg text-gray-700 mb-2">
                レベルを選択してください
              </p>
              <p className="text-sm text-gray-500">
                各レベル60問、時間制限なし
              </p>
            </div>

            <div className="grid md:grid-cols-3 gap-6">
              <button
                onClick={() => handleLevelSelect("beginner")}
                className="bg-gradient-to-br from-green-400 to-green-600 text-white p-8 rounded-xl hover:from-green-500 hover:to-green-700 transition-all shadow-lg transform hover:scale-105"
              >
                <div className="text-3xl font-bold mb-2">初級</div>
                <div className="text-sm opacity-90">基礎文法と基本機能</div>
                <div className="text-xs mt-2 opacity-75">60問</div>
              </button>

              <button
                onClick={() => handleLevelSelect("intermediate")}
                className="bg-gradient-to-br from-blue-400 to-blue-600 text-white p-8 rounded-xl hover:from-blue-500 hover:to-blue-700 transition-all shadow-lg transform hover:scale-105"
              >
                <div className="text-3xl font-bold mb-2">中級</div>
                <div className="text-sm opacity-90">実践的な機能と応用</div>
                <div className="text-xs mt-2 opacity-75">60問</div>
              </button>

              <button
                onClick={() => handleLevelSelect("advanced")}
                className="bg-gradient-to-br from-purple-400 to-purple-600 text-white p-8 rounded-xl hover:from-purple-500 hover:to-purple-700 transition-all shadow-lg transform hover:scale-105"
              >
                <div className="text-3xl font-bold mb-2">上級</div>
                <div className="text-sm opacity-90">
                  JavaScriptの新機能と高度な技術
                </div>
                <div className="text-xs mt-2 opacity-75">60問</div>
              </button>
            </div>

            <div className="mt-12 text-sm text-gray-600">
              <p>合格ライン: 70%以上 (42問以上正解)</p>
            </div>
          </div>
        </div>
      </div>
    );
  }

  const questions = questionSets[selectedLevel];

  // 結果画面
  if (showResult) {
    const result = getScoreLevel();
    const categoryStats = {};

    questions.forEach((q) => {
      if (!categoryStats[q.category]) {
        categoryStats[q.category] = { total: 0, correct: 0 };
      }
      categoryStats[q.category].total++;
    });

    answers.forEach((a) => {
      const question = questions.find((q) => q.id === a.questionId);
      if (a.isCorrect) {
        categoryStats[question.category].correct++;
      }
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
              <h1 className="text-3xl font-bold text-gray-800 mb-2">
                試験結果
              </h1>
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
                <BookOpen className="mr-2" />
                分野別正解率
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
                  .map((a) => {
                    const question = questions.find(
                      (q) => q.id === a.questionId
                    );
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
                <Home className="mr-2" />
                メニューに戻る
              </button>
              <button
                onClick={handleReset}
                className="w-full bg-gradient-to-r from-blue-500 to-indigo-600 text-white py-4 rounded-xl font-semibold hover:from-blue-600 hover:to-indigo-700 transition-all flex items-center justify-center shadow-lg"
              >
                <RotateCcw className="mr-2" />
                もう一度挑戦する
              </button>
            </div>
          </div>
        </div>
      </div>
    );
  }

  // 問題画面
  const question = questions[currentQuestion];
  const progress = ((currentQuestion + 1) / questions.length) * 100;

  const levelColors = {
    beginner: "from-green-500 to-green-600",
    intermediate: "from-blue-500 to-blue-600",
    advanced: "from-purple-500 to-purple-600",
  };

  const levelNames = {
    beginner: "初級",
    intermediate: "中級",
    advanced: "上級",
  };

  return (
    <div className="min-h-screen bg-gradient-to-br from-blue-50 to-indigo-100 p-6">
      <div className="max-w-3xl mx-auto">
        <div className="bg-white rounded-2xl shadow-xl overflow-hidden">
          <div
            className={`bg-gradient-to-r ${levelColors[selectedLevel]} p-6 text-white`}
          >
            <div className="flex justify-between items-center mb-2">
              <h1 className="text-2xl font-bold">
                JavaScript理解度チェック試験 {levelNames[selectedLevel]}
              </h1>
              <button
                onClick={handleBackToMenu}
                className="bg-white bg-opacity-20 hover:bg-opacity-30 px-4 py-2 rounded-lg transition-all flex items-center"
              >
                <Home size={18} className="mr-2" />
                メニュー
              </button>
            </div>
            <div className="flex justify-between items-center text-sm">
              <span>
                問題 {currentQuestion + 1} / {questions.length}
              </span>
              <span className="bg-white text-blue-600 px-3 py-1 rounded-full font-semibold">
                {question.category}
              </span>
            </div>
            <div className="mt-4">
              <div className="w-full bg-blue-400 bg-opacity-50 rounded-full h-2">
                <div
                  className="bg-white rounded-full h-2 transition-all duration-300"
                  style={{ width: `${progress}%` }}
                ></div>
              </div>
            </div>
          </div>

          <div className="p-8">
            <h2 className="text-xl font-semibold text-gray-800 mb-6 leading-relaxed whitespace-pre-wrap">
              {question.question}
            </h2>

            <div className="space-y-3 mb-8">
              {question.options.map((option, index) => {
                const isSelected = selectedAnswer === index;
                const isCorrect = index === question.correct;

                let buttonClass =
                  "w-full text-left p-4 rounded-xl border-2 transition-all ";

                if (!isAnswered) {
                  buttonClass +=
                    "border-gray-200 hover:border-blue-400 hover:bg-blue-50";
                } else {
                  if (isSelected) {
                    buttonClass += isCorrect
                      ? "border-green-500 bg-green-50"
                      : "border-red-500 bg-red-50";
                  } else if (isCorrect) {
                    buttonClass += "border-green-500 bg-green-50";
                  } else {
                    buttonClass += "border-gray-200 bg-gray-50";
                  }
                }

                return (
                  <button
                    key={index}
                    onClick={() => handleAnswer(index)}
                    disabled={isAnswered}
                    className={buttonClass}
                  >
                    <div className="flex items-center justify-between">
                      <span className="font-medium text-gray-700">
                        {option}
                      </span>
                      {isAnswered && (
                        <>
                          {isCorrect && (
                            <CheckCircle className="text-green-500" />
                          )}
                          {isSelected && !isCorrect && (
                            <XCircle className="text-red-500" />
                          )}
                        </>
                      )}
                    </div>
                  </button>
                );
              })}
            </div>

            {isAnswered && (
              <div
                className={`p-6 rounded-xl mb-6 ${
                  selectedAnswer === question.correct
                    ? "bg-green-50 border-2 border-green-200"
                    : "bg-red-50 border-2 border-red-200"
                }`}
              >
                <div className="flex items-start">
                  {selectedAnswer === question.correct ? (
                    <CheckCircle
                      className="text-green-500 mr-3 mt-1 flex-shrink-0"
                      size={24}
                    />
                  ) : (
                    <XCircle
                      className="text-red-500 mr-3 mt-1 flex-shrink-0"
                      size={24}
                    />
                  )}
                  <div className="flex-1 min-w-0">
                    <h3 className="font-bold text-gray-800 mb-2">
                      {selectedAnswer === question.correct
                        ? "正解です!"
                        : "不正解です"}
                    </h3>
                    <p className="text-gray-700 leading-relaxed break-words whitespace-pre-wrap">
                      {linkify(question.explanation)}
                    </p>
                  </div>
                </div>
              </div>
            )}

            <button
              onClick={handleNext}
              disabled={!isAnswered}
              className={`w-full py-4 rounded-xl font-semibold transition-all ${
                isAnswered
                  ? `bg-gradient-to-r ${levelColors[selectedLevel]} text-white hover:opacity-90 shadow-lg`
                  : "bg-gray-200 text-gray-400 cursor-not-allowed"
              }`}
            >
              {currentQuestion < questions.length - 1
                ? "次の問題へ"
                : "結果を見る"}
            </button>
          </div>
        </div>

        <div className="mt-6 text-center text-gray-600 text-sm">
          <p>
            現在のスコア: {score} / {currentQuestion + (isAnswered ? 1 : 0)}
          </p>
        </div>
      </div>
    </div>
  );
}
