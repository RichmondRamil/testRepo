//Synchonous
const { readFileSync, writeFileSync } = require('fs');
console.log('start');
const first = readFileSync("./content/first.txt", 'utf8');
const second = readFileSync("./content/second.txt", 'utf8');

// console.log(first);
// console.log(second);
// hello this is the first text file
// hello this is the second text file

writeFileSync('./content/result-sysnc.txt',  `Here is the result for write file ${first}, ${second}`, {flag: "a"})
console.log('DONE WITH THIS TASK');
console.log('Starting the next task');
