'use client';

import { createContext, useContext, ReactNode, useState } from 'react';

interface GlobalContextType {
  // Add your global state properties here
  theme: string;
  setTheme: (theme: string) => void;
}

const GlobalContext = createContext<GlobalContextType | undefined>(undefined);

export function GlobalProvider({ children }: { children: ReactNode }) {
  const [theme, setTheme] = useState('dark');

  const value = {
    theme,
    setTheme,
  };

  return (
    <GlobalContext.Provider value={value}>
      {children}
    </GlobalContext.Provider>
  );
}

export function useGlobal() {
  const context = useContext(GlobalContext);
  if (context === undefined) {
    throw new Error('useGlobal must be used within a GlobalProvider');
  }
  return context;
} 