import { describe, it, expect, vi } from "vitest";
import { render, screen, fireEvent } from "@testing-library/react";
import LevelSelectScreen from "../components/LevelSelect";

function makeExam(overrides = {}) {
  return {
    handleLevelSelect: vi.fn(),
    ...overrides,
  };
}

describe("LevelSelectScreen", () => {
  it("タイトルが表示される", () => {
    render(<LevelSelectScreen exam={makeExam()} isLoggedIn={false} />);
    expect(screen.getByText("JavaScriptスキルチェック")).toBeDefined();
  });

  it("3つのレベルボタンが表示される", () => {
    render(<LevelSelectScreen exam={makeExam()} isLoggedIn={false} />);
    expect(screen.getByText("初級")).toBeDefined();
    expect(screen.getByText("中級")).toBeDefined();
    expect(screen.getByText("上級")).toBeDefined();
  });

  it("初級ボタンをクリックすると handleLevelSelect('beginner') が呼ばれる", () => {
    const handleLevelSelect = vi.fn();
    render(
      <LevelSelectScreen exam={makeExam({ handleLevelSelect })} isLoggedIn={false} />
    );
    fireEvent.click(screen.getByText("初級"));
    expect(handleLevelSelect).toHaveBeenCalledWith("beginner");
  });

  it("中級ボタンをクリックすると handleLevelSelect('intermediate') が呼ばれる", () => {
    const handleLevelSelect = vi.fn();
    render(
      <LevelSelectScreen exam={makeExam({ handleLevelSelect })} isLoggedIn={false} />
    );
    fireEvent.click(screen.getByText("中級"));
    expect(handleLevelSelect).toHaveBeenCalledWith("intermediate");
  });

  it("上級ボタンをクリックすると handleLevelSelect('advanced') が呼ばれる", () => {
    const handleLevelSelect = vi.fn();
    render(
      <LevelSelectScreen exam={makeExam({ handleLevelSelect })} isLoggedIn={false} />
    );
    fireEvent.click(screen.getByText("上級"));
    expect(handleLevelSelect).toHaveBeenCalledWith("advanced");
  });

  it("ログイン中の場合に履歴保存メッセージが表示される", () => {
    render(<LevelSelectScreen exam={makeExam()} isLoggedIn={true} />);
    expect(screen.getByText("ログイン中なので履歴が保存されます")).toBeDefined();
  });

  it("未ログインの場合に履歴保存メッセージが表示されない", () => {
    render(<LevelSelectScreen exam={makeExam()} isLoggedIn={false} />);
    expect(
      screen.queryByText("ログイン中なので履歴が保存されます")
    ).toBeNull();
  });
});
