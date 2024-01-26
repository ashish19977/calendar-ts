import { Icon } from './Icon';
import { FC } from 'react';
import { useCalender } from './useCalender';
import { useTheme } from './useTheme';
import { monthNames } from './constants';

export const DayAndYearSelector: FC = () => {
	const { year, month, setMonth, setYear, years } = useCalender();
	const { theme, changeTheme } = useTheme();

	return (
		<div className='month-year-container'>
			<select value={month} onChange={setMonth}>
				{monthNames.map((m: string, index: number) => (
					<option value={index} key={index}>
						{m}
					</option>
				))}
			</select>
			<Icon name={theme === 'light' ? 'sun' : 'moon'} onClick={changeTheme} />
			<select value={year} onChange={setYear}>
				{years.map((y) => (
					<option key={y}>{y}</option>
				))}
			</select>
		</div>
	);
};
