import { useState } from 'react';
import { useAppSelector } from 'redux-store';
import Button from 'components/shared/Button/Button';
import Dialog from 'components/Dialog/Dialog';
import HistoryList from 'components/HistoryList/HistoryList';

const Header = () => {
  const [openDialog, setOpenDialog] = useState<boolean>(false);
  const { score, round, history } = useAppSelector(({ results }) => results);

  const onToggleHistoryDialog = () => setOpenDialog((openDialog) => !openDialog);

  return (
    <>
      <div className="p-3 border border-solid flex">
        <div className="ml-auto flex items-center">
          <Button role="history-button" className="mr-4" onClick={onToggleHistoryDialog}>
            History
          </Button>
          <p className="mr-4">Round: {round}</p>
          <p>Score: {score}</p>
        </div>
      </div>
      <Dialog open={openDialog} title="History" onClose={onToggleHistoryDialog}>
        <HistoryList data={history} />
      </Dialog>
    </>
  );
};

export default Header;
