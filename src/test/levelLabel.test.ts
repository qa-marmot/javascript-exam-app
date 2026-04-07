import { describe, it, expect } from "vitest";
import { LEVEL_LABEL } from "../components/levelLabel";

describe("LEVEL_LABEL", () => {
  it("beginner は '初級'", () => {
    expect(LEVEL_LABEL["beginner"]).toBe("初級");
  });

  it("intermediate は '中級'", () => {
    expect(LEVEL_LABEL["intermediate"]).toBe("中級");
  });

  it("advanced は '上級'", () => {
    expect(LEVEL_LABEL["advanced"]).toBe("上級");
  });
});
