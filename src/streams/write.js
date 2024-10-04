import fs from 'fs';
import path from 'path';

const write = async () => {
  const stream = fs.createWriteStream(
    path.resolve('src', 'streams', 'files', 'fileToWrite.txt')
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
