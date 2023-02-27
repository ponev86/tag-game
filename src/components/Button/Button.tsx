import { FC } from 'react';
import { useDispatch } from 'react-redux';

import { onMoveAction } from 'store/reducers/game/actions';

import styles from './Button.module.scss';
import { ButtonProps } from './Button.types';

const shiftPS = 100;

const Button: FC<ButtonProps> = ({ children, x, y, isHide, index, ...rest }) => {
  const dispatch = useDispatch();
  const onMove = () => dispatch(onMoveAction(index));

  return (
    <button
      type="button"
      className={styles.button}
      style={{
        transform: `translate3D(${x * shiftPS}%, ${y * shiftPS}%, 0)`,
        display: isHide ? 'none' : 'static',
      }}
      onClick={onMove}
      {...rest}
    >
      <span className={styles.button__circle}>{children}</span>
    </button>
  );
};

export default Button;
