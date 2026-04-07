/**
 * 問題文をコードブロックと通常テキストに分離して整形する
 * @param {string} text - 問題文
 * @returns {Array} - {type: 'text'|'code', content: string} の配列
 */
export function formatQuestionText(text) {
  const parts = [];
  const lines = text.split('\n');
  let codeBlock = [];
  let isInCodeBlock = false;

  for (let i = 0; i < lines.length; i++) {
    const line = lines[i];
    
    // コードブロックの判定（インデントまたは特定のパターン）
    const isCodeLine = 
      /^(const|let|var|function|class|if|for|while|return|\{|\}|\/\/|console\.)/.test(line.trim()) ||
      /^\s{2,}/.test(line) || // 2つ以上のスペースでインデント
      line.includes('=>') ||
      line.includes('()') ||
      /^\[|^\{/.test(line.trim());

    if (isCodeLine) {
      if (!isInCodeBlock) {
        // 直前のテキストを追加
        if (parts.length > 0 && parts[parts.length - 1].type === 'text') {
          // 既存のテキストブロックを確定
        } else if (i > 0) {
          // 新しいテキストブロックを追加
          const prevText = lines.slice(0, i).join('\n').trim();
          if (prevText) {
            parts.push({ type: 'text', content: prevText });
          }
        }
        isInCodeBlock = true;
      }
      codeBlock.push(line);
    } else {
      if (isInCodeBlock) {
        // コードブロックを確定
        parts.push({ 
          type: 'code', 
          content: codeBlock.join('\n').trim() 
        });
        codeBlock = [];
        isInCodeBlock = false;
      }
      
      // テキストを追加（空行でなければ）
      if (line.trim()) {
        if (parts.length > 0 && parts[parts.length - 1].type === 'text') {
          parts[parts.length - 1].content += '\n' + line;
        } else {
          parts.push({ type: 'text', content: line.trim() });
        }
      }
    }
  }

  // 最後にコードブロックが残っていたら追加
  if (codeBlock.length > 0) {
    parts.push({ 
      type: 'code', 
      content: codeBlock.join('\n').trim() 
    });
  }

  return parts;
}

/**
 * シンプル版: 改行で分割してコード部分を検出
 */
export function formatQuestionSimple(text) {
  const sections = text.split('\n\n');
  return sections.map(section => {
    const trimmed = section.trim();
    
    // コードっぽいかどうかを判定
    const hasCodePatterns = 
      /^(const|let|var|function|class)/.test(trimmed) ||
      trimmed.includes('=>') ||
      trimmed.includes('console.log') ||
      /\{|\}/.test(trimmed) ||
      trimmed.split('\n').some(line => /^\s{2,}/.test(line));

    return {
      type: hasCodePatterns ? 'code' : 'text',
      content: trimmed
    };
  }).filter(part => part.content);
}