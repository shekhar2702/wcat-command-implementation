let fs = require("fs");

let readFile = function (filePathArray) {
  let content = "";
  for (let i = 0; i < filePathArray.length; i++) {
    content += fs.readFileSync(filePathArray[i]);
  }
  console.log(content);
};
module.exports = {
  readFile,
};
