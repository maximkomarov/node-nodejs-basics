import { createGunzip } from 'zlib';
import { createReadStream, createWriteStream } from 'fs';
import { pipeline } from 'stream/promises';
import path from 'path';

const decompress = async () => {
  const dir = import.meta.dirname;
  const gunzip = createGunzip();
  const source = createReadStream(path.resolve(dir, 'files', 'archive.gz'));
  const destination = createWriteStream(
    path.resolve(dir, 'files', 'fileToCompress.txt')
  );

  try {
    await pipeline(source, gunzip, destination);
  } catch (err) {
    console.error('An error occurred:', err);
  }
};

await decompress();
