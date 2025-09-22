const fs = require('fs').promises;

async function readFileFromArgv() {
  const fp = process.argv[2];
  if (!fp) {
    console.log('Iltimos, fayl nomini argument sifatida kiriting.');
    return;
  }
  try {
    const data = await fs.readFile(fp, 'utf8');
    console.log('Fayl tarkibi:\n');
    console.log(data);
  } catch (e) {
    console.log('Fayl topilmadi yoki o‘qishda xato yuz berdi.');
  }
}

readFileFromArgv();