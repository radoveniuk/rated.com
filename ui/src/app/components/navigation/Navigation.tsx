import { useEffect, useState, FC } from 'react';
import BottomNavigation from '@material-ui/core/BottomNavigation';
import BottomNavigationAction from '@material-ui/core/BottomNavigationAction';
import { Link, useLocation } from 'react-router-dom';
import { NavigationWrapper } from './Navigation.style';
import { MenuSections } from 'app/constants/menu-sections';
import useTranslate from 'app/hooks/useTranslate';

const Navigation: FC<{ currentPage: string }> = ({ currentPage }) => {
  const { localize } = useTranslate();
  const [value, setValue] = useState(currentPage);
  const location = useLocation();

  useEffect(() => {
    const registry = location.pathname.split('/')[1];
    setValue(registry);
  }, [location]);

  return (
    <NavigationWrapper>
      <BottomNavigation
        value={value}
        onChange={(event, newValue) => {
          setValue(newValue);
        }}
      >
        {MenuSections.map(({
          label,
          to,
          value,
          Icon,
        }) => (
        <BottomNavigationAction
          key={value}
          component={Link}
          to={to}
          label={localize(label)}
          value={value}
          icon={<Icon />}
        />
        ))}
      </BottomNavigation>
    </NavigationWrapper>
  );
};

export default Navigation;
