import React, { useContext, useEffect } from 'react';
import { Transaction } from './Transaction';

import { GlobalContext } from '../context/GlobalState';

export const TransactionList = () => {
  // const context = useContext(GlobalContext);
  // console.log(context); // transactions object => this is the global state!!

  // instead of using context.transactions, we use destructuring like {transactions}
  const { transactions, getTransactions } = useContext(GlobalContext);

  useEffect(() => {
    getTransactions();
    // eslint-disabled-next-line react-hooks/exhaustive-deps
  }, []);
  console.log(transactions);

  return (
    <>
      <h2>History</h2>
      <ul className='list'>
        {transactions.map((transaction) => (
          <Transaction key={transaction.id} transaction={transaction} />
        ))}
      </ul>
    </>
  );
};
