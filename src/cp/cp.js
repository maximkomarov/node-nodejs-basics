import { fork } from 'child_process';
import path from 'path';

const spawnChildProcess = async (args) => {
  fork(path.resolve('src', 'cp', 'files', 'script.js'), args);
};

spawnChildProcess([1, 2, 3]);
