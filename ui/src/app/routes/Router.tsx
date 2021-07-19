import { FC } from 'react';
import {
  BrowserRouter,
  Switch,
  Route,
} from 'react-router-dom';
import CreateRatingPage from '../pages/create-rating';
import ProfilePage from '../pages/profile';

const Router: FC = ({ children }) => {
  return (
    <BrowserRouter>
      <Switch>
        <Route path="/profile">
          <ProfilePage />
        </Route>
        <Route path="/create-rate">
          <CreateRatingPage />
        </Route>
      </Switch>
      {children}
    </BrowserRouter>
  );
};

export default Router;
