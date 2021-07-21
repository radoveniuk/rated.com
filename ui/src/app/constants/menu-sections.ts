import { HomeIcon, PersonIcon, SearchIcon } from '../components/icons';

export const MenuSections = [
  {
    label: 'menu.home',
    value: '',
    to: '',
    Icon: HomeIcon,
  },
  {
    label: 'menu.search',
    value: 'search',
    to: '/search',
    Icon: SearchIcon,
  },
  {
    label: 'menu.profile',
    value: 'profile',
    to: '/profile',
    Icon: PersonIcon,
  },
];
