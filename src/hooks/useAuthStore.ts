import {create} from 'zustand';

interface IAuthState {
  hasAuth: boolean;
  setAuth: (isLoading: boolean) => void;
}

export const useAuthStore = create<IAuthState>(set => ({
  hasAuth: false,
  setAuth: (hasAuth: boolean) => set(() => ({hasAuth})),
}));
