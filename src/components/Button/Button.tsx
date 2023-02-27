import { FC } from 'react';

import styles from './Button.module.scss';
import { ButtonProps } from './Button.types';

const shiftPS = 100;

const Button: FC<ButtonProps> = ({ children, x, y, isHide, ...rest }) => {
  return (
    <button
      type="button"
      className={styles.button}
      style={{
        transform: `translate3D(${x * shiftPS}%, ${y * shiftPS}%, 0)`,
        display: isHide ? 'none' : 'static',
      }}
      {...rest}
    >
      <span className={styles.button__circle}>{children}</span>
    </button>
  );
};

export default Button;
