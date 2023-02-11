import { FC } from 'react';
import Card from 'components/Card/Card';
import type { Army } from '../../types';

type CardListProps = {
  disabled?: boolean;
  machineSelectedArmy: Army | undefined;
  userSelectedArmy: Army | undefined;
  onChoseArmy(value: Army): void;
};

const armyList: Army[] = ['archers', 'cavalry', 'pikemen'];

const CardsList: FC<CardListProps> = ({ machineSelectedArmy, disabled, userSelectedArmy, onChoseArmy }) => {
  return (
    <div role="card-list" className={`grid grid-cols-3 gap-6 ${disabled ? 'pointer-events-none opacity-70' : ''}`}>
      {armyList.map((item: Army) => (
        <Card
          key={item}
          type={item}
          userSelectedArmy={userSelectedArmy}
          machineSelectedArmy={machineSelectedArmy}
          onClick={onChoseArmy}
        />
      ))}
    </div>
  );
};

export default CardsList;
