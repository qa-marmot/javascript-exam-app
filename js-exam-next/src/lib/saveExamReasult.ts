import { supabase } from "./supabaseClient";

export async function saveExamResult({
  level,
  score,
  total,
}: {
  level: string;
  score: number;
  total: number;
}) {
  const {
    data: { user },
    error: userError,
  } = await supabase.auth.getUser();

  if (userError || !user) {
    throw new Error("User not logged in");
  }

  const { error } = await supabase.from("exam_results").insert({
    user_id: user.id,
    level,
    score,
    total,
  });

  if (error) {
    throw error;
  }
}
