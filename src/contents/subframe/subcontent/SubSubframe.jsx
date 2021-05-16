import React from 'react';
import PropTypes from 'prop-types';

class SubSubframe extends React.Component {
  static propTypes = {
    mode: PropTypes.bool.isRequired,
    modeList: PropTypes.arrayOf(
      PropTypes.PropTypes.shape({
        label: PropTypes.string,
        component: PropTypes.component,
      })
    ).isRequired,
  };

  render() {
    const mode = this.props.mode;
    const modeList = this.props.modeList;
    const Component = modeList[mode].component;

    return (
      <div className="SubSubframe">
        <Component />
      </div>
    );
  }
}

export default SubSubframe;
