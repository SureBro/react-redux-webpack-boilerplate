const incrementCounter = payload => ({
  type: 'INCREMENT',
  payload,
});

const decrementCounter = payload => ({
  type: 'DECREMENT',
  payload,
});

export { incrementCounter, decrementCounter };
