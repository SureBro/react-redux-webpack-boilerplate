import { expect } from 'chai';

import counter from './counterReducer';

const test = {
  decrement: () => {
    expect(counter(1, { type: 'DECREMENT' })).to.equal(0);
  },
  increment: () => {
    expect(counter(1, { type: 'INCREMENT' })).to.equal(2);
  },
  default: () => {
    expect(counter(undefined, { type: 'INCREMENT' })).to.equal(1);
  },
  unrecognizedActionType: () => {
    expect(counter(1, { type: 'JIBBERISH' })).to.equal(1);
  },
  defaultUnrecongnizedActionType: () => {
    expect(counter(undefined, { type: 'JIBBERISH' })).to.equal(0);
  },
  payloadDecrement: () => {
    expect(counter(0, { type: 'DECREMENT', payload: { amount: 2 } })).to.equal(-2);
  },
  payloadIncrement: () => {
    expect(counter(1, { type: 'INCREMENT', payload: { amount: 3 } })).to.equal(4);
  },
};

// test();
export default test;
