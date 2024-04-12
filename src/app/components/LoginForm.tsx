import React from 'react'

function LoginForm() {
  return (
    <div className='flex flex-col justify-center items-center space-y-5 '>
      <div>
            <span className="text-4xl font-extrabold">Sign In</span>
          </div>
          <div className="space-y-3">
            <div className="flex flex-col">
              <label className="text-[12px] text-black">Username</label>
              <input type="text" className="bg-gray-100 py-1 outline-1 outline-gray-400 border-[1px] border-gray-300 px-2" placeholder="Enter Username"></input>
            </div>
            <div className="flex flex-col">
              <label className="text-[12px] text-black">Password</label>
              <input type="password" className="bg-gray-100 py-1 outline-1 outline-gray-400 border-[1px] border-gray-300 px-2" placeholder="Enter Password"></input>
            </div>
            <div className="w-full justify-center flex">
              <button className="text-center w-28 py-2 rounded-full font-bold bg-red-400 text-white uppercase border-[1px] border-red-400 hover:bg-white hover:text-red-400 transition-all">Sign In</button>
            </div>
          </div>
    </div>
  )
}

export default LoginForm
