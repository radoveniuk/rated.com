import React, { FC } from 'react';
import { ButtonInput } from './Button.style';

interface IButtonProps {
  variant?: 'text' | 'outlined' | 'contained',
  color?: 'inherit' | 'primary' | 'secondary' | 'default',
  backgroundtype?: string,
  type?: 'submit' | 'reset' | 'button',
}

const Button: FC<IButtonProps> = ({
  children,
  variant,
  color,
  type,
}) => {
  return (
    <ButtonInput type={type} variant={variant} color={color}>
      {children}
    </ButtonInput>
  );
};

Button.defaultProps = {
  variant: 'contained',
  color: 'primary',
};

export default Button;
