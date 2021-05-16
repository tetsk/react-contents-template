/* USAGE */
// import * as lib from 'lib';
// lib.function(args)

function random() {
  return Math.random();
}

function intRandom(number) {
  return parseInt(random() * number, 10);
}

function zeroPadding(value, digit) {
  let valueString = String(value);
  for (let i = 0; i < digit; i++) {
    valueString = '0' + valueString;
  }
  return valueString.slice(-digit);
}

export { random, intRandom, zeroPadding };
