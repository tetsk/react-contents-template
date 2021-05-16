import React from 'react';

import Menu from './Menu';
import Subframe from './Subframe';

import contentList from './subframe/contentList';

class ContentsBase extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      content: 0,
    };
  }

  changeContent(content) {
    this.setState({ content });
  }

  render() {
    const content = this.state.content;
    const changeContent = (_content) => this.changeContent(_content);

    return (
      <div className="ContentsBase">
        <Menu
          content={content}
          contentList={contentList}
          changeContent={(_content) => changeContent(_content)}
        />
        <Subframe content={content} contentList={contentList} />
      </div>
    );
  }
}

export default ContentsBase;
