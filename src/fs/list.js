import fs from 'fs/promises';
import path from 'path';

const list = async () => {
  try {
    const files = await fs.readdir(path.resolve('src', 'fs', 'files'));
    console.log(files);
  } catch (err) {
    throw new Error('FS operation failed');
  }
};

await list();
