const fs = require('fs').promises;
const path = require('path');

async function pathPro() {
  const cwd = process.cwd();
  const docsDir = path.join(cwd, 'docs');
  try { await fs.access(docsDir); } catch { await fs.mkdir(docsDir); }
  const rel = path.join('.', 'docs', 'readme.md');
  const abs = path.resolve(rel);
  await fs.writeFile(abs, '# Readme\n');
  console.log('Current working directory absolute path:', cwd);
  console.log('Relative path to readme.md:', rel);
}

pathPro();
