import { strict as assert } from 'assert';
import calculateNumber from './0-calcul.js';

describe('calculateNumber', () => {
  it('floating point whole numbers', () => {
    expect(calculateNumber(1.0, 2.0)).to.equal(3);
  });

  it('rounding down b\'s floating point fractional number', () => {
    expect(calculateNumber(1.0, 2.4)).to.equal(3);
  });

  it('rounding down a and b\'s floating point fractional number', () => {
    expect(calculateNumber(1.4, 2.4)).to.equal(3);
  });

  it('rounding down a\'s floating point fractional number', () => {
    expect(calculateNumber(1.4, 2.0)).to.equal(3);
  });

  it('rounding up b\'s floating point fractional numbers', () => {
    expect(calculateNumber(1.0, 2.5)).to.equal(4);
  });

  it('rounding up a and b\'s floating point fractional numbers', () => {
    expect(calculateNumber(2.6, 2.5)).to.equal(6);
  });

  it('rounding up a\'s floating point fractional numbers', () => {
    expect(calculateNumber(2.6, 2.0)).to.equal(5);
  });

  it('rounding down a and b floating point fractional numbers with trailing 9\'s', () => {
    expect(calculateNumber(2.499999, 3.499999)).to.equal(5);
  });
});

