import { createTheme } from '@material-ui/core/styles';
import { colors } from './styles-variables';

export const theme = createTheme({
  palette: {
    primary: {
      main: colors.primary,
      contrastText: colors.contrastText,
    },
  },
});
