import { FC } from 'react';
import {
  BrowserRouter,
  Switch,
  Route,
} from 'react-router-dom';
import RatePage from 'app/pages/rate';
import ProfilePage from 'app/pages/profile';
import AddEditRatingPage from 'app/pages/add-edit-rating';
import RegisterPage from 'app/pages/register';

const Router: FC = ({ children }) => {
  return (
    <BrowserRouter>
      <Switch>
        <Route path="/profile">
          <ProfilePage />
        </Route>
        <Route path="/rate">
          <RatePage />
        </Route>
        <Route path="/create-rating">
          <AddEditRatingPage />
        </Route>
        <Route path="/edit-rating">
          <AddEditRatingPage />
        </Route>
        <Route path="/register">
          <RegisterPage />
        </Route>
      </Switch>
      {children}
    </BrowserRouter>
  );
};

export default Router;
