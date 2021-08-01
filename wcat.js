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
let checkCmd = function (cmArray) {
  for (let i = 0; i < cmArray.length; i++) {
    if (cmArray[i] !== "-s" && cmArray[i] !== "-b" && cmArray[i] !== "-n")
      return false;
  }
  return true;
};
let getCmd = function (cmArray) {
  for (let i = 0; i < cmArray.length; i++) {
    if (cmArray[i] == "-b" || cmArray[i] == "-n") return cmdArray[i];
  }
};
for (let i = 0; i < inputArray.length; i++) {
  let content = inputArray[i];
  if (content == "-n" || content == "-b" || content == "-s")
    cmdArray.push(content);
  else {
    pathArray.push(content);
  }
}
if (!checkPath(pathArray)) {
  console.log("Invalid paths entered");
  return;
}
if (!checkCmd(cmdArray)) {
  console.log("Invalid set of command(s) entered.");
  return;
}

let getFirstNoneMinusSCmd = getCmd(cmdArray);
if (cmdArray.length == 0) {
  readFile(pathArray);
  return;
}
if (cmdArray.indexOf("-s") != -1) {
  let contentMinusLine = minusS(pathArray);
  if (getFirstNoneMinusSCmd == undefined) console.log(contentMinusLine);
  else {
    if (getFirstNoneMinusSCmd == "-n") minusNFiltered(contentMinusLine);
    else minusBFiltered(contentMinusLine);
  }
} else {
  if (getFirstNoneMinusSCmd == "-n") minusN(pathArray);
  else minusB(pathArray);
}
