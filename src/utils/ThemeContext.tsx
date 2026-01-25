import React, { createContext, useContext, useState, useEffect, ReactNode } from 'react';
import { generateCSSVariables } from './colors';

type Theme = 'light' | 'dark';

interface ThemeContextType {
  theme: Theme;
  toggleTheme: () => void;
  setTheme: (theme: Theme) => void;
}

const ThemeContext = createContext<ThemeContextType | undefined>(undefined);

export const useTheme = () => {
  const context = useContext(ThemeContext);
  if (context === undefined) {
    throw new Error('useTheme must be used within a ThemeProvider');
  }
  return context;
};

interface ThemeProviderProps {
  children: ReactNode;
}

export const ThemeProvider: React.FC<ThemeProviderProps> = ({ children }) => {
  // Initialize theme from data-theme attribute set by blocking script in _document.tsx
  // This prevents flash of incorrect theme
  const getInitialTheme = (): Theme => {
    if (typeof window !== 'undefined') {
      const dataTheme = document.documentElement.getAttribute('data-theme') as Theme;
      if (dataTheme === 'dark' || dataTheme === 'light') {
        return dataTheme;
      }
      // Fallback: check localStorage or default to dark
      const savedTheme = localStorage.getItem('theme') as Theme;
      if (savedTheme === 'dark' || savedTheme === 'light') {
        return savedTheme;
      }
      return 'dark'; // Default to dark mode
    }
    return 'dark'; // Default to dark mode for SSR
  };

  const [theme, setThemeState] = useState<Theme>(getInitialTheme);

  const setTheme = (newTheme: Theme) => {
    setThemeState(newTheme);
    document.documentElement.setAttribute('data-theme', newTheme);
    localStorage.setItem('theme', newTheme);
  };

  const toggleTheme = () => {
    const newTheme = theme === 'light' ? 'dark' : 'light';
    setTheme(newTheme);
  };

  useEffect(() => {
    // Sync with data-theme attribute in case it was set elsewhere
    const dataTheme = document.documentElement.getAttribute('data-theme') as Theme;
    if (dataTheme && dataTheme !== theme) {
      setThemeState(dataTheme);
    }
  }, [theme]);

  useEffect(() => {
    // Apply CSS variables to document root
    const cssVars = generateCSSVariables(theme);
    Object.entries(cssVars).forEach(([property, value]) => {
      document.documentElement.style.setProperty(property, value);
    });
  }, [theme]);

  return (
    <ThemeContext.Provider value={{ theme, toggleTheme, setTheme }}>
      {children}
    </ThemeContext.Provider>
  );
}; 