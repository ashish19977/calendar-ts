import { createContext, useEffect, useState } from 'react';
import { TAppContext, TDay, TTodo } from './types';
import {
	currentDay,
	getExtraDaysAtStartAndEnd,
	getMonthDays,
	getTodos,
	getYearsForSelect,
	updateTodo as _updateTodo,
	deleteTodo as _deleteTodo,
	addTodo as _addTodo,
	getTheme,
	setTheme as _setTheme,
	themes,
} from './utils';

const currentYear = new Date().getFullYear();
const currentMonth = new Date().getMonth();

export const AppContext = createContext<TAppContext>({} as TAppContext);

export const AppContextProvider = (props: { children: React.ReactElement }) => {
	const [years, setYears] = useState<number[]>([]);
	const [days, setDays] = useState<TDay[]>([]);
	const [year, setYear] = useState(currentYear);
	const [month, setMonth] = useState(currentMonth);
	const [todos, setTodos] = useState(getTodos(new Date().toString()));
	const [selectedDay, setSelectedDay] = useState<TDay>(currentDay);
	const [selectedTodo, setSelectedTodo] = useState<TTodo>();
	const [theme, setTheme] = useState<string>(getTheme());

	const onDayClick = (day: TDay) => {
		setSelectedDay(day);
	};

	const updateTodo = (todo: Partial<TTodo>) => {
		_updateTodo(selectedDay.dateStr, todo);
		setTodos(getTodos(selectedDay.dateStr));
		setSelectedTodo(undefined);
	};

	const deleteTodo = (id: number) => {
		_deleteTodo(selectedDay.dateStr, id);
		setTodos(getTodos(selectedDay.dateStr));
	};

	const addTodo = (todo: TTodo) => {
		_addTodo(selectedDay.dateStr, todo);
		setTodos(getTodos(selectedDay.dateStr));
	};

	const changeTheme = () => {
		const changedTheme = theme === themes.light ? themes.dark : themes.light;
		setTheme(changedTheme);
		_setTheme(changedTheme);
	};

	useEffect(() => {
		let days = getMonthDays(year, month);
		days = getExtraDaysAtStartAndEnd(days);
		setDays(days);
		const years = getYearsForSelect(year);
		setYears(years);
	}, [month, year]);

	useEffect(() => {
		setTodos(getTodos(selectedDay.dateStr));
	}, [selectedDay]);

	return (
		<AppContext.Provider
			value={{
				year,
				setYear,
				days,
				setDays,
				years,
				setYears,
				month,
				setMonth,
				todos,
				setTodos,
				selectedDay,
				onDayClick,
				updateTodo,
				addTodo,
				selectedTodo,
				setSelectedTodo,
				deleteTodo,
				theme,
				changeTheme,
			}}
		>
			{props.children}
		</AppContext.Provider>
	);
};
