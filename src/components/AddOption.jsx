import React, { useState } from 'react'
import {Form, Button} from 'react-bootstrap';
import { ToastContainer, toast } from 'react-toastify';
import { uploadBudget, uploadExpense, uploadIncome } from '../services/allAPI';

function AddOption({setIncome,setExpense}) {
  const [budget,setBudget] = useState({
    name:'',amount:0
  })

  // upload Income
  const addIncome = async(e)=>{
    const{name,amount}=budget
    console.log(budget);
    if (!name || !amount ) {
      toast.warning("Please Fill")
    }else{
      // make api call
      const response = await uploadBudget(budget) 
      const IncomeResponse = await uploadIncome(budget)
      if (response.status>=200 && response.status<300) {
        // reset state
      setBudget({
        name:'',amount:0
      })
      setBudget(response.data)
      setIncome(IncomeResponse.data)
      toast.success(`${response.data.name} is uploaded successfully`)
      } else {
        toast.error('Network error')
      }
    }
  }
  // upload Expense
  // upload Income
  const addExpense = async(e)=>{
    
    const{name,amount}=budget
    console.log(budget);
    if (!name || !amount ) {
      toast.warning("Please Fill")
    }else{
      // make api call
      const response = await uploadBudget(budget) 
      const expenseResponse = await uploadExpense(budget)
      if (response.status>=200 && response.status<300) {
        // reset state
      setBudget({
        name:'',amount:''
      })
      setBudget(response.data)
      setExpense(expenseResponse.data)
      toast.success(`${response.data.name} is uploaded successfully`)
      } else {
        toast.error('Network error')
      }
    }
  }


  return (
    
    <>
        <Form className='container mt-5'>
          <Form.Group className="d-flex mb-3" controlId="formBasicEmail">
            <Form.Label className='fw-bold mt-1'>Expense :</Form.Label>
            <Form.Control style={{width:'50%',marginLeft:'4%'}} type="text" placeholder="Enter Expense"  onChange={(e)=>setBudget({...budget,name:e.target.value})}/>
          </Form.Group>
          {/* 2 */}
          <Form.Group className="d-flex mb-3" controlId="formBasicEmail">
            <Form.Label className='fw-bold mt-1'>Amount : <span className='ms-2'>₹</span></Form.Label>
            <Form.Control  style={{width:'50%',marginLeft:'1%'}} type="number" placeholder="Enter Amount" onChange={(e)=>setBudget({...budget,amount:e.target.value})}/>
          </Form.Group>
           {/* Button */}
          <Button onClick={addIncome}   style={{ marginLeft:'15%',border:'1.5px solid green'}} className='btn mb-5 rounded'  variant="outline-success" >
            Income
          </Button>
          <Button onClick={addExpense}  style={{ marginLeft:'15%',border:'1.5px solid'}} className='mb-5 rounded'  variant="outline-danger" type="submit">
            Expense
          </Button>
        </Form>
        <ToastContainer
        position="top-center"
        autoClose={3000}
        hideProgressBar={false}
        newestOnTop={false}
        closeOnClick
        rtl={false}
        pauseOnFocusLoss
        draggable
        pauseOnHover
        theme="light"
        />
    </>
  )
}

export default AddOption