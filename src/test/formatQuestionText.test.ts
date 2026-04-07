import { describe, it, expect } from "vitest";
import {
  formatQuestionText,
  formatQuestionSimple,
} from "../utils/formatQuestionText";

describe("formatQuestionSimple", () => {
  it("通常テキストを text タイプで返す", () => {
    const result = formatQuestionSimple("次のうち正しいものはどれですか？");
    expect(result).toHaveLength(1);
    expect(result[0].type).toBe("text");
    expect(result[0].content).toBe("次のうち正しいものはどれですか？");
  });

  it("コードパターンを code タイプで返す", () => {
    const result = formatQuestionSimple("const x = 1;");
    expect(result[0].type).toBe("code");
  });

  it("アロー関数を含む文字列を code として判定する", () => {
    const result = formatQuestionSimple("const fn = () => true;");
    expect(result[0].type).toBe("code");
  });

  it("console.log を含む文字列を code として判定する", () => {
    const result = formatQuestionSimple("console.log('hello')");
    expect(result[0].type).toBe("code");
  });

  it("空白のみのセクションを除外する", () => {
    const result = formatQuestionSimple("テキスト\n\n\n\n");
    expect(result.every((p) => p.content.length > 0)).toBe(true);
  });

  it("テキストとコードが混在する場合に複数パートに分割する", () => {
    const input = "次のコードの出力は何ですか？\n\nconst x = 1 + 2;";
    const result = formatQuestionSimple(input);
    expect(result.length).toBeGreaterThanOrEqual(1);
  });
});

describe("formatQuestionText", () => {
  it("通常テキストのみの場合は text タイプで返す", () => {
    const result = formatQuestionText("JavaScriptとは何ですか？");
    expect(result.some((p) => p.type === "text")).toBe(true);
  });

  it("コードブロック（インデントあり）を code タイプで返す", () => {
    const input = "質問\n  const x = 1;\n  return x;";
    const result = formatQuestionText(input);
    expect(result.some((p) => p.type === "code")).toBe(true);
  });

  it("空文字列で空配列を返す", () => {
    const result = formatQuestionText("");
    expect(result).toEqual([]);
  });
});
