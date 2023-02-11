import { ADD_RESULT, ADD_ROUND, RESET_GAME } from 'redux-store/reducers/results';

export const addResult = (score: number) => {
  return {
    type: ADD_RESULT,
    score,
  };
};

export const addRound = () => {
  return {
    type: ADD_ROUND,
  };
};

export const resetGame = () => {
  return {
    type: RESET_GAME,
  };
};
