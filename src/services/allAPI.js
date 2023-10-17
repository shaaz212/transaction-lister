import { BASE_URL } from './baseURL'
import { commonAPI } from './commonAPI'

// uploading budget
export const uploadBudget = async(budget)=>{
    //  post request to http://localhost:4000/budget for adding budget in json server and return response to show component
    return await commonAPI("POST",`${BASE_URL}/budget`,budget)
}

// uploading Income
export const uploadIncome = async(income)=>{
    //  post request to http://localhost:4000/income for adding income in json server and return response to show component
    return await commonAPI("POST",`${BASE_URL}/income`,income)
}
// uploading Expense
export const uploadExpense = async(expense)=>{
    //  post request to http://localhost:4000/income for adding expense in json server and return response to show component
    return await commonAPI("POST",`${BASE_URL}/expense`,expense)
}

// Income transaction listing
export const getIncometransaction = async()=>{
    // Get request from http://localhost:4000/income to get data from json server and response to transaction compnent
        return await commonAPI("GET",`${BASE_URL}/income`,"")
    }

// Expense transaction listing
export const getExpensetransaction = async()=>{
    // Get request from http://localhost:4000/expense to get data from json server and response to transaction compnent
        return await commonAPI("GET",`${BASE_URL}/expense`,"")
    }

// delete a transaction from income
export const deleteIncomeTransaction = async(id)=>{
    //  delete request to http://localhost:4000/income for delete transaction in json server and return response to transaction component
        return await commonAPI("DELETE",`${BASE_URL}/income/${id}`,{})
    }

// delete a transaction from expense
export const deleteExpenseTransaction = async(id)=>{
    //  delete request to http://localhost:4000/expense for delete transaction in json server and return response to transaction component
        return await commonAPI("DELETE",`${BASE_URL}/expense/${id}`,{})
    }


