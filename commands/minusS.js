let fs = require("fs");

//returns file content
let getFileContents = function (filePath) {
  return fs.readFileSync(filePath);
};

//removes multiple line breaks and converts them into one.
let minusS = function (filePathArray) {
  let allContent = "";
  for (let i = 0; i < filePathArray.length; i++) {
    allContent += getFileContents(filePathArray[i]) + "\r\n"; //rn is being added to handle the new line in the next file if new line is written at first(before any content)
  }
  // console.log(allContent);
  let allContentArr = allContent.split("\r\n");
  // console.log(allContentArr);
  for (let i = allContentArr.length - 1; i > 0; i--) {
    if (allContentArr[i] == "") {
      if (allContentArr[i - 1] == "") allContentArr.splice(i, 1);
    }
  }
  let filteredContent = allContentArr.join("\n");
  // console.log(allContentArr);
  // if (flag == undefined) console.log(filteredContent);
  return filteredContent;
};

module.exports = {
  minusS,
  getFileContents,
};
