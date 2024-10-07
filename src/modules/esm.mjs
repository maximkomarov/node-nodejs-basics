import path from 'path';
import os from 'os';
import { createServer as createServerHttp } from 'http';
import { readFile } from 'fs/promises';
import './files/c.js';

const { release, version } = os;
const random = Math.random();
const jsonA = JSON.parse(
  await readFile(new URL('./files/a.json', import.meta.url))
);
const jsonB = JSON.parse(
  await readFile(new URL('./files/b.json', import.meta.url))
);
const filename = import.meta.filename;
const dirname = import.meta.dirname;

let unknownObject = random > 0.5 ? jsonA : jsonB;
console.log(`Release ${release()}`);
console.log(`Version ${version()}`);
console.log(`Path segment separator is "${path.sep}"`);
console.log(`Path to current file is ${filename}`);
console.log(`Path to current directory is ${dirname}`);

const myServer = createServerHttp((_, res) => {
  res.end('Request accepted');
});
const PORT = 3000;
console.log(unknownObject);

myServer.listen(PORT, () => {
  console.log(`Server is listening on port ${PORT}`);
  console.log('To terminate it, use Ctrl+C combination');
});

export { unknownObject, myServer };
