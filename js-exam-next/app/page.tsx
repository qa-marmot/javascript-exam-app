"use client";

import { useEffect, useState } from "react";
import { supabase } from "@/src/lib/supabaseClient";
import { useExam } from "@/src/hooks/useExam";
import LevelSelectScreen from "@/src/components/LevelSelect";
import QuestionView from "@/src/components/QuestionView";
import ResultView from "@/src/components/ResultView";
import AuthForm from "@/src/components/AuthForm";
import Footer from "@/src/components/Footer";
import Header from "@/src/components/Header";

export default function Page() {
  const [showLoginModal, setShowLoginModal] = useState(false);
  const [isLoggedIn, setIsLoggedIn] = useState(false);
  const [mounted, setMounted] = useState(false);

  const exam = useExam();

  // ✅ Supabaseのセッション管理を使用（localStorageは使用しない）
  useEffect(() => {
    setMounted(true);
    
    // 初回のセッション確認
    checkSession();
    
    // セッション変更を監視
    const { data: { subscription } } = supabase.auth.onAuthStateChange((_event, session) => {
      setIsLoggedIn(!!session);
    });

    return () => subscription.unsubscribe();
  }, []);

  const checkSession = async () => {
    const { data: { session } } = await supabase.auth.getSession();
    setIsLoggedIn(!!session);
  };

  const handleLogout = async () => {
    // ✅ localStorageの削除は不要（Supabaseが管理）
    await supabase.auth.signOut();
    setIsLoggedIn(false);
  };

  return (
    <div className="min-h-screen flex flex-col bg-gradient-to-br from-blue-50 to-indigo-100">
      <Header
        isLoggedIn={isLoggedIn}
        mounted={mounted}
        onLoginClick={() => setShowLoginModal(true)}
        onLogout={handleLogout}
        onBackToMenu={exam.handleBackToMenu}
      />

      {/* メインコンテンツ */}
      <main className="flex-1">
        <div className="max-w-7xl mx-auto px-4 py-6">
          {!exam.selectedLevel ? (
            <LevelSelectScreen exam={exam} isLoggedIn={isLoggedIn} />
          ) : exam.showResult ? (
            <ResultView exam={exam} />
          ) : (
            <QuestionView exam={exam} />
          )}
        </div>
      </main>

      {/* Footer */}
      {(!exam.selectedLevel || exam.showResult) && (
        <Footer fixed={!exam.showResult && !exam.showResult} />
      )}

      {/* ログインモーダル */}
      {showLoginModal && (
        <div className="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center p-4 z-50">
          <AuthForm
            onClose={() => {
              setShowLoginModal(false);
              // ✅ 再度セッション確認
              checkSession();
            }}
          />
        </div>
      )}
    </div>
  );
}