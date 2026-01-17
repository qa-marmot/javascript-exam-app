import { supabase } from "./supabaseClient";

type SaveExamResultParams = {
  level: string;
  score: number;
  total: number;
};

export async function saveExamResult({
  level,
  score,
  total,
}: SaveExamResultParams) {
  // ===== 認証チェック =====
  const {
    data: { session },
    error: sessionError,
  } = await supabase.auth.getSession();

  if (sessionError) {
    throw new Error("セッション取得に失敗しました");
  }

  if (!session?.user) {
    throw new Error("未ログインのため履歴を保存できません");
  }

  // ===== データ妥当性チェック =====
  if (
    typeof level !== "string" ||
    typeof score !== "number" ||
    typeof total !== "number"
  ) {
    throw new Error("保存データが不正です");
  }

  // ===== 新規レコードを作成 =====
  const { error } = await supabase.from("exam_history").insert({
    user_id: session.user.id,
    level,
    score,
    total,
  });

  if (error) {
    console.error("saveExamResult error detail:", error);
    throw new Error("学習履歴の保存に失敗しました");
  }
}
