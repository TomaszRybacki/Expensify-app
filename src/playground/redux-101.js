import { createStore } from 'redux';

// Generator akcji - funkcja, która zwraca obiekt

// destrukturyzacja obiektu przekazanego do funkcji i ustawienie domyślnej wartości równej 1
// ustawiamy też domyślną wartość na pusty obiekt, przy wywołaniu tej funkcji

const incrementCount = ({ incrementBy = 1 } = {}) => ({
  type: 'INCREMENT',
  incrementBy
});

const decrementCount = ({ decrementBy = 1 } = {}) => ({
  type: 'DECREMENT',
  decrementBy
});

const setCount = ({ count } = {}) => ({
  type: 'SET',
  count
});

const resetCount = () => ({
  type: 'RESET'
});

// Reducers

const countReducer = (state = { count: 0 }, action) => {
  switch (action.type) {
    case 'INCREMENT':
      return {
        count: state.count + action.incrementBy
      };
    case 'DECREMENT':
      return {
        count: state.count - action.decrementBy
      };
    case 'SET':
      return {
        count: action.count
      };
    case 'RESET':
      return {
        count: 0
      };
    default: return state;
  }
};

const store = createStore(countReducer);

// event zmiany stanu magazynu

const unsubscribe = store.subscribe(() => {
  console.log(store.getState());
});

store.dispatch(incrementCount());
store.dispatch(incrementCount({ incrementBy: 5 }));

store.dispatch(decrementCount({ decrementBy: 10 }));
store.dispatch(decrementCount());

store.dispatch(resetCount());

store.dispatch(setCount({ count: 100 }));

// odczepienie eventu

unsubscribe();
