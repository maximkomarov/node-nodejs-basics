import fs from 'fs/promises';
import path from 'path';

const read = async () => {
  const dir = import.meta.dirname;
  await fs
    .readFile(path.resolve(dir, 'files', 'fileToRead.txt'), 'utf-8')
    .then((data) => console.log(data))
    .catch(() => {
      throw new Error('FS operation failed');
    });
};

await read();
