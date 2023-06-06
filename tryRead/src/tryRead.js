const fs = require('fs');

const readFile = (...files) => {

};

const readInOrder = (filePaths) => {
  if (filePaths.length === 0) return;
  const [currentFile, ...remaining] = filePaths;

  fs.readFile(currentFile, 'utf-8', (err, data) => {
    if (err) {
      console.log(err);
    }
    console.log(data);
    readInOrder(remaining);
  });
};

const readOneFile = (filePath) => {
  fs.readFile(filePath, 'utf-8', (err, data) => {
    if (err) {
      console.log(err);
    }

    console.log(data);
  });
};

const readMultipleFiles = (filePaths) => {
  filePaths.map((filePath) => {
    readOneFile(filePath);
  });
};

const main = () => {
  readInOrder(process.argv.slice(2));
};

main();
