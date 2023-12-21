import { useState,useEffect  } from "react"
import {CurrencyRupeeIcon} from "@heroicons/react/solid"
import { UseAuthContext } from "../../hooks/useAuthContext";
import { useFirestore } from "../../hooks/useFirestore";


export default function TransactionForm({uid}) {
    const [name,setName] = useState("");
    const [amount,setAmount] = useState("");
    const [userName,setUserName]  = useState("");
    const {addDocument,response} = useFirestore('transactions');
    const isPending = false;
  const {user} = UseAuthContext();


  useEffect(()=>{
    if (user.displayName) setUserName(user.displayName);
  },[]);


    const handleSubmit =(e)=>{
      e.preventDefault();
      addDocument({ 
        name,amount,userName,uid
      });
    }


    // resetting the field
  useEffect(()=>{
    console.log(response);
  if(response.success){

    setName('')
    setAmount('')
  }},[response.success]);

  return (
    <>
     <form className="space-y-6 rounded-md px-5 flex justify-center items-center flex-col" onSubmit={handleSubmit}>
            <div className="rounded-md shadow-sm -space-y-px">
              <div className="my-5">
                <label htmlFor="name" className="sr-only">
                  Transaction Name
                </label>
                <input
                  id="name"
                  name="name"
                  type="text"
                  autoComplete="name"
                  required
                  className="appearance-none rounded relative block w-full px-3 py-2 border border-gray-300 placeholder-gray-500 text-gray-900 focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 focus:z-10 sm:text-sm"
                  placeholder="Transcation Name"
                   onChange={(e)=>setName(e.target.value)}
                   value={name}
                />
              </div>
              <div className="my-5">
                <label htmlFor="amount" className="sr-only">
                amount
                </label>
                <input
                  id="amount"
                  name="amount"
                  type="number"
                  min="1"
                  autoComplete="current-password"
                  required
                  className="appearance-none rounded relative block w-full px-3 py-2 border border-gray-300 placeholder-gray-500 text-gray-900  focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 focus:z-10 sm:text-sm"
                  placeholder="Amount"
                  onChange={(e)=>setAmount(e.target.value)}
                  value={amount}
                />
              </div>
            </div>
            <div className="flex items-center justify-between">
              <button
                type="submit"
                className="group flex  items-center py-2 px-4 border border-transparent text-sm font-medium rounded-md text-white bg-indigo-600 hover:bg-indigo-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500"
              >
                <span className="pr-2 flex items-center justify-center ">
                 <CurrencyRupeeIcon className="h-4 w-4 text-gray-50 group-hover:text-indigo-300" aria-hidden="true" />
                </span> 
               Add Transaction
              </button>
            
            </div>
          </form>
    </>
  )
}
