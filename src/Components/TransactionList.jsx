import React, { useContext } from 'react'
import { GlobalContext } from '../Contexts/GlobalState'
import Transaction from './Transaction';

const TransactionList = () => {
  const {transactions} = useContext(GlobalContext);
  return (
    <>
        <h3>History</h3>
        <ul id="list" className='list'>
            {transactions.map(transaction=> (<Transaction key={transaction.id} transaction={transaction}/>))}
            {/* <li className='minus'>
                Cash <span>-₹200</span> <button className='delete-btn'>X
                </button>
            </li> */}
        </ul>
    </>
  )
}

export default TransactionList