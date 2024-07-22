const { readFileSync, writeFileSync } = require("fs");
console.log('start');
const first = readFileSync('./Module/subfolder/text.txt', 'utf8');
console.log(first);
writeFileSync("./Module/subfolder/result-sync.txt",`Here is the result ${first}`);
console.log("done with this task");
// if we put a flag inside the writeFileSync fuction it will append the text instead of overwriting things
writeFileSync("./Module/subfolder/result-sync.txt",`Here is the result ${first}`,{flag:'a'});
console.log('starting the new task');