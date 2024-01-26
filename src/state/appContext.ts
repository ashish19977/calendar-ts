import { createContext } from 'react';
import { TAppContext } from '../types';
import { initialState } from '../constants';

const AppContext = createContext({
	...initialState,
} as TAppContext);

export default AppContext;
