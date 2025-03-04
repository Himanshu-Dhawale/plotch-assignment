import React, { useEffect, useRef, memo } from 'react';
import { PLACEHOLDER_IMAGE } from '../utils/constants';

const LazyImage = memo(({ src, alt }) => {
  const imgRef = useRef(null);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting && imgRef.current) {
          imgRef.current.src = src;
          observer.disconnect();
        }
      },
      { rootMargin: '100px' }
    );

    if (imgRef.current) {
      observer.observe(imgRef.current);
    }

    return () => observer.disconnect();
  }, [src]);

  return (
    <img
      ref={imgRef}
      src={PLACEHOLDER_IMAGE}
      alt={alt}
      className="product-image"
      loading="lazy"
    />
  );
});

export default LazyImage;