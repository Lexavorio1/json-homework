import { useState, useCallback } from 'react';
import axios from 'axios';

export const useFetchData = (url, setPeople, setError) => {
  const [isLoading, setIsLoading] = useState(false);

  const fetchData = useCallback(async () => {
    setIsLoading(true);
    setError(null);

    try {
      const response = await axios.get(url);
      setPeople(response.data);
    } catch (error) {
      setError('Ошибка при загрузке данных.');
      console.error('Ошибка при загрузке данных:', error);
    } finally {
      setIsLoading(false);
    }
  }, [url, setPeople, setError]);

  return { isLoading, fetchData };
};