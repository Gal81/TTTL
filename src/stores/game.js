import { create } from "zustand";

const useStore = create((set) => ({
  score: 0,
  updateScore: (rowIndex) => {
    set((state) => ({ score: Math.max(rowIndex, state.score) }));
  },
}));

export default useStore;