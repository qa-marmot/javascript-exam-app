import { useState } from "react";
import {
  beginnerQuestions,
  intermediateQuestions,
  advancedQuestions,
} from "../utils/questions";
import { shuffleArray } from "../utils/shuffle";

// --- 1. すべてのコンポーネントで共通して使うべき型定義 ---
export type StudyLevel = "beginner" | "intermediate" | "advanced";

export interface Question {
  id: number;       // Vercelでエラーになっていた箇所
  category: string;
  question: string;
  options: string[];
  correct: number;
  explanation: string;
  url: string;
}

export interface AnswerDetail {
  questionId: number;
  selected: number;
  correct: number;
  isCorrect: boolean;
}

export interface ExamContext {
  questionSets: Record<StudyLevel, Question[]>;
  selectedLevel: StudyLevel | null;
  currentQuestion: number;
  selectedAnswer: number | null;
  isAnswered: boolean;
  score: number;
  showResult: boolean;
  answers: AnswerDetail[];
  handleLevelSelect: (level: StudyLevel) => void;
  handleAnswer: (optionIndex: number) => void;
  handleNext: () => void;
  handleReset: () => void;
  handleBackToMenu: () => void;
  getScoreLevel: () => { level: string; color: string; message: string } | null;
}

// データセットに型を適用
const globalQuestionSets: Record<StudyLevel, Question[]> = {
  beginner: beginnerQuestions,
  intermediate: intermediateQuestions,
  advanced: advancedQuestions,
};

export function useExam(): ExamContext {
  const [selectedLevel, setSelectedLevel] = useState<StudyLevel | null>(null);
  const [currentQuestion, setCurrentQuestion] = useState(0);
  const [selectedAnswer, setSelectedAnswer] = useState<number | null>(null);
  const [isAnswered, setIsAnswered] = useState(false);
  const [score, setScore] = useState(0);
  const [showResult, setShowResult] = useState(false);
  const [answers, setAnswers] = useState<AnswerDetail[]>([]);

  // クイズデータを保持（シャッフル等で状態が変わるため）
  const [questionSets, setQuestionSets] = useState(globalQuestionSets);

  const handleLevelSelect = (level: StudyLevel) => {
    // 元のデータを壊さないようコピーしてシャッフル
    const shuffled = shuffleArray([...globalQuestionSets[level]]);
    
    setQuestionSets((prev) => ({
      ...prev,
      [level]: shuffled,
    }));

    setSelectedLevel(level);
    setCurrentQuestion(0);
    setSelectedAnswer(null);
    setIsAnswered(false);
    setScore(0);
    setShowResult(false);
    setAnswers([]);
  };

  const handleAnswer = (optionIndex: number) => {
    if (isAnswered || !selectedLevel) return;

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
    if (!selectedLevel) return;
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
    if (!selectedLevel) return null;
    const questions = questionSets[selectedLevel];
    const percentage = (score / questions.length) * 100;
    
    if (percentage >= 70)
      return {
        level: "合格",
        color: "text-green-600",
        message: "おめでとうございます！合格ラインに達しています。",
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