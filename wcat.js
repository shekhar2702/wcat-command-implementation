let fs = require("fs");
let { minusB, minusBFiltered } = require("./commands/minusB");
let { minusN, minusNFiltered } = require("./commands/minusN");
let { minusS } = require("./commands/minusS");
let { readFile } = require("./commands/readFileContents");
let inputArray = process.argv.slice(2);
let cmdArray = [];
let pathArray = [];
let checkPath = function (pathArr) {
  if (pathArr.length == 0) return false;
  for (let i = 0; i < pathArr.length; i++) {
    if (!fs.existsSync(pathArr[i])) return false;
  }
  return true;
};
for (let i = 0; i < inputArray.length; i++) {
  let content = inputArray[i];
  if (content == "-n" || content == "-b" || content == "-s")
    cmdArray.push(content);
  else {
    pathArray.push(content);
  }
}
if (checkPath(pathArray)) {
  if (cmdArray.length == 0) readFile(pathArray);
  else {
    if (cmdArray.length == 1) {
      if (cmdArray[0] == "-s") {
        minusS(pathArray);
      } else if (cmdArray[0] == "-n") {
        minusN(pathArray);
      } else if (cmdArray[0] == "-b") {
        minusB(pathArray);
      } else {
        console.log(
          "Invalid Command option entered.Try giving a correct command"
        );
        return;
      }
    } else if (cmdArray.length == 2) {
      if (cmdArray.indexOf("-s") !== -1) {
        let content = minusS(pathArray, 1);
        if (cmdArray.indexOf("-n") !== -1) {
          minusNFiltered(content);
        } else if (cmdArray.indexOf("-b") !== -1) {
          minusBFiltered(content);
        } else {
          console.log(
            "Invalid Command option entered.Try giving a correct command"
          );
          return;
        }
      } else {
        if (cmdArray[0] == "-n" || cmdArray[0] == "-b") {
          if (cmdArray[0] == "-n") {
            minusN(pathArray);
          } else {
            minusB(pathArray);
          }
        } else {
          console.log("Invalid Command.Enter correct command");
          return;
        }
      }
    } else if (cmdArray.length == 3) {
      if (cmdArray.indexOf("-s") !== -1) {
        let content = minusS(pathArray, 1);
        if (cmdArray[0] == "-n") minusNFiltered(content);
        else if (cmdArray[0] == "-b") minusBFiltered(content);
        else {
          console.log("Invalid COmmand Argument");
        }
      } else {
        if (cmdArray[0] == "-n") minusN(pathArray);
        else if (cmdArray[0] == "-b") minusB(pathArray);
        else {
          console.log("Invalid COmmand Argument");
        }
      }
    }
  }
} else {
  console.log("Invalid file path/s entered.Please enter valid file paths.");
  return;
}
