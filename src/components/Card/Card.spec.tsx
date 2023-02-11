import { render, screen, fireEvent } from '@testing-library/react';
import Card from 'components/Card/Card';

const CARD_TYPE = 'archers';

test('Test Card content', () => {
  const intersectionObserverMock = () => ({
    observe: () => null,
  });
  const mockClickFn = jest.fn().mockImplementation(intersectionObserverMock);

  render(<Card type={CARD_TYPE} userSelectedArmy={undefined} machineSelectedArmy={undefined} onClick={mockClickFn} />);

  const element = screen.getByRole('card');
  const image = screen.getByRole('image');
  const title = screen.getByText(CARD_TYPE);

  expect(title).toBeInTheDocument();
  expect(image).toBeInTheDocument();
  expect(image).toContainElement(image);
});

test('Test Card click action', () => {
  const intersectionObserverMock = () => ({
    observe: () => null,
  });
  const mockClickFn = jest.fn().mockImplementation(intersectionObserverMock);

  render(<Card type={CARD_TYPE} userSelectedArmy={undefined} machineSelectedArmy={undefined} onClick={mockClickFn} />);

  const element = screen.getByRole('card');

  fireEvent.click(element);
  expect(mockClickFn).toBeCalledTimes(1);
  expect(mockClickFn).not.toBeCalledTimes(2);
});
