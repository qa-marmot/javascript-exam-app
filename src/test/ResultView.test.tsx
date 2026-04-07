import { describe, it, expect, vi } from "vitest";
import { render, screen, fireEvent } from "@testing-library/react";
import ResultView from "../components/ResultView";
import { beginnerQuestions } from "../utils/questions";

function makeExam(overrides = {}) {
  const questions = beginnerQuestions.slice(0, 5);
  return {
    questionSets: {
      beginner: questions,
      intermediate: [],
      advanced: [],
    },
    selectedLevel: "beginner" as const,
    score: 4,
    answers: questions.slice(0, 4).map((q) => ({
      questionId: q.id,
      selected: q.correct,
      correct: q.correct,
      isCorrect: true,
    })),
    getScoreLevel: vi.fn(() => ({
      level: "合格",
      color: "text-green-600",
      message: "おめでとうございます！合格ラインに達しています。",
    })),
    handleReset: vi.fn(),
    handleBackToMenu: vi.fn(),
    ...overrides,
  };
}

describe("ResultView", () => {
  it("試験結果タイトルが表示される", () => {
    render(<ResultView exam={makeExam() as any} />);
    expect(screen.getByText("試験結果")).toBeDefined();
  });

  it("スコアが正しく表示される", () => {
    render(<ResultView exam={makeExam()} />);
    expect(screen.getByText("4/5")).toBeDefined();
  });

  it("合格メッセージが表示される", () => {
    render(<ResultView exam={makeExam()} />);
    expect(screen.getByText("合格")).toBeDefined();
  });

  it("selectedLevel が null の場合は何も表示しない", () => {
    const exam = makeExam({ selectedLevel: null });
    const { container } = render(<ResultView exam={exam as any} />);
    expect(container.firstChild).toBeNull();
  });

  it("メニューに戻るボタンをクリックすると handleBackToMenu が呼ばれる", () => {
    const handleBackToMenu = vi.fn();
    render(<ResultView exam={makeExam({ handleBackToMenu }) as any} />);
    fireEvent.click(screen.getByText("メニューに戻る"));
    expect(handleBackToMenu).toHaveBeenCalled();
  });

  it("もう一度挑戦するボタンをクリックすると handleReset が呼ばれる", () => {
    const handleReset = vi.fn();
    render(<ResultView exam={makeExam({ handleReset }) as any} />);
    fireEvent.click(screen.getByText("もう一度挑戦する"));
    expect(handleReset).toHaveBeenCalled();
  });

  it("分野別正解率セクションが表示される", () => {
    render(<ResultView exam={makeExam()} />);
    expect(screen.getByText("分野別正解率")).toBeDefined();
  });
});
