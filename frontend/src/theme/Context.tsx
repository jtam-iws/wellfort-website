import * as React from 'react';

interface ThemeContextInterface {
  theme: string;
  setTheme: CallableFunction;
}

export const ThemeContext = React.createContext<ThemeContextInterface | null>(null);

export const ThemeContextProvider = ThemeContext.Provider;

export const ThemeContextConsumer = ThemeContext.Consumer;
