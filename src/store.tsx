import { createContext, useContext, useState, useMemo } from 'react';
import { TAppContext1, TAppState } from './types';
import { currentDay, getTodos, getLocalStorageItem } from './utils';

const currentYear = new Date().getFullYear();
const currentMonth = new Date().getMonth();

const initialState: TAppState = {
  theme: getLocalStorageItem('theme'),
  year: currentYear,
  month: currentMonth,
  todos: getTodos(new Date().toString()),
  selectedDay: currentDay,
  years: [],
  days: [],
};

const AppContext = createContext({
  ...initialState,
} as TAppContext1);

const AppContextProvider = (props: { children: React.ReactElement }) => {
  const [state, setState] = useState<TAppState>(initialState);

  const values = useMemo(() => ({ ...state, setState }), [state]);

  return <AppContext.Provider value={values}>{props.children}</AppContext.Provider>;
};

const useStore = () => useContext(AppContext);

export { AppContextProvider, useStore };
