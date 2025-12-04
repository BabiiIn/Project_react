import { useEffect, useState } from 'react';

export function useScrollProgress() {
  const [progress, setProgress] = useState(0);

  useEffect(() => {
    const calc = () => {
      const scrollTop = window.scrollY || document.documentElement.scrollTop || 0;
      const docHeight = Math.max(
        document.documentElement.scrollHeight,
        document.body.scrollHeight
      );
      const winHeight = window.innerHeight || document.documentElement.clientHeight;
      const totalScrollable = Math.max(docHeight - winHeight, 1);
      const ratio = scrollTop / totalScrollable;
      setProgress(Math.min(Math.max(ratio, 0), 1));
    };

    let ticking = false;
    const onScrollOrResize = () => {
      if (!ticking) {
        requestAnimationFrame(() => {
          calc();
          ticking = false;
        });
        ticking = true;
      }
    };

    calc();
    window.addEventListener('scroll', onScrollOrResize, { passive: true });
    window.addEventListener('resize', onScrollOrResize);
    return () => {
      window.removeEventListener('scroll', onScrollOrResize);
      window.removeEventListener('resize', onScrollOrResize);
    };
  }, []);

  return progress; 
}
