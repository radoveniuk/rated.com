import { colors } from 'app/styles/styles-variables';
import styled from 'styled-components';

export const RegisterFormWrapper = styled.div`
  max-width: 400px;
  margin: 50px auto;
  border: 1px solid ${colors.primary};
  border-radius: 20px;
  text-align: center;

  button {
    margin-bottom: 24px;
  }
`;
