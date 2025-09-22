const fs = require('fs');

function randomInt(min, max) {
    return Math.floor(Math.random() * (max - min + 1)) + min;
}

function writeNumbers(filePath, count = 100, min = 1, max = 100) {
    const arr = [];
    for (let i = 0; i < count; i++) arr.push(String(randomInt(min, max)));
    fs.writeFileSync(filePath, arr.join('\n'));
}

writeNumbers('sonlar.txt');
console.log('100 ta tasodifiy son sonlar.txtga qushildi');