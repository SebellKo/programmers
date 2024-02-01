// function solution(board) {
//   const checkBoardIsOne = board.flat();
//   if (checkBoardIsOne.length === 1 && checkBoardIsOne[0] === 1) return 0;
//   if (checkBoardIsOne.length === 1 && checkBoardIsOne[0] === 0) return 1;
//   const bombIndex = [];
//   board.forEach((index, indexX) => {
//     index.forEach((num, indexY) => {
//       if (num === 1) bombIndex.push([indexX, indexY]);
//     });
//   });

//   bombIndex.forEach((bombLocation) => {
//     if (bombLocation[0] === 0) {
//       if (bombLocation[1] === 0) {
//         board[[bombLocation[0]]][[bombLocation[1] + 1]] = 1; // 우
//         board[[bombLocation[0] + 1]][[bombLocation[1]]] = 1; // 하
//         board[[bombLocation[0] + 1]][[bombLocation[1] + 1]] = 1; // 오른쪽 아래 대각
//         return;
//       }
//       if (bombLocation[1] === board.length - 1) {
//         board[[bombLocation[0]]][[bombLocation[1] - 1]] = 1; //좌
//         board[[bombLocation[0] + 1]][[bombLocation[1] - 1]] = 1; // 왼쪽 아래 대각
//         board[[bombLocation[0] + 1]][[bombLocation[1]]] = 1; // 하
//         return;
//       }
//       board[[bombLocation[0]]][[bombLocation[1] - 1]] = 1; //좌
//       board[[bombLocation[0]]][[bombLocation[1] + 1]] = 1; // 우
//       board[[bombLocation[0] + 1]][[bombLocation[1]]] = 1; // 하
//       board[[bombLocation[0] + 1]][[bombLocation[1] - 1]] = 1; // 왼쪽 아래 대각
//       board[[bombLocation[0] + 1]][[bombLocation[1] + 1]] = 1; // 오른쪽 아래 대각
//       return;
//     }
//     if (bombLocation[0] === board.length - 1) {
//       if (bombLocation[1] === 0) {
//         board[[bombLocation[0] - 1]][[bombLocation[1]]] = 1; // 상
//         board[[bombLocation[0] - 1]][[bombLocation[1] + 1]] = 1; // 오른쪽 위 대각
//         board[[bombLocation[0]]][[bombLocation[1] + 1]] = 1; // 우
//         return;
//       }
//       if (bombLocation[1] === board.length - 1) {
//         board[[bombLocation[0] - 1]][[bombLocation[1]]] = 1; // 상
//         board[[bombLocation[0] - 1]][[bombLocation[1] - 1]] = 1; // 왼쪽 위 대각
//         board[[bombLocation[0]]][[bombLocation[1] - 1]] = 1; //좌
//         return;
//       }
//       board[[bombLocation[0]]][[bombLocation[1] - 1]] = 1; //좌
//       board[[bombLocation[0] - 1]][[bombLocation[1] - 1]] = 1; // 왼쪽 위 대각
//       board[[bombLocation[0] - 1]][[bombLocation[1]]] = 1; // 상
//       board[[bombLocation[0] - 1]][[bombLocation[1] + 1]] = 1; // 오른쪽 위 대각
//       board[[bombLocation[0]]][[bombLocation[1] + 1]] = 1; // 우
//       return;
//     }
//     if (bombLocation[1] === 0) {
//       board[[bombLocation[0] - 1]][[bombLocation[1]]] = 1; // 상
//       board[[bombLocation[0] - 1]][[bombLocation[1] + 1]] = 1; // 오른쪽 위 대각
//       board[[bombLocation[0]]][[bombLocation[1] + 1]] = 1; // 우
//       board[[bombLocation[0] + 1]][[bombLocation[1] + 1]] = 1; // 오른쪽 아래 대각
//       board[[bombLocation[0] + 1]][[bombLocation[1]]] = 1; // 하
//       return;
//     }
//     if (bombLocation[1] === board.length - 1) {
//       board[[bombLocation[0] - 1]][[bombLocation[1]]] = 1; // 상
//       board[[bombLocation[0] - 1]][[bombLocation[1] - 1]] = 1; // 왼쪽 위 대각
//       board[[bombLocation[0]]][[bombLocation[1] - 1]] = 1; //좌
//       board[[bombLocation[0] + 1]][[bombLocation[1] - 1]] = 1; // 왼쪽 아래 대각
//       board[[bombLocation[0] + 1]][[bombLocation[1]]] = 1; // 하
//       return;
//     }
//     board[[bombLocation[0]]][[bombLocation[1] - 1]] = 1; //좌
//     board[[bombLocation[0]]][[bombLocation[1] + 1]] = 1; // 우
//     board[[bombLocation[0] - 1]][[bombLocation[1]]] = 1; // 상
//     board[[bombLocation[0] + 1]][[bombLocation[1]]] = 1; // 하
//     board[[bombLocation[0] - 1]][[bombLocation[1] - 1]] = 1; // 왼쪽 위 대각
//     board[[bombLocation[0] + 1]][[bombLocation[1] - 1]] = 1; // 왼쪽 아래 대각
//     board[[bombLocation[0] - 1]][[bombLocation[1] + 1]] = 1; // 오른쪽 위 대각
//     board[[bombLocation[0] + 1]][[bombLocation[1] + 1]] = 1; // 오른쪽 아래 대각
//   });

