import React from 'react';

import SubContentsBase from './subcontent/SubContentsBase';
import subContentList from './___ContentName___/subContentList';

class ___ContentName___ extends React.Component {
  render() {
    return (
      <div className="Content">
        <div className="subtitle">___ContentName___</div>
        <SubContentsBase modeList={subContentList} />
      </div>
    );
  }
}

export default ___ContentName___;
