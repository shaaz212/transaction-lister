import React, { useEffect, useState } from 'react'
import { deleteExpenseTransaction, deleteIncomeTransaction, getExpensetransaction, getIncometransaction } from '../services/allAPI';

function Transaction({income,expense}) {

    

    const [incomeTransaction,setIncomeTransaction] = useState([])
    const [expenseTransaction,setExpenseTransaction] = useState([])

    // getTransaction income
    const getTransactionIncome = async ()=>{
        // make api call
        const {data} = await getIncometransaction()
        setIncomeTransaction(data)
      }


    // getTransaction expense
    const getTransactionExpense = async ()=>{
        // make api call
        const {data} = await getExpensetransaction()
        setExpenseTransaction(data)
      }
    
    // removeincome
    const removeIncome = async(id)=>{
        // make api call
        await deleteIncomeTransaction(id)
        getTransactionIncome()
    }

    // removeExpense
    const removeExpense = async(id)=>{
        // make api call
        await deleteExpenseTransaction(id)
        getTransactionExpense()
    }

    useEffect(()=>{
        getTransactionIncome()
        getTransactionExpense()
    },[])
  return (
    <>
        <div className='mb-5'>
            <h4 className='fw-bold'>Transactions</h4>
           <div>
           <table class="table">
                <thead>
                    <tr>
                        <th scope="col">#</th>
                        <th scope="col">Income</th>
                        <th scope="col">Amount</th>
                        <th scope="col"></th>
                    </tr>
                </thead>
                <tbody>
                    {
                        incomeTransaction.length>0?
                        incomeTransaction.map((items,index)=>(
                        <tr key={index}>
                            <th scope="row">{index+1}</th>
                            <td>{items?.name}</td>
                            <td className='text-success'>{items?.amount}</td>
                            <td onClick={()=>removeIncome(items?.id)} className="btn text-danger"><i className='fa-solid fa-trash'></i></td>
                        </tr>
                        ))
                        :""
                        
                    }
                </tbody>
            </table>
            <table class="table">
                <thead>
                    <tr>
                        <th scope="col">#</th>
                        <th scope="col">Expense</th>
                        <th scope="col">Amount</th>
                        <th scope="col"></th>
                    </tr>
                </thead>
                <tbody>
                    {
                        expenseTransaction.length>0?
                        expenseTransaction.map((item,index)=>(
                            <tr key={index}>
                            <th scope="row">{index+1}</th>
                            <td>{item?.name}</td>
                            <td className='text-danger'>{item?.amount}</td>
                            <td onClick={()=>removeExpense(item?.id)} className="btn text-danger"><i className='fa-solid fa-trash'></i></td>
                        </tr>
                        ))
                        :''
                        
                    }
                </tbody>
            </table>
            
           </div>
        </div>
    </>
  )
}

export default Transaction