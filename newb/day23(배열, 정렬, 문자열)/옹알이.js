const babbling = ['aya', 'ye', 'woo', 'ma'];

function solution(list) {
  let count = 0;
  let letterLength = 0;
  list.forEach((letter) => {
    if (babbling.includes(letter)) {
      count += 1;
      return;
    }
    babbling.forEach((babble) => {
      if (letter.includes(babble)) letterLength += babble.length;
    });
    if (letter.length === letterLength) count += 1;
    letterLength = 0;
  });
  return count;
}

// 'aya', 'ye', 'woo', 'ma'
// input: ["ayaye", "uuuma", "ye", "yemawoo", "ayaa"]
// 1. input의 배열 순환, 각 요소들에 옹알이 있는지 확인.
// 2. input의 요소가 옹알이와 일치하면 pass
// 3. input의 요소가 옹알이를 포함하고, 일치하지 않는다면 해당 옹알이를 제외한 나머지 옹알이를 포함했는지 검사.

function solution(babbling) {
  var answer = 0;
  const regex = /^(aya|ye|woo|ma)+$/;

  babbling.forEach((word) => {
    if (regex.test(word)) answer++;
  });

  return answer;
}
