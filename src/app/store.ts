import { create } from 'zustand';

type store = {
  input: string;
  inputArray: string[];
  recomended: string[];
  setInput: (input: string) => void;
  setRecomended: (recomended: string[]) => void;
  setInputArray: (inputArray: string[]) => void;
};

const useStore = create<store>((set) => ({
  input: '',
  inputArray: [],
  recomended: [],
  setInput: (input) => set((state) => ({ ...state, input })),
  setRecomended: (recomended) => set((state) => ({ ...state, recomended })),
  setInputArray: (inputArray) => set((state) => ({ ...state, inputArray })),
}));
export default useStore;
