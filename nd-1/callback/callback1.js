const path = require('path');

const fs = require('fs');

function getFileContent(fp, callback) {
  const filePath = path.join(__dirname, String(fp));
  fs.readFile(filePath, 'utf-8', (err, str) => {
    const reObj = {
      status: err ? 1 : 0,
      data: err || str
    };
    callback(reObj);
  });
}

getFileContent('./12.txt', res => console.log(res));
