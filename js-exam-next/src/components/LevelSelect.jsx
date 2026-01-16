"use client";

export default function LevelSelectScreen({ exam, isLoggedIn }) {
  const { handleLevelSelect } = exam;

  return (
    <div className="min-h-screen bg-linear-to-br from-blue-50 to-indigo-100 p-6">
      <div className="max-w-4xl mx-auto w-full md:mt-[9vh]">
        <div className="bg-white rounded-2xl shadow-xl p-8 text-center">
          <h1 className="text-4xl font-bold text-gray-600 mb-4">
            JavaScript
            <br className="md:hidden" />
            スキルチェック
          </h1>
          <div className="mb-8">
            <p className="text-base md:text-lg text-gray-600 mb-2">
              あなたのレベルを選んでスタート
            </p>
            <p className="text-sm text-gray-500">
              全40問 • 時間制限なし • 合格ライン70%
            </p>
          </div>

          <div className="grid md:grid-cols-3 gap-6">
            <button
              onClick={() => handleLevelSelect("beginner")}
              className="bg-linear-to-br from-green-400 to-green-600 text-white p-8 rounded-xl hover:from-green-500 hover:to-green-700 transition-all shadow-lg transform hover:scale-105"
            >
              <div className="text-3xl font-bold mb-2">初級</div>
              <div className="text-sm opacity-90">基礎文法と基本機能</div>
              <div className="text-xs mt-2 opacity-75">40問</div>
            </button>

            <button
              onClick={() => handleLevelSelect("intermediate")}
              className="bg-linear-to-br from-blue-400 to-blue-600 text-white p-8 rounded-xl hover:from-blue-500 hover:to-blue-700 transition-all shadow-lg transform hover:scale-105"
            >
              <div className="text-3xl font-bold mb-2">中級</div>
              <div className="text-sm opacity-90">実践的な機能と応用</div>
              <div className="text-xs mt-2 opacity-75">40問</div>
            </button>

            <button
              onClick={() => handleLevelSelect("advanced")}
              className="bg-linear-to-br from-purple-400 to-purple-600 text-white p-8 rounded-xl hover:from-purple-500 hover:to-purple-700 transition-all shadow-lg transform hover:scale-105"
            >
              <div className="text-3xl font-bold mb-2">上級</div>
              <div className="text-sm opacity-90">
                JavaScriptの高度な技術と知識
              </div>
              <div className="text-xs mt-2 opacity-75">40問</div>
            </button>
          </div>

          <div className="mt-12 text-sm text-gray-600">
            <p>合格ライン: 70%以上 (28問以上正解)</p>
            {isLoggedIn && (
              <p className="text-green-600 mt-2">
                ログイン中なので履歴が保存されます
              </p>
            )}
          </div>
        </div>
      </div>
    </div>
  );
}
