import fs from 'fs/promises';
import path from 'path';

const remove = async () => {
  try {
    const dir = import.meta.dirname;
    await fs.rm(path.resolve(dir, 'files', 'fileToRemove.txt'));
  } catch (err) {
    throw new Error('FS operation failed');
  }
};

await remove();
