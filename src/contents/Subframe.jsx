import React from 'react';
import PropTypes from 'prop-types';

class Subframe extends React.Component {
  static propTypes = {
    content: PropTypes.number.isRequired,
    contentList: PropTypes.arrayOf(
      PropTypes.PropTypes.shape({
        label: PropTypes.string,
        component: PropTypes.component,
      })
    ).isRequired,
  };

  render() {
    const contentList = this.props.contentList;
    const content = this.props.content;
    const Component = contentList[content].component;

    return (
      <div className="Subframe">
        <Component />
      </div>
    );
  }
}

export default Subframe;
