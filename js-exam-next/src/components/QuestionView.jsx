import { CheckCircle, XCircle } from "lucide-react";
import { linkify } from "../utils/linkify";
import { saveExamResult } from "../lib/saveExamResult"; // 履歴保存

export default function QuestionView({ exam }) {
  const {
    questionSets,
    selectedLevel,
    currentQuestion,
    selectedAnswer,
    isAnswered,
    score,
    handleAnswer,
    handleNext,
  } = exam;

  const questions = questionSets[selectedLevel];
  const question = questions[currentQuestion];
  const progress = ((currentQuestion + 1) / questions.length) * 100;

  const levelColors = {
    beginner: "from-green-500 to-green-600",
    intermediate: "from-blue-500 to-blue-600",
    advanced: "from-purple-500 to-purple-600",
  };

  // handleNext をラップして最後の問題で履歴を保存
  const handleNextWithSave = async () => {
    handleNext();

    // 最後の問題の場合のみ保存
    if (currentQuestion === questions.length - 1) {
      const username = localStorage.getItem("username");
      if (username) {
        try {
          await saveExamResult(
            username,
            selectedLevel,
            score,
            questions.length
          );
          console.log("履歴を保存しました");
        } catch (err) {
          if (err instanceof Error) {
            console.error("履歴保存に失敗:", err.message);
          }
        }
      }
    }
  };

  return (
    <div className="min-h-screen bg-linear-to-r from-blue-50 to-indigo-100 p-6">
      <div className="max-w-3xl mx-auto bg-white rounded-2xl shadow-xl overflow-hidden">
        <div
          className={`bg-linear-to-r ${levelColors[selectedLevel]} p-6 text-white`}
        >
          <div className="flex justify-between items-center text-sm mb-1 text-white">
            <span>
              問題 {currentQuestion + 1} / {questions.length}
            </span>
            <span>スコア: {score}</span>
          </div>
          <div className="w-full bg-white bg-opacity-30 h-2 rounded-full">
            <div
              className="bg-white h-2 rounded-full"
              style={{ width: `${progress}%` }}
            />
          </div>
        </div>

        <div className="p-8">
          <h2 className="text-xl font-semibold mb-6 whitespace-pre-wrap text-gray-900">
            {question.question}
          </h2>

          {question.options.map((option, index) => {
            const isCorrect = index === question.correct;
            const isSelected = index === selectedAnswer;

            return (
              <button
                key={index}
                onClick={() => handleAnswer(index)}
                disabled={isAnswered}
                className="w-full text-left p-4 border border-gray-300 bg-white text-gray-800 rounded-xl mb-3 hover:bg-gray-50"
              >
                {option}
                {isAnswered && isCorrect && (
                  <CheckCircle className="text-green-500 inline ml-2" />
                )}
                {isAnswered && isSelected && !isCorrect && (
                  <XCircle className="text-red-500 inline ml-2" />
                )}
              </button>
            );
          })}

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
                    className="text-green-500 mr-3 mt-1 shrink-0"
                    size={24}
                  />
                ) : (
                  <XCircle
                    className="text-red-500 mr-3 mt-1 shrink-0"
                    size={24}
                  />
                )}
                <div className="flex-1 min-w-0">
                  <h3 className="font-bold text-gray-800 mb-2">
                    {selectedAnswer === question.correct
                      ? "正解です!"
                      : "不正解です"}
                  </h3>
                  <p className="text-gray-700 leading-relaxed wrap-break-word whitespace-pre-wrap">
                    {linkify(question.explanation)}
                  </p>
                </div>
              </div>
            </div>
          )}

          <button
            onClick={handleNextWithSave}
            disabled={!isAnswered}
            className="w-full mt-6 py-4 bg-blue-600 text-white rounded-xl"
          >
            {currentQuestion < questions.length - 1
              ? "次の問題へ"
              : "結果を見る"}
          </button>

          <div className="mt-4 text-center text-sm text-gray-600">
            現在のスコア: {score} / {currentQuestion + (isAnswered ? 1 : 0)}
          </div>
        </div>
      </div>
    </div>
  );
}
