import { FC } from 'react';
import TextField from 'app/components/forms/text-field';
// import { useAppDispatch } from 'app/hooks/useAppDispatch';
// import { useAppSelector } from 'app/hooks/useAppSelector';
// import useDebounceUpdate from 'app/hooks/useDebounceUpdate';
import useTranslate from 'app/hooks/useTranslate';
// import { selectRegisterForm, updateForm } from 'app/store/reducers/register-form/registerFormSlice';
import { UsernameWrapper } from './Username.style';

const Username: FC = () => {
  const { localize } = useTranslate();
  // const { registerForm } = useAppSelector(selectRegisterForm);
  // const dispatch = useAppDispatch();
  // const [value, setValue] = useDebounceUpdate('', registerForm.username, (username: string) => { dispatch(updateForm({ username })); });

  return (
    <UsernameWrapper>
      <TextField
        name="username"
        label={localize('register.username')}
        fullWidth
      />
    </UsernameWrapper>
  );
};

export default Username;
