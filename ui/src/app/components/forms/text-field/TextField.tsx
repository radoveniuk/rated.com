import { FC, memo } from 'react';
import InputAdornment from '@material-ui/core/InputAdornment';
import { TextFieldStyled } from './TextField.style';
import { TextFieldProps } from '@material-ui/core';
import { useField } from 'formik';

type AdditionalTextFieldProps = {
  fullWidth?: boolean,
  multiline?: boolean,
  onKeyPress?: () => void,
  error?: boolean,
  errorText?: string | null,
  endAdornment?: any,
  startAdornment?: any,
}

type CustomTextFieldProps = TextFieldProps & AdditionalTextFieldProps;

const TextField: FC<CustomTextFieldProps> = ({
  fullWidth,
  multiline,
  onKeyPress,
  error,
  errorText,
  endAdornment,
  startAdornment,
  name,
  ...rest
}) => {
  const [field] = useField(name || '');
  console.log(field.value);

  return (
    <TextFieldStyled
      {...field}
      multiline={multiline}
      fullWidth={fullWidth}
      error={error}
      helperText={errorText}
      onKeyPress={onKeyPress}
      InputProps={{
        endAdornment: endAdornment !== null ? <InputAdornment position="end">{endAdornment}</InputAdornment> : null,
        startAdornment: startAdornment !== null
          ? (
          <InputAdornment position="start">
            {startAdornment}
          </InputAdornment>
            )
          : null,
      }}
      {...rest}
    />
  );
};

TextField.defaultProps = {
  fullWidth: true,
  multiline: false,
  error: false,
  errorText: null,
  onKeyPress: () => {},
  endAdornment: null,
  startAdornment: null,
};

export default memo(TextField);
