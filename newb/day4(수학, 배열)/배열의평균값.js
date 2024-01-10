function solution(numbers) {
  const sum = numbers.reduce((acc, cur) => {
    return acc + cur;
  });
  answer = (sum / numbers.length).toFixed(1);
  return answer;
}
