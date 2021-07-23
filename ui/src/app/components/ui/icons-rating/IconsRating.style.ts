import { colors } from 'app/styles/styles-variables';
import styled from 'styled-components';

export const IconsRatingWrapper = styled.div`
  display: flex;
  .like {
    &.active {
      button {
        color: ${colors.success};
      }
    }
  }
  .dislike {
    &.active {
      button {
        color: ${colors.error};
      }
    }
  }
`;
