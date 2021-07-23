import { css } from 'styled-components';
import { breakpoints } from './styles-variables';

function getDisplays (breakpoint: string) {
  return `
  .d-${breakpoint}-none { display: none !important; }
  .d-${breakpoint}-block { display: block !important; }
  .d-${breakpoint}-flex { display: flex !important; }
`;
}

function getPaddings (size: number) {
  return `
    .p-${size} { padding: ${size}px !important; }
    .pt-${size} { padding-top: ${size}px !important; }
    .pb-${size} { padding-bottom: ${size}px !important; }
    .pl-${size} { padding-left: ${size}px !important; }
    .pr-${size} { padding-right: ${size}px !important; }
  `;
}

function getMargins (size: number) {
  return `
    .mt-${size} { margin-top: ${size}px !important; }
    .mb-${size} { margin-bottom: ${size}px !important; }
    .ml-${size} { margin-left: ${size}px !important; }
    .mr-${size} { margin-right: ${size}px !important; }
  `;
}

function getWidth (size: number) {
  return `
    .w-${size} { width: ${size}% !important; }
  `;
}

function getFlexParams () {
  return `
    .flex-row { flex-direction: row !important; }
    .flex-column { flex-direction: column !important; }
    .flex-row-reverse { flex-direction: row-reverse !important; }
    .flex-column-reverse { flex-direction: column-reverse !important; }

    .flex-wrap { flex-wrap: wrap !important; }
    .flex-nowrap { flex-wrap: nowrap !important; }
    .flex-wrap-reverse { flex-wrap: wrap-reverse !important; }
    .flex-fill { flex: 1 1 auto !important; }
    .flex-grow0 { flex-grow: 0 !important; }
    .flex-grow1 { flex-grow: 1 !important; }
    .flex-shrink0 { flex-shrink: 0 !important; }
    .flex-shrink1 { flex-shrink: 1 !important; }

    .justify-content-start { justify-content: flex-start !important; }
    .justify-content-end { justify-content: flex-end !important; }
    .justify-content-center { justify-content: center !important; }
    .justify-content-between { justify-content: space-between !important; }
    .justify-content-around { justify-content: space-around !important; }

    .align-items-start { align-items: flex-start !important; }
    .align-items-end { align-items: flex-end !important; }
    .align-items-center { align-items: center !important; }
    .align-items-center { align-items: center !important; }
    .align-items-baseline { align-items: baseline !important; }
    .align-items-stretch { align-items: stretch !important; }

    .align-content-start { align-content: flex-start !important; }
    .align-content-end { align-content: flex-end !important; }
    .align-content-center { align-content: center !important; }
    .align-content-between { align-content: space-between !important; }
    .align-content-around { align-content: space-around !important; }
    .align-content-stretch { align-content: stretch !important; }

    .align-self-auto { align-self: auto !important; }
    .align-self-start { align-self: flex-start !important; }
    .align-self-end { align-self: flex-end !important; }
    .align-self-center { align-self: center !important; }
    .align-self-baseline { align-self: baseline !important; }
    .align-self-stretch { align-self: stretch !important; }
  `;
}

export function generateStyles () {
  const maxSize = 120;
  let style = '';
  for (let i = 0; i <= maxSize; i += 1) {
    style += `
        ${getMargins(i)}
        ${getPaddings(i)}
        ${getWidth(i)}
      `;
  }
  Object.keys(breakpoints).forEach((breakpoint) => {
    style += `@media (max-width: ${breakpoints[breakpoint]}px) {
      ${getDisplays(breakpoint)}
    }
    `;
  });
  style += getFlexParams();
  return css`${style}`;
}
