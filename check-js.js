// Syntax checker for the static site's inline scripts.
// Usage: node check-js.js <file.html> [...]
// Compiles every inline <script> block with new Function() (compiles, never executes).
const fs = require('fs');
const path = require('path');

const files = process.argv.slice(2);
if (!files.length) {
  console.error('usage: node check-js.js <file.html> [...]');
  process.exit(2);
}

let failures = 0;
let blocks = 0;

for (const file of files) {
  const html = fs.readFileSync(file, 'utf8');
  const re = /<script([^>]*)>([\s\S]*?)<\/script>/gi;
  let match;
  let index = 0;
  while ((match = re.exec(html)) !== null) {
    const attrs = match[1] || '';
    if (/\bsrc\s*=/i.test(attrs)) continue; // external script, nothing inline to compile
    const typeMatch = attrs.match(/\btype\s*=\s*["']?([^"'\s>]+)/i);
    const type = typeMatch ? typeMatch[1].toLowerCase() : '';
    if (type && !/^(text\/javascript|application\/javascript|module|text\/ecmascript)$/.test(type)) {
      continue; // JSON-LD, templates, etc.
    }
    index += 1;
    const code = match[2];
    if (!code.trim()) continue;
    blocks += 1;
    try {
      // eslint-disable-next-line no-new-func
      new Function(code);
    } catch (err) {
      failures += 1;
      const startLine = html.slice(0, match.index).split('\n').length;
      console.log(`FAIL ${path.basename(file)} script#${index} (starts line ${startLine}): ${err.message}`);
    }
  }
  console.log(`ok   ${path.basename(file)} (${index} inline script block(s))`);
}

console.log(`\n${blocks} script block(s) compiled, ${failures} failure(s)`);
process.exit(failures ? 1 : 0);
