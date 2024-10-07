import { Worker } from 'worker_threads';
import os from 'os';
import path from 'path';

const performCalculations = async () => {
  const dir = import.meta.dirname;
  const numOfCores = os.cpus().length;
  let resultArray = new Array(numOfCores);
  let workers = [];
  for (let i = 0; i < numOfCores; i++) {
    workers.push(
      new Promise((resolve, reject) => {
        const worker = new Worker(path.resolve(dir, 'worker.js'), {
          workerData: { number: 10 + i },
        });
        worker.on('message', (result) => {
          resultArray[i] = { status: 'resolved', data: result };
          resolve();
        });
        worker.on('error', (error) => {
          resultArray[i] = { status: 'resolved', data: result };
          reject(error);
        });
      })
    );
  }
  Promise.allSettled(workers).then(() => {
    console.log(resultArray);
  });
};

await performCalculations();
