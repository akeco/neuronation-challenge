import { FC } from 'react';

type InfoBarProps = {
  message: string;
};

const InfoBar: FC<InfoBarProps> = ({ message }) => {
  return (
    <div className="flex items-center">
      <h3 className="text-lg font-semibold mb-4 mt-4 mr-4">Choose your army</h3>
      <div className="flex items-center mr-4">
        <div className="w-3 h-3 bg-blue-500 rounded-sm mr-1"></div>
        <p>User</p>
      </div>
      <div className="flex items-center">
        <div className="w-3 h-3 bg-red-500 rounded-sm mr-1"></div>
        <p>Computer</p>
      </div>
      <p className="text-right font-semibold flex-grow">{message}</p>
    </div>
  );
};

export default InfoBar;
