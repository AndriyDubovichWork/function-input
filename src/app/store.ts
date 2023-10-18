import { create } from 'zustand';

type store = {
  input: string;
  tagsCount: number;
  setTagsCount: (count: number) => void;
  setInput: (input: string) => void;
};

const useStore = create<store>((set) => ({
  input: '',
  tagsCount: 0,
  setTagsCount: (count) => set((state) => ({ ...state, tagsCount: count })),
  setInput: (input) => set((state) => ({ ...state, input })),
}));
export default useStore;
