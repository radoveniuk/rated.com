import React, { useState, useEffect, FC } from 'react';
import RadioGroupMaterial from '@material-ui/core/RadioGroup';
import FormControlLabel from '@material-ui/core/FormControlLabel';
import FormControl from '@material-ui/core/FormControl';
import { Radio } from './RadioGroup.style';
import useTranslate from 'app/hooks/useTranslate';

type RadioGroupProps = {
  list: any[],
  defaultValue?: string | null,
  onChangeValue?: (value: any) => void,
  valueKey?: string,
  labelKey?: string,
}

const RadioGroup: FC<RadioGroupProps> = ({
  list,
  defaultValue,
  onChangeValue,
  valueKey,
  labelKey,
}) => {
  const { localize } = useTranslate();
  const [value, setValue] = useState(defaultValue);
  const handleChange = (event: any) => {
    setValue(event.target.value);
    if (onChangeValue) {
      onChangeValue(event.target.value);
    }
  };

  useEffect(() => {
    setValue(defaultValue);
  }, [defaultValue]);

  return (
    <FormControl component="fieldset">
      <RadioGroupMaterial value={value} onChange={handleChange}>
        {!!list.length && list.map((item, index) => (
          <FormControlLabel key={index} value={item[valueKey || 'value']} control={<Radio color='primary' />} label={localize(item[labelKey || 'label'])} />
        ))}
      </RadioGroupMaterial>
    </FormControl>
  );
};

RadioGroup.defaultProps = {
  list: [],
  valueKey: 'value',
  labelKey: 'label',
  defaultValue: null,
  onChangeValue: () => {},
};

export default RadioGroup;
