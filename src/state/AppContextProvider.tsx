import { useState, useMemo } from 'react';
import { TAppState } from '../types';
import { initialState } from '../constants';
import { AppContext } from '.';

const AppContextProvider = (props: { children: React.ReactElement }) => {
	const [state, setState] = useState<TAppState>(initialState);
	const values = useMemo(() => ({ ...state, setState }), [state]);

	return <AppContext.Provider value={values}>{props.children}</AppContext.Provider>;
};

export default AppContextProvider;
