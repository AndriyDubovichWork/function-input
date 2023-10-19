import { create } from 'zustand';

type store = {
  input: string;
  inputArray: string[];
  inputStr: string;
  recomended: string[];
  setInput: (input: string) => void;
  setInputStr: (input: string) => void;
  setRecomended: (recomended: string[]) => void;
  setInputArray: (inputArray: string[], input?: string) => void;
};

const useStore = create<store>((set) => ({
  input: '',
  inputStr: '',
  inputArray: [],
  recomended: [],
  setInput: (input) => set((state) => ({ ...state, input })),
  setInputStr: (inputStr) => set((state) => ({ ...state, inputStr })),
  setRecomended: (recomended) => set((state) => ({ ...state, recomended })),
  setInputArray: (inputArray, input = '') =>
    set((state) => {
      let inputStr = '';
      inputArray.map((str) => (inputStr += str));
      return { ...state, input, inputArray, inputStr };
    }),
}));
export default useStore;
