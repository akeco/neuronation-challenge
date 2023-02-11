import { AnyAction } from 'redux';

export const ADD_RESULT = 'ADD_RESULT';
export const ADD_ROUND = 'ADD_ROUND';
export const RESET_GAME = 'RESET_GAME';

export type Result = {
  score: number;
  round: number;
};

type State = Result & {
  history: Result[];
};

const initialState: State = {
  score: 0,
  round: 1,
  history: [],
};

const results = (state: State = initialState, action: AnyAction) => {
  switch (action.type) {
    case ADD_RESULT:
      return {
        ...state,
        score: action.score + state.score,
        history: [
          ...state.history,
          {
            score: action.score + state.score,
            round: state.round,
          },
        ],
      };
    case ADD_ROUND:
      return {
        ...state,
        round: state.round + 1,
      };
    case RESET_GAME:
      return initialState;
    default:
      return state;
  }
};

export default results;
