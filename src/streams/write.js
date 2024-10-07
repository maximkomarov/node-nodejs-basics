import fs from 'fs';
import path from 'path';

const write = async () => {
  const dir = import.meta.dirname;
  const stream = fs.createWriteStream(
    path.resolve(dir, 'files', 'fileToWrite.txt')
  );
  process.stdin.on('data', (data) => {
    const processedData = data.toString().toUpperCase();
    stream.write(processedData);
  });

  process.stdin.on('end', () => {
    stream.end();
  });
};

await write();
