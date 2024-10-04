import { createGzip } from 'zlib';
import { createReadStream, createWriteStream } from 'fs';
import { pipeline } from 'stream/promises';
import path from 'path';

const compress = async () => {
  const gzip = createGzip();
  const source = createReadStream(
    path.resolve('src', 'zip', 'files', 'fileToCompress.txt')
  );
  const destination = createWriteStream(
    path.resolve('src', 'zip', 'files', 'archive.gz')
  );

  try {
    await pipeline(source, gzip, destination);
  } catch (err) {
    console.error('An error occurred:', err);
    process.exitCode = 1;
  }
};

await compress();
