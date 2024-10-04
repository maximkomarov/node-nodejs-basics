import fs from 'fs/promises';
import { existsSync } from 'fs';
import path from 'path';

const rename = async () => {
  if (existsSync(path.resolve('src', 'fs', 'files', 'properFileName.md'))) {
    throw new Error('FS operation failed');
  }

  try {
    await fs.rename(
      path.resolve('src', 'fs', 'files', 'wrongFilename.txt'),
      path.resolve('src', 'fs', 'files', 'properFileName.md')
    );
  } catch (err) {
    throw new Error('FS operation failed');
  }
};

await rename();
