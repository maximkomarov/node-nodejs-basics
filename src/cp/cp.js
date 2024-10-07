import { fork } from 'child_process';
import path from 'path';

const spawnChildProcess = async (args) => {
  const dir = import.meta.dirname;
  fork(path.resolve(dir, 'files', 'script.js'), args);
};

spawnChildProcess([1, 2, 3]);
