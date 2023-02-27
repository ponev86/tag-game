import {
  COLS,
  MOVE_DIRECTIONS,
  ROWS,
  SHUFFLE_MOVES_RANGE_MIN,
  SHUFFLE_MOVES_RANGE_MAX,
  TOTAL_COUNT,
  EMPTY_INDEX,
} from './constants';

export const rand = (min: number, max: number) => {
  return min + Math.floor(Math.random() * (max - min + 1));
};

export const getNewBoard = (): number[][] => {
  return Array(TOTAL_COUNT)
    .fill(0)
    .map((_, index) => [Math.floor(index / ROWS), index % COLS]);
};

export const solvedBoard = getNewBoard();

export const shuffle = (board: number[][]) => {
  let shuffleMoves = rand(SHUFFLE_MOVES_RANGE_MIN, SHUFFLE_MOVES_RANGE_MAX);
  let result = [...board];

  while (shuffleMoves-- > 0) {
    const index = moveInDirection(result, MOVE_DIRECTIONS[rand(0, 3)]);
    result = moveTile(result, index);
  }
  return result;
};

export const isSolved = (board: number[][]) => {
  for (let i = 0; i < TOTAL_COUNT; i++) {
    if (board[i][0] !== solvedBoard[i][0] || board[i][1] !== solvedBoard[i][1]) return false;
  }
  return true;
};

export const canMoveTile = (board: number[][], index: number) => {
  if (index < 0 || index >= TOTAL_COUNT) return false;

  const tilePos = board[index];
  const emptyPos = board[EMPTY_INDEX];

  if (tilePos[0] === emptyPos[0]) return Math.abs(tilePos[1] - emptyPos[1]) === 1;
  else if (tilePos[1] === emptyPos[1]) return Math.abs(tilePos[0] - emptyPos[0]) === 1;
  else return false;
};

export const moveTile = (board: number[][], index: number) => {
  if (canMoveTile(board, index)) {
    const emptyPosition = [...board[EMPTY_INDEX]];
    const tilePosition = [...board[index]];

    const boardAfterMove = [...board];
    boardAfterMove[EMPTY_INDEX] = tilePosition;
    boardAfterMove[index] = emptyPosition;

    return boardAfterMove;
  }

  return board;
};

export const moveInDirection = (board: number[][], dir: string) => {
  const epos = board[EMPTY_INDEX];
  const posToMove =
    dir === 'up'
      ? [epos[0] + 1, epos[1]]
      : dir === 'down'
      ? [epos[0] - 1, epos[1]]
      : dir === 'left'
      ? [epos[0], epos[1] + 1]
      : dir === 'right'
      ? [epos[0], epos[1] - 1]
      : epos;

  let tileToMove = EMPTY_INDEX;

  for (let i = 0; i < TOTAL_COUNT; i++) {
    if (board[i][0] === posToMove[0] && board[i][1] === posToMove[1]) {
      tileToMove = i;
      break;
    }
  }

  return tileToMove;
};
