import { FC } from 'react';

import ShuffleButton from 'components/ShuffleButton';

import styles from './Wrapper.module.scss';
import { WrapperProps } from './Wrapper.types';

const Wrapper: FC<WrapperProps> = ({ children }) => {
  return (
    <div className={styles.container}>
      <div className={styles.fifteen}>{children}</div>
      <ShuffleButton />
    </div>
  );
};

export default Wrapper;
