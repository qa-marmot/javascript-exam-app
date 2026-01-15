// 初級問題 (40問)
export const beginnerQuestions = [
  {
    id: 1,
    category: 'JavaScript初級',
    question: 'JavaScriptで変数を宣言するキーワードとして正しいものはどれですか？',
    options: ['let', 'define', 'int', 'letvar'],
    correct: 0,
    explanation: 'JavaScriptでは var / let / const を使って変数を宣言します。var は関数スコープを持ちます。https://developer.mozilla.org/ja/docs/Web/JavaScript/Guide/Grammar_and_types'
  },
  {
    id: 2,
    category: 'JavaScript初級',
    question: '定数を宣言するためのキーワードはどれですか？',
    options: ['let', 'static', 'const', 'final'],
    correct: 2,
    explanation: 'const は再代入できない変数（定数）を宣言します。https://developer.mozilla.org/ja/docs/Web/JavaScript/Reference/Statements/const'
  },
  {
    id: 3,
    category: 'JavaScript初級',
    question: '文字列を表す正しいリテラルはどれですか？',
    options: ['hello', '"hello"', 'String hello', '<hello>'],
    correct: 1,
    explanation: 'JavaScriptの文字列はシングルクォートまたはダブルクォートで囲みます。https://developer.mozilla.org/ja/docs/Web/JavaScript/Reference/Global_Objects/String'
  },
  {
    id: 4,
    category: 'JavaScript初級',
    question: '数値型を表すデータ型はどれですか？',
    options: ['Number', 'Integer', 'Float', 'Numeric'],
    correct: 0,
    explanation: 'JavaScriptでは数値はすべて Number 型で扱われます。https://developer.mozilla.org/ja/docs/Web/JavaScript/Reference/Global_Objects/Number'
  },
  {
    id: 5,
    category: 'JavaScript初級',
    question: '配列を作成する正しい方法はどれですか？',
    options: ['{}', '()', '[]', '<>'],
    correct: 2,
    explanation: '配列は [] を使って作成します。https://developer.mozilla.org/ja/docs/Web/JavaScript/Reference/Global_Objects/Array'
  },
  {
    id: 6,
    category: 'JavaScript初級',
    question: 'オブジェクトを作成する正しい方法はどれですか？',
    options: ['[]', '{}', '()', 'object()'],
    correct: 1,
    explanation: 'オブジェクトは {} を使って作成します。https://developer.mozilla.org/ja/docs/Web/JavaScript/Reference/Global_Objects/Object'
  },
  {
    id: 7,
    category: 'JavaScript初級',
    question: 'JavaScriptのコメントとして正しいものはどれですか？',
    options: ['<!-- comment -->', '// comment', '# comment', '<comment>'],
    correct: 1,
    explanation: '単一行コメントは // を使用します。https://developer.mozilla.org/ja/docs/Web/JavaScript/Guide/Grammar_and_types#comments'
  },
  {
    id: 8,
    category: 'JavaScript初級',
    question: '複数行コメントとして正しいものはどれですか？',
    options: ['// comment', '<!-- -->', '/* comment */', '# comment'],
    correct: 2,
    explanation: '複数行コメントは /* */ を使用します。https://developer.mozilla.org/ja/docs/Web/JavaScript/Guide/Grammar_and_types#comments'
  },
  {
    id: 9,
    category: 'JavaScript初級',
    question: 'コンソールに出力する正しいコードはどれですか？',
    options: ['print()', 'echo()', 'console.log()', 'log.console()'],
    correct: 2,
    explanation: 'console.log() はデバッグ出力に使われます。https://developer.mozilla.org/ja/docs/Web/API/console/log'
  },
  {
    id: 10,
    category: 'JavaScript初級',
    question: '条件分岐に使用する文はどれですか？',
    options: ['for', 'switch', 'if', 'while'],
    correct: 2,
    explanation: 'if 文は条件に応じて処理を分岐します。https://developer.mozilla.org/ja/docs/Web/JavaScript/Reference/Statements/if...else'
  },
  {
    id: 11,
    category: 'JavaScript初級',
    question: '等価演算子として正しいものはどれですか？',
    options: ['=', '==', '=>', '!='],
    correct: 1,
    explanation: '== は値の等価比較を行います。https://developer.mozilla.org/ja/docs/Web/JavaScript/Reference/Operators/Equality'
  },
  {
    id: 12,
    category: 'JavaScript初級',
    question: '厳密等価演算子はどれですか？',
    options: ['==', '=', '===', '!=='],
    correct: 2,
    explanation: '=== は値と型の両方を比較します。https://developer.mozilla.org/ja/docs/Web/JavaScript/Reference/Operators/Strict_equality'
  },
  {
    id: 13,
    category: 'JavaScript初級',
    question: 'ループの開始キーワードはどれですか？',
    options: ['loop', 'for', 'while', 'repeat'],
    correct: 1,
    explanation: 'for 文は繰り返し処理に使用されます。https://developer.mozilla.org/ja/docs/Web/JavaScript/Reference/Statements/for'
  },
  {
    id: 14,
    category: 'JavaScript初級',
    question: '関数を定義するキーワードはどれですか？',
    options: ['func', 'function', 'def', 'method'],
    correct: 1,
    explanation: 'function キーワードで関数を定義します。https://developer.mozilla.org/ja/docs/Web/JavaScript/Guide/Functions'
  },
  {
    id: 15,
    category: 'JavaScript初級',
    question: '関数の戻り値を指定するキーワードはどれですか？',
    options: ['break', 'return', 'yield', 'output'],
    correct: 1,
    explanation: 'return は関数の戻り値を指定します。https://developer.mozilla.org/ja/docs/Web/JavaScript/Reference/Statements/return'
  },
  {
    id: 16,
    category: 'JavaScript初級',
    question: '配列の長さを取得するプロパティはどれですか？',
    options: ['size', 'count', 'length', 'total'],
    correct: 2,
    explanation: 'length プロパティで配列の要素数を取得します。https://developer.mozilla.org/ja/docs/Web/JavaScript/Reference/Global_Objects/Array/length'
  },
  {
    id: 17,
    category: 'JavaScript初級',
    question: '文字列を数値に変換する関数はどれですか？',
    options: ['Number()', 'String()', 'parseString()', 'toText()'],
    correct: 0,
    explanation: 'Number() は値を数値型に変換します。https://developer.mozilla.org/ja/docs/Web/JavaScript/Reference/Global_Objects/Number'
  },
  {
    id: 18,
    category: 'JavaScript初級',
    question: '未定義の値を表すものはどれですか？',
    options: ['null', 'false', 'undefined', '0'],
    correct: 2,
    explanation: 'undefined は値が未定義であることを表します。https://developer.mozilla.org/ja/docs/Web/JavaScript/Reference/Global_Objects/undefined'
  },
  {
    id: 19,
    category: 'JavaScript初級',
    question: '論理AND演算子はどれですか？',
    options: ['||', '&&', '!', '&'],
    correct: 1,
    explanation: '&& は論理AND演算子です。https://developer.mozilla.org/ja/docs/Web/JavaScript/Reference/Operators/Logical_AND'
  },
  {
    id: 20,
    category: 'JavaScript初級',
    question: '真偽値型として正しいものはどれですか？',
    options: ['Boolean', 'Bool', 'TrueFalse', 'Logic'],
    correct: 0,
    explanation: '真偽値は Boolean 型です。https://developer.mozilla.org/ja/docs/Web/JavaScript/Reference/Global_Objects/Boolean'
  },

  {
    id: 21,
    category: 'JavaScript初級',
    question: '配列に要素を追加するメソッドはどれですか？',
    options: ['add()', 'push()', 'insert()', 'append()'],
    correct: 1,
    explanation: 'push() は配列の末尾に要素を追加します。https://developer.mozilla.org/ja/docs/Web/JavaScript/Reference/Global_Objects/Array/push'
  },
  {
    id: 22,
    category: 'JavaScript初級',
    question: '文字列の長さを取得するプロパティはどれですか？',
    options: ['size', 'count', 'length', 'len'],
    correct: 2,
    explanation: '文字列の長さは length プロパティで取得します。https://developer.mozilla.org/ja/docs/Web/JavaScript/Reference/Global_Objects/String/length'
  },
  {
    id: 23,
    category: 'JavaScript初級',
    question: 'while 文の特徴として正しいものはどれですか？',
    options: ['必ず1回実行される', '条件がtrueの間繰り返す', '回数固定', '配列専用'],
    correct: 1,
    explanation: 'while 文は条件が true の間、処理を繰り返します。https://developer.mozilla.org/ja/docs/Web/JavaScript/Reference/Statements/while'
  },
  {
    id: 24,
    category: 'JavaScript初級',
    question: 'switch 文で比較に使われるのはどれですか？',
    options: ['==', '===', '=', '!='],
    correct: 1,
    explanation: 'switch 文では厳密等価（===）で比較されます。https://developer.mozilla.org/ja/docs/Web/JavaScript/Reference/Statements/switch'
  },
  {
    id: 25,
    category: 'JavaScript初級',
    question: '配列の最初の要素のインデックスはどれですか？',
    options: ['1', '-1', '0', 'null'],
    correct: 2,
    explanation: 'JavaScriptの配列は0から始まるインデックスを持ちます。https://developer.mozilla.org/ja/docs/Web/JavaScript/Reference/Global_Objects/Array'
  },
  {
    id: 26,
    category: 'JavaScript初級',
    question: '関数を呼び出す正しい書き方はどれですか？(funcは関数名)',
    options: ['func', 'call func', 'func()', 'run func'],
    correct: 2,
    explanation: '関数名の後に () を付けて呼び出します。https://developer.mozilla.org/ja/docs/Web/JavaScript/Guide/Functions'
  },
  {
    id: 27,
    category: 'JavaScript初級',
    question: 'NaN が表す意味はどれですか？',
    options: ['空文字', '0', '数値ではない', 'null'],
    correct: 2,
    explanation: 'NaN は Not-a-Number を意味します。https://developer.mozilla.org/ja/docs/Web/JavaScript/Reference/Global_Objects/NaN'
  },
  {
    id: 28,
    category: 'JavaScript初級',
    question: 'typeof 演算子の役割はどれですか？',
    options: ['型を変換する', '値を比較する', 'データ型を調べる', '変数を削除する'],
    correct: 2,
    explanation: 'typeof は値のデータ型を返します。https://developer.mozilla.org/ja/docs/Web/JavaScript/Reference/Operators/typeof'
  },
  {
    id: 29,
    category: 'JavaScript初級',
    question: '配列かどうかを判定する正しい方法はどれですか？',
    options: ['typeof', 'instanceof Array', 'isArray()', 'Array.isArray()'],
    correct: 3,
    explanation: 'Array.isArray() は配列判定に使用されます。https://developer.mozilla.org/ja/docs/Web/JavaScript/Reference/Global_Objects/Array/isArray'
  },
  {
    id: 30,
    category: 'JavaScript初級',
    question: 'null の説明として正しいものはどれですか？',
    options: ['未定義', '存在しない値を意図的に示す', '0と同じ', '空文字'],
    correct: 1,
    explanation: 'null は「値が存在しない」ことを意図的に示します。https://developer.mozilla.org/ja/docs/Web/JavaScript/Reference/Global_Objects/null'
  },
  {
    id: 31,
    category: 'JavaScript初級',
    question: '論理OR演算子はどれですか？',
    options: ['&&', '||', '!', '&'],
    correct: 1,
    explanation: '|| は論理OR演算子です。https://developer.mozilla.org/ja/docs/Web/JavaScript/Reference/Operators/Logical_OR'
  },
  {
    id: 32,
    category: 'JavaScript初級',
    question: 'break 文の役割はどれですか？',
    options: ['関数を終了する', 'ループを終了する', '処理を続ける', '条件を判定する'],
    correct: 1,
    explanation: 'break はループや switch 文を終了します。https://developer.mozilla.org/ja/docs/Web/JavaScript/Reference/Statements/break'
  },
  {
    id: 33,
    category: 'JavaScript初級',
    question: 'true を表す真偽値はどれですか？',
    options: ['1', '"true"', 'true', 'yes'],
    correct: 2,
    explanation: 'true は Boolean 型の真を表します。https://developer.mozilla.org/ja/docs/Web/JavaScript/Reference/Global_Objects/Boolean'
  },
  {
    id: 34,
    category: 'JavaScript初級',
    question: 'false と評価される値はどれですか？',
    options: ['"0"', '1', '[]', '0'],
    correct: 3,
    explanation: '0 は falsy な値です。https://developer.mozilla.org/ja/docs/Glossary/Falsy'
  },
  {
    id: 35,
    category: 'JavaScript初級',
    question: '配列から最後の要素を削除するメソッドはどれですか？',
    options: ['shift()', 'remove()', 'pop()', 'delete()'],
    correct: 2,
    explanation: 'pop() は配列の最後の要素を削除します。https://developer.mozilla.org/ja/docs/Web/JavaScript/Reference/Global_Objects/Array/pop'
  },
  {
    id: 36,
    category: 'JavaScript初級',
    question: '関数に値を渡すものを何と呼びますか？',
    options: ['引数', '戻り値', '変数', '定数'],
    correct: 0,
    explanation: '関数に渡す値は引数（arguments）と呼ばれます。https://developer.mozilla.org/ja/docs/Web/JavaScript/Guide/Functions'
  },
  {
    id: 37,
    category: 'JavaScript初級',
    question: 'do...while 文の特徴はどれですか？',
    options: ['必ず0回実行', '条件前に実行', '配列専用', '無限ループ専用'],
    correct: 1,
    explanation: 'do...while は最低1回は処理が実行されます。https://developer.mozilla.org/ja/docs/Web/JavaScript/Reference/Statements/do...while'
  },
  {
    id: 38,
    category: 'JavaScript初級',
    question: 'オブジェクトのプロパティにアクセスする正しい方法はどれですか？',
    options: ['obj->key', 'obj[key]', 'obj::key', 'obj=>key'],
    correct: 1,
    explanation: 'ブラケット記法でプロパティにアクセスできます。https://developer.mozilla.org/ja/docs/Web/JavaScript/Reference/Operators/Property_accessors'
  },
  {
    id: 39,
    category: 'JavaScript初級',
    question: 'strict モードを有効にする宣言はどれですか？',
    options: ['use strict;', '"use strict";', 'strict();', '#strict'],
    correct: 1,
    explanation: '"use strict"; により strict モードが有効になります。https://developer.mozilla.org/ja/docs/Web/JavaScript/Reference/Strict_mode'
  },
  {
    id: 40,
    category: 'JavaScript初級',
    question: 'JavaScriptが主に実行される場所として正しいものはどれですか？',
    options: ['サーバーのみ', 'ブラウザ', 'データベース', 'OSカーネル'],
    correct: 1,
    explanation: 'JavaScriptは主にWebブラウザ上で実行されます。https://developer.mozilla.org/ja/docs/Web/JavaScript'
  }
]


