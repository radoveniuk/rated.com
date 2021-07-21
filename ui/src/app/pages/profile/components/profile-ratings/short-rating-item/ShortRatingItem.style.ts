import { colors } from 'app/styles/styles-variables';
import { Link } from 'react-router-dom';
import styled from 'styled-components';

export const ShortRatingItemWrapper = styled(Link)`
  flex: 0 0 31%;
  display: flex;
  flex-direction: column;
  border: 1px solid ${colors.lightGrey};
  text-align: center;
  margin: 3px;
  border-radius: 7px;
  cursor: pointer;
  height: 90px;
  justify-content: center;
  transition: box-shadow .2s;
  line-height: 5px;
  text-decoration: none;
  color: initial;

  &:hover {
    box-shadow: 0 0 11px rgba(33,33,33,.2); 
  }
`;
