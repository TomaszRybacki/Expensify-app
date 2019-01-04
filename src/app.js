import React from 'react';
import ReactDOM from 'react-dom';

import 'normalize.css/normalize.css';
import './styles/styles.scss';

import AppRouter from './routers/AppRouter';

import configureStore from './store/configureStore';

import { addExpense, removeExpense, editExpense } from './actions/expenses';
import { setTextFilter, sortByAmount, sortByDate, setStartDate, setEndDate } from './actions/filters';

import expensesReducer from './reducers/expenses';
import filtersReducer from './reducers/filters';

import getVisibleExpenses from './selectors/expenses';

const store = configureStore();

store.subscribe(() => {
  const state = store.getState();
  const visibleExpenses = getVisibleExpenses(state.expenses, state.filters);
  console.log(visibleExpenses);
});

const expenseOne = store.dispatch(addExpense({ description: 'water bill', amount: 100 }));
const expenseTwo = store.dispatch(addExpense({ description: 'gas bill', amount: 20 }));

store.dispatch(setTextFilter('gas'));

ReactDOM.render(<AppRouter />, document.getElementById('app'));
