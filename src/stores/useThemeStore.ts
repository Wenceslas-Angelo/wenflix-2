import { create } from 'zustand';

export const useThemeStore = create<{
  isDark: boolean;
  toggleTheme: () => void;
}>((set) => ({
  isDark: false,
  toggleTheme: () => set((state) => ({ isDark: !state.isDark })),
}));
