import React from 'react';

import SubContentsBase from '../subcontent/SubContentsBase';
import subContentList from './random/subContentList';

class Random extends React.Component {
  constructor(props) {
    super(props);
    this.state = {};
  }

  render() {
    return (
      <div className="Random">
        <div className="subtitle">Random</div>
        <SubContentsBase modeList={subContentList} />
      </div>
    );
  }
}

export default Random;
