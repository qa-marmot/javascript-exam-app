"use client";

import { useState } from "react";
import { supabase } from "../lib/supabaseClient";

export default function AuthForm() {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [isSignUp, setIsSignUp] = useState(false);
  const [message, setMessage] = useState("");

  const handleSubmit = async () => {
    setMessage("");

    const { error } = isSignUp
      ? await supabase.auth.signUp({ email, password })
      : await supabase.auth.signInWithPassword({ email, password });

    if (error) {
      setMessage(error.message);
    } else {
      setMessage(isSignUp ? "確認メールを送信しました" : "ログイン成功");
    }
  };

  return (
    <div className="max-w-md mx-auto bg-white p-6 rounded-xl shadow-lg">
      <h2 className="text-xl font-bold mb-4 text-center text-gray-900">
        {isSignUp ? "新規登録" : "ログイン"}
      </h2>

      <input
        className="w-full border border-gray-400 p-2 mb-3 rounded text-gray-900 bg-white placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-blue-500"
        placeholder="Email"
        value={email}
        onChange={(e) => setEmail(e.target.value)}
      />

      <input
        type="password"
        className="w-full border border-gray-400 p-2 mb-4 rounded text-gray-900 bg-white placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-blue-500"
        placeholder="Password"
        value={password}
        onChange={(e) => setPassword(e.target.value)}
      />

      <button
        onClick={handleSubmit}
        className="w-full bg-blue-600 hover:bg-blue-700 text-white py-2 rounded font-semibold shadow"
      >
        {isSignUp ? "登録する" : "ログイン"}
      </button>

      <p
        className="mt-3 text-sm text-center text-blue-700 cursor-pointer hover:underline"
        onClick={() => setIsSignUp(!isSignUp)}
      >
        {isSignUp ? "ログインに戻る" : "新規登録はこちら"}
      </p>

      {message && (
        <p className="mt-3 text-center text-sm text-red-600 font-medium">
          {message}
        </p>
      )}
    </div>
  );
}
