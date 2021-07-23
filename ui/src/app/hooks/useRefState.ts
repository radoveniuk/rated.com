import { useRef, useState, useEffect } from 'react';

export default function useRefState (initialValue: any) {
  const [state, setState] = useState(initialValue);
  const stateRef = useRef(state);

  useEffect(
    () => {
      stateRef.current = state;
    },
    [state],
  );
  return [state, stateRef, setState];
}
