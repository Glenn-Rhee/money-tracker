import { create } from "zustand";

interface PopoverStore {
  openId: string | null;
  autoFocus: boolean;
  setAutoFocus: (v: boolean) => void;
  setOpenId: (v: string | null) => void;
}

export const usePopover = create<PopoverStore>((set) => ({
  openId: null as string | null,
  autoFocus: false,
  setAutoFocus: (v) => set({ autoFocus: v }),
  setOpenId: (v) => set({ openId: v }),
}));
