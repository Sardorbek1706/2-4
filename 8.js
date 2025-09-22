const fs = require('fs');

function writeMessage() {
  try {
    fs.writeFileSync('message.txt', 'hello akala!');
    console.log('message.txt muvaffaqiyatli yozildi.');
  } catch (e) {
    console.log('Fayl yozishda xato:', e.message);
  }
}

writeMessage();