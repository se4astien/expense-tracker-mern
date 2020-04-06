import React, { useContext } from 'react';
import { GlobalContext } from '../context/GlobalState';

export const Balance = () => {
  const { transactions } = useContext(GlobalContext);

  const amounts = transactions.map(transaction => transaction.amount);
  // console.log(amounts);
  const total = amounts
    .reduce((accumulator, item) => (accumulator += item), 0)
    .toFixed(2);

  return (
    <>
      <h2>Your Balance</h2>
      <div className='balance'>{total}€</div>
    </>
  );
};
