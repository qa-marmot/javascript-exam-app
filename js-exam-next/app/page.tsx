"use client";

import { useEffect, useState } from "react";
import { supabase } from "@/src/lib/supabaseClient";

import { useExam } from "@/src/hooks/useExam";
import LevelSelectScreen from "@/src/components/LevelSelect";
import QuestionView from "@/src/components/QuestionView";
import ResultView from "@/src/components/ResultView";
import AuthForm from "@/src/components/AuthForm";

export default function Page() {
  const [user, setUser] = useState<any>(null);
  const exam = useExam();

  useEffect(() => {
    // 初回ロード時のログイン状態取得
    supabase.auth.getUser().then(({ data }) => {
      setUser(data.user);
    });

    // ログイン状態の監視
    const {
      data: { subscription },
    } = supabase.auth.onAuthStateChange((_event, session) => {
      setUser(session?.user ?? null);
    });

    return () => subscription.unsubscribe();
  }, []);

  //  未ログイン → ログイン画面
  if (!user) {
    return (
      <main className="min-h-screen flex items-center justify-center bg-gray-100">
        <AuthForm />
      </main>
    );
  }

  //  ログイン後 → 試験アプリ
  if (!exam.selectedLevel) {
    return <LevelSelectScreen exam={exam} />;
  }

  if (exam.showResult) {
    return <ResultView exam={exam} />;
  }

  return <QuestionView exam={exam} />;
}