// 中級問題 (40問)
export const intermediateQuestions = [
  {
    id: 41,
    category: 'JavaScript中級',
    question: 'let で宣言された変数のスコープはどれですか？',
    options: ['グローバルスコープのみ', '関数スコープ', 'ブロックスコープ', 'モジュールスコープのみ'],
    correct: 2,
    explanation: 'let はブロックスコープを持ちます。https://developer.mozilla.org/ja/docs/Web/JavaScript/Reference/Statements/let'
  },
  {
    id: 42,
    category: 'JavaScript中級',
    question: 'const で宣言されたオブジェクトについて正しい説明はどれですか？',
    options: [
      'プロパティの変更もできない',
      '再代入はできないがプロパティ変更は可能',
      '完全に不変になる',
      '関数内でのみ使用できる'
    ],
    correct: 1,
    explanation: 'const は再代入不可ですが、オブジェクトの中身は変更できます。https://developer.mozilla.org/ja/docs/Web/JavaScript/Reference/Statements/const'
  },
  {
    id: 43,
    category: 'JavaScript中級',
    question: 'アロー関数の特徴として正しいものはどれですか？',
    options: [
      'arguments オブジェクトを持つ',
      '独自の this を持つ',
      'this はレキシカルに決定される',
      'new で必ず呼び出す'
    ],
    correct: 2,
    explanation: 'アロー関数は独自の this を持たず、外側の this を継承します。https://developer.mozilla.org/ja/docs/Web/JavaScript/Reference/Functions/Arrow_functions'
  },
  {
    id: 44,
    category: 'JavaScript中級',
    question: '次のうち関数式はどれですか？',
    options: [
      'function foo() {}',
      'const foo = function() {}',
      'if () {}',
      'for () {}'
    ],
    correct: 1,
    explanation: '関数式は変数に関数を代入する形式です。https://developer.mozilla.org/ja/docs/Web/JavaScript/Guide/Functions'
  },
  {
    id: 45,
    category: 'JavaScript中級',
    question: 'デフォルト引数を定義する正しい書き方はどれですか？',
    options: [
      'function f(a = 1) {}',
      'function f(a := 1) {}',
      'function f(a == 1) {}',
      'function f(default a) {}'
    ],
    correct: 0,
    explanation: '引数に = を使ってデフォルト値を設定します。https://developer.mozilla.org/ja/docs/Web/JavaScript/Reference/Functions/Default_parameters'
  },
  {
    id: 46,
    category: 'JavaScript中級',
    question: 'スプレッド構文の記号はどれですか？',
    options: ['...', '=>', '**', '??'],
    correct: 0,
    explanation: 'スプレッド構文は ... を使用します。https://developer.mozilla.org/ja/docs/Web/JavaScript/Reference/Operators/Spread_syntax'
  },
  {
    id: 47,
    category: 'JavaScript中級',
    question: '配列の各要素を変換して新しい配列を返すメソッドはどれですか？',
    options: ['forEach()', 'map()', 'filter()', 'reduce()'],
    correct: 1,
    explanation: 'map() は各要素を変換した新しい配列を返します。https://developer.mozilla.org/ja/docs/Web/JavaScript/Reference/Global_Objects/Array/map'
  },
  {
    id: 48,
    category: 'JavaScript中級',
    question: '条件に合致する要素のみを抽出する配列メソッドはどれですか？',
    options: ['map()', 'reduce()', 'filter()', 'some()'],
    correct: 2,
    explanation: 'filter() は条件に一致する要素だけを返します。https://developer.mozilla.org/ja/docs/Web/JavaScript/Reference/Global_Objects/Array/filter'
  },
  {
    id: 49,
    category: 'JavaScript中級',
    question: '配列を1つの値にまとめるメソッドはどれですか？',
    options: ['map()', 'filter()', 'reduce()', 'every()'],
    correct: 2,
    explanation: 'reduce() は配列を単一の値に集約します。https://developer.mozilla.org/ja/docs/Web/JavaScript/Reference/Global_Objects/Array/reduce'
  },
  {
    id: 50,
    category: 'JavaScript中級',
    question: 'truthy な値はどれですか？',
    options: ['0', '""', 'null', '[]'],
    correct: 3,
    explanation: '空配列 [] は truthy な値です。https://developer.mozilla.org/ja/docs/Glossary/Truthy'
  },
  {
    id: 51,
    category: 'JavaScript中級',
    question: 'falsy な値はどれですか？',
    options: ['"false"', '[]', '{}', 'null'],
    correct: 3,
    explanation: 'null は falsy な値です。https://developer.mozilla.org/ja/docs/Glossary/Falsy'
  },
  {
    id: 52,
    category: 'JavaScript中級',
    question: 'オブジェクトのキーと値を配列として取得するメソッドはどれですか？',
    options: ['Object.keys()', 'Object.values()', 'Object.entries()', 'Object.get()'],
    correct: 2,
    explanation: 'Object.entries() は [key, value] の配列を返します。https://developer.mozilla.org/ja/docs/Web/JavaScript/Reference/Global_Objects/Object/entries'
  },
  {
    id: 53,
    category: 'JavaScript中級',
    question: 'プロパティの存在を判定する演算子はどれですか？',
    options: ['exists', 'has', 'in', 'of'],
    correct: 2,
    explanation: 'in 演算子でプロパティの存在を判定できます。https://developer.mozilla.org/ja/docs/Web/JavaScript/Reference/Operators/in'
  },
  {
    id: 54,
    category: 'JavaScript中級',
    question: '分割代入の正しい書き方はどれですか？',
    options: [
      'const a = arr[0]',
      'const [a] = arr',
      'const {a} = arr',
      'const a <- arr'
    ],
    correct: 1,
    explanation: '配列は [] を使って分割代入します。https://developer.mozilla.org/ja/docs/Web/JavaScript/Reference/Operators/Destructuring_assignment'
  },
  {
    id: 55,
    category: 'JavaScript中級',
    question: 'オブジェクトの分割代入として正しいものはどれですか？',
    options: [
      'const [a] = obj',
      'const {a} = obj',
      'const a = obj[]',
      'const a <= obj'
    ],
    correct: 1,
    explanation: 'オブジェクトの分割代入は {} を使用します。https://developer.mozilla.org/ja/docs/Web/JavaScript/Reference/Operators/Destructuring_assignment'
  },
  {
    id: 56,
    category: 'JavaScript中級',
    question: 'オプショナルチェイニングの演算子はどれですか？',
    options: ['?.', '??', '::', '=>'],
    correct: 0,
    explanation: '?. は安全にプロパティへアクセスする演算子です。https://developer.mozilla.org/ja/docs/Web/JavaScript/Reference/Operators/Optional_chaining'
  },
  {
    id: 57,
    category: 'JavaScript中級',
    question: 'Null 合体演算子はどれですか？',
    options: ['||', '&&', '??', '?.'],
    correct: 2,
    explanation: '?? は null または undefined の場合のみ右辺を返します。https://developer.mozilla.org/ja/docs/Web/JavaScript/Reference/Operators/Nullish_coalescing'
  },
  {
    id: 58,
    category: 'JavaScript中級',
    question: 'strict モードの主な目的はどれですか？',
    options: [
      'コードを高速化する',
      '古い構文を有効化する',
      'エラーを厳密に検出する',
      '非同期処理を簡単にする'
    ],
    correct: 2,
    explanation: 'strict モードはエラーを厳密に検出します。https://developer.mozilla.org/ja/docs/Web/JavaScript/Reference/Strict_mode'
  },
  {
    id: 59,
    category: 'JavaScript中級',
    question: '即時実行関数（IIFE）の正しい例はどれですか？',
    options: [
      'function() {}',
      '(function() {})()',
      'function run() {}()',
      'run(function() {})'
    ],
    correct: 1,
    explanation: 'IIFE は定義直後に実行される関数です。https://developer.mozilla.org/ja/docs/Glossary/IIFE'
  },
  {
    id: 60,
    category: 'JavaScript中級',
    question: 'this の値を明示的に指定して関数を呼び出すメソッドはどれですか？',
    options: ['bind()', 'apply()', 'call()', 'invoke()'],
    correct: 2,
    explanation: 'call() は this を指定して即時実行します。https://developer.mozilla.org/ja/docs/Web/JavaScript/Reference/Global_Objects/Function/call'
  },
  {
    id: 61,
    category: 'JavaScript中級',
    question: 'bind() メソッドの特徴として正しいものはどれですか？',
    options: [
      '即時実行される',
      '新しい関数を返す',
      'this を変更できない',
      '非同期専用'
    ],
    correct: 1,
    explanation: 'bind() は this を束縛した新しい関数を返します。https://developer.mozilla.org/ja/docs/Web/JavaScript/Reference/Global_Objects/Function/bind'
  },
  {
    id: 62,
    category: 'JavaScript中級',
    question: 'apply() と call() の主な違いはどれですか？',
    options: [
      '戻り値',
      'this の指定方法',
      '引数の渡し方',
      '非同期処理'
    ],
    correct: 2,
    explanation: 'apply() は引数を配列で渡します。https://developer.mozilla.org/ja/docs/Web/JavaScript/Reference/Global_Objects/Function/apply'
  },
  {
    id: 63,
    category: 'JavaScript中級',
    question: 'for...of 文で反復できるものはどれですか？',
    options: ['オブジェクト', '配列', '関数', '数値'],
    correct: 1,
    explanation: 'for...of は iterable なオブジェクトを反復します。https://developer.mozilla.org/ja/docs/Web/JavaScript/Reference/Statements/for...of'
  },
  {
    id: 64,
    category: 'JavaScript中級',
    question: 'for...in 文の対象はどれですか？',
    options: ['値', 'インデックス', 'キー', '型'],
    correct: 2,
    explanation: 'for...in はオブジェクトのキーを列挙します。https://developer.mozilla.org/ja/docs/Web/JavaScript/Reference/Statements/for...in'
  },
  {
    id: 65,
    category: 'JavaScript中級',
    question: '配列のコピーを作成する正しい方法はどれですか？',
    options: ['arr = other', '[...arr]', 'copy(arr)', 'clone(arr)'],
    correct: 1,
    explanation: 'スプレッド構文で配列をコピーできます。https://developer.mozilla.org/ja/docs/Web/JavaScript/Reference/Operators/Spread_syntax'
  },
  {
    id: 66,
    category: 'JavaScript中級',
    question: 'Object.assign() の主な用途はどれですか？',
    options: [
      '配列結合',
      'オブジェクトのコピー・マージ',
      '関数定義',
      'プロトタイプ作成'
    ],
    correct: 1,
    explanation: 'Object.assign() はオブジェクトをコピーまたはマージします。https://developer.mozilla.org/ja/docs/Web/JavaScript/Reference/Global_Objects/Object/assign'
  },
  {
    id: 67,
    category: 'JavaScript中級',
    question: '浅いコピーの説明として正しいものはどれですか？',
    options: [
      '完全に独立したコピー',
      '参照を共有する',
      'JSON 専用',
      '再帰的にコピーする'
    ],
    correct: 1,
    explanation: '浅いコピーはネストしたオブジェクトの参照を共有します。https://developer.mozilla.org/ja/docs/Glossary/Shallow_copy'
  },
  {
    id: 68,
    category: 'JavaScript中級',
    question: 'JSON.stringify() の役割はどれですか？',
    options: [
      'JSON を解析する',
      'オブジェクトを JSON 文字列に変換する',
      'JSON を検証する',
      'JSON を圧縮する'
    ],
    correct: 1,
    explanation: 'JSON.stringify() はオブジェクトを JSON 文字列に変換します。https://developer.mozilla.org/ja/docs/Web/JavaScript/Reference/Global_Objects/JSON/stringify'
  },
  {
    id: 69,
    category: 'JavaScript中級',
    question: 'JSON.parse() の役割はどれですか？',
    options: [
      'JSON を文字列化する',
      'JSON を圧縮する',
      'JSON 文字列をオブジェクトに変換する',
      'JSON を検証する'
    ],
    correct: 2,
    explanation: 'JSON.parse() は JSON 文字列をオブジェクトに変換します。https://developer.mozilla.org/ja/docs/Web/JavaScript/Reference/Global_Objects/JSON/parse'
  },
  {
    id: 70,
    category: 'JavaScript中級',
    question: '例外処理に使用する構文はどれですか？',
    options: ['if...else', 'switch', 'try...catch', 'throwError'],
    correct: 2,
    explanation: 'try...catch で例外処理を行います。https://developer.mozilla.org/ja/docs/Web/JavaScript/Guide/Control_flow_and_error_handling'
  },
  {
    id: 71,
    category: 'JavaScript中級',
    question: 'エラーを意図的に発生させるキーワードはどれですか？',
    options: ['error', 'throw', 'catch', 'raise'],
    correct: 1,
    explanation: 'throw は例外を発生させます。https://developer.mozilla.org/ja/docs/Web/JavaScript/Reference/Statements/throw'
  },
  {
    id: 72,
    category: 'JavaScript中級',
    question: '関数の引数を配列として受け取る構文はどれですか？',
    options: ['spread', 'rest', 'arguments', 'collect'],
    correct: 1,
    explanation: '残余引数（rest parameters）は ... を使います。https://developer.mozilla.org/ja/docs/Web/JavaScript/Reference/Functions/rest_parameters'
  },
  {
    id: 73,
    category: 'JavaScript中級',
    question: 'arguments オブジェクトについて正しいものはどれですか？',
    options: [
      '配列である',
      'アロー関数でも使える',
      '配列風オブジェクトである',
      '非推奨である'
    ],
    correct: 2,
    explanation: 'arguments は配列ではなく配列風オブジェクトです。https://developer.mozilla.org/ja/docs/Web/JavaScript/Reference/Functions/arguments'
  },
  {
    id: 74,
    category: 'JavaScript中級',
    question: 'Math.random() が返す値の範囲はどれですか？',
    options: [
      '0〜1（1含む）',
      '0〜1（1含まない）',
      '1〜10',
      '-1〜1'
    ],
    correct: 1,
    explanation: 'Math.random() は 0 以上 1 未満の値を返します。https://developer.mozilla.org/ja/docs/Web/JavaScript/Reference/Global_Objects/Math/random'
  },
  {
    id: 75,
    category: 'JavaScript中級',
    question: 'Date オブジェクトを生成する正しい方法はどれですか？',
    options: ['Date()', 'new Date()', 'create Date()', 'Date.now()'],
    correct: 1,
    explanation: 'new Date() で Date オブジェクトを生成します。https://developer.mozilla.org/ja/docs/Web/JavaScript/Reference/Global_Objects/Date'
  },
  {
    id: 76,
    category: 'JavaScript中級',
    question: '非同期処理を行う代表的な Web API はどれですか？',
    options: ['setTimeout()', 'console.log()', 'parseInt()', 'Math.max()'],
    correct: 0,
    explanation: 'setTimeout() は非同期で処理を遅延実行します。https://developer.mozilla.org/ja/docs/Web/API/setTimeout'
  },
  {
    id: 77,
    category: 'JavaScript中級',
    question: 'コールバック関数の説明として正しいものはどれですか？',
    options: [
      '自動実行される関数',
      '引数として渡される関数',
      '戻り値専用の関数',
      '非同期専用の関数'
    ],
    correct: 1,
    explanation: 'コールバック関数は他の関数に引数として渡されます。https://developer.mozilla.org/ja/docs/Glossary/Callback_function'
  },
  {
    id: 78,
    category: 'JavaScript中級',
    question: '配列のすべての要素が条件を満たすか判定するメソッドはどれですか？',
    options: ['some()', 'every()', 'filter()', 'includes()'],
    correct: 1,
    explanation: 'every() は全要素が条件を満たすか判定します。https://developer.mozilla.org/ja/docs/Web/JavaScript/Reference/Global_Objects/Array/every'
  },
  {
    id: 79,
    category: 'JavaScript中級',
    question: '指定した要素が配列に含まれているか確認するメソッドはどれですか？',
    options: ['has()', 'contains()', 'includes()', 'indexOfAll()'],
    correct: 2,
    explanation: 'includes() は要素の存在を判定します。https://developer.mozilla.org/ja/docs/Web/JavaScript/Reference/Global_Objects/Array/includes'
  },
  {
    id: 80,
    category: 'JavaScript中級',
    question: 'ES Modules でモジュールを読み込むキーワードはどれですか？',
    options: ['require', 'include', 'import', 'load'],
    correct: 2,
    explanation: 'ES Modules では import を使ってモジュールを読み込みます。https://developer.mozilla.org/ja/docs/Web/JavaScript/Guide/Modules'
  }
]


