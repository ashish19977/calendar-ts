import { FC } from 'react';
import { TDayProps } from './types';
import { useCalender } from './useCalender';

export const Day: FC<TDayProps> = ({ day }) => {
	const { date, dateStr } = day;

	const { setSelectedDay, selectedDay } = useCalender();

	return (
		<div
			className={`day-container ${selectedDay.dateStr === dateStr ? 'selected-day' : ''}`}
			onClick={() => setSelectedDay(day)}
		>
			<span>{date}</span>
		</div>
	);
};
