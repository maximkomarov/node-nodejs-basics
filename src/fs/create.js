import fs from 'fs/promises';
import path from 'path';

const create = async () => {
  const content = 'I am fresh and young';
  try {
    await fs.writeFile(
      path.resolve('src', 'fs', 'files', 'fresh.txt'),
      content,
      {
        flag: 'wx',
      }
    );
  } catch (err) {
    throw new Error('FS operation failed');
  }
};

await create();
