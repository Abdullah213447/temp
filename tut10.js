//sync file read and write.

const { readFileSync, writeFileSync } = require('fs');
console.log('start');
const first = readFileSync('./content/first.txt', 'utf8');
const second = readFileSync('./content/second.txt', 'utf8');
console.log(first);
console.log(second);

writeFileSync('./content/result_merge.txt',
  `Merged result -> ${first}, ${second}`,
  { flag: 'a' }  // Use a colon ':' instead of an equal sign '='
);


console.log('done task');
console.log('startting next task.....');