import { render, screen, fireEvent } from '@testing-library/react';
import CardsList from 'components/CardsList/CardsList';

test('Test CardsList content', () => {
  render(<CardsList userSelectedArmy={undefined} machineSelectedArmy={undefined} onChoseArmy={() => {}} />);

  const element = screen.getByRole('card-list');

  expect(element).toBeInTheDocument();
  expect(element.children.length).toEqual(3);
  expect(element.children.length).not.toEqual(4);
});
