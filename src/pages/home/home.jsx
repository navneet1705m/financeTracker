import { UseAuthContext } from "../../hooks/useAuthContext"
import  {UseCollection} from "../../hooks/useCollection";
import TransactionForm from "./TransactionForm"
import TransactionsList from "./TransactionsList";
import Balance from "./Balance";

export default function home() {
const {user} = UseAuthContext();
const {documents,error} = UseCollection('transactions',["uid","==",user.uid],["createdAt","desc"]);



  return (
  <div className='grid lg:grid-cols-3 lg:grid-rows-2 gap-10 lg:px-40 px-20'>
    <div className='mt-8 bg-white pl-10 py-5 flex justify-start items-center rounded-xl lg:col-span-2'><Balance balance={documents}/></div>     
    <div className='mt-8 bg-white flex py-5 justify-center items-center rounded-xl lg:col-span-1'><TransactionForm uid={user.uid}/></div>     
    <div className='rounded-xl lg:col-span-2'>{error && <p>{error}</p>}
    {documents && <TransactionsList transactions={documents}/>}
    </div>     
    </div>
  )
}
