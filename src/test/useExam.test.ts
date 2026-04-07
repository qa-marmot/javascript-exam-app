import { describe, it, expect } from "vitest";
import { renderHook, act } from "@testing-library/react";
import { useExam } from "../hooks/useExam";

describe("useExam", () => {
  it("初期状態は selectedLevel が null", () => {
    const { result } = renderHook(() => useExam());
    expect(result.current.selectedLevel).toBeNull();
  });

  it("handleLevelSelect でレベルが設定される", () => {
    const { result } = renderHook(() => useExam());
    act(() => {
      result.current.handleLevelSelect("beginner");
    });
    expect(result.current.selectedLevel).toBe("beginner");
  });

  it("handleLevelSelect 後に currentQuestion が 0 になる", () => {
    const { result } = renderHook(() => useExam());
    act(() => {
      result.current.handleLevelSelect("intermediate");
    });
    expect(result.current.currentQuestion).toBe(0);
  });

  it("handleLevelSelect 後に score が 0 になる", () => {
    const { result } = renderHook(() => useExam());
    act(() => {
      result.current.handleLevelSelect("advanced");
    });
    expect(result.current.score).toBe(0);
  });

  it("handleAnswer で isAnswered が true になる", () => {
    const { result } = renderHook(() => useExam());
    act(() => {
      result.current.handleLevelSelect("beginner");
    });
    act(() => {
      result.current.handleAnswer(0);
    });
    expect(result.current.isAnswered).toBe(true);
  });

  it("handleAnswer を二度呼んでも selectedAnswer は変わらない", () => {
    const { result } = renderHook(() => useExam());
    act(() => {
      result.current.handleLevelSelect("beginner");
    });
    act(() => {
      result.current.handleAnswer(0);
    });
    const firstAnswer = result.current.selectedAnswer;
    act(() => {
      result.current.handleAnswer(1);
    });
    expect(result.current.selectedAnswer).toBe(firstAnswer);
  });

  it("正解の場合 score が増加する", () => {
    const { result } = renderHook(() => useExam());
    act(() => {
      result.current.handleLevelSelect("beginner");
    });
    const correctIndex =
      result.current.questionSets["beginner"][0].correct;
    act(() => {
      result.current.handleAnswer(correctIndex);
    });
    expect(result.current.score).toBe(1);
  });

  it("不正解の場合 score は変わらない", () => {
    const { result } = renderHook(() => useExam());
    act(() => {
      result.current.handleLevelSelect("beginner");
    });
    const correctIndex =
      result.current.questionSets["beginner"][0].correct;
    const wrongIndex = correctIndex === 0 ? 1 : 0;
    act(() => {
      result.current.handleAnswer(wrongIndex);
    });
    expect(result.current.score).toBe(0);
  });

  it("handleNext で currentQuestion が進む", () => {
    const { result } = renderHook(() => useExam());
    act(() => {
      result.current.handleLevelSelect("beginner");
    });
    act(() => {
      result.current.handleAnswer(0);
    });
    act(() => {
      result.current.handleNext();
    });
    expect(result.current.currentQuestion).toBe(1);
  });

  it("handleReset でスコアと問題番号がリセットされる", () => {
    const { result } = renderHook(() => useExam());
    act(() => {
      result.current.handleLevelSelect("beginner");
    });
    act(() => {
      result.current.handleAnswer(
        result.current.questionSets["beginner"][0].correct
      );
    });
    act(() => {
      result.current.handleReset();
    });
    expect(result.current.score).toBe(0);
    expect(result.current.currentQuestion).toBe(0);
    expect(result.current.showResult).toBe(false);
  });

  it("handleBackToMenu で selectedLevel が null になる", () => {
    const { result } = renderHook(() => useExam());
    act(() => {
      result.current.handleLevelSelect("beginner");
    });
    act(() => {
      result.current.handleBackToMenu();
    });
    expect(result.current.selectedLevel).toBeNull();
  });

  it("selectedLevel が null の場合 getScoreLevel は null を返す", () => {
    const { result } = renderHook(() => useExam());
    expect(result.current.getScoreLevel()).toBeNull();
  });

  it("70%以上で getScoreLevel は '合格' を返す", () => {
    const { result } = renderHook(() => useExam());
    act(() => {
      result.current.handleLevelSelect("beginner");
    });
    const questions = result.current.questionSets["beginner"];
    // 70%以上の問題に正解する
    const target = Math.ceil(questions.length * 0.7);
    for (let i = 0; i < target; i++) {
      act(() => {
        result.current.handleAnswer(
          result.current.questionSets["beginner"][result.current.currentQuestion].correct
        );
      });
      act(() => {
        result.current.handleNext();
      });
    }
    const scoreLevel = result.current.getScoreLevel();
    expect(scoreLevel?.level).toBe("合格");
  });
});
