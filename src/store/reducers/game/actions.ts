import { GameActionTypes } from './types';

export const onShuffleAction = () => ({ type: GameActionTypes.onShuffle });

export const onMoveAction = (index: number) => ({ type: GameActionTypes.onMove, payload: index });

export const onUndoAction = () => ({ type: GameActionTypes.onUndo });
