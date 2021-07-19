import { getUrlParams } from '../helpers/common';

export default function useGlobalData () {
  const data = {
    urlParams: getUrlParams(window.location.href),
  };

  return data;
}
