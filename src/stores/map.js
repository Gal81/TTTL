import { create } from "zustand";
import { generateRows } from "../utilities/generateRows";

const useStore = create((set) => ({
  rows: generateRows(20),
  addRows: () => {
    const newRows = generateRows(20);
    set((state) => ({ rows: [...state.rows, ...newRows] }));
  },
}));

export default useStore;