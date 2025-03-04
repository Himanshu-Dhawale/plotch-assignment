import { useState, useEffect } from 'react';
import { API_URL } from '../utils/constants';

const useFetchProducts = () => {
  const [products, setProducts] = useState([]);
  const [isLoading, setIsLoading] = useState(false);
  const [error, setError] = useState(null);

  useEffect(() => {
    const fetchProducts = async () => {
      setIsLoading(true);
      setError(null);

      try {
        const response = await fetch(API_URL);
        if (!response.ok) {
          throw new Error(`Failed to fetch products (status: ${response.status})`);
        }

        const { record: data } = await response.json();
        if (!Array.isArray(data)) {
          throw new Error('Unexpected API response format');
        }

        setProducts(data);
      } catch (error) {
        setError(error.message);
      } finally {
        setIsLoading(false);
      }
    };

    fetchProducts();
  }, []);

  return { products, isLoading, error };
};

export default useFetchProducts;