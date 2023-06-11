import * as React from 'react';
import { TAppContext, Tday, TTodo } from './types';
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

export const AppContext = React.createContext<TAppContext>({} as any);

export const AppContextProvider = (props: { children: React.ReactElement }) => {
  

  const [years, setYears] = React.useState<number[]>([]);
  const [days, setDays] = React.useState<Tday[]>([]);
  const [year, setYear] = React.useState(currentYear);
  const [month, setMonth] = React.useState(currentMonth);
  const [todos, setTodos] = React.useState(getTodos(new Date().toString()));
  const [selectedDay, setSelectedDay] = React.useState<Tday>(currentDay);
  const [selectedTodo, setSelectedTodo] = React.useState<TTodo>();
  const [theme, setTheme] = React.useState<string>(getTheme());

  const onDayClick = (day: Tday) => {
    setSelectedDay(day);
  };

  const updateTodo = (todo: Partial<TTodo>) => {
    _updateTodo(selectedDay.dateStr, todo);
    setTodos(getTodos(selectedDay.dateStr));
    setSelectedTodo(undefined);
  };

  const deleteTodo = (id:number) => {
    _deleteTodo(selectedDay.dateStr, id);
    setTodos(getTodos(selectedDay.dateStr));
  };

  const addTodo = (todo: TTodo) => {
    _addTodo(selectedDay.dateStr, todo);
    setTodos(getTodos(selectedDay.dateStr));
  };

  const changeTheme = () => {
    const changedTheme = theme ===  themes.light ? themes.dark : themes.light
    setTheme(changedTheme)
    _setTheme(changedTheme)
  }

  React.useEffect(() => {
    let days = getMonthDays(year, month);
    days = getExtraDaysAtStartAndEnd(days);
    setDays(days);
    const years = getYearsForSelect(year);
    setYears(years);
  }, [month, year]);

  React.useEffect(() => {
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
        changeTheme
      }}
    >
      {props.children}
    </AppContext.Provider>
  );
};
