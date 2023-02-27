import { Action } from 'redux';

export type GameState = {
  board: number[][];
  history: number[][][];
  steps: number;
  stepIndex: number;
};

export type IState = {
  game: GameState;
};

export enum GameActionTypes {
  onShuffle = 'CLICK_SHUFFLE',
  onMove = 'CLICK_MOVE',
  onUndo = 'CLICK_UNDO',
}

export enum GameTypes {
  shuffle = 'GAME_ACTION_SHUFFLE',
  move = 'GAME_ACTION_MOVE',
  undo = 'GAME_ACTION_UNDO',
}

export type GameAction =
  | { type: GameTypes.shuffle; payload: number[][] }
  | { type: GameTypes.move; payload: number }
  | { type: GameTypes.undo; payload: GameState };

export interface MoveAction extends Action {
  type: GameActionTypes.onMove;
  payload: number;
}
