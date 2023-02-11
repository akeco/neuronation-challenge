import { render, screen, fireEvent } from '@testing-library/react';
import Dialog from 'components/Dialog/Dialog';

const DIALOG_TITLE = 'History';
const DIALOG_CONTENT = 'Content';

test('Test Dialog content', () => {
  const { baseElement } = render(
    <div>
      <div id="modal-root"></div>
      <Dialog open={true} title={DIALOG_TITLE} onClose={() => {}}>
        <p>{DIALOG_CONTENT}</p>
      </Dialog>
    </div>
  );

  expect(baseElement).toMatchSnapshot();
});
