import { Dispatch, SetStateAction } from 'react';

declare type Tday = {
  date: number;
  year: number;
  month: number;
  day: string;
  dateStr: string;
};

declare type TAppContext = {
  years: number[];
  year: number;
  days: Tday[];
  month: number;
  selectedTodo: TTodo|undefined;
  todos: TTodo[];
  selectedDay: Tday;
  theme: string;
  onDayClick: (day: Tday) => void;
  setDays: Dispatch<SetStateAction<Tday[]>>;
  setYear: Dispatch<SetStateAction<number>>;
  setYears: Dispatch<SetStateAction<number[]>>;
  setTodos: Dispatch<SetStateAction<TTodo[]>>;
  setMonth: Dispatch<SetStateAction<number>>;
  setSelectedTodo: Dispatch<SetStateAction<TTodo|undefined>>;
  updateTodo: (todo: Partial<TTodo>) => void;
  deleteTodo: (id: number) => void;
  addTodo: (todo: TTodo) => void;
  changeTheme: () => void;
};

declare type TTodo = {
  id: number;
  isCompleted: boolean;
  title: string;
};
