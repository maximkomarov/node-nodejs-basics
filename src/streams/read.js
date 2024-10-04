import fs from 'fs';
import path from 'path';

const read = async () => {
  const stream = fs.createReadStream(
    path.join('src', 'streams', 'files', 'fileToRead.txt')
  );
  stream.on('data', (data) => {
    process.stdout.write(data + '\n');
  });
};

await read();
