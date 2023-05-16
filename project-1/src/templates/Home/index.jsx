import { useEffect } from 'react';
import { useState } from 'react';

const useFetch = (url, options) => {
  const [result, setResult] = useState(null);
  const [loading, setLoading] = useState(false);

  useEffect(() => {
    console.log('EFFECT', new Date().toLocaleString());

    setLoading(true);

    const fechData = async () => {
      await new Promise((r) => setTimeout(r, 3000));
      try {
        const response = await fetch(url, options);
        const jsonResult = await response.json();

        setResult(jsonResult);
        setLoading(false);
      } catch (error) {
        setLoading(false);
        throw error;
      }
    };

    fechData();
  }, [url, options]);

  return [result, loading];
};

export const Home = () => {
  const [result, loading] = useFetch('https://jsonplaceholder.typicode.com/posts');

  if (loading) return <p>Loading...</p>;

  if (!loading && result) console.log('result', result);

  return <h1>Oi</h1>;
};
