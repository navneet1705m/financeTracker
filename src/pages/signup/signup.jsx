import { useState, useTransition } from "react"
import { useSignup } from "../../hooks/useSignup";

export default function Signup() {
const [email,setEmail] = useState('');
const [username,setUserName] = useState('');
const [password,setPassword] = useState('');
const [room,setRoom] = useState('');
const {signup,isPending,error} = useSignup();

const handleSubmit = (e) =>{
e.preventDefault();
console.log(email,password,username,room);
signup(email,password,username,room);
}  

  return (
  <div className="flex justify-center items-center">
  <div className="min-h-full flex items-center justify-center w-96  bg-white py-20 rounded-xl shadow-sm shadow-gray-300 px-4 sm:px-6 lg:px-8">
        <div className="w-20 min-w-fit space-y-8">
          <div>
            {/* <img
              className="mx-auto h-12 w-auto"
              src="https://tailwindui.com/img/logos/workflow-mark-indigo-600.svg"
              alt="Workflow"
            /> */}
            <h2 className="mt-6 text-center text-3xl font-extrabold text-gray-900">Sign Up New Account</h2>
            </div>


          <form className="mt-8 space-y-6" onSubmit={handleSubmit}>
            <div className="rounded-md shadow-sm -space-y-px">
              <div>
                <label htmlFor="text" className="sr-only">
                  Username
                </label>
                <input
                  id="text"
                  name="text"
                  type="text"
                  autoComplete="text"
                  required
                  className="appearance-none rounded-none relative block w-full px-3 py-2 border border-gray-300 placeholder-gray-500 text-gray-900 rounded-t-md focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 focus:z-10 sm:text-sm"
                  placeholder=" Username"
                  onChange={(e)=>setUserName(e.target.value)}
                  value={username}
                />
              </div>
              <div>
                <label htmlFor="room" className="sr-only">
                  RoomId
                </label>
                <input
                  id="room"
                  name="RoomId"
                  type="text"
                  autoComplete="text"
                  required
                  className="appearance-none rounded-none relative block w-full px-3 py-2 border border-gray-300 placeholder-gray-500 text-gray-900  focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 focus:z-10 sm:text-sm"
                  placeholder=" RoomId"
                  onChange={(e)=>setRoom(e.target.value)}
                  value={room}
                />
              </div>
              <div>
                <label htmlFor="email-address" className="sr-only">
                  Email address
                </label>
                <input
                  id="email-address"
                  name="email"
                  type="email"
                  autoComplete="email"
                  required
                  className=" relative block w-full px-3 py-2 border border-gray-300 placeholder-gray-500 text-gray-900  focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 focus:z-10 sm:text-sm"
                  placeholder="Email address"
                  onChange={(e)=>setEmail(e.target.value)}
                  value={email}
                />
              </div>
              <div>
                <label htmlFor="password" className="sr-only">
                  Password
                </label>
                <input
                  id="password"
                  name="password"
                  type="password"
                  autoComplete="current-password"
                  required
                  className="appearance-none rounded-none relative block w-full px-3 py-2 border border-gray-300 placeholder-gray-500 text-gray-900 rounded-b-md focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 focus:z-10 sm:text-sm"
                  placeholder="Password"
                  onChange={(e)=>setPassword(e.target.value)}
                  value={password}
                />
              </div>
            </div>
            <div className="flex items-center justify-between">
              { !isPending && <button
                type="submit"
                className="group relative w-1/2 flex justify-center py-2 px-4 border border-transparent text-sm font-medium rounded-md text-white bg-indigo-600 hover:bg-indigo-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500"
              >
                <span className="absolute left-0 inset-y-0 flex items-center pl-3">
                  {/* <LockClosedIcon className="h-5 w-5 text-indigo-500 group-hover:text-indigo-400" aria-hidden="true" /> */}
                </span>
                Sign Up
              </button>}
              { isPending && <button
                type="submit" disabled
                className="group relative w-1/2 flex justify-center py-2 px-4 border border-transparent text-sm font-medium rounded-md text-white bg-indigo-600 hover:bg-indigo-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500"
              >
                <span className="absolute left-0 inset-y-0 flex items-center pl-3">
                  {/* <LockClosedIcon className="h-5 w-5 text-indigo-500 group-hover:text-indigo-400" aria-hidden="true" /> */}
                </span>
                Loading...
              </button>}
              <div className="w-1/2 items-center flex justify-center">
              <h2 className="">Login</h2>
              </div>
            </div>
            <div>{error && 
              <p className="text-red-500">{error}</p>}
            </div>
          </form>
        </div>
      </div>
    </div>
  )
}
