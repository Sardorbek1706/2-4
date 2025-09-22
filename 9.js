const fs = require('fs');

function appendMessage() {
  fs.appendFile('message.txt', '\n ishlar qalay.', (err) => {
    if (err) {
      console.log('Qoshishda xato:', err.message);
    } else {
      console.log('Qoshish muvaffaqiyatli bajarildi.');
    }
  });
}

appendMessage();