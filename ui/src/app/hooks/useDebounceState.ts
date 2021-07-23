import useRefState from './useRefState';
import useDebounce from './useDebounce';

export default function useDebounceState (initialValue: any, timeout: number) {
  const [state, stateRef, setState] = useRefState(initialValue);
  const debouncedState = useDebounce(state, timeout);

  return [state, setState, debouncedState, stateRef];
}
