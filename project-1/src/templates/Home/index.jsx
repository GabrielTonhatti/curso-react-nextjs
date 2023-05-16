import { useEffect, useRef } from 'react';
import { useState } from 'react';

const isObjectEqual = (objA, objB) => JSON.stringify(objA) === JSON.stringify(objB);

const useFetch = (url, options) => {
  const [result, setResult] = useState(null);
  const [loading, setLoading] = useState(false);
  const [shouldLoad, setShouldLoad] = useState(false);
  const urlRef = useRef(url);
  const optionsRef = useRef(options);

  useEffect(() => {
    let changed = false;
    if (!isObjectEqual(url, urlRef.current)) {
      urlRef.current = url;
      changed = true;
    }

    if (!isObjectEqual(options, optionsRef.current)) {
      optionsRef.current = options;
    }

    if (changed) {
      setShouldLoad((s) => !s);
      changed = true;
    }
  }, [url, options]);

  useEffect(() => {
    let wait = false;
    console.log('EFFECT', new Date().toLocaleString());
    console.log(optionsRef.current.headers);

    setLoading(true);

    const fechData = async () => {
      await new Promise((r) => setTimeout(r, 1000));
      try {
        const response = await fetch(urlRef.current, optionsRef.current);
        const jsonResult = await response.json();

        if (!wait) {
          setResult(jsonResult);
          setLoading(false);
        }
      } catch (error) {
        if (!wait) {
          setLoading(false);
        }
        throw error;
      }
    };

    fechData();

    return () => {
      wait = true;
    };
  }, [shouldLoad]);

  return [result, loading];
};

export const Home = () => {
  const [postId, setPostId] = useState('');
  const [result, loading] = useFetch('https://jsonplaceholder.typicode.com/posts/' + postId, {
    headers: {
      abc: '1' + postId,
    },
  });

  useEffect(() => {
    console.log('ID do post', postId);
  }, [postId]);

  if (loading) return <p>Loading...</p>;

  const handleClick = (id) => {
    setPostId(id);
  };

  if (!loading && result) {
    return (
      <div>
        {result?.length > 0 ? (
          result.map((post) => (
            <div key={post.id} onClick={() => handleClick(post.id)}>
              <p>{post.title}</p>
            </div>
          ))
        ) : (
          <div onClick={() => handleClick('')}>
            <p>{result.title}</p>
          </div>
        )}
      </div>
    );
  }

  return <h1>Oi</h1>;
};
