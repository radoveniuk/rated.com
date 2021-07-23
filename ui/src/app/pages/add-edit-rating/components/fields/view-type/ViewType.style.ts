import { colors } from 'app/styles/styles-variables';
import styled from 'styled-components';

export const ViewTypeWrapper = styled.div`
  margin: 24px auto;
  width: fit-content;
  .MuiFormGroup-root {
    flex-direction: row;
  }

  .type-label {
    font-size: 12px;
    color: ${colors.paleText};
    text-align: left;
  }
`;
