"use client";

import { useEffect, useState } from "react";
import { supabase } from "@/src/lib/supabaseClient";
import { LogIn, LogOut, CheckCircle } from "lucide-react";

import { useExam } from "@/src/hooks/useExam";
import LevelSelectScreen from "@/src/components/LevelSelect";
import QuestionView from "@/src/components/QuestionView";
import ResultView from "@/src/components/ResultView";
import AuthForm from "@/src/components/AuthForm";
import { useRouter } from "next/navigation";
import { Home } from "lucide-react";

export default function Page() {
  const [showLoginModal, setShowLoginModal] = useState(false);
  const [isLoggedIn, setIsLoggedIn] = useState(false);
  const [mounted, setMounted] = useState(false);

  const exam = useExam();
  const router = useRouter();

  // ✅ マウント後にのみ localStorage を参照
  useEffect(() => {
    setMounted(true);
    const username = localStorage.getItem("username");
    setIsLoggedIn(!!username);
  }, []);

  const handleLogout = async () => {
    localStorage.removeItem("username");
    setIsLoggedIn(false);
    await supabase.auth.signOut();
  };

  return (
    <div className="min-h-screen bg-gradient-to-br from-blue-50 to-indigo-100">
      {/* ヘッダー */}
      <div className="bg-white shadow-md border-b-2 border-gray-200">
        <div className="max-w-7xl mx-auto px-4 py-3 flex justify-between items-center">
          <h1 className="text-lg font-bold text-gray-800">
            JavaScript理解度チェック
          </h1>

          <div className="flex items-center gap-3">
            {/* ✅ mounted 後のみ描画 */}
            {mounted &&
              (isLoggedIn ? (
                <>
                  <span className="text-sm text-green-600 font-medium flex items-center">
                    <CheckCircle className="w-4 h-4 mr-1" />
                    履歴保存中
                  </span>

                  <button
                    onClick={() => router.push("/history")}
                    className="flex items-center gap-2 px-4 py-2 bg-yellow-100 hover:bg-yellow-200 text-gray-700 rounded-lg text-sm"
                  >
                    履歴を見る
                  </button>

                  <button
                    onClick={handleLogout}
                    className="flex items-center gap-2 px-4 py-2 bg-gray-100 hover:bg-gray-200 text-gray-700 rounded-lg text-sm"
                  >
                    <LogOut className="w-4 h-4" />
                    ログアウト
                  </button>
                  <button
                    onClick={exam.handleBackToMenu}
                    className="flex items-center gap-2 px-4 py-2 bg-gray-100 hover:bg-gray-200 text-gray-700 rounded-lg text-sm"
                  >
                    <Home className="w-4 h-4" />
                    メニュー
                  </button>
                </>
              ) : (
                <button
                  onClick={() => setShowLoginModal(true)}
                  className="flex items-center gap-2 px-4 py-2 bg-blue-600 hover:bg-blue-700 text-white rounded-lg text-sm shadow-md"
                >
                  <LogIn className="w-4 h-4" />
                  履歴を保存
                </button>
              ))}
          </div>
        </div>
      </div>

      {/* メインコンテンツ */}
      <main>
        {!exam.selectedLevel ? (
          <LevelSelectScreen exam={exam} isLoggedIn={isLoggedIn} />
        ) : exam.showResult ? (
          <ResultView exam={exam} />
        ) : (
          <QuestionView exam={exam} />
        )}
      </main>

      {/* ログインモーダル */}
      {showLoginModal && (
        <div className="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center p-4 z-50">
          <AuthForm
            onClose={() => {
              setShowLoginModal(false);
              const username = localStorage.getItem("username");
              setIsLoggedIn(!!username);
            }}
          />
        </div>
      )}
    </div>
  );
}
