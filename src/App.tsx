import { EMPTY_INDEX } from 'constants';
import { FC } from 'react';
import { useSelector } from 'react-redux';

import { Button, Steps, Wrapper } from 'components';
import { IState } from 'store/reducers/game/types';
import { isSolved } from 'utils';

const App: FC = () => {
  const { board } = useSelector((store: IState) => store.game);

  return (
    <>
      <Wrapper>
        {board.map((item, index) => (
          <Button
            key={index}
            y={item[0]}
            x={item[1]}
            isHide={index === EMPTY_INDEX}
            disabled={isSolved(board)}
            index={index}
          >
            {index + 1}
          </Button>
        ))}
      </Wrapper>
      <Steps />
    </>
  );
};

export default App;
