import React from 'react';

import SubContentsBase from './subcontent/SubContentsBase';
import subContentList from './template/subContentList';

class Template extends React.Component {
  render() {
    return (
      <div className="Template">
        <div className="subtitle">Template</div>
        <SubContentsBase modeList={subContentList} />
      </div>
    );
  }
}

export default Template;
