import { create } from 'zustand';

export const useModalSearchStore = create<{
  isOpen: boolean;
  toggle: (newVal: boolean) => void;
}>((set) => ({
  isOpen: false,
  toggle: (newVal) => set(() => ({ isOpen: newVal })),
}));
