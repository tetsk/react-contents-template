import React from 'react';

import * as lib from 'lib';

class Coin extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      coin: lib.intRandom(2),
    };
  }

  coinToss() {
    this.setState({
      coin: lib.intRandom(2),
    });
  }

  displayCoin(coin) {
    return (
      <div
        className="faceSide"
        style={{
          textAlign: 'center',
          fontSize: '20vw',
          margin: '2vw 10vw',
          border: 'solid 3px',
          borderRadius: '20vw',
          color: coin % 2 ? 'Red' : 'blue',
        }}
      >
        {coin % 2 !== 0 ? 'Heads' : 'Tails'}
      </div>
    );
  }

  displayButton() {
    const coinToss = () => this.coinToss();

    return (
      <div className="button">
        <button
          className="button"
          onClick={() => coinToss()}
          style={{
            fontSize: '10vw',
          }}
        >
          TOSS
        </button>
      </div>
    );
  }

  render() {
    const coin = this.state.coin;
    const displayCoin = (_coin) => this.displayCoin(_coin);
    const displayButton = () => this.displayButton();

    return (
      <div className="Coin">
        <div className="title">Coin</div>

        <div className="displayCoin">{displayCoin(coin)}</div>

        <div className="displayButton">{displayButton()}</div>
      </div>
    );
  }
}

export default Coin;
