import { FC } from 'react';
import type { Army } from '../../types';
import archers from 'assets/images/archers.jpeg';
import cavalry from 'assets/images/cavalry.jpeg';
import pikemen from 'assets/images/pikemen.jpeg';

type CardProps = {
  type: Army;
  machineSelectedArmy: Army | undefined;
  userSelectedArmy: Army | undefined;
  onClick(value: Army): void;
};

const Card: FC<CardProps> = ({ type, userSelectedArmy, machineSelectedArmy, onClick }) => {
  const getImageSrc = () => {
    return type === 'archers' ? archers : type === 'cavalry' ? cavalry : pikemen;
  };
  return (
    <div
      role="card"
      className={`border border-solid border-4 outline outline-4 outline-white ${
        machineSelectedArmy === type ? 'outline !border-white !outline-red-500 outline-4' : ''
      } p-4 rounded-md cursor-pointer ${userSelectedArmy === type ? 'border-4 !border-blue-500' : ''}`}
      onClick={() => onClick(type)}>
      <img role="image" src={getImageSrc()} className="w-full h-[200px] object-cover" alt="Army" />
      <h4 className="capitalize font-medium mt-4">{type}</h4>
    </div>
  );
};

export default Card;
