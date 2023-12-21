import * as React from "react";
import {BrowserRouter as Router, Route, Link, Routes} from 'react-router-dom';
import {UseLogout} from "../hooks/useLogout";
import { UseAuthContext } from "../hooks/useAuthContext";
import { LogoutIcon } from "@heroicons/react/solid";


export default function navbar() {
  const {logout} = UseLogout();
  const {user} = UseAuthContext();


  return (
        <div className='w-full h-20 lg:px-48 px-5 mb-8 py-10 bg-white flex justify-between items-center   drop-shadow-[0_35px_35px_rgba(0,0,0,0.01)]'>
        <div className='text-2xl font-bold '>
           <Link to="/"> Budget<span className='text-indigo-500 '>i</span></Link>
        </div>
        <div className='flex items-center justify-center'>
            <ul className='flex flex-row'>
              {!user &&( 
            <div className="flex items-center justify-center">
            <Link to="/login"><button className="flex items-center px-4 py-2 mx-2 text-sm font-medium text-white bg-indigo-600 border border-transparent rounded-md group hover:bg-indigo-700" >Login</button></Link>
            <Link to='/signup'><button className="flex items-center px-4 py-2 mx-2 text-sm font-medium text-white bg-indigo-600 border border-transparent rounded-md group hover:bg-indigo-700" >SignUp</button></Link>
            </div>)}
            {user && (
            <div className="flex items-center justify-center">
              <li>
                <p className="px-5 text-normal">Hello, <span className="font-bold">{user.displayName}</span></p>
              </li>
            <li>
              <button className="flex items-center px-4 py-2 text-sm font-medium text-white bg-indigo-600 border border-transparent rounded-md group hover:bg-indigo-700" onClick={logout}>Logout <LogoutIcon className="w-5 h-5 mx-1 text-white "/></button>
            </li>
            </div>
            )}
            </ul>
            {/* Hello, <span className='text-lg font-bold'>Navneet</span> */}
        </div>
    </div>
  )
}
