let { getFileContents } = require("./minusS");
let minusN = function (filePathArr) {
  let content = "";
  for (let i = 0; i < filePathArr.length; i++) {
    content += getFileContents(filePathArr[i]) + "\r\n";
  }
  let contentArr = content.split("\r\n");
  let counter = 1;
  for (let i = 0; i < contentArr.length; i++) {
    contentArr[i] = counter + ". " + contentArr[i];
    counter++;
  }
  contentArr.splice(contentArr.length - 1, 1);
  let filteredContent = contentArr.join("\n");
  console.log(filteredContent);
};
let minusNFiltered = function (content) {
  let contentArr = content.split("\n");
  let counter = 1;
  for (let i = 0; i < contentArr.length; i++) {
    contentArr[i] = counter + ". " + contentArr[i];
    counter++;
  }
  let filteredContent = contentArr.join("\n");
  console.log(filteredContent);
};
module.exports = {
  minusN,
  minusNFiltered,
};
