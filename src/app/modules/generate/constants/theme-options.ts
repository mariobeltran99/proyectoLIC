import { Theme } from '../interfaces/theme';

const ThemeOptions: Theme[] = [
  {
    id: 1,
    name: 'Tema claro',
    urlAsset: 'css/theme-default-1.css'
  },
  {
    id: 2,
    name: 'Tema oscuro',
    urlAsset: 'css/theme-default-2.css'
  },
  {
    id: 3,
    name: 'Tema especial',
    urlAsset: 'css/theme-default-3.css'
  }
];

export const getThemeOptions = () => {
  return ThemeOptions.sort((a, b) => (a?.id - b?.id));
};
