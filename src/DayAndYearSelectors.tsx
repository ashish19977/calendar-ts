import { AppContext } from './Context';
import { monthNames } from './utils';
import { Icon } from './Icon';
import { FC, useContext } from 'react';

export const DayAndYearSelector: FC = () => {
	const { year, month, setMonth, setYear, years, theme, changeTheme } = useContext(AppContext);

	return (
		<div className='month-year-container'>
			<select
				value={month}
				onChange={(e) => {
					setMonth(+e.target.value);
				}}
			>
				{monthNames.map((m: string, index: number) => (
					<option value={index} key={index}>
						{m}
					</option>
				))}
			</select>
			<Icon name={theme === 'light' ? 'sun' : 'moon'} onClick={changeTheme} />
			<select value={year} onChange={(e) => setYear(+e.target.value)}>
				{years.map((y) => (
					<option key={y}>{y}</option>
				))}
			</select>
		</div>
	);
};
