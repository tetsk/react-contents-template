import React from 'react';

import './css/App.css';
import './css/common.css';

import ContentsBase from './contents/ContentsBase';

class App extends React.Component {
  render() {
    return (
      <div className="App">
        <ContentsBase />
      </div>
    );
  }
}

export default App;
