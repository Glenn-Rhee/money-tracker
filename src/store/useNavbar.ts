import { create } from "zustand";

interface UseNavbar {
  isOpen: boolean;
  setIsOpen: (v: boolean) => void;
}

export const useNavbar = create<UseNavbar>((set) => ({
  isOpen: false,
  setIsOpen(v) {
    set({ isOpen: v });
  },
}));
