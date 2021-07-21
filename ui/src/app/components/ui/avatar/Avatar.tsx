import { FC } from 'react';
import { StyledAvatar } from './Avatar.style';
import { PersonIcon } from '../../icons';

interface IAvatarProps {
  alt?: string;
  src?: string;
  size?: number;
}

const Avatar: FC<IAvatarProps> = ({
  alt,
  src,
  size,
}) => {
  return <StyledAvatar alt={alt} src={src} size={size}>
    {!src && <PersonIcon style={{ fontSize: (size || 50) / 2 }} />}
  </StyledAvatar>;
};

export default Avatar;
