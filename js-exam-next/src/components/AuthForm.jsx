"use client";

import { useState } from "react";
import { supabase } from "../lib/supabaseClient";
import { User } from "lucide-react";

export default function AuthForm({ onClose }) {
  const [mode, setMode] = useState("login");
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");
  const [isLoading, setIsLoading] = useState(false);
  const [message, setMessage] = useState("");

  // ユーザー名からSupabase互換のメールアドレスを生成（内部管理用）
  const generateInternalEmail = (username) => {
    const sanitized = username.trim().toLowerCase().replace(/[^a-z0-9]/g, '');
    return `${sanitized}@internal.quiz-app.local`;
  };

  // 入力のサニタイゼーション
  const sanitizeInput = (input) => {
    return input
      .trim()
      .replace(/[<>\"']/g, '') // XSS対策
      .substring(0, 50);
  };

  // バリデーション
  const validateSignup = () => {
    if (!/^[a-zA-Z0-9]{6,}$/.test(username)) {
      return "ユーザー名は半角英数字6文字以上で入力してください";
    }
    if (password.length < 6) {
      return "パスワードは6文字以上で入力してください";
    }
    return null;
  };

  const handleSubmit = async () => {
    setMessage("");

    const sanitizedUsername = sanitizeInput(username);
    const sanitizedPassword = sanitizeInput(password);

    if (!sanitizedUsername || !sanitizedPassword) {
      setMessage("ユーザー名とパスワードを入力してください");
      return;
    }

    if (mode === "signup") {
      const validationError = validateSignup();
      if (validationError) {
        setMessage(validationError);
        return;
      }
    }

    setIsLoading(true);

    try {
      const email = generateInternalEmail(sanitizedUsername);

      if (mode === "signup") {
        const { data, error } = await supabase.auth.signUp({
          email,
          password: sanitizedPassword,
          options: {
            data: {
              display_name: sanitizedUsername, // ユーザー名をメタデータに保存
            }
          }
        });

        if (error) {
          console.error("signup error:", error);
          if (error.message.toLowerCase().includes("already")) {
            throw new Error("このユーザー名は既に登録されています");
          }
          throw new Error("登録に失敗しました");
        }

        setMessage("登録成功！ログインしました 🎉");
        setTimeout(() => onClose?.(), 800);
      } else {
        const { data, error } = await supabase.auth.signInWithPassword({
          email,
          password: sanitizedPassword,
        });

        if (error) {
          console.error("login error:", error);
          throw new Error("認証に失敗しました");
        }

        setMessage("ログイン成功！");
        setTimeout(() => onClose?.(), 800);
      }
    } catch (err) {
      setMessage(err.message || "認証に失敗しました");
    } finally {
      setIsLoading(false);
    }
  };

  return (
    <div className="max-w-md mx-auto bg-white p-8 rounded-2xl shadow-2xl">
      <div className="text-center mb-6">
        <div className="w-16 h-16 mx-auto bg-linear-to-br from-indigo-500 to-purple-600 rounded-full flex items-center justify-center mb-4">
          <User className="w-10 h-10 text-white" />
        </div>
        <h2 className="text-3xl font-bold text-gray-800 mb-2">
          学習履歴を保存する
        </h2>
        <p className="text-base text-gray-600 font-medium">
          ユーザー名とパスワードで管理します
        </p>
      </div>

      <div className="flex justify-center gap-3 mb-6">
        <button
          onClick={() => setMode("login")}
          className={`px-6 py-2.5 rounded-lg font-semibold transition-all duration-200 ${
            mode === "login"
              ? "bg-indigo-600 text-white shadow-lg scale-105"
              : "bg-gray-100 text-gray-600 hover:bg-gray-200"
          }`}
        >
          ログイン
        </button>
        <button
          onClick={() => setMode("signup")}
          className={`px-6 py-2.5 rounded-lg font-semibold transition-all duration-200 ${
            mode === "signup"
              ? "bg-indigo-600 text-white shadow-lg scale-105"
              : "bg-gray-100 text-gray-600 hover:bg-gray-200"
          }`}
        >
          新規登録
        </button>
      </div>

      {mode === "signup" && (
        <div className="mb-4 text-sm bg-indigo-50 border-l-4 border-indigo-500 p-4 rounded-lg">
          <p className="font-semibold text-indigo-900 mb-1">📋 登録条件</p>
          <p className="text-indigo-800">・ユーザー名：半角英数字6文字以上</p>
          <p className="text-indigo-800">・パスワード：6文字以上</p>
          <p className="text-indigo-800 text-xs mt-2">※メールアドレスは不要です</p>
        </div>
      )}

      <input
        value={username}
        onChange={(e) => setUsername(e.target.value)}
        placeholder="ユーザー名"
        className="w-full border-2 border-gray-300 p-3 rounded-lg mb-3 focus:border-indigo-500 focus:outline-none transition-colors text-gray-900"
        autoComplete="username"
      />
      <input
        type="password"
        value={password}
        onChange={(e) => setPassword(e.target.value)}
        placeholder="パスワード"
        className="w-full border-2 border-gray-300 p-3 rounded-lg mb-4 focus:border-indigo-500 focus:outline-none transition-colors text-gray-900"
        autoComplete={mode === "signup" ? "new-password" : "current-password"}
      />

      <button
        onClick={handleSubmit}
        disabled={isLoading}
        className="w-full bg-linear-to-r from-indigo-600 to-purple-600 hover:from-indigo-700 hover:to-purple-700 text-white py-3 rounded-lg font-bold text-lg shadow-lg hover:shadow-xl transition-all duration-200 disabled:opacity-50 disabled:cursor-not-allowed"
      >
        {isLoading ? "処理中..." : mode === "signup" ? "登録" : "ログイン"}
      </button>

      <button
        onClick={() => onClose?.()}
        className="w-full mt-3 py-2.5 rounded-lg border-2 border-gray-300 text-gray-700 font-semibold hover:bg-gray-50 transition-colors duration-200"
      >
        戻る
      </button>

      {message && (
        <div
          className={`mt-4 text-sm p-3 rounded-lg text-center font-semibold ${
            message.includes("成功")
              ? "bg-green-100 text-green-800 border border-green-300"
              : "bg-red-100 text-red-800 border border-red-300"
          }`}
        >
          {message}
        </div>
      )}
    </div>
  );
}