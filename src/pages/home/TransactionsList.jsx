import { XCircleIcon } from "@heroicons/react/solid";
import { useFirestore } from "../../hooks/useFirestore";


export default function TransactionsList({transactions}) {

    const {deleteDocument ,response} = useFirestore('transactions')
    console.log(response);
    const formatMovmentsDate = function (date, locale) {
        const calcDaysPassed = (date1, date2) =>
          Math.round(Math.abs(date2 - date1) / (1000 * 60 * 60 * 24));      
        const daysPassed = calcDaysPassed(new Date(), date);
        if (daysPassed === 0) return 'Today';
        if (daysPassed === 1) return 'Yesterday';
        if (daysPassed <= 7) return `${daysPassed} Days Ago`;
       
        return new Intl.DateTimeFormat(locale).format(date);
      };
  return (
    <div>
        <ul>
            {transactions.map((transaction)=>(
                <li key={transaction.id}>                   
                    <div className="px-5 py-5 my-5 duration-500 ease-in-out bg-white rounded-xl">
                    <div className="relative flex items-center justify-between w-full overflow-hidden group ">
                        <div className="group-hover:text-red-500">
                        <div className="text-lg font-bold">{transaction.name}</div>
                        <div className="text-sm text-gray-500 justify-self-end group-hover:text-red-500">{transaction.userName}</div>
                        </div>
                        <div className="flex flex-col group-hover:hidden">
                        <div className="font-bold text-right text-green-500 justify-self-end ">+₹{transaction.amount}</div>
                        <div className="text-xs text-right text-gray-500 justify-self-end ">{formatMovmentsDate((transaction.createdAt.seconds)*1000,"hi-IN")}</div>
                        </div>
                        <button className="absolute flex items-center justify-center px-5 py-5 duration-200 drop-shadow-5xl -right-20 group-hover:right-0" onClick = {() => deleteDocument(transaction.id)}>
                        <XCircleIcon className="text-red-500 h-7 w-7 bg-clip-text "/>
                        </button>
                    </div>
                    </div>
                </li>
            ))}
        </ul>
    </div>
  )
}

// new Intl.DateTimeFormat(locale).format(date);
// appearance-none rounded relative block w-full px-3 py-2 border border-gray-300 placeholder-gray-500 text-gray-900 focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 focus:z-10 sm:text-sm