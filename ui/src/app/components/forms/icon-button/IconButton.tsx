import { FC } from 'react';
import { IconButtonStyled } from './IconButton.style';

type IconButtonProps = {
  onClick?: () => void,
  disabled?: boolean,
}

const IconButton: FC<IconButtonProps> = ({
  onClick,
  children,
  disabled,
}) => {
  return (
    <IconButtonStyled onClick={onClick} disabled={disabled}>
      {children}
    </IconButtonStyled>
  );
};

export default IconButton;
