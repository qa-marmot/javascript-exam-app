# JS Exam

JavaScriptの実力を試せる試験アプリケーションです。

## 概要

JS Examは、JavaScriptの知識を測定するためのインタラクティブな試験プラットフォームです。複数の問題に答えて、最終的なスコアと成績レベルを確認できます。

## 機能

- **問題出題**: ランダムに出題される選択肢形式の問題
- **成績評価**: 回答に基づいた自動的なスコア計算
- **レベル判定**: 成績に応じた難易度レベルの表示
- **履歴管理**: 過去の試験結果の保存と表示
- **レスポンシブデザイン**: モバイル・タブレット・PC対応

## 必要な環境

- Node.js 18.x以上
- npm または yarn

## インストール

```bash
# リポジトリをクローン
git clone <repository-url>

# プロジェクトディレクトリに移動
cd js-exam-next

# 依存関係をインストール
npm install
```

## セットアップ

### Supabase設定

このアプリケーションはSupabaseをバックエンドとして使用しています。

1. [Supabase](https://supabase.com)でプロジェクトを作成
2. プロジェクトのURLとAPIキーを取得
3. `lib/supabaseClient.ts`でSupabaseクライアントを設定

## 使用方法

### 開発モード

```bash
npm run dev
```

ブラウザで `http://localhost:3000` を開いて、アプリケーションにアクセスできます。

### ビルド

```bash
npm run build
```

### 本番環境で実行

```bash
npm start
```

## プロジェクト構成

```
src/
├── components/          # Reactコンポーネント
│   ├── AuthForm.jsx     # 認証フォーム
│   ├── Header.jsx       # ヘッダー
│   ├── Footer.tsx       # フッター
│   ├── LevelSelect.jsx  # レベル選択
│   ├── QuestionView.jsx # 問題表示
│   ├── ResultView.jsx   # 結果表示
│   └── levelLabel.ts    # レベル表示ラベル
├── hooks/               # カスタムフック
│   └── useExam.js       # 試験ロジック
├── lib/                 # ライブラリ・ユーティリティ
│   ├── supabaseClient.ts # Supabaseクライアント
│   └── saveExamResult.ts # 結果保存
└── utils/               # ユーティリティ関数
    ├── questions.js     # 問題データ
    ├── shuffle.js       # シャッフル処理
    ├── formatQuestionText.js # テキストフォーマット
    └── linkify.jsx      # リンク処理
app/
├── page.tsx             # トップページ
├── layout.tsx           # レイアウト
├── globals.css          # グローバルスタイル
└── history/
    └── page.tsx         # 履歴ページ
```

## 使用技術

- **フレームワーク**: Next.js 16.x
- **フロントエンド**: React 19.x、TypeScript
- **スタイリング**: Tailwind CSS 4.x
- **バックエンド**: Supabase
- **アイコン**: Lucide React
- **リンター**: ESLint

## スクリプト

| コマンド | 説明 |
|---------|------|
| `npm run dev` | 開発サーバーを起動 |
| `npm run build` | 本番用ビルド |
| `npm start` | 本番サーバーを起動 |
| `npm run lint` | ESLintでコード検査 |
