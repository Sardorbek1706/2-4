const fs = require('fs');

function readNumbers(filePath) {
  const data = fs.readFileSync(filePath, 'utf8');
  if (!data) return [];
  return data.split(/\r?\n/).filter(Boolean).map(Number);
}

const numbers = readNumbers('sonlar.txt');
console.log('Oqilgan sonlar massivi:', numbers);
