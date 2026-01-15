"use client";

import { useEffect, useState } from "react";
import { supabase } from "@/src/lib/supabaseClient";
import { LEVEL_LABEL } from "@/src/components/levelLabel";
import { useRouter } from "next/navigation";

type ExamHistory = {
  id: string;
  level: string;
  score: number;
  total: number;
  created_at: string;
};

export default function HistoryPage() {
  const [history, setHistory] = useState<ExamHistory[]>([]);
  const [loading, setLoading] = useState(true);
  const [errorMessage, setErrorMessage] = useState<string | null>(null);
  const router = useRouter();

  useEffect(() => {
    const fetchHistory = async () => {
      // 🔐 ログインユーザー確認
      const {
        data: { session },
        error: sessionError,
      } = await supabase.auth.getSession();

      if (sessionError || !session?.user) {
        setErrorMessage("ログインしてください");
        setLoading(false);
        return;
      }

      // ✅ RLS により自分の履歴のみ取得される
      const { data, error } = await supabase
        .from("exam_history")
        .select("id, level, score, total, created_at")
        .order("created_at", { ascending: false });

      if (error) {
        console.error("履歴取得エラー:", error);
        setErrorMessage("履歴の取得に失敗しました");
      } else {
        setHistory(data ?? []);
      }

      setLoading(false);
    };

    fetchHistory();
  }, []);

  if (loading) {
    return <p className="p-6">読み込み中...</p>;
  }

  if (errorMessage) {
    return (
      <div className="p-6">
        <p className="text-red-600 mb-4">{errorMessage}</p>
        <button
          onClick={() => router.push("/")}
          className="px-4 py-2 bg-gray-200 hover:bg-gray-300 rounded-lg text-sm"
        >
          トップに戻る
        </button>
      </div>
    );
  }

  return (
    <div className="p-6 max-w-3xl mx-auto">
      {/* ヘッダー */}
      <div className="flex justify-between items-center mb-6">
        <h1 className="text-2xl font-bold">学習履歴</h1>
        <button
          onClick={() => router.push("/")}
          className="px-4 py-2 bg-gray-200 hover:bg-gray-300 rounded-lg text-sm"
        >
          トップに戻る
        </button>
      </div>

      {history.length === 0 ? (
        <p className="text-gray-600">まだ履歴がありません</p>
      ) : (
        <ul className="space-y-4">
          {history.map((item) => (
            <li
              key={item.id}
              className="border rounded-xl p-4 bg-white shadow"
            >
              <p className="font-semibold">
                レベル：{LEVEL_LABEL[item.level] ?? item.level}
              </p>
              <p>
                スコア：{item.score} / {item.total}
              </p>
              <p className="text-sm text-gray-500">
                {new Date(item.created_at).toLocaleString()}
              </p>

              {/*  将来ここに「間違えた問題を見る」ボタンを追加 */}
            </li>
          ))}
        </ul>
      )}
    </div>
  );
}
