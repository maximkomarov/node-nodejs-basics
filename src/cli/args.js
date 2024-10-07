const parseArgs = () => {
  let resultString = '';
  for (let i = 2; i < process.argv.length; i += 2) {
    const name = process.argv[i];
    const value = process.argv[i + 1];
    let log = `${name} is ${value}`;
    if (i < process.argv.length - 2) {
      log += ', ';
    }
    resultString += log;
  }
  console.log(resultString);
};

parseArgs();
