import React from 'react';
import { useParams } from 'react-router-dom';

const Abc = () => {
  const { slug, id } = useParams();

  return (
    <div>
      <h1>
        ABC {slug} {id}
      </h1>
    </div>
  );
};

export default Abc;
