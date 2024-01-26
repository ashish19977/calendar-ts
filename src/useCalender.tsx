import { useEffect } from 'react';
import { getExtraDaysAtStartAndEnd, getMonthDays, getYearsForSelect } from './utils';
import { useStore } from './store';
import { TDay } from './types';

const useCalender = () => {
  const { year, month, years, selectedDay, setState } = useStore();

  const setMonth = (e: React.ChangeEvent<HTMLSelectElement>) => {
    setState((oldState) => ({
      ...oldState,
      month: +e.target.value,
    }));
  };

  const setYear = (e: React.ChangeEvent<HTMLSelectElement>) => {
    setState((oldState) => ({
      ...oldState,
      year: +e.target.value,
    }));
  };

  const setSelectedDay = (day: TDay) => {
    setState((oldState) => ({
      ...oldState,
      selectedDay: day,
    }));
  };

  useEffect(() => {
    let days = getMonthDays(year, month);
    days = getExtraDaysAtStartAndEnd(days);
    const years = getYearsForSelect(year);
    setState((oldState) => ({
      ...oldState,
      days,
      years,
    }));
  }, [month, year]);

  return { year, month, years, setMonth, setYear, setSelectedDay, selectedDay };
};

export { useCalender };
