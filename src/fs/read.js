import fs from 'fs/promises';
import path from 'path';

const read = async () => {
  await fs
    .readFile(path.resolve('src', 'fs', 'files', 'fileToRead.txt'), 'utf-8')
    .then((data) => console.log(data))
    .catch(() => {
      throw new Error('FS operation failed');
    });
};

await read();
