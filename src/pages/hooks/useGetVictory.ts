import { useEffect, useState } from 'react';
import type { Army } from 'types';
import { ARCHERS, CAVALRY, PIKEMEN } from 'utils/constants';

export const useGetVictory = (
  userChoice: Army | undefined,
  machineChoice: Army | undefined
): { victory: number | undefined; resetValues(): void } => {
  const [victory, setVictory] = useState<number>();

  /** Sets victory value regarding to selected values */
  useEffect(() => {
    if (!userChoice || !machineChoice) return;
    const getValue = () => {
      if (userChoice === CAVALRY) {
        if (machineChoice === ARCHERS) return 1;
        else if (machineChoice === PIKEMEN) return -1;
        else return 0;
      } else if (userChoice === ARCHERS) {
        if (machineChoice === ARCHERS) return 0;
        else if (machineChoice === PIKEMEN) return 1;
        else return -1;
      } else {
        if (machineChoice === ARCHERS) return -1;
        else if (machineChoice === PIKEMEN) return 0;
        else return 1;
      }
    };
    setVictory(getValue());
  }, [userChoice, machineChoice]);

  const resetValues = () => setVictory(undefined);

  return { victory, resetValues };
};
