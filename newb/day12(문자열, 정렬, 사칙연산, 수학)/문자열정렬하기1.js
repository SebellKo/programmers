function solution(my_string) {
  return [...my_string.replaceAll(/\D/g, '')]
    .map((letter) => Number(letter))
    .sort((a, b) => a - b);
}
