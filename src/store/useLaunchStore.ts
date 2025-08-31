import { create, StateCreator } from "zustand";
import { createJSONStorage, persist, PersistOptions } from "zustand/middleware";

interface UseLaunchStore {
  isLaunched: boolean;
  isBoarding: boolean;
  page: number;
  setIsLaunched: (v: boolean) => void;
  setIsBoarding: (v: boolean) => void;
  setPage: (v: number) => void;
}

type LaunchStorePersist = (
  config: StateCreator<UseLaunchStore>,
  options: PersistOptions<UseLaunchStore>
) => StateCreator<UseLaunchStore>;

export const useLaunchStore = create<UseLaunchStore>(
  (persist as LaunchStorePersist)(
    (set) => ({
      isLaunched: false,
      isBoarding: true,
      page: 1,
      setIsLaunched: (v) => set({ isLaunched: v }),
      setIsBoarding: (v) => set({ isBoarding: v }),
      setPage: (v) => set({ page: v }),
    }),
    {
      name: "launched",
      storage: createJSONStorage(() => localStorage),
    }
  )
);
