import { create } from 'zustand';

type User = { id: string; name: string; email: string; role: 'user' | 'admin' } | null;

type State = {
  token: string | null;
  user: User;
  setAuth: (token: string, user: NonNullable<User>) => void;
  clearAuth: () => void;
};

export const useUserStore = create<State>((set) => ({
  token: null,
  user: null,
  setAuth: (token, user) => set({ token, user }),
  clearAuth: () => set({ token: null, user: null })
}));

 