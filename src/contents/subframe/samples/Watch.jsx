import React from 'react';

import SubContentsBase from '../subcontent/SubContentsBase';
import subContentList from './watch/subContentList';

class Watch extends React.Component {
  render() {
    return (
      <div className="Watch">
        <div className="subtitle">Watch</div>
        <SubContentsBase modeList={subContentList} />
      </div>
    );
  }
}

export default Watch;
