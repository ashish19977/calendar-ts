import { useContext } from 'react';
import AppContext from './appContext';
import AppContextProvider from './AppContextProvider';

const useStore = () => useContext(AppContext);

export { AppContext, AppContextProvider, useStore };
