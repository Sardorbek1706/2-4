const fs = require('fs').promises;
const path = require('path');

async function fsPlayground() {
  const dir = path.join(process.cwd(), 'my_nodejs_files');
  await fs.mkdir(dir, { recursive: true });
  const file = path.join(dir, 'hello_world.txt');
  await fs.writeFile(file, 'Hello, world!\n');
  const content = await fs.readFile(file, 'utf8');
  console.log(content.trim());
  const now = new Date().toISOString();
  await fs.appendFile(file, now + '\n');
}

fsPlayground();