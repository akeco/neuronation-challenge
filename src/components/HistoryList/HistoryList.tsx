import { FC } from 'react';
import type { Result } from 'redux-store/reducers/results';

type HistoryListProps = {
  data: Result[];
};

const HistoryList: FC<HistoryListProps> = ({ data }) => {
  if (!data.length) return <p className="text-center mt-10 text-gray-500">Empty history</p>;
  return (
    <ul>
      {data.map((item: Result) => {
        return (
          <li className="border-b border-solid px-4 py-2" key={item.round}>
            <p>Round: {item.round}</p>
            <p>Score: {item.score}</p>
          </li>
        );
      })}
    </ul>
  );
};

export default HistoryList;
