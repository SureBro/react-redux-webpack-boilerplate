import counterReducerTest from '../src/reducers/counter/test';

// Testing if the counter reducer is working as expected
describe('Counter Reducer', () => {
  describe('Handles state manipulation based on action and type', () => {
    it('it should change state(1) to 0 ', () => {
      counterReducerTest.decrement();
    });
    it('it should change state(1) to 2 ', () => {
      counterReducerTest.increment();
    });
    it('it should set default state to 0 ', () => {
      counterReducerTest.default();
    });
    it('it should return existing state on unknown action type ', () => {
      counterReducerTest.unrecognizedActionType();
    });
    it('it should return 0 if state is default and action type is unknown', () => {
      counterReducerTest.defaultUnrecongnizedActionType();
    });
    it('it should increment by payload.amount if payload.amount exists', () => {
      counterReducerTest.payloadIncrement();
    });
    it('it should decrement by payload.amount if payload.amount exists', () => {
      counterReducerTest.payloadDecrement();
    });
  });
});

