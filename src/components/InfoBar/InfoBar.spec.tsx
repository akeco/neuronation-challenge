import { render, screen, fireEvent } from '@testing-library/react';
import InfoBar from 'components/InfoBar/InfoBar';

const TEXT_EXAMPLE = 'Text example';
const INSTRUCTION_TEXT = 'Choose your army';

test('Test InfoBar content', () => {
  render(<InfoBar message={TEXT_EXAMPLE} />);

  const instructionText = screen.getByText(INSTRUCTION_TEXT);
  const messageText = screen.getByText(TEXT_EXAMPLE);

  expect(instructionText).toBeInTheDocument();
  expect(messageText).toBeInTheDocument();
});
