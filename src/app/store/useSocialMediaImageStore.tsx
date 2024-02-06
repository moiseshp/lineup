import { SocialMediaImage } from '../utils/types';
import { create } from 'zustand';
import { defaultSocialMediaImage } from '../utils/data';

interface SocialMediaImageState extends SocialMediaImage {
  onSet: (data: SocialMediaImage) => void;
}

export const useSocialMediaImageStore = create<SocialMediaImageState>()(
  (set) => ({
    ...defaultSocialMediaImage,
    onSet: (data) => set((state) => ({ ...state, ...data })),
  }),
);
