function solution(numbers) {
  var answer = numbers.sort((a, b) => b - a);
  console.log(answer);
  return answer[0] * answer[1] >
    answer[answer.length - 1] * answer[answer.length - 2]
    ? answer[0] * answer[1]
    : answer[answer.length - 1] * answer[answer.length - 2];
}

console.log(solution([1, 2, -3, 4, -5]));
