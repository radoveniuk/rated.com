import Button from 'app/components/forms/button';
import useTranslate from 'app/hooks/useTranslate';
import axios from 'axios';
import FormikWrapper from 'app/components/forms/formik-wrapper';
import { useMutation } from 'react-query';
import Email from '../fields/email';
import Username from '../fields/username';
import { RegisterFormWrapper } from './RegisterForm.style';

const initialValues = {
  username: 'тест',
  email: 'емейл',
  profileImage: null,
  description: 'newcomer',
  category: 1,
};

const RegisterForm = () => {
  const { localize } = useTranslate();

  const mutation = useMutation((item: any) =>
    axios.post('https://rated-rho.vercel.app/create/users', item),
  );
  if (mutation.isSuccess) console.log(mutation);

  const submit = (formValue: any) => {
    const u = new URLSearchParams(formValue).toString();
    mutation.mutate(u);
  };

  return (
    <RegisterFormWrapper>
      <FormikWrapper
        initialValues={initialValues}
        enableReinitialize
        onSubmit={submit}
      >
        <Username />
        <Email />
        <Button type="submit">{localize('register.submit')}</Button>
      </FormikWrapper>
    </RegisterFormWrapper>
  );
};

export default RegisterForm;
