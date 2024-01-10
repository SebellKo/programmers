function solution(slice, n) {
  let slices = slice;

  while (true) {
    if (slices / n >= 1) break;
    slices += slice;
  }
  return slices / slice;
}
