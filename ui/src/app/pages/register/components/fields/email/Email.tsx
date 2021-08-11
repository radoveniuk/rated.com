import { FC } from 'react';
import TextField from 'app/components/forms/text-field';
import useTranslate from 'app/hooks/useTranslate';
import { EmailWrapper } from './Email.style';

type EmailProps = {};

const Email: FC<EmailProps> = () => {
  const { localize } = useTranslate();

  return (
    <EmailWrapper>
      <TextField
        name="email"
        label={localize('register.email')}
        type="email"
        fullWidth
      />
    </EmailWrapper>
  );
};

Email.defaultProps = {};

export default Email;
