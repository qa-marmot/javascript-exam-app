import { useState } from "react";
import {
  beginnerQuestions,
  intermediateQuestions,
  advancedQuestions,
} from "../utils/questions";
import { shuffleArray } from "../utils/shuffle";

const questionSets = {
  beginner: beginnerQuestions,
  intermediate: intermediateQuestions,
  advanced: advancedQuestions,
};

export function useExam() {
  const [selectedLevel, setSelectedLevel] = useState(null);
  const [currentQuestion, setCurrentQuestion] = useState(0);
  const [selectedAnswer, setSelectedAnswer] = useState(null);
  const [isAnswered, setIsAnswered] = useState(false);
  const [score, setScore] = useState(0);
  const [showResult, setShowResult] = useState(false);
  const [answers, setAnswers] = useState([]);

  const handleLevelSelect = (level) => {
    const originalQuestions = questionSets[level];
    const shuffledQuestions = shuffleArray(originalQuestions);
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
        isCorrect,
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

  return {
    questionSets,
    selectedLevel,
    currentQuestion,
    selectedAnswer,
    isAnswered,
    score,
    showResult,
    answers,
    handleLevelSelect,
    handleAnswer,
    handleNext,
    handleReset,
    handleBackToMenu,
    getScoreLevel,
  };
}
