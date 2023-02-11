import { useEffect, useState } from 'react';
import type { Army } from 'types';

const randomInteger = (min: number = 1, max: number): number => {
  return Math.floor(Math.random() * (max - min + 1)) + min;
};

const sortByPriority = (a: { priority: number }, b: { priority: number }) => a.priority - b.priority;

const priority: number[] = [0.25, 0.25, 0.5];
const machineDecisions: { army: Army; priority: number }[] = (['archers', 'cavalry', 'pikemen'] as Army[])
  .map((army: Army) => {
    const index = randomInteger(0, priority.length - 1);
    const armyPriority: number = priority[index];
    priority.splice(index, 1);
    return {
      army,
      priority: armyPriority,
    };
  })
  .sort(sortByPriority);

export const useMachineSelectArmy = (
  userSelectedArmy: Army | undefined
): [Army | undefined, (value: Army | undefined) => void] => {
  const [machineSelectedArmy, setMachineSelectedArmy] = useState<Army>();

  /** Sets computer random army value regarding to specified percentages */
  useEffect(() => {
    if (!userSelectedArmy) return;
    const rndNumber = Math.random() * (1 - 0) + 0;
    let result: Army;

    if (rndNumber < 0.25) {
      result = machineDecisions[0].army;
    } else if (rndNumber < 0.5) {
      result = machineDecisions[1].army;
    } else {
      result = machineDecisions[2].army;
    }
    setMachineSelectedArmy(result);
  }, [userSelectedArmy]);

  return [machineSelectedArmy, setMachineSelectedArmy];
};
