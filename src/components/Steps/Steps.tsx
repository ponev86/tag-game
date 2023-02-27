import classNames from 'classnames';
import { FC } from 'react';
import { useDispatch, useSelector } from 'react-redux';

import { onUndoAction } from 'store/reducers/game/actions';
import { IState } from 'store/reducers/game/types';
import { isSolved } from 'utils';

import styles from './Steps.module.scss';

const Steps: FC = () => {
  const { board, steps, history, stepIndex } = useSelector((store: IState) => store.game);
  const dispatch = useDispatch();

  const isDisabled = !history[stepIndex - 1] || isSolved(board);

  const onUndo = () => dispatch(onUndoAction());

  return (
    <div className={styles.steps}>
      <button
        className={classNames(styles.steps__buttons, styles.steps__buttons_undo)}
        disabled={isDisabled}
        onClick={onUndo}
      ></button>
      <p className={styles.steps__count}>Steps: {steps}</p>
    </div>
  );
};

export default Steps;
