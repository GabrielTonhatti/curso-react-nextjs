import React, { useEffect } from 'react';
import { useLocation, useParams, useHistory } from 'react-router-dom';

const Abc = () => {
  const { slug, id } = useParams();
  const location = useLocation();
  const history = useHistory();

  console.log('history', history);

  useEffect(() => {
    setTimeout(() => {
      history.push('/');
    }, 5000);
  }, [history]);

  return (
    <div>
      <h1>
        ABC {slug} {id}
      </h1>
    </div>
  );
};

export default Abc;
