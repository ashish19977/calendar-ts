import { setLocalStorageItem } from './utils';
import { useStore } from './store';
import { themes } from './constants';

const useTheme = () => {
  const { theme, setState } = useStore();

  const changeTheme = () => {
    const changedTheme = theme === themes.light ? themes.dark : themes.light;
    setState((oldState) => ({
      ...oldState,
      theme: changedTheme,
    }));
    setLocalStorageItem('theme', { theme: changedTheme });
  };

  return { theme, changeTheme };
};

export { useTheme };
