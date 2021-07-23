import { useEffect } from 'react';
import useDebounceState from './useDebounceState';

export default function useDebounceUpdate (initialValue: any, storeValue: any, updateStore: (newValue: any) => void, timeout = 600) {
  const [state, setState, debouncedState] = useDebounceState(initialValue, timeout);

  useEffect(() => {
    updateStore(debouncedState);
  }, [debouncedState]);

  useEffect(() => {
    if (storeValue !== debouncedState) {
      setState(storeValue);
    }
  }, [storeValue]);

  return [state, setState, debouncedState];
}
