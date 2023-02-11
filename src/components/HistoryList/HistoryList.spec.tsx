import { render, screen, fireEvent } from '@testing-library/react';
import HistoryList from 'components/HistoryList/HistoryList';

const data = [
  { round: 1, score: 1 },
  { round: 2, score: 2 },
];
const EMPTY_TEXT = 'Empty history';

test('Test HistoryList content', () => {
  render(<HistoryList data={data} />);

  const list = screen.getByText((content, element) => element?.tagName?.toLowerCase() === 'ul');
  expect(list).toBeInTheDocument();
  expect(list.children.length).toEqual(2);
});

test('Test HistoryList empty content', () => {
  render(<HistoryList data={[]} />);

  const list = screen.getByText(EMPTY_TEXT);
  expect(list).toBeInTheDocument();
});
