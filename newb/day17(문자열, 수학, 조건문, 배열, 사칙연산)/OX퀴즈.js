function solution(quiz) {
  return quiz
    .map((str) => str.split('='))
    .map((fnc) => {
      const answer = new Function(`return ${fnc[0]}`);
      return answer() === Number(fnc[1]) ? 'O' : 'X';
    });
}
