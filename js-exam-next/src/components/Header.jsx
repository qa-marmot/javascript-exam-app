"use client";

import { LogIn, LogOut, CheckCircle, Home } from "lucide-react";
import { useRouter } from "next/navigation";
import { supabase } from "@/src/lib/supabaseClient";

export default function Header({
  isLoggedIn,
  mounted,
  onLoginClick,
  onLogout,
  onBackToMenu,
}) {
  const router = useRouter();

  return (
    <header className="h-16 bg-linear-to-r from-blue-600 to-indigo-600">
      <div className="max-w-7xl mx-auto h-full px-4 md:px-8 flex items-center justify-end">
        <h1 className="text-lg md:text-2xl font-bold whitespace-nowrap mr-auto">
          <span className="text-orange-300">Study</span>
          <span className="text-white">App</span>
        </h1>
        <div className="flex items-center gap-2 md:gap-4">
          {mounted &&
            (isLoggedIn ? (
              <>
                {/* PC表示: テキスト付き */}
                <span className="hidden md:flex text-sm text-white/90 items-center">
                  <CheckCircle className="w-4 h-4 mr-1" />
                  履歴保存中
                </span>

                {/* モバイル表示: アイコンのみ */}
                <span className="md:hidden text-white/90">
                  <CheckCircle className="w-5 h-5" />
                </span>

                <button
                  onClick={() => router.push("/history")}
                  className="bg-white/90 hover:bg-white text-blue-600 px-3 py-2 md:px-4 rounded-lg text-xs md:text-sm font-semibold whitespace-nowrap"
                >
                  <span className="hidden sm:inline">履歴を見る</span>
                  <span className="sm:hidden">履歴</span>
                </button>

                <button
                  onClick={onBackToMenu}
                  className="bg-white/20 hover:bg-white/30 text-white p-2 rounded-lg"
                  title="メニューに戻る"
                >
                  <Home className="w-4 h-4" />
                </button>

                <button
                  onClick={onLogout}
                  className="bg-white/20 hover:bg-white/30 text-white p-2 rounded-lg"
                  title="ログアウト"
                >
                  <LogOut className="w-4 h-4" />
                </button>
              </>
            ) : (
              <button
                onClick={onLoginClick}
                className="bg-white text-blue-600 px-3 py-2 md:px-4 rounded-lg text-xs md:text-sm font-semibold shadow hover:bg-blue-50 whitespace-nowrap flex items-center"
              >
                <LogIn className="w-4 h-4 mr-1" />
                <span className="hidden sm:inline">履歴を保存</span>
                <span className="sm:hidden">保存</span>
              </button>
            ))}
        </div>
      </div>
    </header>
  );
}
