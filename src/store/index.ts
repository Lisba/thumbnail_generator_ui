import { create } from 'zustand';
import { devtools, persist } from 'zustand/middleware';

type State = {
  isAuth: boolean;
  token: string;
};

type Actions = {
  setToken: (token: string) => void;
  logout: () => void;
};

const initialState: State = {
  isAuth: true,
  token: '',
};

// create store
export const useStore = create<State & Actions>()(
  devtools(
    persist(
      (set) => ({
        ...initialState,

        setToken: (token: string) => {
          set(() => ({ token: token, isAuth: Boolean(token) }));
        },

        logout: () => {
          set(() => ({ isAuth: false, token: '' }));
        },
      }),
      {
        name: 'thumbnail-generator-storage',
      }
    )
  )
);
