import classNames from 'classnames';
import { FC } from 'react';

import styles from './Steps.module.scss';
import { StepsProps } from './Steps.types';

const Steps: FC<StepsProps> = ({ count, undoDisabled, undo }) => {
  return (
    <div className={styles.steps}>
      <button
        className={classNames(styles.steps__buttons, styles.steps__buttons_undo)}
        disabled={undoDisabled}
        onClick={undo}
      ></button>
      <p className={styles.steps__count}>Steps: {count}</p>
    </div>
  );
};

export default Steps;
