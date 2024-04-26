import { useEffect, useRef } from "react";

const useIntersectionObserver = (
  callback: (isIntersecting: boolean) => void,
  options: IntersectionObserverInit = {},
) => {
  const ref = useRef<HTMLElement | null>(null);

  useEffect(() => {
    const observer = new IntersectionObserver(([entry]) => {
      callback(entry.isIntersecting);
    }, options);

    if (ref.current) {
      observer.observe(ref.current);
    }

    return () => {
      if (ref.current) {
        observer.unobserve(ref.current);
      }
    };
  }, [callback, options]);

  return ref;
};

export default useIntersectionObserver;
