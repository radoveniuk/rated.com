import { createGlobalStyle } from 'styled-components';
import { generateStyles } from './StyleGenerator';

const GlobalStyle = createGlobalStyle`
  ${generateStyles()};

  .flex {
    display: flex;
  }

  .pos-relative {
    position: relative;
  }

  .pos-absolute {
    position: absolute;
  }

  .nowrap {
    white-space: nowrap;
  }

  .full-width {
    width: 100%;
  }

  .hided {
    display: none;
  }

  .mt-auto { margin-top: auto !important; }
  .mb-auto { margin-bottom: auto !important; }
  .ml-auto { margin-left: auto !important; }
  .mr-auto { margin-right: auto !important; }
`;

export default GlobalStyle;
