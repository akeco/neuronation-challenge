import { useState, useEffect } from 'react';
import { useAppDispatch, useAppSelector } from 'redux-store';
import CardsList from 'components/CardsList/CardsList';
import InfoBar from 'components/InfoBar/InfoBar';
import Button from 'components/shared/Button/Button';
import { useGetVictory } from 'pages/hooks/useGetVictory';
import { useMachineSelectArmy } from 'pages/hooks/useMachineSelectArmy';
import { addResult, addRound, resetGame } from 'redux-store/actions';
import { ROUNDS_LIMIT } from 'utils/constants';
import type { Army } from 'types';

const getVictoryMessage = (victory: number | undefined): string => {
  let message = '';

  if (victory === undefined) return message;

  switch (victory) {
    case 0:
      message = 'Both armies are defeated!';
      break;
    case 1:
      message = 'You won the battle!';
      break;
    case -1:
      message = 'You lost the battle!';
      break;
  }
  return message;
};

const Home = () => {
  const [userSelectedArmy, setUserSelectedArmy] = useState<Army>();
  const [machineSelectedArmy, setMachineSelectedArmy] = useMachineSelectArmy(userSelectedArmy);
  const { history } = useAppSelector(({ results }) => results);
  const dispatch = useAppDispatch();
  const isEnded: boolean = history.length === ROUNDS_LIMIT;

  const { victory, resetValues } = useGetVictory(userSelectedArmy, machineSelectedArmy);

  const addNewResult = (value: number) => dispatch(addResult(value));

  useEffect(() => {
    if (victory === undefined) {
      setUserSelectedArmy(undefined);
      setMachineSelectedArmy(undefined);
      return;
    }
    addNewResult(victory);
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [victory, setUserSelectedArmy, setMachineSelectedArmy]);

  const onChoseArmy = (army: Army) => setUserSelectedArmy(army);

  const onNewRound = () => {
    resetValues();
    dispatch(addRound());
  };

  const onGameReset = () => {
    resetValues();
    dispatch(resetGame());
    setUserSelectedArmy(undefined);
  };

  return (
    <div className="container mx-auto">
      <InfoBar message={isEnded ? 'GAME OVER!' : getVictoryMessage(victory)} />
      <CardsList
        disabled={userSelectedArmy !== undefined && machineSelectedArmy !== undefined}
        userSelectedArmy={userSelectedArmy}
        machineSelectedArmy={machineSelectedArmy}
        onChoseArmy={onChoseArmy}
      />
      <Button
        className="mt-2"
        variant="fill"
        disabled={!userSelectedArmy && !isEnded}
        onClick={isEnded ? onGameReset : onNewRound}>
        {isEnded ? 'Play Again' : 'Play New Round'}
      </Button>
    </div>
  );
};

export default Home;
