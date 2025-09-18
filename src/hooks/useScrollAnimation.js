import { useEffect } from 'react';

const useScrollAnimation = () => {
  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            entry.target.classList.add('animate-fade-in');
          }
        });
      },
      { threshold: 0.1 }
    );

    document.querySelectorAll('[data-aos]').forEach((el) => {
      observer.observe(el);
    });

    return () => {
      document.querySelectorAll('[data-aos]').forEach((el) => {
        observer.unobserve(el);
      });
    };
  }, []);
};

export default useScrollAnimation;