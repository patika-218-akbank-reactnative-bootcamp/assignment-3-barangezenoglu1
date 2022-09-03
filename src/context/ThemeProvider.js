import React, {useState} from 'react';
import {ThemeContext} from './ThemeContext';
import {lightTheme} from '../data/theme';

export const ThemeProvider = ({children}) => {
  const [theme, setTheme] = useState(lightTheme);
  return (
    <ThemeContext.Provider
      value={{
        theme,
        setTheme,
      }}>
      {children}
    </ThemeContext.Provider>
  );
};
