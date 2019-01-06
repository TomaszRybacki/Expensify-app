import React from 'react';
import { connect } from 'react-redux';

const ExpenseList = (props) => (
  <div>
    <h1>Expense List</h1>
    {props.expenses.length}
  </div>
);

// wybieramy do jakich elementów przechowywanych w Redux-ie potrzebny jest dostęp

const mapStateToProps = (state) => {
  return {
    expenses: state.expenses,
    filters: state.filters
  };
};

export default connect(mapStateToProps)(ExpenseList);

/*
const ExpenseList = (props) => (
  <div>
    <h1>Expense List</h1>
    {props.expenses.length}
  </div>
);

const ConnectedExpenseList = connect((state) => {
  return {
    expenses: state.expenses
  };
})(ExpenseList);

export default ConnectedExpenseList;
*/
