import * as React from 'react';

import getInitialTheme from './getInitialTheme';
import { ThemeContextProvider } from './Context';

type ThemeProviderProps = {
  initialTheme?: string;
};

const ThemeProvider: React.FC<ThemeProviderProps> = ({ initialTheme, children }) => {
  const [theme, setTheme] = React.useState(getInitialTheme);

  const rawSetTheme = (rawTheme: string) => {
    const root = window.document.documentElement;
    const isDark = rawTheme === 'dark';
    root.classList.remove(isDark ? 'light' : 'dark');
    root.classList.add(rawTheme);
    localStorage.setItem('color-theme', rawTheme);
  };

  if (initialTheme) {
    rawSetTheme(initialTheme);
  }

  React.useEffect(() => {
    rawSetTheme(theme);
  }, [theme]);

  return <ThemeContextProvider value={{ theme, setTheme }}>{children}</ThemeContextProvider>;
};

export default ThemeProvider;
