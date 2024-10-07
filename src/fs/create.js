import fs from 'fs/promises';
import path from 'path';

const create = async () => {
  const content = 'I am fresh and young';
  const dir = import.meta.dirname;
  try {
    await fs.writeFile(path.resolve(dir, 'files', 'fresh.txt'), content, {
      flag: 'wx',
    });
  } catch (err) {
    console.log(err);
    throw new Error('FS operation failed');
  }
};

await create();
