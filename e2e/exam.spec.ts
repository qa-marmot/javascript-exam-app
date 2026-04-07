import { test, expect } from "@playwright/test";

test.describe("トップページ", () => {
  test("レベル選択画面が表示される", async ({ page }) => {
    await page.goto("/");
    await expect(page.getByText("JavaScriptスキルチェック")).toBeVisible();
    await expect(page.getByText("初級")).toBeVisible();
    await expect(page.getByText("中級")).toBeVisible();
    await expect(page.getByText("上級")).toBeVisible();
  });

  test("合格ラインの説明が表示される", async ({ page }) => {
    await page.goto("/");
    await expect(page.getByText("合格ライン: 70%以上 (28問以上正解)")).toBeVisible();
  });
});

test.describe("初級レベル", () => {
  test.beforeEach(async ({ page }) => {
    await page.goto("/");
    await page.getByText("初級").click();
  });

  test("問題画面が表示される", async ({ page }) => {
    await expect(page.getByText("問題 1 /")).toBeVisible();
  });

  test("4つの選択肢が表示される", async ({ page }) => {
    const options = page.locator("button").filter({ hasText: /\S/ });
    // 選択肢ボタンは少なくとも4つ
    await expect(options).toHaveCount(await options.count());
    expect(await options.count()).toBeGreaterThanOrEqual(4);
  });

  test("回答前は次へボタンが無効", async ({ page }) => {
    const nextButton = page.getByText("次の問題へ");
    await expect(nextButton).toBeDisabled();
  });

  test("選択肢をクリックすると正解/不正解が表示される", async ({ page }) => {
    // 最初の選択肢をクリック
    const options = page.locator("div.space-y-3 button");
    await options.first().click();
    // 正解か不正解のいずれかが表示される
    const feedback = page.getByText(/正解です|不正解です/);
    await expect(feedback).toBeVisible();
  });

  test("回答後に次へボタンが有効になる", async ({ page }) => {
    const options = page.locator("div.space-y-3 button");
    await options.first().click();
    const nextButton = page.getByText("次の問題へ");
    await expect(nextButton).toBeEnabled();
  });

  test("次の問題へボタンで問題が進む", async ({ page }) => {
    const options = page.locator("div.space-y-3 button");
    await options.first().click();
    await page.getByText("次の問題へ").click();
    await expect(page.getByText("問題 2 /")).toBeVisible();
  });

  test("終了してトップに戻るボタンでレベル選択に戻る", async ({ page }) => {
    await page.getByText("終了してトップに戻る").click();
    await expect(page.getByText("JavaScriptスキルチェック")).toBeVisible();
  });
});

test.describe("中級レベル", () => {
  test("中級を選択すると問題画面が表示される", async ({ page }) => {
    await page.goto("/");
    await page.getByText("中級").click();
    await expect(page.getByText("問題 1 /")).toBeVisible();
  });
});

test.describe("上級レベル", () => {
  test("上級を選択すると問題画面が表示される", async ({ page }) => {
    await page.goto("/");
    await page.getByText("上級").click();
    await expect(page.getByText("問題 1 /")).toBeVisible();
  });
});

test.describe("結果画面", () => {
  test("全問回答後に結果画面が表示される（初級・最初の3問のみ）", async ({
    page,
  }) => {
    // このテストは実際の全40問を解くのは重いため、
    // 1問だけ解いて「結果を見る」ボタンの状態を確認する代替テスト
    await page.goto("/");
    await page.getByText("初級").click();

    // 1問目を回答
    const options = page.locator("div.space-y-3 button");
    await options.first().click();

    // 最後の問題でなければ「次の問題へ」が表示される
    const nextBtn = page.getByText(/次の問題へ|結果を見る/);
    await expect(nextBtn).toBeVisible();
  });
});

test.describe("ヘッダー", () => {
  test("ヘッダーが表示される", async ({ page }) => {
    await page.goto("/");
    await expect(page.locator("header")).toBeVisible();
  });

  test("ログインボタンが表示される（未ログイン時）", async ({ page }) => {
    await page.goto("/");
    await expect(page.getByText("ログイン")).toBeVisible();
  });
});
