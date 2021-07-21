import MaterialRating from '@material-ui/lab/Rating';
import { useState, BaseSyntheticEvent, FC } from 'react';

import { RatingWrapper } from './Rating.style';

interface IRatingProps {
  name: string;
  defaultValue: number | null;
  maxValue?: number;
  precision?: number;
  onChange?: (value: number | null) => void;
  size?: 'small' | 'large' | 'medium';
  disabled?: boolean;
  readOnly?: boolean;
}

const Rating: FC<IRatingProps> = ({
  name,
  defaultValue,
  maxValue,
  precision,
  onChange,
  size,
  disabled,
  readOnly,
}) => {
  const [value, setValue] = useState(defaultValue);
  const changeHandler = (e: BaseSyntheticEvent, newValue: number | null) => {
    if (onChange) {
      setValue(newValue);
      onChange(newValue);
    }
  };
  return (
    <RatingWrapper>
      <MaterialRating
        name={name}
        precision={precision || 1}
        // defaultValue={value}
        value={value}
        max={maxValue || 5}
        onChange={changeHandler}
        size={size}
        disabled={disabled}
        readOnly={readOnly}
      />
    </RatingWrapper>
  );
};

export default Rating;
