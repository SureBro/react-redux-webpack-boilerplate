const counter = (state = 0, action) => {
  let newState = state;
  let amount = 1;

  if (typeof action.payload !== 'undefined') {
    amount = action.payload.amount || 1;
  }

  switch (action.type) {
    case 'INCREMENT': {
      newState = state + amount;
      break;
    }
    case 'DECREMENT': {
      newState = state - amount;
      break;
    }
    default: {
      newState = state;
      break;
    }
  }

  return newState;
};

export default counter;
