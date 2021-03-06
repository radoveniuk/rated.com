export const colors = {
  primary: '#dfc88d',
  warning: '#ffa000',
  contrastText: '#ffffff',
  information: '#1976d2',
  mainGradient: 'linear-gradient(300deg,#26DA98,#166372)',
  tableHeaderBg: '#FAFAFA',
  tableBorder: '#e4e4e4',
  paleText: '#808080',
  blackGrey: '#4a4a4a',
  blackDarkGrey: '#3B3B3B',
  lightGrey: '#e6e6e6',
  success: '#a1c3a5',
  error: '#c07d7d',
};

type breakpointsType = {
  [key: string]: number
}

export const breakpoints: breakpointsType = {
  lg: 1199,
  md: 991,
  sm: 767,
  xs: 575,
};
