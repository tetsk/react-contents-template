import React from 'react';
import PropTypes from 'prop-types';

class Menu extends React.Component {
  static propTypes = {
    content: PropTypes.number.isRequired,
    contentList: PropTypes.arrayOf(
      PropTypes.PropTypes.shape({
        label: PropTypes.string,
        component: PropTypes.component,
      })
    ).isRequired,
    changeContent: PropTypes.func.isRequired,
  };

  renderButton(content) {
    const contentList = this.props.contentList;
    const label = contentList[content].label;
    const changeContent = (_content) => this.props.changeContent(_content);

    return (
      <button
        className="button"
        onClick={() => changeContent(content)}
        style={{
          width: 100 / contentList.length + '%',
          height: '45px',
          padding: '0.5em 1em',
        }}
      >
        {label}
      </button>
    );
  }

  render() {
    const contentList = this.props.contentList;
    const renderButton = (_index) => this.renderButton(_index);

    return (
      <div className="Menu">
        <div Menu-list style={{ height: '45px' }}>
          {contentList.map((_content, _index) => renderButton(_index))}
        </div>
      </div>
    );
  }
}

export default Menu;
