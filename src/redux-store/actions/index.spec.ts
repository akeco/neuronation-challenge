import * as actions from './index';
import { ADD_RESULT, ADD_ROUND, RESET_GAME } from 'redux-store/reducers/results';

describe('Test actions', () => {
  it('addResult should add a new result', () => {
    expect(actions.addResult(1)).toEqual({
      type: ADD_RESULT,
      score: 1,
    });
  });

  it('addRound should increase rounds number', () => {
    expect(actions.addRound()).toEqual({
      type: ADD_ROUND,
    });
  });

  it('resetGame should reset to initial values', () => {
    expect(actions.resetGame()).toEqual({
      type: RESET_GAME,
    });
  });
});
