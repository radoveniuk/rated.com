import { ThemeProvider } from '@material-ui/core/styles';
import { QueryClient, QueryClientProvider } from 'react-query';
import GlobalStyle from './styles/GlobalStyles.sc';
import Navigation from './components/navigation';
import { theme } from './styles/theme';
import Router from './routes';

function App () {
  const queryClient = new QueryClient();
  return (
    <QueryClientProvider client={queryClient}>
      <ThemeProvider theme={theme}>
        <GlobalStyle />
        <Router>
          <Navigation currentPage="" />
        </Router>
      </ThemeProvider>
    </QueryClientProvider>
  );
}

export default App;
