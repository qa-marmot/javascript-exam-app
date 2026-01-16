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
    return (
      <div className="min-h-screen bg-linear-to-br from-blue-50 to-indigo-100 flex items-center justify-center">
        <div className="text-center">
          <div className="inline-block animate-spin rounded-full h-12 w-12 border-b-2 border-indigo-600 mb-4"></div>
          <p className="text-gray-700 text-lg">読み込み中...</p>
        </div>
      </div>
    );
  }

  if (errorMessage) {
    return (
      <div className="min-h-screen bg-linear-to-br from-blue-50 to-indigo-100 flex items-center justify-center p-6">
        <div className="bg-white rounded-2xl shadow-xl p-8 max-w-md w-full text-center">
          <div className="mb-6">
            <div className="mx-auto w-16 h-16 bg-red-100 rounded-full flex items-center justify-center mb-4">
              <svg
                className="w-8 h-8 text-red-600"
                fill="none"
                stroke="currentColor"
                viewBox="0 0 24 24"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  d="M12 9v2m0 4h.01m-6.938 4h13.856c1.54 0 2.502-1.667 1.732-3L13.732 4c-.77-1.333-2.694-1.333-3.464 0L3.34 16c-.77 1.333.192 3 1.732 3z"
                />
              </svg>
            </div>
            <h2 className="text-2xl font-bold text-gray-800 mb-2">
              ログインが必要です
            </h2>
            <p className="text-gray-600 mb-6">
              学習履歴を確認するには、ログインしてください
            </p>
          </div>
          <button
            onClick={() => router.push("/")}
            className="w-full px-6 py-3 bg-indigo-600 hover:bg-indigo-700 text-white font-semibold rounded-lg transition-colors duration-200"
          >
            トップページへ戻る
          </button>
        </div>
      </div>
    );
  }

  return (
    <div className="min-h-screen bg-linear-to-br from-blue-50 to-indigo-100">
      <div className="max-w-4xl mx-auto px-4 py-8">
        {/* ヘッダー */}
        <div className="bg-white rounded-2xl shadow-lg p-6 mb-6">
          <div className="flex justify-between items-center">
            <div>
              <h1 className="text-3xl font-bold text-gray-800 mb-1">
                学習履歴
              </h1>
              <p className="text-gray-600 text-sm">
                これまでの受験記録を確認できます
              </p>
            </div>
            <button
              onClick={() => router.push("/")}
              className="px-5 py-2.5 bg-gray-100 hover:bg-gray-200 text-gray-700 font-medium rounded-lg transition-colors duration-200"
            >
              トップに戻る
            </button>
          </div>
        </div>

        {/* 履歴リスト */}
        {history.length === 0 ? (
          <div className="bg-white rounded-2xl shadow-lg p-12 text-center">
            <div className="mx-auto w-20 h-20 bg-gray-100 rounded-full flex items-center justify-center mb-4">
              <svg
                className="w-10 h-10 text-gray-400"
                fill="none"
                stroke="currentColor"
                viewBox="0 0 24 24"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  d="M9 12h6m-6 4h6m2 5H7a2 2 0 01-2-2V5a2 2 0 012-2h5.586a1 1 0 01.707.293l5.414 5.414a1 1 0 01.293.707V19a2 2 0 01-2 2z"
                />
              </svg>
            </div>
            <h3 className="text-xl font-semibold text-gray-700 mb-2">
              履歴がありません
            </h3>
            <p className="text-gray-500 mb-6">
              クイズに挑戦すると、ここに結果が表示されます
            </p>
            <button
              onClick={() => router.push("/")}
              className="px-6 py-3 bg-indigo-600 hover:bg-indigo-700 text-white font-semibold rounded-lg transition-colors duration-200"
            >
              クイズを始める
            </button>
          </div>
        ) : (
          <div className="space-y-4">
            {history.map((item) => {
              const percentage = Math.round((item.score / item.total) * 100);
              const isGood = percentage >= 70;
              
              return (
                <div
                  key={item.id}
                  className="bg-white rounded-xl p-6 shadow-lg hover:shadow-xl transition-shadow duration-200"
                >
                  <div className="flex items-start justify-between">
                    <div className="flex-1">
                      <div className="flex items-center gap-3 mb-2">
                        <span className="px-3 py-1 bg-indigo-100 text-indigo-700 rounded-lg text-sm font-semibold">
                          {LEVEL_LABEL[item.level] ?? item.level}
                        </span>
                        <span
                          className={`px-3 py-1 rounded-lg text-sm font-semibold ${
                            isGood
                              ? "bg-green-100 text-green-700"
                              : "bg-orange-100 text-orange-700"
                          }`}
                        >
                          {percentage}%
                        </span>
                      </div>
                      <p className="text-2xl font-bold text-gray-800 mb-1">
                        {item.score} / {item.total} 問正解
                      </p>
                      <p className="text-sm text-gray-500">
                        {new Date(item.created_at).toLocaleString("ja-JP", {
                          year: "numeric",
                          month: "long",
                          day: "numeric",
                          hour: "2-digit",
                          minute: "2-digit",
                        })}
                      </p>
                    </div>
                    <div className={`text-4xl ${isGood ? "text-green-500" : "text-orange-500"}`}>
                      {isGood ? "🎉" : "📝"}
                    </div>
                  </div>
                </div>
              );
            })}
          </div>
        )}
      </div>
    </div>
  );
}