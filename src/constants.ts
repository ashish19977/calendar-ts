import { TAppState, TDay } from './types';
import { getLocalStorageItem, getTodos } from './utils';

export enum themes {
	light = 'light',
	dark = 'dark',
}

export const currentDate = new Date();
const currentYear = currentDate.getFullYear();
const currentMonth = currentDate.getMonth();

export const dayNames = ['Sunday', 'Monday', 'Tuesday', 'Wednesday', 'Thursday', 'Friday', 'Saturday'];

export const monthNames = [
	'January',
	'February',
	'March',
	'April',
	'May',
	'June',
	'July',
	'August',
	'September',
	'October',
	'November',
	'December',
];

const defaultQuotes = [
	'If life were predictable it would cease to be life and be without flavor.',
	`In the end, it's not the years in your life that count. It's the life in your years.`,
	'Life is a succession of lessons which must be lived to be understood.',
	'You will face many defeats in life, but never let yourself be defeated.',
];

export const randomDefaultQuote = defaultQuotes[Math.floor(Math.random() * 4)];

const currentDay: TDay = {
	date: currentDate.getDate(),
	year: currentDate.getFullYear(),
	month: currentDate.getMonth(),
	day: dayNames[currentDate.getDay()],
	dateStr: new Date().toLocaleDateString(),
};

export const initialState: TAppState = {
	theme: getLocalStorageItem('theme'),
	year: currentYear,
	month: currentMonth,
	todos: getTodos(currentDate.toString()),
	selectedDay: currentDay,
	years: [],
	days: [],
};
