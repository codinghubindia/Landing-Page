import { useEffect } from 'react';

const useIntersectionObserver = (setRef, options) => {
  useEffect(() => {
    const observer = new IntersectionObserver((entries) => {
      entries.forEach(entry => {
        if (entry.isIntersecting) {
          entry.target.classList.add('in-view');
        }
      });
    }, options);

    const elements = document.querySelectorAll(setRef);
    elements.forEach(element => observer.observe(element));

    return () => {
      elements.forEach(element => observer.unobserve(element));
    };
  }, [setRef, options]);
};

export default useIntersectionObserver;
