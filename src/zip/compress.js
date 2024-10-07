import { createGzip } from 'zlib';
import { createReadStream, createWriteStream } from 'fs';
import { pipeline } from 'stream/promises';
import path from 'path';

const compress = async () => {
  const dir = import.meta.dirname;
  const gzip = createGzip();
  const source = createReadStream(
    path.resolve(dir, 'files', 'fileToCompress.txt')
  );
  const destination = createWriteStream(
    path.resolve(dir, 'files', 'archive.gz')
  );

  try {
    await pipeline(source, gzip, destination);
  } catch (err) {
    console.error('An error occurred:', err);
  }
};

await compress();
