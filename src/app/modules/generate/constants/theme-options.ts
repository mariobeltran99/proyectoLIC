import { Theme } from '../interfaces/theme';

const ThemeOptions: Theme[] = [
  {
    id: 1,
    name: 'CSS Theme default 1',
    urlAsset: 'css/theme-default-1.css'
  },
  {
    id: 2,
    name: 'CSS Theme default 2',
    urlAsset: 'css/theme-default-2.css'
  }
];

export const getThemeOptions = () => {
  return ThemeOptions.sort((a, b) => (a?.id - b?.id));
};
