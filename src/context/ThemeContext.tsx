import React, { createContext, useContext, useState, useEffect } from 'react';

export type ThemeMode = 'zoom-red' | 'crimson-red' | 'cyber-cyan' | 'obsidian-light';

export interface ThemeConfig {
  id: ThemeMode;
  name: string;
  badge: string;
  accentHex: string;
  accentHoverHex: string;
  bgBaseHex: string;
  cardBgHex: string;
  isLight?: boolean;
}

export const THEMES: Record<ThemeMode, ThemeConfig> = {
  'zoom-red': {
    id: 'zoom-red',
    name: 'Zoom Red',
    badge: '🏎️ Racing Red',
    accentHex: '#FF0033',
    accentHoverHex: '#D9002B',
    bgBaseHex: '#08080A',
    cardBgHex: '#121216',
    isLight: false,
  },
  'crimson-red': {
    id: 'crimson-red',
    name: 'Crimson Red',
    badge: '🔥 Crimson Red',
    accentHex: '#E11D48',
    accentHoverHex: '#BE123C',
    bgBaseHex: '#0D0D0D',
    cardBgHex: '#171717',
    isLight: false,
  },
  'cyber-cyan': {
    id: 'cyber-cyan',
    name: 'Cyber Cyan',
    badge: '⚡ Electric Cyan',
    accentHex: '#00F0FF',
    accentHoverHex: '#00B8C4',
    bgBaseHex: '#06080E',
    cardBgHex: '#0F1420',
    isLight: false,
  },
  'obsidian-light': {
    id: 'obsidian-light',
    name: 'Obsidian Stealth',
    badge: '⚫ Stealth Black',
    accentHex: '#FF0033',
    accentHoverHex: '#D9002B',
    bgBaseHex: '#050505',
    cardBgHex: '#121212',
    isLight: false,
  },
};

interface ThemeContextType {
  theme: ThemeMode;
  setTheme: (theme: ThemeMode) => void;
  config: ThemeConfig;
}

const ThemeContext = createContext<ThemeContextType | undefined>(undefined);

export const ThemeProvider: React.FC<{ children: React.ReactNode }> = ({ children }) => {
  const [theme, setThemeState] = useState<ThemeMode>(() => {
    const saved = localStorage.getItem('zoom_drive_theme') as ThemeMode;
    return saved && THEMES[saved] ? saved : 'zoom-red';
  });

  const setTheme = (newTheme: ThemeMode) => {
    setThemeState(newTheme);
    localStorage.setItem('zoom_drive_theme', newTheme);
  };

  useEffect(() => {
    document.documentElement.setAttribute('data-theme', theme);
    if (THEMES[theme].isLight) {
      document.documentElement.classList.add('light-mode');
    } else {
      document.documentElement.classList.remove('light-mode');
    }
  }, [theme]);

  return (
    <ThemeContext.Provider value={{ theme, setTheme, config: THEMES[theme] }}>
      {children}
    </ThemeContext.Provider>
  );
};

export const useTheme = () => {
  const context = useContext(ThemeContext);
  if (!context) {
    throw new Error('useTheme must be used within a ThemeProvider');
  }
  return context;
};
