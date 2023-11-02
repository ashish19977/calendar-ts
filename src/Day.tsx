import { FC, useContext } from 'react';
import { AppContext } from './Context';
import { TDayProps } from './types';

export const Day: FC<TDayProps> = ({ day }) => {
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
