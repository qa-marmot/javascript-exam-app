"use client";

import { CheckCircle, XCircle, X } from "lucide-react";
import { linkify } from "../utils/linkify";
import { saveExamResult } from "../lib/saveExamResult"; 
import { formatQuestionSimple } from "../utils/formatQuestionText";
import { useRef } from "react";

// --- 型定義 ---

type StudyLevel = "beginner" | "intermediate" | "advanced";

interface Question {
  question: string;
  options: string[];
  correct: number;
  explanation: string;
  url: string;
}

interface ExamContext {
  questionSets: Record<StudyLevel, Question[]>;
  selectedLevel: StudyLevel;
  currentQuestion: number;
  selectedAnswer: number | null;
  isAnswered: boolean;
  score: number;
  handleAnswer: (index: number) => void;
  handleNext: () => void;
  handleBackToMenu: () => void;
}

interface QuestionViewProps {
  exam: ExamContext;
}

export default function QuestionView({ exam }: QuestionViewProps) {
  const {
    questionSets,
    selectedLevel,
    currentQuestion,
    selectedAnswer,
    isAnswered,
    score,
    handleAnswer,
    handleNext,
    handleBackToMenu,
  } = exam;

  const savedRef = useRef<boolean>(false);
  
  // questions と question の取得を安全に行う
  const questions = questionSets[selectedLevel] || [];
  const question = questions[currentQuestion];
  
  const progress = ((currentQuestion + 1) / questions.length) * 100;
  const canGoNext = isAnswered;

  // 問題文を整形 (戻り値の型に合わせてレンダリング)
  const formattedQuestion = formatQuestionSimple(question.question);

  const levelColors: Record<StudyLevel, string> = {
    beginner: "from-green-500 to-green-600",
    intermediate: "from-blue-500 to-blue-600",
    advanced: "from-purple-500 to-purple-600",
  };

  // ✅ handleNext をラップして最後の問題で履歴を保存
  const handleNextWithSave = async (): Promise<void> => {
    const isLastQuestion = currentQuestion === questions.length - 1;

    if (isLastQuestion && !savedRef.current) {
      try {
        await saveExamResult({
          level: selectedLevel,
          score,
          total: questions.length,
        });
        savedRef.current = true;
        console.log("履歴を保存しました");
      } catch (err) {
        if (err instanceof Error) {
          console.error("履歴保存に失敗:", err.message);
        }
      }
    }

    handleNext();
  };

  if (!question) return null; // 万が一問題がない場合のガード

  return (
    <div className="max-w-3xl mx-auto text-gray-900">
      {/* 終了ボタン */}
      <div className="mt-4 mb-4 flex justify-end">
        <button
          onClick={handleBackToMenu}
          className="px-4 py-2 bg-white hover:bg-gray-100 text-gray-700 font-semibold rounded-lg shadow-md border border-gray-300 transition-colors flex items-center gap-2"
        >
          <X className="w-4 h-4" />
          終了してトップに戻る
        </button>
      </div>

      <div className="bg-white rounded-2xl shadow-xl overflow-hidden">
        <div className={`bg-gradient-to-r ${levelColors[selectedLevel]} p-6 text-white`}>
          <div className="flex justify-between items-center text-sm mb-1">
            <span>
              問題 {currentQuestion + 1} / {questions.length}
            </span>
            <span>スコア: {score}</span>
          </div>
          <div className="w-full h-2 rounded-full bg-gray-200/30 overflow-hidden">
            <div
              className="h-2 rounded-full bg-green-400 transition-all duration-300"
              style={{ width: `${progress}%` }}
            />
          </div>
        </div>

        <div className="p-8">
          <div className="pb-6">
            {formattedQuestion.map((part: { type: string; content: string }, index: number) => {
              if (part.type === "code") {
                return (
                  <pre
                    key={index}
                    className="bg-gray-900 text-gray-100 p-4 rounded-lg overflow-x-auto mb-4 text-sm"
                  >
                    <code>{part.content}</code>
                  </pre>
                );
              } else {
                return (
                  <h2
                    key={index}
                    className="text-xl font-semibold mb-3 text-gray-900"
                  >
                    {part.content}
                  </h2>
                );
              }
            })}
          </div>

          <div className="space-y-3">
            {question.options.map((option: string, index: number) => {
              const isCorrect = index === question.correct;
              const isSelected = index === selectedAnswer;

              return (
                <button
                  key={index}
                  onClick={() => handleAnswer(index)}
                  disabled={isAnswered}
                  className={`w-full text-left p-4 border rounded-xl transition-all ${
                    isAnswered 
                      ? "cursor-default" 
                      : "hover:bg-gray-50 border-gray-300 cursor-pointer"
                  } ${
                    isAnswered && isCorrect ? "border-green-500 bg-green-50" : "border-gray-300"
                  }`}
                >
                  <div className="flex items-center justify-between">
                    <span>{option}</span>
                    {isAnswered && isCorrect && <CheckCircle className="text-green-500 shrink-0 ml-2" />}
                    {isAnswered && isSelected && !isCorrect && <XCircle className="text-red-500 shrink-0 ml-2" />}
                  </div>
                </button>
              );
            })}
          </div>

          {isAnswered && (
            <div
              className={`mt-6 p-6 rounded-xl border-2 ${
                selectedAnswer === question.correct
                  ? "bg-green-50 border-green-200"
                  : "bg-red-50 border-red-200"
              }`}
            >
              <div className="flex items-start">
                {selectedAnswer === question.correct ? (
                  <CheckCircle className="text-green-500 mr-3 mt-1 shrink-0" size={24} />
                ) : (
                  <XCircle className="text-red-500 mr-3 mt-1 shrink-0" size={24} />
                )}
                <div className="flex-1 min-w-0">
                  <h3 className="font-bold text-gray-800 mb-2">
                    {selectedAnswer === question.correct ? "正解です!" : "不正解です"}
                  </h3>
                  <p className="text-gray-700 leading-relaxed whitespace-pre-wrap mb-2">
                    {question.explanation}
                  </p>
                  <div className="text-blue-600 hover:underline break-all">
                    {linkify(question.url)}
                  </div>
                </div>
              </div>
            </div>
          )}

          <button
            onClick={handleNextWithSave}
            disabled={!canGoNext}
            className={`w-full mt-6 py-4 rounded-xl font-semibold transition-all ${
              canGoNext
                ? "bg-blue-600 text-white hover:bg-blue-700 shadow-md"
                : "bg-gray-200 text-gray-400 cursor-not-allowed"
            }`}
          >
            {currentQuestion < questions.length - 1 ? "次の問題へ" : "結果を見る"}
          </button>

          <div className="mt-4 text-center text-sm text-gray-500">
            現在のスコア: {score} / {currentQuestion + (isAnswered ? 1 : 0)}
          </div>
        </div>
      </div>
    </div>
  );
}