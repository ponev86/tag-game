import { takeEvery, put, select, takeLatest } from 'redux-saga/effects';

import { GameTypes, GameActionTypes, MoveAction, GameState } from 'store/reducers/game/types';
import { moveTile, shuffle } from 'utils';

function* workerSagaOnShuffle() {
  const { board } = yield select((state) => state.game);
  const shuffleBoard = shuffle(board);
  yield put({ type: GameTypes.shuffle, payload: shuffleBoard });
}

function* workerSagaOnMove(data: MoveAction) {
  const { payload } = data;
  const { board } = yield select((state) => state.game);
  const moved = moveTile(board, payload);

  yield put({ type: GameTypes.move, payload: moved });
}

function* workerSagaOnUndo() {
  const { board, history, steps, stepIndex } = yield select((state) => state.game);

  if (history[stepIndex - 1]) {
    const newHistory = history.filter((_, index: number) => index !== history.length - 1);
    const newBoard = newHistory[stepIndex - 1];
    const newStepIndex = stepIndex - 1;
    const newSteps = steps + 1;

    const payload: GameState = {
      board: newBoard,
      history: newHistory,
      steps: newSteps,
      stepIndex: newStepIndex,
    };

    yield put({ type: GameTypes.undo, payload });
  }
}

function* watchClickSaga() {
  yield takeEvery(GameActionTypes.onShuffle, workerSagaOnShuffle);
  yield takeLatest<MoveAction>(GameActionTypes.onMove, workerSagaOnMove);
  yield takeLatest(GameActionTypes.onUndo, workerSagaOnUndo);
}

export default function* rootSaga() {
  yield watchClickSaga();
}
