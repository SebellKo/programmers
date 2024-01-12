function solution(age) {
  const letter = [...'abcdefghijklmnop'];
  const answer = [...String(age)].map((number) => letter[Number(number)]);

  return answer.join('');
}
