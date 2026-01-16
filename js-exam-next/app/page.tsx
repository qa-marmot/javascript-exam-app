"use client";

import { useEffect, useState } from "react";
import { supabase } from "@/src/lib/supabaseClient";
import { useExam } from "@/src/hooks/useExam";
import LevelSelectScreen from "@/src/components/LevelSelect";
import QuestionView from "@/src/components/QuestionView";
import ResultView from "@/src/components/ResultView";
import AuthForm from "@/src/components/AuthForm";
import { useRouter } from "next/navigation";
import Footer from "@/src/components/Footer";
import Header from "@/src/components/Header";

export default function Page() {
  const [showLoginModal, setShowLoginModal] = useState(false);
  const [isLoggedIn, setIsLoggedIn] = useState(false);
  const [mounted, setMounted] = useState(false);

  const exam = useExam();
  const router = useRouter();

  // マウント後に localStorage 参照
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
    <div className="flex flex-col bg-linear-to-br from-blue-50 to-indigo-100 min-h-screen md:h-screen">
      <Header
        isLoggedIn={isLoggedIn}
        mounted={mounted}
        onLoginClick={() => setShowLoginModal(true)}
        onLogout={handleLogout}
        onBackToMenu={exam.handleBackToMenu}
      />

      {/* メインコンテンツ(スクロール可能) */}
      <main className="flex-1 overflow-auto pb-48 md:pb-32">
        <div className="max-w-7xl mx-auto px-4 py-6 h-full">
          {!exam.selectedLevel ? (
            <LevelSelectScreen exam={exam} isLoggedIn={isLoggedIn} />
          ) : exam.showResult ? (
            <ResultView exam={exam} />
          ) : (
            <QuestionView exam={exam} />
          )}
        </div>
      </main>

      {/* Footer - QuestionView以外で表示 */}
      {(!exam.selectedLevel || exam.showResult) && <Footer />}

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
