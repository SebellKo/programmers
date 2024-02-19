// function solution(score) {
//   const answer = [...score];
//   let currentIndex = 0;
//   const board = score
//     .map((num, index) => {
//       return { ave: (num[0] + num[1]) / 2, index: index };
//     })
//     .sort((a, b) => b.ave - a.ave);
//   board.forEach((score, index) => {
//     if (board[index - 1] && score.ave === board[index - 1].ave) {
//       answer[score.index] = index - currentIndex;
//       currentIndex += 1;
//       return;
//     }
//     answer[score.index] = index + 1;
//     currentIndex = 0;
//   });
//   return answer;
// }

function solution(score) {
  let avg = score.map((v) => (v[0] + v[1]) / 2);
  console.log(avg);
  let sorted = avg.slice().sort((a, b) => b - a);
  console.log(sorted);
  return avg.map((v) => sorted.indexOf(v) + 1);
}
