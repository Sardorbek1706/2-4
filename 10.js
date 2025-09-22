const fs = require('fs').promises;

async function listCurrentDir() {
  try {
    const files = await fs.readdir(process.cwd());
    for (const f of files) console.log(f);
  } catch (e) {
    console.log('Katalogni o‘qishda xato:', e.message);
  }
}

listCurrentDir();