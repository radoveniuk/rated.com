import AddEditRatingPage from 'app/pages/add-edit-rating';
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
        <Route path="/rate">
          <CreateRatingPage />
        </Route>
        <Route path="/create-rating">
          <AddEditRatingPage />
        </Route>
        <Route path="/edit-rating">
          <AddEditRatingPage />
        </Route>
      </Switch>
      {children}
    </BrowserRouter>
  );
};

export default Router;
