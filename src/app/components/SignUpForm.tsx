import React, { useState } from 'react'
import axios from 'axios';
import toast from 'react-hot-toast';

function SignUpForm({callBack}:any) {
  const [userData, setUserData] = useState({
    'organisation_name': '',
    'email': '',
    'password': '',
    'confirmPassword': ''
  });
  const [isSuccess,setIsSuccess] = useState(false)
  const [isLoader, setIsLoader] = useState(false)
  const [otp,setOTP] = useState('')
  const validate = () =>{
    if(userData.password ==='' || userData.confirmPassword === '' || userData.organisation_name ===''|| userData.email === ''){
      return false
    }
    else{
      return true
    }
  }
  const handleChange = (e: any) => {
    const { name, value } = e.target;
    setUserData(prevState => ({
      ...prevState,
      [name]: value
    }));
  };

  const handleSubmit = async (event: any) => {
    event.preventDefault();
    try {
      if (validate()) {
        if (userData.password === userData.confirmPassword) {
          const response = await axios.post('/api/users/signup', userData)
          toast.success(response.data.message)
          console.log(response.data)
          setIsSuccess(true)

        }
        else {
          toast.error("Password and Confirm Password should be same")
        }
      }
      else {
        toast.error("Fields must not be empty")
      }
    } catch (error: any) {
      toast.error(error.response.data.error)
      console.log(error.response.data.error)
    }
  }
  const verifyOTP =async (event:any) =>{
    event.preventDefault()
    try {
      if (otp.length === 6) {
        const response = await axios.post('http://localhost:3000/api/users/signup/verifyOTP',{otp,email:userData.email})
        toast.success(response.data.message)
        callBack('Login as School/College')
      } else { 
        toast.error("OTP length Should be 6 digit")
      }
    } catch (error:any) {
      toast.error(error.response.data.error)
    } 
  }
  return (
    <>
    {isSuccess?<form onSubmit={verifyOTP} className='flex flex-col justify-center items-center space-y-5 '>
      <div>
        <span className='text-2xl font-bold'>OTP Code Verification</span>
      </div>
      <div className='flex flex-col '>
        <label htmlFor='otp' className='text-sm'>Enter the code sent to your Email</label>
        <input type="text" name='otp' id='otp' value={otp} onChange={(e:any)=>setOTP(e.target.value)} className="bg-gray-100 py-1 outline-1 outline-gray-400 border-[1px] border-gray-300 px-2" placeholder="Enter OTP"></input>
        <button className='bg-red-400 w-full mt-3 rounded-md text-sm text-white font-bold uppercase py-2 px-2 hover:bg-red-500'>Submit</button>
      </div>
    </form>:<form className='flex flex-col justify-center items-center space-y-5 ' onSubmit={handleSubmit}>
      <div>
        <span className="text-4xl font-extrabold">Sign Up</span>
      </div>
      <div className="space-y-2">
        <div className="flex flex-col">
          <label htmlFor='organisation_name' className="text-[12px] text-black">Organisation Name</label>
          <input type="text" name='organisation_name' id='organisation_name' value={userData.organisation_name} onChange={handleChange} className="bg-gray-100 py-1 outline-1 outline-gray-400 border-[1px] border-gray-300 px-2" placeholder="Enter Organisation Name"></input>
        </div>
        <div className="flex flex-col">
          <label htmlFor='email' className="text-[12px] text-black">E-mail</label>
          <input type="email" id='email' name='email' value={userData.email} onChange={handleChange} className="bg-gray-100 py-1 outline-1 outline-gray-400 border-[1px] border-gray-300 px-2" placeholder="Enter E-mail"></input>
        </div>
        <div className="flex flex-col">
          <label className="text-[12px] text-black" htmlFor='password'>Password</label>
          <input type="password" id='password' onChange={handleChange} name='password' value={userData.password} className="bg-gray-100 py-1 outline-1 outline-gray-400 border-[1px] border-gray-300 px-2" placeholder="Enter Password"></input>
        </div>
        <div className="flex flex-col">
          <label className="text-[12px] text-black" htmlFor='confirm_password'>Confirm Password</label>
          <input type="password" id='confirm_password' onChange={handleChange} name='confirmPassword' value={userData.confirmPassword} className="bg-gray-100 py-1 outline-1 outline-gray-400 border-[1px] border-gray-300 px-2" placeholder="Re-Enter Password"></input>
        </div>
        <div className="w-full justify-center flex">
          <button className="text-center mt-4 w-28 py-2 rounded-full font-bold bg-red-400 text-white uppercase border-[1px] border-red-400 hover:bg-white hover:text-red-400 transition-all">Sign Up</button>
        </div>
      </div>
    </form>}
    </>
  )
}

export default SignUpForm
