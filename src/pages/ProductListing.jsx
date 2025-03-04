import React, { useState, useRef, useEffect } from 'react';
import useFetchProducts from '../hooks/useFetchProducts';
import LazyImage from '../components/LazyImage';
import "./style.css"
const ProductList = () => {
  const { products, isLoading, error } = useFetchProducts();
  const [visibleCount, setVisibleCount] = useState(8);
  const sentinelRef = useRef(null);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting && !isLoading && visibleCount < products.length) {
          setVisibleCount((prev) => Math.min(prev + 8, products.length));
        }
      },
      { rootMargin: '100px', threshold: 0.5 }
    );

    if (sentinelRef.current) {
      observer.observe(sentinelRef.current);
    }
    return () => observer.disconnect();
  }, [visibleCount, products, isLoading]);

  return (
    <div className="product-list">
      {error && <div className="error-message">{error}</div>}

      <div className="products-container">
        {products.slice(0, visibleCount).map((product, index) => (
          <div key={index} className="product-card">
            <LazyImage src={product.imageUrl} alt={product.productName} />
            <h3>{product.productName}</h3>
            <p>Price: {product.productPrice}</p>
          </div>
        ))}
      </div>

      <div ref={sentinelRef} className="sentinel" />

      {isLoading && (
        <div className="loading-indicator">Loading more products...</div>
      )}
    </div>
  );
};

export default ProductList;