function solution(cipher, code) {
  return [...cipher]
    .map((letter, index) => {
      if ((index + 1) % code === 0) return letter;
    })
    .join('');
}
