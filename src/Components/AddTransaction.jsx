import React, { useContext, useState } from 'react'
import { GlobalContext } from '../Contexts/GlobalState';


const AddTransaction = () => {
  const[text,setText]=useState('');
  const[amount,setAmount]=useState(0);  
  const{addTransaction} = useContext(GlobalContext);

  const handleOnSubmit=(e)=>{
    e.preventDefault();
    const newTransaction = {
        id:Math.floor(Math.random()*10000000),
        text,
        amount:+amount
    }
    addTransaction(newTransaction);
  }  

  return (
    <>
        <h3>Add New Transactions</h3>
        <form id="form" onSubmit={handleOnSubmit}>
            <div className='form-control'>
                <label htmlFor='text'>Text</label>
                <input type='text' value={text} id='text' onChange={(e)=>setText(e.target.value)} placeholder='Enter here ....'/>
            </div>
            <div className='form-control'>
                <label htmlFor='amount'>Amount <br/>
                (negative-expense , positive- income)
                </label>
                <input type='number' value={amount}  id='amount' onChange={(e)=>setAmount(e.target.value)} placeholder='Enter Amount....'/>
            </div>
            <button className='btn'>Add Transaction</button>
        </form>
    </>
  )
}

export default AddTransaction