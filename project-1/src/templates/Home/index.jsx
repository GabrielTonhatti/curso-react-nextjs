import { Component } from 'react';
import { useEffect } from 'react';
import { useState } from 'react';

const s = {
  style: {
    fontSize: '60px',
  },
};

class MyErrorBoundary extends Component {
  constructor(props) {
    super(props);
    this.state = { hasError: false };
  }

  static getDerivedStateFromError(error) {
    console.log('getDerivedStateFromError');
    return { hasError: true };
  }

  componentDidCatch(error, errorInfo) {
    // console.log(error, errorInfo);
  }

  render() {
    if (this.state.hasError) {
      return <p {...s}>Deu ruim =(</p>;
    }

    return this.props.children;
  }
}

const ItWillThorwError = () => {
  const [counter, setCounter] = useState(0);

  useEffect(() => {
    if (counter > 3) {
      throw new Error('Que chato!!!');
    }
  }, [counter]);

  return (
    <div>
      <button {...s} onClick={() => setCounter((prev) => prev + 1)}>
        Click to increase {counter}
      </button>
    </div>
  );
};

export const Home = () => {
  return (
    <div {...s}>
      <MyErrorBoundary>
        <ItWillThorwError />
      </MyErrorBoundary>
    </div>
  );
};
