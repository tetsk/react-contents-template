import React from 'react';
import PropTypes from 'prop-types';

class Menu extends React.Component {
  static propTypes = {
    mode: PropTypes.bool.isRequired,
    modeList: PropTypes.arrayOf(
      PropTypes.PropTypes.shape({
        label: PropTypes.string,
        component: PropTypes.component,
      })
    ).isRequired,
    changeMode: PropTypes.func.isRequired,
  };

  renderButton(mode) {
    const modeList = this.props.modeList;
    const label = modeList[mode].label;
    const changeMode = (_mode) => this.props.changeMode(_mode);

    return (
      <button
        className="button"
        onClick={() => changeMode(mode)}
        style={{
          width: 100 / modeList.length + '%',
          height: '30px',
        }}
      >
        {label}
      </button>
    );
  }

  render() {
    const modeList = this.props.modeList;
    const renderButton = (_index) => this.renderButton(_index);

    return (
      <div className="Menu">
        <div Menu-list style={{ height: '45px' }}>
          {modeList.map((_mode, _index) => renderButton(_index))}
        </div>
      </div>
    );
  }
}

export default Menu;
