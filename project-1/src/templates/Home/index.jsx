import { Suspense, lazy, useState } from 'react';
// import LazyComponent from './lazy-component';

const loadComponent = () => {
  console.log('Componente carregado...');
  return import('./lazy-component');
};
const LazyComponent = lazy(loadComponent);

export const Home = () => {
  const [show, setShow] = useState(false);

  return (
    <div>
      <p>
        <button onMouseOver={loadComponent} onClick={() => setShow((prev) => !prev)}>
          Show {show ? 'LC on screen' : 'LC is off screen'}
        </button>
      </p>
      <Suspense fallback={<p>Carregando...</p>}>{show && <LazyComponent />}</Suspense>
    </div>
  );
};
