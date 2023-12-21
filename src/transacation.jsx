import {Link} from "react-router-dom"

export default function transacation() {
  return (
  <div className='flex justify-between bg-white drop-shadow-sm rounded-[16px] flex-row  items-center m-0 px-3 h-20 w-96'>
    <div className='flex flex-row '>
       <div className='bg-blue-200 px-4 py-3 rounded-[10px]'>
         <i className='text-blue-500 bx bx-user'></i>
       </div>
       <div className='flex flex-col px-3 justify-items-start'>
         <div className='font-bold text-md'>Milk</div>
         <div className='text-sm '>Navneet Malviya</div>
       </div>
     </div>
     <div className='text-xl text-green-500'>+ ₹20</div>
   </div>
  );
}
