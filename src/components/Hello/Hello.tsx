import { FC } from 'react';
import classNames from 'classnames';

import classes from './Hello.module.scss';

interface HelloProps {
  name: string;
}

const Hello: FC<HelloProps> = ({ name }) => (
  <>
    <h1 className={classNames(classes.title, classes.title_green)}>Hello {name ? name : 'World'}!</h1>
    <p>Test husky</p>
  </>
);

export default Hello;
