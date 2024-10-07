import fs from 'fs';
import path from 'path';

const read = async () => {
  const dir = import.meta.dirname;
  const stream = fs.createReadStream(path.join(dir, 'files', 'fileToRead.txt'));
  stream.on('data', (data) => {
    process.stdout.write(data + '\n');
  });
};

await read();
