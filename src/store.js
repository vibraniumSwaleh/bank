import { createStore } from 'redux';

const initialState = {
  balance: 0,
  loan: 0,
  loanPurpose: '',
};

function reducer(state = initialState, action) {
  switch (action.type) {
    case 'account/deposit':
      return { ...state, balance: state.balance + action.payload };
    case 'account/withdraw':
      return { ...state, balance: state.balance - action.payload };
    case 'account/requesLoan':
      if (state.loan > 0) return state;
      return { ...state, loan: action.payload };
    case 'account/payLaon':
      return {
        ...state,
        loan: 0,
        loanPurpose: '',
        balance: state.balance - action.payload,
      };
    default:
      return state;
  }
}