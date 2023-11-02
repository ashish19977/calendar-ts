import { FC, useContext } from 'react';
import { AppContext } from './Context';
import { Day } from './Day';
import './index.css';
import { dayNames } from './utils';
import { DayAndYearSelector } from './DayAndYearSelectors';
import { useQuote } from './useQuote';

export const CalendarContainer: FC = () => {
	const { days } = useContext(AppContext);
	const { quote } = useQuote();

	return (
		<div className='calendar-container'>
			<p className='p-quote'>{quote}</p>
			<DayAndYearSelector />
			<div className='day-names-container'>
				{dayNames.map((day) => (
					<p key={day} className='day-name-container'>
						{day[0]}
					</p>
				))}
			</div>

			<div className='days-container'>
				{days.map((day, ind) => (
					<Day day={day} key={ind} />
				))}
			</div>
		</div>
	);
};
