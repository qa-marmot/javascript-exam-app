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

  const getFakeEmail = (username) =>
    `${username.trim().toLowerCase()}@dummy-user.com`;

  // ===== フロント側バリデーション =====
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

    if (!username || !password) {
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
      const email = getFakeEmail(username);

      if (mode === "signup") {
        const { data, error } = await supabase.auth.signUp({
          email,
          password,
        });

        if (error) {
          console.error("signup error:", error);
          if (error.message.toLowerCase().includes("already")) {
            throw new Error("このユーザー名は既に登録されています");
          }
          throw new Error("登録に失敗しました");
        }

        // ✅ 自動ログイン処理
        if (data.session) {
          localStorage.setItem("username", username);
        }

        setMessage("登録成功！ログインしました 🎉");
        setTimeout(() => onClose?.(), 800);
      } else {
        const { error } = await supabase.auth.signInWithPassword({
          email,
          password,
        });

        if (error) {
          console.error("login error:", error);
          throw new Error("ユーザー名かパスワードが間違っています");
        }

        localStorage.setItem("username", username);
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
        <User className="w-16 h-16 mx-auto text-blue-600 mb-4" />
        <h2 className="text-2xl font-bold">学習履歴を保存する</h2>
        <p className="text-sm text-gray-600">
          ユーザー名とパスワードで管理します
        </p>
      </div>

      <div className="flex justify-center gap-4 mb-4">
        <button
          onClick={() => setMode("login")}
          className={`px-4 py-2 rounded ${
            mode === "login" ? "bg-blue-600 text-white" : "bg-gray-200"
          }`}
        >
          ログイン
        </button>
        <button
          onClick={() => setMode("signup")}
          className={`px-4 py-2 rounded ${
            mode === "signup" ? "bg-blue-600 text-white" : "bg-gray-200"
          }`}
        >
          新規登録
        </button>
      </div>

      {mode === "signup" && (
        <div className="mb-4 text-sm bg-blue-50 border-l-4 border-blue-400 p-3 rounded">
          <p>・ユーザー名：半角英数字6文字以上</p>
          <p>・パスワード：6文字以上</p>
        </div>
      )}

      <input
        value={username}
        onChange={(e) => setUsername(e.target.value)}
        placeholder="ユーザー名"
        className="w-full border p-3 rounded mb-3"
      />
      <input
        type="password"
        value={password}
        onChange={(e) => setPassword(e.target.value)}
        placeholder="パスワード"
        className="w-full border p-3 rounded mb-4"
      />

      <button
        onClick={handleSubmit}
        disabled={isLoading}
        className="w-full bg-blue-600 text-white py-3 rounded font-semibold"
      >
        {isLoading ? "処理中..." : mode === "signup" ? "登録" : "ログイン"}
      </button>

      <button
        onClick={() => onClose?.()}
        className="w-full mt-3 py-2 rounded border text-gray-600 hover:bg-gray-100"
      >
        戻る
      </button>

      {message && (
        <div
          className={`mt-4 text-sm p-2 rounded text-center ${
            message.includes("成功")
              ? "bg-green-100 text-green-800"
              : "bg-red-100 text-red-800"
          }`}
        >
          {message}
        </div>
      )}
    </div>
  );
}
