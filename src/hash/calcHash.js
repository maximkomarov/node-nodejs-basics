import fs from 'fs';
import crypto from 'crypto';
import path from 'path';

const calculateHash = async () => {
  const hash = crypto.createHash('sha256');
  const stream = await fs.createReadStream(
    path.resolve('src', 'hash', 'files', 'fileToCalculateHashFor.txt')
  );
  stream.on('data', (data) => hash.update(data));
  stream.on('end', () => {
    console.log(hash.digest('hex'));
  });
};

await calculateHash();
