import { FC } from 'react';
import TextField from 'app/components/forms/text-field';
import useTranslate from 'app/hooks/useTranslate';
import useDebounceUpdate from 'app/hooks/useDebounceUpdate';
import { EmailWrapper } from './Email.style';
import { useAppSelector } from 'app/hooks/useAppSelector';
import { useAppDispatch } from 'app/hooks/useAppDispatch';
import { selectRegisterForm, updateForm } from 'app/store/reducers/register-form/registerFormSlice';

type EmailProps = {};

const Email: FC<EmailProps> = () => {
  const { localize } = useTranslate();
  const { registerForm } = useAppSelector(selectRegisterForm);
  const dispatch = useAppDispatch();
  const [value, setValue] = useDebounceUpdate('', registerForm.email, (email: string) => { dispatch(updateForm({ email })); });

  return (
    <EmailWrapper>
      <TextField
        label={localize('register.email')}
        value={value}
        onChangeValue={setValue}
        type="email"
        fullWidth
        multiline
      />
    </EmailWrapper>
  );
};

Email.defaultProps = {};

export default Email;
