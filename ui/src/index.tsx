import ReactDOM from 'react-dom';
import './index.css';
import App from './app/App';
import { store } from './app/store';
import { Provider } from 'react-redux';
import * as serviceWorker from './serviceWorker';
import './i18n';
import { Suspense } from 'react';

ReactDOM.render(
  <Suspense fallback={<div></div>}>
    <Provider store={store}>
      <App />
    </Provider>
  </Suspense>,
  document.getElementById('root'),
);

serviceWorker.register();
