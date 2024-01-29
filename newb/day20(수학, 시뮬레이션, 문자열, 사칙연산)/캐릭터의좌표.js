function solution(keyinput, board) {
  const x = board[0] === 1 ? 0 : Math.floor(board[0] / 2);
  const y = board[1] === 1 ? 0 : Math.floor(board[1] / 2);
  const answer = [0, 0];

  keyinput.forEach((direction) => {
    if (direction === 'up' && answer[1] !== y) answer[1] += 1;
    if (direction === 'down' && -answer[1] !== y) answer[1] -= 1;
    if (direction === 'left' && -answer[0] !== x) answer[0] -= 1;
    if (direction === 'right' && answer[0] !== x) answer[0] += 1;
  });
  if (Math.abs(answer[0]) > x) answer[0] = answer[0] < 0 ? -1 * x : x;
  if (Math.abs(answer[1]) > y) answer[1] = answer[1] < 0 ? -1 * y : y;
  if (Object.is(answer[0], -0)) answer[0] = 0;
  if (Object.is(answer[1], -0)) answer[1] = 0;
  return answer;
}
