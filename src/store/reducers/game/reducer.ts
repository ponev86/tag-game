import { getNewBoard } from 'utils';

import { GameTypes, GameAction, GameState } from './types';

const initialState: GameState = {
  board: getNewBoard(),
  history: [],
  steps: 0,
  stepIndex: 0,
};

export default function gameReducer(state = initialState, action: GameAction) {
  switch (action.type) {
    case GameTypes.shuffle:
      return {
        ...state,
        board: action.payload,
        history: [action.payload],
        steps: 0,
        stepIndex: 0,
      };
    case GameTypes.move:
      return {
        ...state,
        board: action.payload,
        history: [...state.history, action.payload],
        steps: state.steps + 1,
        stepIndex: state.stepIndex + 1,
      };
    case GameTypes.undo:
      return {
        ...state,
        ...action.payload,
      };
    default:
      return state;
  }
}
