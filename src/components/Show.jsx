import React ,{ useEffect, useState} from 'react'
import AddOption from './AddOption';
import Transaction from './Transaction';


function Show() {
    
  
  const [income,setIncome] = useState({
    name:'',amount:0
  })
  const [expense,setExpense] = useState({
    name:'',amount:0
  })

  return (
    <div  className="container w-50 shadow border rounded mt-5 mb-5">
        <h1 className="text-center display-3 fw-medium mt-5">Transaction Lister</h1>
        <AddOption setIncome={setIncome} setExpense={setExpense}/>
        <Transaction income={income} expense={expense} />
        
    </div>
  )
}

export default Show