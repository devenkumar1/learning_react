import React, { useState } from 'react';
import ReactDOM from 'react-dom/client';
import App from './App.jsx';

const MyComponent = () => {
  const [counter, setCounter] = useState(15);

  const addValue = () => {
    setCounter(counter + 1);
  };

  const deleteValue = () => {
    setCounter(counter - 1);
  };

  const areactelement = React.createElement(
    'a',
    { href: 'https://google.com', target: '_blank' },
    "click me I'm a link"
  );

  return (
    <React.StrictMode>
      <App />
      {areactelement}
      <h1>React learning state</h1>
      <h2>Counter value: {counter}</h2>
      <button onClick={addValue}>Add value</button>
      <button onClick={deleteValue}>Delete value</button>
    </React.StrictMode>
  );
};

ReactDOM.createRoot(document.getElementById('root')).render(<MyComponent />);
