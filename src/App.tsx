import { EMPTY_INDEX } from 'constants';
import { FC, useState } from 'react';

import { Button, Steps, Wrapper } from 'components';
import { getNewBoard, isSolved, moveTile, shuffle } from 'utils';

const App: FC = () => {
  const [board, setBoard] = useState(getNewBoard());
  const [history, setHistory] = useState<number[][][]>([]);
  const [steps, setSteps] = useState(0);
  const [stepIndex, setIndex] = useState(0);

  const onShuffle = () => {
    const first = shuffle(board);
    setBoard(first);
    setHistory([first]);
    setSteps(0);
    setIndex(0);
  };

  const onMove = (index: number) => {
    const step = moveTile(board, index);

    setHistory((prevHistory) => [...prevHistory, step]);
    setBoard(step);
    setSteps((prevStep) => prevStep + 1);
    setIndex((prevIndex) => prevIndex + 1);
  };

  const onUndo = () => {
    if (history[stepIndex - 1]) {
      history.pop();
      setBoard(history[stepIndex - 1]);
      setIndex((prevIndex) => prevIndex - 1);
      setSteps((prevStep) => prevStep + 1);
    }
  };

  return (
    <>
      <Wrapper onShuffle={onShuffle}>
        {board.map((item, index) => (
          <Button
            key={index}
            y={item[0]}
            x={item[1]}
            isHide={index === EMPTY_INDEX}
            onClick={() => onMove(index)}
            disabled={isSolved(board)}
          >
            {index + 1}
          </Button>
        ))}
      </Wrapper>
      <Steps count={steps} undo={onUndo} undoDisabled={!history[stepIndex - 1]} />
    </>
  );
};

export default App;
