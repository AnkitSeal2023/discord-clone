'use client';

import { useGlobal } from "@/context/GlobalContext";

export default function ThemeToggle() {
  const { theme, setTheme } = useGlobal();

  return (
    <div>
      <p>Current theme: {theme}</p>
      <button onClick={() => setTheme(theme === 'dark' ? 'light' : 'dark')}>
        Toggle theme
      </button>
    </div>
  );
} 