import { Tday, TTodo } from './types';

const currentDate = new Date();

export const dayNames = [
  'Sunday',
  'Monday',
  'Tuesday',
  'Wednesday',
  'Thursday',
  'Friday',
  'Saturday',
];

export enum themes {
  light = 'light',
  dark  = 'dark'
}

export const currentDay: Tday = {
  date: currentDate.getDate(),
  year: currentDate.getFullYear(),
  month: currentDate.getMonth(),
  day: dayNames[currentDate.getDay()],
  dateStr: new Date().toLocaleDateString(),
};

export const getYearsForSelect = (
  year = currentDate.getFullYear()
): number[] => {
  const years = [year];
  let yearsToShow = 50;

  while (yearsToShow > 0) {
    years.push(year + 50 - yearsToShow + 1);
    years.unshift(year - 50 + yearsToShow - 1);
    yearsToShow--;
  }
  return years;
};

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

export const getMonthDays = (year: number, month: number): Tday[] => {
  let numberOfDaysInMonth = new Date(year, month + 1, 0).getDate();
  const days: Tday[] = [];

  while (numberOfDaysInMonth > 0) {
    const thisDay = new Date(year, month, numberOfDaysInMonth);
    days.unshift({
      date: numberOfDaysInMonth,
      year,
      month,
      day: dayNames[thisDay.getDay()],
      dateStr: thisDay.toLocaleDateString(),
    });

    numberOfDaysInMonth--;
  }
  return days;
};

export const getExtraDaysAtStartAndEnd = (days: Tday[]): Tday[] => {
  const newDays = [...days];
  const firstDay = days[0];
  const lastDay = days[days.length - 1];
  const { year, month } = firstDay;

  let numberOfDaysToAddAtStart = dayNames.indexOf(firstDay.day);
  let numberOfDaysToAddAtEnd = 6 - dayNames.indexOf(lastDay.day);

  let endOfPrevMonth = 0;
  while (numberOfDaysToAddAtStart > 0) {
    const day = new Date(year, month, endOfPrevMonth);
    newDays.unshift({
      date: day.getDate(),
      year: day.getFullYear(),
      month: day.getMonth(),
      day: dayNames[day.getDay()],
      dateStr: day.toLocaleDateString(),
    });
    numberOfDaysToAddAtStart--;
    endOfPrevMonth--;
  }

  let startOfNextMonth = 1;
  while (numberOfDaysToAddAtEnd > 0) {
    const day = new Date(year, month + 1, startOfNextMonth);
    newDays.push({
      date: day.getDate(),
      year: day.getFullYear(),
      month: day.getMonth(),
      day: dayNames[day.getDay()],
      dateStr: day.toLocaleDateString(),
    });
    numberOfDaysToAddAtEnd--;
    startOfNextMonth++;
  }

  return newDays;
};

export const addTodo = (date: string, todo: Pick<TTodo, 'title'>) => {
  let todos: any = localStorage.getItem(date) || '[]';
  todos = JSON.parse(todos);
  todos.unshift({ ...todo, id: Date.now(), isCompleted: false });
  localStorage.setItem(date, JSON.stringify(todos));
};

export const getTodos = (date: string): TTodo[] => {
  const todos = localStorage.getItem(date) || '[]';
  const arrangedTodos = [
    ...JSON.parse(todos).filter((todo: TTodo) => !todo.isCompleted),
    ...JSON.parse(todos).filter((todo: TTodo) => todo.isCompleted)
  ];
  return arrangedTodos;
};

export const updateTodo = (date: string, updates: Partial<TTodo>) => {
  let todos = getTodos(date);

  todos = todos.map((todo) => {
    if (todo.id === updates.id) todo = { ...todo, ...updates };
    return todo;
  });

  localStorage.setItem(date, JSON.stringify(todos));
};

export const deleteTodo = (date: string, id: number) => {
  let todos = getTodos(date);
  todos = todos.filter((todo) => todo.id !== id);
  localStorage.setItem(date, JSON.stringify(todos));
};

export const setTheme = (theme: themes) => {
  localStorage.setItem('theme', theme);
};

export const getTheme = (): string => {
  return localStorage.getItem('theme') || themes.light;
};