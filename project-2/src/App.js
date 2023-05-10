import { useEffect, useMemo, useState } from 'react';
import './App.css';
import PropTypes from 'prop-types';

const Post = ({ post }) => {
  console.log('Filho renderizou!');

  return (
    <div className="post" key={post.id}>
      <h1>{post.title}</h1>
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
};

function App() {
  const [posts, setPosts] = useState([]);
  const [value, setValue] = useState('');
  console.log('Pai renderizou!');

  // Component did mount
  useEffect(() => {
    setTimeout(() => {
      fetch('https://jsonplaceholder.typicode.com/posts')
        .then((response) => response.json())
        .then((json) => setPosts(json));
    }, 5000);
  }, []);

  return (
    <div className="App">
      <p>
        <input type="search" value={value} onChange={(event) => setValue(event.target.value)} />
      </p>
      {useMemo(() => {
        return posts.length > 0 && posts.map((post) => <Post post={post} key={post.id} />);
      }, [posts])}

      {posts.length <= 0 && <p>Ainda não existem posts.</p>}
    </div>
  );
}

export default App;
