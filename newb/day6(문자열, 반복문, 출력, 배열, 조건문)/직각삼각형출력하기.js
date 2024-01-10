const readline = require('readline');
const rl = readline.createInterface({
  input: process.stdin,
  output: process.stdout,
});

let input = 0;

rl.on('line', function (line) {
  input = Number(line);
}).on('close', function () {
  const output = Array.from({ length: input }, (_, index) =>
    '*'.repeat(index + 1)
  );
  output.forEach((value) => {
    console.log(value);
  });
});
