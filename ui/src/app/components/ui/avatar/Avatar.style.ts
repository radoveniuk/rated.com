import styled from 'styled-components';
import AvatarMaterial from '@material-ui/core/Avatar';
import { colors } from 'app/styles/styles-variables';

interface IStyledAvatarProps {
  size?: number;
}

export const StyledAvatar = styled(AvatarMaterial)<IStyledAvatarProps>`
  width: ${({ size }) => (`${size || 50}px !important`)};
  height: ${({ size }) => (`${size || 50}px !important`)};
  background-color: ${colors.primary} !important;
  border-radius: 20% !important;
`;
