import type { Theme } from './index';
import { nordtheme } from './nordtheme';

const { colors } = nordtheme;
colors['secondary-text'] = '#f24b00';

export const installTheme: Theme = {
  name: 'Install',
  base: 'dark',
  colors,
  overrides: {
    sidebars: false,
    image: 'https://malsync.moe/images/install-full.webp',
    opacity: 0,
  },
};
