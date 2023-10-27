import { create } from 'zustand';

export const useShowTrailerStore = create<{
  showTrailer: boolean;
  trailerVisible: () => void;
  trailerNotVisible: () => void;
}>((set) => ({
  showTrailer: false,
  trailerVisible: () => set({ showTrailer: true }),
  trailerNotVisible: () => set({ showTrailer: false }),
}));
