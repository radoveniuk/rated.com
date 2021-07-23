import { FC } from 'react';
import InputAdornment from '@material-ui/core/InputAdornment';
import { TextFieldStyled } from './TextField.style';
import { modificateInputValue } from '../../../helpers/input-modificators';
import { TextFieldProps } from '@material-ui/core';

type AdditionalTextFieldProps = {
  fullWidth?: boolean,
  multiline?: boolean,
  defaultValue?: string | number | null,
  value?: string | number | null,
  onChangeValue: (value: any) => void,
  onKeyPress?: () => void,
  inputModificators?: any[] | null,
  error?: boolean,
  errorText?: string | null,
  endAdornment?: any,
  startAdornment?: any,
  min?: string | null,
  max?: string | null,
}

type CustomTextFieldProps = TextFieldProps & AdditionalTextFieldProps;

const TextField: FC<CustomTextFieldProps> = ({
  fullWidth,
  multiline,
  defaultValue,
  value,
  onChangeValue: onChange,
  onKeyPress,
  inputModificators,
  error,
  errorText,
  endAdornment,
  startAdornment,
  min,
  max,
  ...rest
}) => {
  const onChangeHandler = (event: any) => {
    let currentValue = event.target.value;
    if (!!inputModificators && inputModificators.length) {
      inputModificators.forEach((modificator) => {
        currentValue = modificateInputValue(modificator, currentValue);
      });
    }
    if (onChange) {
      onChange(currentValue);
    }
  };

  return (
    <TextFieldStyled
      value={defaultValue !== null ? undefined : value}
      defaultValue={value !== null ? undefined : defaultValue}
      multiline={multiline}
      fullWidth={fullWidth}
      error={error}
      helperText={errorText}
      onChange={onChangeHandler}
      onKeyPress={onKeyPress}
      inputProps={{
        min: min !== null ? min : undefined,
        max: max !== null ? max : undefined,
      }}
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
  defaultValue: null,
  value: null,
  inputModificators: null,
  error: false,
  errorText: null,
  onChangeValue: () => {},
  onKeyPress: () => {},
  endAdornment: null,
  startAdornment: null,
  min: null,
  max: null,
};

export default TextField;
