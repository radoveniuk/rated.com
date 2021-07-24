import { FC } from 'react';
import Username from '../fields/username';
import { RegisterFormWrapper } from './RegisterForm.style';

const RegisterForm: FC = () => {
  return (
    <RegisterFormWrapper>
      <Username />
    </RegisterFormWrapper>
  );
};

export default RegisterForm;
