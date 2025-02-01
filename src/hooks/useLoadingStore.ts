import {create} from 'zustand';

interface ILoadingState {
  isLoading: boolean;
  setLoading: (isLoading: boolean) => void;
}

export const useLoadingStore = create<ILoadingState>(set => ({
  isLoading: false,
  setLoading: (isLoading: boolean) => set(() => ({isLoading})),
}));
