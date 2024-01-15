function solution(hp) {
  const general = Math.floor(hp / 5);
  const soldier = Math.floor((hp - general * 5) / 3);
  const worker = Math.floor((hp - general * 5) % 3);

  return general + soldier + worker;
}
