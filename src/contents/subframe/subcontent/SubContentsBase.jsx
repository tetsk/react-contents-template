import React from 'react';
import PropTypes from 'prop-types';

import SubMenu from './SubMenu';
import SubSubframe from './SubSubframe';

class SubContentsBase extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      mode: 0,
    };
  }
  static propTypes = {
    modeList: PropTypes.arrayOf(
      PropTypes.PropTypes.shape({
        label: PropTypes.string,
        component: PropTypes.component,
      })
    ).isRequired,
  };

  changeMode(mode) {
    this.setState({ mode });
  }

  render() {
    const mode = this.state.mode;
    const modeList = this.props.modeList;
    const changeMode = (_mode) => this.changeMode(_mode);

    return (
      <div className="SubContentsBase">
        <SubMenu
          mode={mode}
          modeList={modeList}
          changeMode={(_mode) => changeMode(_mode)}
        />
        <SubSubframe mode={mode} modeList={modeList} />
      </div>
    );
  }
}

export default SubContentsBase;
