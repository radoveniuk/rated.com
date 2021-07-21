import { ThemeProvider } from '@material-ui/core/styles';
import GlobalStyle from './styles/GlobalStyles.sc';
import Navigation from './components/navigation';
import { theme } from './styles/theme';
import Router from './routes';

function App () {
  return (
    <ThemeProvider theme={theme}>
      <GlobalStyle />
      <Router>
        <Navigation currentPage="" />
      </Router>
    </ThemeProvider>
  );
}

export default App;
