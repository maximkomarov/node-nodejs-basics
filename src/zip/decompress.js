import { createGunzip } from 'zlib';
import { createReadStream, createWriteStream } from 'fs';
import { pipeline } from 'stream/promises';
import path from 'path';

const decompress = async () => {
  const gunzip = createGunzip();
  const source = createReadStream(
    path.resolve('src', 'zip', 'files', 'archive.gz')
  );
  const destination = createWriteStream(
    path.resolve('src', 'zip', 'files', 'fileToCompress.txt')
  );

  try {
    await pipeline(source, gunzip, destination);
  } catch (err) {
    console.error('An error occurred:', err);
    process.exitCode = 1;
  }
};

await decompress();
