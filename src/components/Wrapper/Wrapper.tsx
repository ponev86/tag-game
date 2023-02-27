import { FC } from 'react';

import styles from './Wrapper.module.scss';
import { WrapperProps } from './Wrapper.types';

const Wrapper: FC<WrapperProps> = ({ onShuffle, children }) => {
  return (
    <div className={styles.container}>
      <div className={styles.fifteen}>{children}</div>
      <button type="button" className={styles.shuffle} onClick={onShuffle}>
        Shuffle to start
      </button>
    </div>
  );
};

export default Wrapper;
