import { create } from 'zustand';

interface PersonalizeModalState {
  isOpen: boolean;
  show: () => void;
  close: () => void;
}

export const usePersonalizeModalStore = create<PersonalizeModalState>()(
  (set) => ({
    isOpen: false,
    show: () => set(() => ({ isOpen: true })),
    close: () => set(() => ({ isOpen: false })),
  }),
);
