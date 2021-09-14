import * as React from 'react';
import * as ReactDOM from 'react-dom';
import { Thing } from '../src';

const App = () => {
  return (
    <div>
      <Thing />
    </div>
  );
};

ReactDOM.render(<App />, document.getElementById('root'));
