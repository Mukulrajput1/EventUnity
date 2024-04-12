'use client'
import React, { useState } from "react";
import DropdownButton from "../../components/DropDownButton";
import LoginForm from "@/app/components/LoginForm";
import SignUpForm from "@/app/components/SignUpForm";


function Login({ params: { slug } }: any) {
  const [isToggleBox, setIsToggleBox] = useState(slug === 'register')
  const [loginAs,setLoginAs] = useState('Login as School/College')
  const toggleButton = () => {
    setIsToggleBox(!isToggleBox)
    toggleForm()
  }
  const [isToggleForm, setIsToggleForm] = useState(slug === 'register')
  const toggleForm = () => {
    setTimeout(() => {
      setIsToggleForm(!isToggleForm)
    }, 195);
  }
  const callBack = (params:any) =>{
    setLoginAs(params)
    setIsToggleBox(false)
    setTimeout(() => {
      setIsToggleForm(false)
    }, 195);
  }

  return (
    <div className="bg-blue-50 flex h-screen justify-center items-center flex-col space-y-4">
      <DropdownButton items={['Login as College', 'Login as Event head', 'Login as Coordinator', 'Login as Volunteers']} callBack = {callBack}></DropdownButton>
      <div className="w-[65%] h-[70vh] bg-white flex  shadow-2xl shadow-gray-700">
        <div className={`w-1/2 h-full bg-red-400 flex flex-col justify-center items-center space-y-3 ${isToggleBox ? "ml-[50%]" : "ml-0"} transition-all ease-in-out duration-500 z-20`}>
          <div className="text-white text-3xl font-bold flex justify-center">
            <span>Welcome to Login</span>
          </div>
          <div className="flex flex-col space-y-1 items-center">
            <span className="text-sm text-white ">{isToggleBox ? "Already have an Account!" : "Don't have an Account ?"}</span>
            <button className="text-center w-28 py-2 rounded-full font-bold text-white uppercase border-[2px] mt-5 hover:bg-white hover:text-red-400 transition-all" onClick={toggleButton}>{isToggleBox ? "Sign In" : "Sign Up"}</button>

          </div>
        </div>
        <div className={`w-1/2 h-full flex flex-col justify-center ${isToggleBox ? "ml-[-100%]" : "ml-0"} transition-all ease-in-out duration-500 z-10 relative`}>
          {!isToggleForm && <div className="right-10 absolute top-10 text-[12px] text-red-400"><span>{loginAs}</span></div>}
          {!isToggleForm ? <LoginForm></LoginForm> : <SignUpForm callBack= {callBack}></SignUpForm>}
        </div>
      </div>
    </div>
  );
}

export default Login;
