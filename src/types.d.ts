import { Dispatch, SetStateAction } from 'react';
import { themes } from './utils';

declare type TDay = {
	date: number;
	year: number;
	month: number;
	day: string;
	dateStr: string;
};

declare type TTodo = {
	id: number;
	isCompleted: boolean;
	title: string;
};

declare type TAddEditTodoProps = {
	todo: TTodo | null;
	setSelectedTodo: Dispatch<SetStateAction<TTodo | null>>;
};

declare type TIconProps = {
	name: 'check' | 'pencil' | 'trash' | 'moon' | 'sun' | 'check-bedge' | 'plus' | 'x-mark';
	onClick?: () => void;
	height?: number;
	width?: number;
	className?: string;
	isButton?: boolean;
	extra?: object;
};

declare type TTodoProps = {
	todo: TTodo;
	setSelectedTodo: Dispatch<SetStateAction<TTodo | null>>;
};

declare type TTodoListProps = {
	todos: TTodo[];
	day: TDay;
};

declare type TDayProps = {
	day: TDay;
};

declare type TQuoteState = {
	quote: string;
	hasError: boolean;
	isLoading: boolean;
};

declare type TAppState = {
	years: number[];
	year: number;
	days: TDay[];
	month: number;
	selectedTodo?: TTodo | undefined;
	todos: TTodo[];
	selectedDay: TDay;
	theme: string;
};

declare type TAppContext1 = TAppState & {
	setState: Dispatch<SetStateAction<TAppState>>;
};

declare type TLocalStorage = {
	theme?: themes;
};

declare type TQuote = {
	id: number;
	quote: string;
	author: string;
};

declare type TQuoteApiRes = {
	quotes: TQuote[];
	total: number;
	skip: skip;
	limit: number;
};

declare type TQuoteState = {
	quote: string;
	isLoading: boolean;
	hasError: boolean;
};

declare type TAppState = {
	years: number[];
	year: number;
	days: TDay[];
	month: number;
	selectedTodo?: TTodo | undefined;
	todos: TTodo[];
	selectedDay: TDay;
	theme: string;
};

declare type TAppContext1 = TAppState & {
	setState: Dispatch<SetStateAction<TAppState>>;
};

declare type TLocalStorage = {
	theme?: themes;
};

declare type TQuote = {
	id: number;
	quote: string;
	author: string;
};

declare type TQuoteApiRes = {
	quotes: TQuote[];
	total: number;
	skip: skip;
	limit: number;
};

declare type TQuoteState = {
	quote: string;
	isLoading: boolean;
	hasError: boolean;
};
