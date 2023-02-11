import { render, screen, fireEvent } from '@testing-library/react';
import Header from 'components/Header/Header';
import { Provider } from 'react-redux';
import store from 'redux-store';

const SCORE_TEXT = 'Score: 0';
const ROUND_TEXT = 'Round: 1';

test('Test Header content', () => {
  render(
    <Provider store={store}>
      <Header />
    </Provider>
  );

  const historyButton = screen.getByRole('history-button');
  const scoreText = screen.getByText(SCORE_TEXT);
  const roundText = screen.getByText(ROUND_TEXT);

  expect(historyButton).toBeInTheDocument();
  expect(scoreText).toBeInTheDocument();
  expect(roundText).toBeInTheDocument();
});
