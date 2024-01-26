import { FC } from 'react';
import { useStore } from '../state';
import { Day } from '../components';
import { DayAndYearSelector } from '../components';
import { dayNames } from '../constants';
import { useQuote } from '../hooks';

const CalendarContainer: FC = () => {
	const { days } = useStore();
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

export default CalendarContainer;
