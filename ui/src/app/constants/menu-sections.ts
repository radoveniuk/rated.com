import { HomeIcon, PersonIcon, SearchIcon } from '../components/icons';

export const MenuSections = [
  {
    label: 'Home',
    value: '',
    to: '',
    Icon: HomeIcon,
  },
  {
    label: 'Search',
    value: 'search',
    to: '/search',
    Icon: SearchIcon,
  },
  {
    label: 'Profile',
    value: 'profile',
    to: '/profile',
    Icon: PersonIcon,
  },
];