//   const flatBoard = board.flat();

//   return flatBoard.length - flatBoard.filter((num) => num === 1).length;
// }
function addOneAroundBomb(board, x, y) {
  const directions = [
    [-1, -1],
    [-1, 0],
    [-1, 1],
    [0, -1],
    [0, 1],
    [1, -1],
    [1, 0],
    [1, 1],
  ];

  for (let [dx, dy] of directions) {
    const newX = x + dx;
    const newY = y + dy;
    if (
      newX >= 0 &&
      newX < board.length &&
      newY >= 0 &&
      newY < board[0].length
    ) {
      board[newX][newY] = 1;
    }
  }
}

function countSafeCells(board) {
  const flatBoard = board.flat();
  return flatBoard.length - flatBoard.filter((num) => num === 1).length;
}

function processBoard(board) {
  if (board.flat().every((cell) => cell === 1)) return 0;
  if (board.flat().every((cell) => cell === 0)) return 1;

  const bombIndex = [];

  for (let i = 0; i < board.length; i++) {
    for (let j = 0; j < board[i].length; j++) {
      if (board[i][j] === 1) {
        bombIndex.push([i, j]);
      }
    }
  }

  bombIndex.forEach((bombLocation) => {
    addOneAroundBomb(board, bombLocation[0], bombLocation[1]);
  });

  return countSafeCells(board);
}

console.log(
  processBoard([
    [1, 1, 1, 1, 1, 1],
    [1, 1, 1, 1, 1, 1],
    [1, 1, 1, 1, 1, 1],
    [1, 1, 1, 1, 1, 1],
    [1, 1, 1, 1, 1, 1],
    [1, 1, 1, 1, 1, 1],
  ])
);
console.log(
  processBoard([
    [0, 0, 0, 0, 0],
    [0, 0, 0, 0, 0],
    [0, 0, 0, 0, 0],
    [0, 0, 0, 0, 0],
    [0, 0, 0, 0, 1],
  ])
);
console.log(processBoard[[0]]);
console.log(
  processBoard([
    [0, 0, 0, 0, 0],
    [0, 0, 0, 0, 0],
    [0, 0, 0, 0, 0],
    [0, 0, 1, 1, 0],
    [0, 0, 0, 0, 0],
  ])
);

// 1 확인 상하좌우대각선 1으로 변경
// 좌,우 ([x, y-1], [x, y+1])
// 상,하 ([x-1, y], [x+1, y])
// 좌대각선 ([x-1, y-1], [x+1, y-1])
// 우대각선 ([x-1, y+1], [x+1, y+1])
// x가 0이거나 마지막일때
// y가 0이거나 마지막일때
