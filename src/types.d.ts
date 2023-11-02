import { Dispatch, SetStateAction } from 'react';

declare type TDay = {
  date: number;
  year: number;
  month: number;
  day: string;
  dateStr: string;
};

declare type TAppContext = {
  years: number[];
  year: number;
  days: TDay[];
  month: number;
  selectedTodo: TTodo | undefined;
  todos: TTodo[];
  selectedDay: TDay;
  theme: string;
  onDayClick: (day: TDay) => void;
  setDays: Dispatch<SetStateAction<TDay[]>>;
  setYear: Dispatch<SetStateAction<number>>;
  setYears: Dispatch<SetStateAction<number[]>>;
  setTodos: Dispatch<SetStateAction<TTodo[]>>;
  setMonth: Dispatch<SetStateAction<number>>;
  setSelectedTodo: Dispatch<SetStateAction<TTodo | undefined>>;
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

declare type TAddEditTodoProps = {
  todo: TTodo | null;
  setSelectedTodo: Dispatch<SetStateAction<TTodo | null>>;
};

declare type TIconProps = {
  name: 'check' | 'pencil' | 'trash' | 'moon' | 'sun' | 'check-bedge' | 'plus' | 'x-mark';
  onClick?: () => unknown;
  height?: number;
  width?: number;
  className?: string;
  isButton?: boolean;
  extra?: object;
};

declare type TTodoProps = {
  todo: TTodo;
  selectTodo: React.Dispatch<React.SetStateAction<TTodo | null>>;
};

declare type TTodoListProps = {
  todos: TTodo[];
  day: TDay;
};

declare type TDayProps = {
  day: TDay;
};
