import { colors } from 'app/styles/styles-variables';
import styled from 'styled-components';

export const RateWrapper = styled.div`
  display: flex;
  height: 100%;
  align-items: center;
  justify-content: center;

  .title {
    font-size: 2rem;
  }

  .description {
    text-align: center;
    color: ${colors.paleText};
  }

  .rating-wrapper {
    display: flex;
    justify-content: center;
    margin-top: 24px;
  }

  .done-icon-wrap {
    text-align: center;
    margin-top: 24px;
    color: ${colors.primary};

    .MuiSvgIcon-root {
      width: 4em;
      height: 4em;
    }
  }
`;
