import { FC } from 'react';
import { CircularProgress } from './CircularProgressBar.style';

interface ICircularProgressBarProps {
  size?: number;
  value: number;
  rest?: object
}

const CircularProgressBar: FC<ICircularProgressBarProps> = ({ size, value, ...rest }) => {
  return <CircularProgress size={size} value={value} disableShrink={false} {...rest} />;
};

CircularProgressBar.defaultProps = {
  size: 24,
  value: 24,
};

export default CircularProgressBar;
