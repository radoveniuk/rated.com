import { FC } from 'react';
import LoaderWrapper from './Loader.style';
import CircularProgressBar from '../circular-progress-bar';

interface ILoaderProps {
  isFixed?: boolean,
  zIndex?: number,
  text?: string | null,
  size?: number,
}

const Loader: FC<ILoaderProps> = ({
  isFixed,
  zIndex,
  text,
  size,
}) => {
  return <LoaderWrapper isFixed={isFixed} zIndex={zIndex}>
    {zIndex}
    <div className="loader-info">
      <CircularProgressBar size={size} value={40} />
      {!!text && <div className="loading-text">{text}</div>}
    </div>
  </LoaderWrapper>;
};

export default Loader;
