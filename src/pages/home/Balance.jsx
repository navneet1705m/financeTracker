import React, { useEffect } from 'react'

export default function balance({balance}) {
  const monthNames = ["January", "February", "March", "April", "May", "June",
  "July", "August", "September", "October", "November", "December"
];

    let total = 0;
    const amounts = [];
    const calcBalance = () =>{
        balance && balance.forEach(e => {
            total += parseFloat(e.amount);
            amounts.push()
        });
    }
    calcBalance();


  return (
    <div>
      <h1 className='font-bold text-sm tracking-widest uppercase text-indigo-500 '>{monthNames[new Date().getMonth()]} Month </h1>
        <h1 className='lg:text-xl text-sm font-bold lg:pb-5 pt-2'>Total Expenses</h1>
        <h1 className='lg:text-6xl text-xl font-bold text-green-500'>₹ {total}</h1>
        </div>
  )
}
