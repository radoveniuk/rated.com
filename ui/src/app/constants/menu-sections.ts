import { HomeIcon, PersonIcon, StarIcon } from '../components/icons';

export const MenuSections = [
  {
    label: 'Home',
    value: '',
    to: '',
    Icon: HomeIcon,
  },
  {
    label: 'Favorites',
    value: 'favorites',
    to: '/favorites',
    Icon: StarIcon,
  },
  {
    label: 'Profile',
    value: 'profile',
    to: '/profile',
    Icon: PersonIcon,
  },
];
