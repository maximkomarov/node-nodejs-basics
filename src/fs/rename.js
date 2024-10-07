import fs from 'fs/promises';
import { existsSync } from 'fs';
import path from 'path';

const rename = async () => {
  const dir = import.meta.dirname;
  if (existsSync(path.resolve(dir, 'files', 'properFileName.md'))) {
    throw new Error('FS operation failed');
  }

  try {
    await fs.rename(
      path.resolve(dir, 'files', 'wrongFilename.txt'),
      path.resolve(dir, 'files', 'properFileName.md')
    );
  } catch (err) {
    throw new Error('FS operation failed');
  }
};

await rename();
