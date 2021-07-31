let { getFileContents } = require("./minusS");
let minusB = function (filePathArr) {
  let content = "";
  for (let i = 0; i < filePathArr.length; i++) {
    content += getFileContents(filePathArr[i]) + "\r\n";
  }
  let contentArr = content.split("\r\n");
  let counter = 1;
  for (let i = 0; i < contentArr.length; i++) {
    if (contentArr[i] != "") {
      contentArr[i] = counter + ". " + contentArr[i];
      counter++;
    }
  }
  contentArr.splice(contentArr.length - 1, 1);
  let filteredContent = contentArr.join("\n");
  console.log(filteredContent);
};
let minusBFiltered = function (content) {
  let contentArr = content.split("\n");
  let counter = 1;
  for (let i = 0; i < contentArr.length; i++) {
    if (contentArr[i] != "") {
      contentArr[i] = counter + ". " + contentArr[i];
      counter++;
    }
  }
  let filteredContent = contentArr.join("\n");
  console.log(filteredContent);
};

module.exports = {
  minusB,
  minusBFiltered,
};
