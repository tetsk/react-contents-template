import React from 'react';

import * as lib from 'lib';

class Dice extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      dice: lib.intRandom(6),
      faceNum: 6,
    };
  }

  diceRoll() {
    this.setState({
      dice: lib.intRandom(this.state.faceNum),
    });
  }

  displayDice(dice) {
    const faceNum = this.state.faceNum;

    return (
      <div
        className="displayDice"
        style={{
          textAlign: 'center',
          fontSize: '20vw',
          margin: '2vw 10vw',
          border: 'solid 3px',
          borderRadius: '20vw',
          color:
            dice / faceNum >= 0.9 || dice + 1 === faceNum
              ? 'red'
              : dice / faceNum < 0.1
              ? 'blue'
              : '',
        }}
      >
        {dice + 1}
      </div>
    );
  }

  handleTextbox(value) {
    let faceNum = 6;
    if (!isNaN(Number(value)) && Number(value) > 0) {
      faceNum = Number(value);
    }
    this.setState({
      faceNum: faceNum,
    });
  }

  render() {
    const dice = this.state.dice;
    const diceRoll = () => this.diceRoll();
    const displayDice = (_dice) => this.displayDice(_dice);
    const handleTextbox = (_value) => this.handleTextbox(_value);

    return (
      <div className="Dice">
        <div className="title">Dice</div>

        <div className="displayDice">{displayDice(dice)}</div>

        <div className="button">
          <input
            name="input"
            type="text"
            style={{
              fontSize: '10vw',
              width: '20vw',
            }}
            onChange={(e) => handleTextbox(e.target.value)}
          />
          <button
            className="button"
            onClick={() => diceRoll()}
            style={{
              fontSize: '10vw',
            }}
          >
            ROLL
          </button>
        </div>
      </div>
    );
  }
}

export default Dice;
