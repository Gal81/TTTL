import { create } from "zustand";

const useStore = create((set) => ({
  status: "running",
  score: 0,
  updateScore: (rowIndex) => {
    set((state) => ({ score: Math.max(rowIndex, state.score) }));
  },
  endGame: () => {
    set({ status: "over" });
  },
}));

export default useStore;