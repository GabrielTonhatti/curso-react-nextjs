import { useEffect, useMemo, useRef, useState } from 'react';
import './App.css';
import PropTypes from 'prop-types';

const Post = ({ post, handleClick }) => {
  console.log('Filho renderizou!');

  return (
    <div className="post" key={post.id}>
      <h1 style={{ fontSize: '14px', color: '#333' }} onClick={() => handleClick(post.title)}>
        {post.title}
      </h1>
      <p>{post.body}</p>
    </div>
  );
};

Post.propTypes = {
  post: PropTypes.shape({
    id: PropTypes.number,
    title: PropTypes.string,
    body: PropTypes.string,
  }),
  handleClick: PropTypes.func,
};

function App() {
  const [posts, setPosts] = useState([]);
  const [value, setValue] = useState('');
  const input = useRef(null);
  const contador = useRef(0);

  console.log('Pai renderizou!');

  // Component did mount
  useEffect(() => {
    fetch('https://jsonplaceholder.typicode.com/posts')
      .then((response) => response.json())
      .then((json) => setPosts(json));
  }, []);

  useEffect(() => {
    input.current.focus();
    console.log(input.current);
  }, [value]);

  useEffect(() => {
    contador.current++;
  });

  const handleClick = (value) => {
    setValue(value);
  };

  return (
    <div className="App">
      <h2>Renderizou: {contador.current}x</h2>
      <p>
        <input ref={input} type="search" value={value} onChange={(event) => setValue(event.target.value)} />
      </p>
      {useMemo(() => {
        return posts.length > 0 && posts.map((post) => <Post post={post} key={post.id} handleClick={handleClick} />);
      }, [posts])}

      {posts.length <= 0 && <p>Ainda não existem posts.</p>}
    </div>
  );
}

export default App;
