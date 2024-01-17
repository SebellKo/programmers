function solution(my_string) {
  let answer = my_string;
  const replace = ['a', 'e', 'i', 'o', 'u'];
  replace.forEach((letter) => {
    answer = answer.replaceAll(letter, '');
  });
  return answer;
}