// 上級問題 (40問)
export const advancedQuestions = [
  {
    id: 81,
    category: 'JavaScript上級',
    question: 'クロージャの正しい説明はどれですか？',
    options: [
      '関数が即時実行される仕組み',
      '関数とその作成時のスコープの組み合わせ',
      '非同期処理の一種',
      'クラスの継承方法'
    ],
    correct: 1,
    explanation: 'クロージャは関数が作成された時点のスコープを保持する仕組みです。https://developer.mozilla.org/ja/docs/Web/JavaScript/Closures'
  },
  {
    id: 82,
    category: 'JavaScript上級',
    question: 'JavaScriptのプロトタイプの役割はどれですか？',
    options: [
      '非同期処理を管理する',
      '継承を実現する仕組み',
      '変数のスコープを制御する',
      'イベントを登録する'
    ],
    correct: 1,
    explanation: 'JavaScriptはプロトタイプチェーンにより継承を実現します。https://developer.mozilla.org/ja/docs/Web/JavaScript/Inheritance_and_the_prototype_chain'
  },
  {
    id: 83,
    category: 'JavaScript上級',
    question: 'Promiseの状態として正しいものはどれですか？',
    options: ['pending', 'running', 'completed', 'resolved'],
    correct: 0,
    explanation: 'Promiseの状態は pending / fulfilled / rejected の3つです。https://developer.mozilla.org/ja/docs/Web/JavaScript/Reference/Global_Objects/Promise'
  },
  {
    id: 84,
    category: 'JavaScript上級',
    question: 'Promiseチェーンで値を次に渡す方法はどれですか？',
    options: ['return', 'throw', 'resolve', 'await'],
    correct: 0,
    explanation: 'then() 内で return した値は次の then に渡されます。https://developer.mozilla.org/ja/docs/Web/JavaScript/Reference/Global_Objects/Promise/then'
  },
  {
    id: 85,
    category: 'JavaScript上級',
    question: 'Promiseでエラーを処理するメソッドはどれですか？',
    options: ['error()', 'fail()', 'catch()', 'reject()'],
    correct: 2,
    explanation: 'catch() は Promise チェーンのエラーを処理します。https://developer.mozilla.org/ja/docs/Web/JavaScript/Reference/Global_Objects/Promise/catch'
  },
  {
    id: 86,
    category: 'JavaScript上級',
    question: 'async 関数の戻り値は何になりますか？',
    options: ['通常の値', 'Promise', 'undefined', 'コールバック'],
    correct: 1,
    explanation: 'async 関数は常に Promise を返します。https://developer.mozilla.org/ja/docs/Web/JavaScript/Reference/Statements/async_function'
  },
  {
    id: 87,
    category: 'JavaScript上級',
    question: 'await が使用できる場所はどれですか？',
    options: [
      'どこでも使用可能',
      '通常の関数内',
      'async 関数内',
      'グローバル変数内'
    ],
    correct: 2,
    explanation: 'await は async 関数内でのみ使用できます。https://developer.mozilla.org/ja/docs/Web/JavaScript/Reference/Operators/await'
  },
  {
    id: 88,
    category: 'JavaScript上級',
    question: 'イベントループの役割として正しいものはどれですか？',
    options: [
      'DOMを操作する',
      '非同期処理の実行順を管理する',
      'メモリを解放する',
      '関数を定義する'
    ],
    correct: 1,
    explanation: 'イベントループはコールスタックとタスクキューを管理します。https://developer.mozilla.org/ja/docs/Web/JavaScript/EventLoop'
  },
  {
    id: 89,
    category: 'JavaScript上級',
    question: 'コールスタックの説明として正しいものはどれですか？',
    options: [
      '非同期処理専用のキュー',
      '実行中の関数を管理するスタック',
      'イベントを保存する配列',
      'Promise専用の領域'
    ],
    correct: 1,
    explanation: 'コールスタックは実行中の関数呼び出しを管理します。https://developer.mozilla.org/ja/docs/Glossary/Call_stack'
  },
  {
    id: 90,
    category: 'JavaScript上級',
    question: 'マイクロタスクに分類されるものはどれですか？',
    options: ['setTimeout', 'Promise.then', 'setInterval', 'DOMイベント'],
    correct: 1,
    explanation: 'Promise.then はマイクロタスクとして処理されます。https://developer.mozilla.org/ja/docs/Web/API/HTML_DOM_API/Microtask_guide'
  },
  {
    id: 91,
    category: 'JavaScript上級',
    question: 'ガベージコレクションの主な目的はどれですか？',
    options: [
      'コードを圧縮する',
      '未使用メモリを解放する',
      '処理速度を制御する',
      '非同期処理を管理する'
    ],
    correct: 1,
    explanation: 'ガベージコレクションは不要になったメモリを自動解放します。https://developer.mozilla.org/ja/docs/Web/JavaScript/Memory_management'
  },
  {
    id: 92,
    category: 'JavaScript上級',
    question: 'WeakMap の特徴として正しいものはどれですか？',
    options: [
      'キーにプリミティブ型を使える',
      'ガベージコレクションされない',
      'キーが弱参照である',
      'JSONに変換できる'
    ],
    correct: 2,
    explanation: 'WeakMap はキーを弱参照で保持します。https://developer.mozilla.org/ja/docs/Web/JavaScript/Reference/Global_Objects/WeakMap'
  },
  {
    id: 93,
    category: 'JavaScript上級',
    question: 'ジェネレーター関数を定義するキーワードはどれですか？',
    options: ['function*', 'generator', 'yield*', 'async*'],
    correct: 0,
    explanation: 'ジェネレーター関数は function* で定義します。https://developer.mozilla.org/ja/docs/Web/JavaScript/Reference/Statements/function*'
  },
  {
    id: 94,
    category: 'JavaScript上級',
    question: 'yield の役割はどれですか？',
    options: [
      '値を返して関数を終了する',
      '一時停止して値を返す',
      '例外を投げる',
      '非同期処理を開始する'
    ],
    correct: 1,
    explanation: 'yield はジェネレーターの実行を一時停止し値を返します。https://developer.mozilla.org/ja/docs/Web/JavaScript/Reference/Operators/yield'
  },
  {
    id: 95,
    category: 'JavaScript上級',
    question: 'Symbol の主な用途はどれですか？',
    options: [
      '数値演算',
      '一意な識別子の生成',
      '配列操作',
      '非同期制御'
    ],
    correct: 1,
    explanation: 'Symbol は一意で衝突しない識別子を作成します。https://developer.mozilla.org/ja/docs/Web/JavaScript/Reference/Global_Objects/Symbol'
  },
  {
    id: 96,
    category: 'JavaScript上級',
    question: 'Reflect API の目的として正しいものはどれですか？',
    options: [
      'DOM操作',
      '低レベルのオブジェクト操作',
      '非同期制御',
      'イベント管理'
    ],
    correct: 1,
    explanation: 'Reflect はオブジェクト操作のための低レベルAPIです。https://developer.mozilla.org/ja/docs/Web/JavaScript/Reference/Global_Objects/Reflect'
  },
  {
    id: 97,
    category: 'JavaScript上級',
    question: 'Proxy を使うことで可能になることはどれですか？',
    options: [
      '関数の高速化',
      'オブジェクト操作のフック',
      '非同期処理の簡略化',
      'メモリ管理'
    ],
    correct: 1,
    explanation: 'Proxy はオブジェクト操作を横取り（トラップ）できます。https://developer.mozilla.org/ja/docs/Web/JavaScript/Reference/Global_Objects/Proxy'
  },
  {
    id: 98,
    category: 'JavaScript上級',
    question: 'モジュールのスコープとして正しいものはどれですか？',
    options: ['グローバル', '関数', 'ブロック', 'モジュール'],
    correct: 3,
    explanation: 'ES Modules は独立したモジュールスコープを持ちます。https://developer.mozilla.org/ja/docs/Web/JavaScript/Guide/Modules'
  },
  {
    id: 99,
    category: 'JavaScript上級',
    question: 'トップレベル await が利用可能なのはどれですか？',
    options: ['script', 'CommonJS', 'ES Modules', 'JSON'],
    correct: 2,
    explanation: 'トップレベル await は ES Modules で使用できます。https://developer.mozilla.org/ja/docs/Web/JavaScript/Reference/Operators/await'
  },
  {
    id: 100,
    category: 'JavaScript上級',
    question: 'デッドロックが発生しにくい理由として正しいものはどれですか？',
    options: [
      'マルチスレッドだから',
      'シングルスレッドだから',
      'GCがあるから',
      'Promiseがあるから'
    ],
    correct: 1,
    explanation: 'JavaScriptは基本的にシングルスレッドで動作します。https://developer.mozilla.org/ja/docs/Web/JavaScript/EventLoop'
  },

  {
    id: 101,
    category: 'JavaScript上級',
    question: 'Web Workers の主な用途はどれですか？',
    options: [
      'DOM操作',
      'UI描画',
      'バックグラウンド処理',
      'イベント登録'
    ],
    correct: 2,
    explanation: 'Web Workers はメインスレッドとは別で処理を実行します。https://developer.mozilla.org/ja/docs/Web/API/Web_Workers_API'
  },
  {
    id: 102,
    category: 'JavaScript上級',
    question: 'SharedArrayBuffer の特徴はどれですか？',
    options: [
      'スレッド間で共有不可',
      '同期処理専用',
      'メモリを共有できる',
      'Promise専用'
    ],
    correct: 2,
    explanation: 'SharedArrayBuffer は複数スレッドでメモリを共有します。https://developer.mozilla.org/ja/docs/Web/JavaScript/Reference/Global_Objects/SharedArrayBuffer'
  },
  {
    id: 103,
    category: 'JavaScript上級',
    question: 'Atomics API の役割はどれですか？',
    options: [
      '非同期制御',
      'DOM同期',
      '共有メモリの同期',
      'イベント処理'
    ],
    correct: 2,
    explanation: 'Atomics は SharedArrayBuffer の同期操作を行います。https://developer.mozilla.org/ja/docs/Web/JavaScript/Reference/Global_Objects/Atomics'
  },
  {
    id: 104,
    category: 'JavaScript上級',
    question: 'モジュールで値を1つだけ公開する場合に使うのはどれですか？',
    options: ['export', 'export default', 'module.exports', 'public'],
    correct: 1,
    explanation: 'export default はデフォルトエクスポートを定義します。https://developer.mozilla.org/ja/docs/Web/JavaScript/Reference/Statements/export'
  },
  {
    id: 105,
    category: 'JavaScript上級',
    question: 'Strict モードで禁止されているものはどれですか？',
    options: [
      'let 使用',
      'this の暗黙的グローバル',
      'const 使用',
      'アロー関数'
    ],
    correct: 1,
    explanation: 'Strict モードでは暗黙的グローバル変数が禁止されます。https://developer.mozilla.org/ja/docs/Web/JavaScript/Reference/Strict_mode'
  },
  {
    id: 106,
    category: 'JavaScript上級',
    question: '尾再帰最適化（TCO）の説明として正しいものはどれですか？',
    options: [
      '必ず有効化されている',
      '再帰を禁止する',
      'スタック消費を抑える最適化',
      'Promise専用'
    ],
    correct: 2,
    explanation: 'TCO は再帰呼び出し時のスタック消費を抑えます。https://developer.mozilla.org/ja/docs/Web/JavaScript/Reference/Functions/Default_parameters'
  },
  {
    id: 107,
    category: 'JavaScript上級',
    question: 'eval() の問題点として正しいものはどれですか？',
    options: [
      '高速すぎる',
      'セキュリティと性能の問題',
      '非同期専用',
      '型安全'
    ],
    correct: 1,
    explanation: 'eval() はセキュリティと性能の問題があるため推奨されません。https://developer.mozilla.org/ja/docs/Web/JavaScript/Reference/Global_Objects/eval'
  },
  {
    id: 108,
    category: 'JavaScript上級',
    question: 'モンキーパッチの説明として正しいものはどれですか？',
    options: [
      '非同期パターン',
      '既存オブジェクトの変更',
      'クラス継承',
      'イベント登録'
    ],
    correct: 1,
    explanation: 'モンキーパッチは既存のオブジェクトや関数を上書きします。https://developer.mozilla.org/ja/docs/Glossary/Monkey_patch'
  },
  {
    id: 109,
    category: 'JavaScript上級',
    question: '関数型プログラミングの特徴はどれですか？',
    options: [
      '状態を多用する',
      '副作用を避ける',
      'クラス中心',
      'this 依存'
    ],
    correct: 1,
    explanation: '関数型プログラミングは副作用を避けます。https://developer.mozilla.org/ja/docs/Glossary/Functional_programming'
  },
  {
    id: 110,
    category: 'JavaScript上級',
    question: 'イミュータブルデータの利点はどれですか？',
    options: [
      '変更が容易',
      '予測しやすい',
      '高速I/O',
      'メモリ削減'
    ],
    correct: 1,
    explanation: 'イミュータブルデータは状態管理を予測しやすくします。https://developer.mozilla.org/ja/docs/Glossary/Immutable'
  },
  {
    id: 111,
    category: 'JavaScript上級',
    question: 'Pure Function の条件として正しいものはどれですか？',
    options: [
      '副作用がある',
      '同じ入力で同じ出力',
      'グローバル変数を使う',
      'this に依存する'
    ],
    correct: 1,
    explanation: 'Pure Function は同じ入力に対して常に同じ出力を返します。https://developer.mozilla.org/ja/docs/Glossary/Pure_function'
  },
  {
    id: 112,
    category: 'JavaScript上級',
    question: 'カリー化（Currying）の説明として正しいものはどれですか？',
    options: [
      '配列操作',
      '引数を分割した関数変換',
      '非同期制御',
      'ループ最適化'
    ],
    correct: 1,
    explanation: 'カリー化は複数引数関数を単一引数関数に分割します。https://developer.mozilla.org/ja/docs/Glossary/Currying'
  },
  {
    id: 113,
    category: 'JavaScript上級',
    question: 'デコレーター関数の主な目的はどれですか？',
    options: [
      'DOM操作',
      '関数の振る舞いを拡張',
      '非同期制御',
      '型定義'
    ],
    correct: 1,
    explanation: 'デコレーターは関数の振る舞いをラップして拡張します。https://developer.mozilla.org/ja/docs/Glossary/Decorator'
  },
  {
    id: 114,
    category: 'JavaScript上級',
    question: 'オブザーバーパターンの用途はどれですか？',
    options: [
      '継承',
      '状態変更の通知',
      'メモリ管理',
      '配列操作'
    ],
    correct: 1,
    explanation: 'オブザーバーパターンは状態変化を通知します。https://developer.mozilla.org/ja/docs/Glossary/Observer_pattern'
  },
  {
    id: 115,
    category: 'JavaScript上級',
    question: 'イベント駆動プログラミングの特徴はどれですか？',
    options: [
      '逐次実行',
      'イベントに応じて処理',
      '再帰専用',
      '同期限定'
    ],
    correct: 1,
    explanation: 'イベント発生に応じて処理が実行されます。https://developer.mozilla.org/ja/docs/Learn/JavaScript/Building_blocks/Events'
  },
  {
    id: 116,
    category: 'JavaScript上級',
    question: 'バックプレッシャーの問題が起きやすいのはどれですか？',
    options: [
      '同期処理',
      '大量データのストリーム処理',
      'DOM操作',
      '単純ループ'
    ],
    correct: 1,
    explanation: 'バックプレッシャーはストリーム処理で問題になります。https://developer.mozilla.org/ja/docs/Web/API/Streams_API'
  },
  {
    id: 117,
    category: 'JavaScript上級',
    question: 'ReadableStream の役割はどれですか？',
    options: [
      '書き込み専用',
      '読み取り専用ストリーム',
      '双方向通信',
      'イベント管理'
    ],
    correct: 1,
    explanation: 'ReadableStream はデータを読み取るためのストリームです。https://developer.mozilla.org/ja/docs/Web/API/ReadableStream'
  },
  {
    id: 118,
    category: 'JavaScript上級',
    question: '非同期イテレーターを扱う構文はどれですか？',
    options: ['for...of', 'for...in', 'for await...of', 'while await'],
    correct: 2,
    explanation: 'for await...of は非同期イテレーターを処理します。https://developer.mozilla.org/ja/docs/Web/JavaScript/Reference/Statements/for-await...of'
  },
  {
    id: 119,
    category: 'JavaScript上級',
    question: 'TC39 の役割はどれですか？',
    options: [
      'ブラウザ開発',
      'ECMAScript仕様策定',
      'Node.js管理',
      'MDN運営'
    ],
    correct: 1,
    explanation: 'TC39 は ECMAScript の仕様を策定する委員会です。https://developer.mozilla.org/ja/docs/Web/JavaScript/Language_Resources'
  },
  {
    id: 120,
    category: 'JavaScript上級',
    question: 'ECMAScript と JavaScript の関係として正しいものはどれですか？',
    options: [
      '別言語',
      'ECMAScriptはJavaScriptの仕様',
      'JavaScriptがECMAScriptを定義',
      '無関係'
    ],
    correct: 1,
    explanation: 'ECMAScript は JavaScript の標準仕様です。https://developer.mozilla.org/ja/docs/Web/JavaScript/Language_Resources'
  }
]
