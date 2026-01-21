# JavaScript 試験アプリケーション

JavaScript の知識を測定するためのインタラクティブな試験アプリケーションです。初級、中級、上級の3つのレベルで構成された複数の問題に挑戦できます。

##  主な機能

- **3段階の難度レベル**
  - 初級（40問）
  - 中級（問題数）
  - 上級（問題数）

- **ユーザー認証**
  - Supabase を使用したセキュアなユーザー登録・ログイン機能
  - ユーザー名とパスワードでアカウント管理

- **試験実施**
  - ランダムに問題をシャッフル
  - 単一選択肢式の問題形式
  - 問題ごとに解説と参考リンク提供
  - リアルタイムのスコア表示

- **結果管理**
  - 試験結果を Supabase に保存
  - 試験履歴を表示

- **レスポンシブデザイン**
  - Tailwind CSS を使用した現代的なUI
  - モバイル・タブレット・デスクトップ対応

##  技術スタック

### フロントエンド

- **Next.js 16.1.2** - React フレームワーク
- **React 19.2.3** - UI ライブラリ
- **TypeScript** - 型安全性
- **Tailwind CSS 4** - ユーティリティ型CSSフレームワーク

### バックエンド・ストレージ

- **Supabase 2.90.1** - 認証とデータベース

### UI コンポーネント

- **Lucide React** - アイコンライブラリ

### 開発ツール

- **ESLint** - コード品質チェック
- **Node.js 20+**

##  プロジェクト構成

```
js-exam-next/
├── app/                      # Next.js App Router
│   ├── page.tsx             # メインページ
│   ├── layout.tsx           # ルートレイアウト
│   ├── globals.css          # グローバルスタイル
│   └── history/             # 試験履歴ページ
│
├── src/
│   ├── components/          # React コンポーネント
│   │   ├── AuthForm.jsx     # ログイン/登録フォーム
│   │   ├── Header.jsx       # ヘッダー
│   │   ├── Footer.tsx       # フッター
│   │   ├── LevelSelect.jsx  # 難度選択画面
│   │   ├── QuestionView.jsx # 問題表示
│   │   └── ResultView.jsx   # 結果表示
│   │
│   ├── hooks/               # カスタムフック
│   │   └── useExam.js       # 試験ロジック
│   │
│   ├── lib/                 # ユーティリティ関数
│   │   ├── supabaseClient.ts # Supabase クライアント設定
│   │   └── saveExamResult.ts # 結果保存関数
│   │
│   └── utils/               # ヘルパー関数
│       ├── questions.js     # 試験問題データ
│       ├── shuffle.js       # 配列シャッフル関数
│       ├── formatQuestionText.js # テキストフォーマット
│       └── linkify.jsx      # リンク変換
│
├── public/                  # 静的ファイル
├── .env.local              # 環境変数（ローカル）
├── package.json            # 依存パッケージ
├── tsconfig.json           # TypeScript 設定
├── next.config.ts          # Next.js 設定
└── tailwind.config.js      # Tailwind CSS 設定
```

##  セットアップ手順

### 前提条件

- Node.js 18.0 以上
- npm または yarn

### インストール

1. **リポジトリをクローン**

```bash
git clone <repository-url>
cd js-exam-next
```

2. **依存パッケージをインストール**

```bash
npm install
```

3. **環境変数を設定**
   `.env.local` ファイルを作成し、Supabase の認証情報を設定します：

```env
NEXT_PUBLIC_SUPABASE_URL=your_supabase_url
NEXT_PUBLIC_SUPABASE_ANON_KEY=your_supabase_anon_key
```

4. **開発サーバーを起動**

```bash
npm run dev
```

ブラウザで [http://localhost:3000](http://localhost:3000) を開きます。

##  使用方法

1. **アカウント作成またはログイン**
   - 「ログイン」ボタンをクリック
   - 新規登録またはログイン
   - ユーザー名（6文字以上の英数字）とパスワード（6文字以上）を入力

2. **難度を選択**
   - 初級、中級、上級のいずれかを選択

3. **問題に回答**
   - 各問題の選択肢から正解を選択
   - 解説を読んで学習
   - 次の問題へ進む

4. **結果確認**
   - 全問題終了後にスコアと結果詳細を表示
   - 試験履歴ページで過去の試験結果を確認

##  UI コンポーネント

### AuthForm

ユーザーのログインと新規登録を管理します。

- バリデーション機能
- エラーメッセージ表示

### QuestionView

試験問題を表示します。

- 問題テキスト
- 複数選択肢
- 解説と参考リンク

### ResultView

試験結果を表示します。

- スコア
- 正答率
- 問題ごとの結果

### LevelSelect

難度を選択する画面です。

## 🔧 利用可能なスクリプト

### 開発モード

```bash
npm run dev
```

ホットリロード有効で開発サーバーを起動します。

### ビルド

```bash
npm run build
```

##  データベーススキーマ

Supabase では以下のテーブルを使用：

### users テーブル

```sql
- id: UUID (主キー)
- username: text (ユニーク)
- created_at: timestamp
```

### exam_results テーブル

```sql
- id: UUID (主キー)
- user_id: UUID (外部キー)
- level: text (beginner/intermediate/advanced)
- score: integer
- total: integer
- answers: jsonb (各問題の解答)
- created_at: timestamp
```

##  セキュリティ

- Supabase の認証機能を使用
- パスワードは6文字以上の要件
- ユーザー名は英数字6文字以上
