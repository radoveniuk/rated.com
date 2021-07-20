import MaterialRating from '@material-ui/lab/Rating';
import { BaseSyntheticEvent, FC } from 'react';
import { RatingWrapper } from './Rating.style';

interface IRatingProps {
  name: string;
  defaultValue: number;
  maxValue: number;
  precision: number;
  onChange: (value: number | null) => void;
  size?: 'small' | 'large' | 'medium';
  disabled?: boolean;
}

const Rating: FC<IRatingProps> = ({
  name,
  defaultValue,
  maxValue,
  precision,
  onChange,
  size,
  disabled,
}) => {
  const changeHandler = (e: BaseSyntheticEvent, newValue: number | null) => {
    onChange(newValue);
  };
  return (
    <RatingWrapper>
      <MaterialRating
        name={name}
        precision={precision}
        defaultValue={defaultValue}
        max={maxValue}
        onChange={changeHandler}
        size={size}
        disabled={disabled}
      />
    </RatingWrapper>
  );
};

export default Rating;
