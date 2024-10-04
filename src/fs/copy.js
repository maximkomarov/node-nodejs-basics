import fs from 'fs/promises';
import path from 'path';

const copy = async () => {
  try {
    await fs.cp(
      path.resolve('src', 'fs', 'files'),
      path.resolve('src', 'fs', 'files_copy'),
      {
        recursive: true,
        force: false,
        errorOnExist: true,
      }
    );
  } catch (err) {
    throw new Error('FS operation failed');
  }
};

await copy();
