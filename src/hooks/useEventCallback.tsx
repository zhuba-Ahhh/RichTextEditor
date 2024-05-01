import { useCallback, useEffect, useRef } from 'react';

export const useEventCallback = (callback: any, dependencies: any[]) => {
  const ref = useRef(callback);
  useEffect(() => {
    ref.current = callback;
  }, dependencies);
  return useCallback((...args: any[]) => {
    return ref.current(...args);
  }, []);
};

export default useEventCallback;
