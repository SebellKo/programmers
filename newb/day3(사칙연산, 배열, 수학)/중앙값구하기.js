function solution(array) {
  var answer = 0;
  const arr = array.sort((a, b) => a - b);
  answer = arr[Math.floor(arr.length / 2)];
  return answer;
}
