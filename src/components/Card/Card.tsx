import { FC } from 'react';
import archers from 'assets/images/archers.jpeg';
import cavalry from 'assets/images/cavalry.jpeg';
import pikemen from 'assets/images/pikemen.jpeg';

type CardProps = {
  type: 'archers' | 'cavalry' | 'pikemen';
};

const Card: FC<CardProps> = ({ type }) => {
  const getImageSrc = () => {
    return type === 'archers' ? archers : type === 'cavalry' ? cavalry : pikemen;
  };
  return (
    <div className="border border-solid p-4 rounded-md cursor-pointer">
      <img src={getImageSrc()} className="w-full h-[200px] object-cover" />
      <h4 className="capitalize mt-4">{type}</h4>
    </div>
  );
};

export default Card;
