import { FC } from 'react';
import { IconButtonStyled } from './IconButton.style';

const IconButton: FC = ({
  children,
}) => {
  return (
    <IconButtonStyled>
      {children}
    </IconButtonStyled>
  );
};

export default IconButton;
