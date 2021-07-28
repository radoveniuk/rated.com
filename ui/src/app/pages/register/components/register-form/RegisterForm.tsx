import Button from 'app/components/forms/button';
import useTranslate from 'app/hooks/useTranslate';
import { FC } from 'react';
import Email from '../fields/email';
import Username from '../fields/username';
import { RegisterFormWrapper } from './RegisterForm.style';

const RegisterForm: FC = () => {
  const { localize } = useTranslate();
  return (
    <RegisterFormWrapper>
      <Username />
      <Email />
      <Button>{localize('register.submit')}</Button>
    </RegisterFormWrapper>
  );
};

export default RegisterForm;
