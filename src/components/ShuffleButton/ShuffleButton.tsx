import { FC } from 'react';
import { useDispatch } from 'react-redux';

import { onShuffleAction } from 'store/reducers/game/actions';

import styles from './ShuffleButton.module.scss';

const ShuffleButton: FC = () => {
  const dispatch = useDispatch();
  const onShuffle = () => dispatch(onShuffleAction());

  return (
    <button type="button" className={styles.shuffle} onClick={onShuffle}>
      Shuffle to start
    </button>
  );
};

export default ShuffleButton;
