import fs from 'fs/promises';
import path from 'path';

const copy = async () => {
  try {
    const dir = import.meta.dirname;
    await fs.cp(path.resolve(dir, 'files'), path.resolve(dir, 'files_copy'), {
      recursive: true,
      force: false,
      errorOnExist: true,
    });
  } catch (err) {
    throw new Error('FS operation failed');
  }
};

await copy();
