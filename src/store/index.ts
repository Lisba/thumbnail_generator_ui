import { create } from 'zustand';
import { devtools } from 'zustand/middleware';
import { themes } from '@helpers';

type State = {
  theme: themes;
};

type Actions = {
  setTheme: (theme: themes) => void;
};

const initialState: State = {
  theme: themes.green,
};

export const useStore = create<State & Actions>()(
  devtools((set) => ({
    ...initialState,
    setTheme: (theme) =>
      set((state) => ({
        ...state,
        theme,
      })),
  }))
);
