import styled, { css } from 'styled-components';

interface ILoaderProps {
  zIndex?: number;
  isFixed?: boolean;
}

const Loader = styled.div<ILoaderProps>`
  display: block;
  position: absolute;
  width: 100%;
  height: 100%;
  left: 0;
  top: 0;
  z-index: ${({ zIndex }) => (zIndex)};
  background-color: rgba(255, 255, 255, 0.7);

  .loader-info {
    position: relative;
    width: 190px;
    height: 100px;
    transform: translate(-50%, -50%);
    left: 50%;
    top: 50%;
    text-align: center;
    ${({ isFixed }) => (isFixed
    ? css`
          position: fixed;
        `
    : '')}

    .loading-text {
      position: relative;
      width: 100%;
      text-align: center;
      top: 40px;
      font-weight: bold;
    }
  }
`;

export default Loader;
