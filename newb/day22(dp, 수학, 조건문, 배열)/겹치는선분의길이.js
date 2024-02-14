// function solution(lines) {
//   const answer = [];
//   for (let i = 0; i < lines.length; i++) {
//     for (let j = i + 1; j < lines.length; j++) {
//       if (
//         (lines[j][0] > lines[i][0] && lines[j][0] < lines[i][1]) ||
//         (lines[i][0] > lines[j][0] && lines[i][0] < lines[j][1])
//       ) {
//         answer.push([lines[j][0], lines[i][1]]);
//       }
//     }
//   }
//   if (answer.length === 0) return 0;
//   const sorted = answer.flat().sort((a, b) => a - b);
//   return sorted[sorted.length - 1] - sorted[0];
// }

function solution(lines) {
  const answer = [];
  let isSame = false;
  let isNotConnect = false;
  const notConnect = [];
  lines.forEach((baseLine) => {
    const excepts = lines.filter(
      (exceptLine) => String(baseLine) !== String(exceptLine)
    );
    if (excepts.length === 0) isSame = true;
    excepts.forEach((restLine) => {
      if (baseLine[0] > restLine[0] && baseLine[0] < restLine[1]) {
        const endPoint = baseLine[1] > restLine[1] ? restLine[1] : baseLine[1];
        answer.push([baseLine[0], endPoint]);
      }
    });
  });
  if (isSame) return lines[0][1] - lines[0][0];
  if (answer.length === 0) return 0;
  answer.forEach((l) => {
    const excepts = answer.filter((el) => String(l) !== String(el));
    excepts.forEach((rl) => {
      if (!(l[0] > rl[0] && l[0] < rl[1])) isNotConnect = true;
    });
  });
  if (isNotConnect) {
    return answer.reduce((acc, cur) => {
      const length = Math.abs(cur[1] - cur[0]);
      return acc + length;
    }, 0);
  }
  const sorted = answer.flat().sort((a, b) => a - b);
  return sorted[sorted.length - 1] - sorted[0];
}
