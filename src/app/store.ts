import { create } from 'zustand';

type store = {
  input: string;
  tagsCount: number;
  recomended: string[];
  setTagsCount: (count: number) => void;
  setInput: (input: string) => void;
  setRecomended: (recomended: string[]) => void;
};

const useStore = create<store>((set) => ({
  input: '',
  tagsCount: 0,
  recomended: [],
  setTagsCount: (count) => set((state) => ({ ...state, tagsCount: count })),
  setInput: (input) => set((state) => ({ ...state, input })),
  setRecomended: (recomended) => set((state) => ({ ...state, recomended })),
}));
export default useStore;
