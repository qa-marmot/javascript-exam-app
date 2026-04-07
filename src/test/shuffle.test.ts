import { describe, it, expect, vi } from "vitest";
import { shuffleArray } from "../utils/shuffle";

describe("shuffleArray", () => {
  it("元の配列と同じ要素を持つ", () => {
    const original = [1, 2, 3, 4, 5];
    const result = shuffleArray(original);
    expect(result).toHaveLength(original.length);
    expect(result.sort()).toEqual([...original].sort());
  });

  it("元の配列を変更しない", () => {
    const original = [1, 2, 3, 4, 5];
    const copy = [...original];
    shuffleArray(original);
    expect(original).toEqual(copy);
  });

  it("空配列を返す", () => {
    expect(shuffleArray([])).toEqual([]);
  });

  it("1要素の配列をそのまま返す", () => {
    expect(shuffleArray([42])).toEqual([42]);
  });

  it("Math.random を固定するとシャッフルが決定的になる", () => {
    vi.spyOn(Math, "random").mockReturnValue(0);
    const result = shuffleArray([1, 2, 3, 4, 5]);
    expect(result).toHaveLength(5);
    vi.restoreAllMocks();
  });
});
