import { useContext } from 'react';
import { AppContext } from './Context';
import { Tday } from './types';

export const Day = ({ day }: { day: Tday }) => {
  const { date, dateStr } = day;

  const { onDayClick, selectedDay } = useContext(AppContext);

  return (
    <div
      className={`day-container ${selectedDay.dateStr === dateStr ? 'selected-day' : ''}`}
      onClick={() => onDayClick(day)}
    >
      <span>{date}</span>
    </div>
  );
};
