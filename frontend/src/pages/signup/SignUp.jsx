import React, { useState } from 'react'
import GenderCheckBox from './GenderCheckBox'
import { Link } from 'react-router-dom'
import useSignup from '../../hooks/useSignup'

export const SignUp = () => {

  const [inputs, setInputs] = useState({
    fullName: '',
    username: '',
    password: '', 
    confirmPassword: '',
    gender: ''
  })

  const {loading, signup} = useSignup();


  const handleCheckBoxChange = (gender) => {
    setInputs({...inputs, gender})
  }

  const handleSubmit = async(e) =>{
    e.preventDefault();
    console.log(inputs);
    await signup(inputs);
  }

  return (
    <div className='flex flex-col items-center justify-center min-h-screen'>
      <div className='w-full max-w-md p-6 rounded-lg shadow-lg bg-white/10 backdrop-blur-md border border-white/20 bg-opacity-30 text-gray-300'>
        <h1 className='text-3xl font-semibold text-center text-gray-300'>
          Sign Up
          <span className='text-blue-500'> ChatApp</span>
        </h1>

        <form onSubmit={handleSubmit}>
          <div>
            <label className='label p-2'>
              <span className='text-base label-text'>Name</span>
            </label>
            <input type="text" placeholder='Kalu Singh' className='w-full input input-bordered h-10' name="fullName"
            value={inputs.fullName} onChange={(e) => setInputs({...inputs, fullName: e.target.value})} />
          </div>

          <div>
            <label className='label p-2'>
              <span className='text-base label-text'>Username</span>
            </label>
            <input type="text" placeholder='kalusingh' className='w-full input input-bordered h-10' name="username"
            value={inputs.username} onChange={(e) => setInputs({...inputs, username: e.target.value})}/>
          </div>

          <div>
            <label className='label p-2'>
              <span className='text-base label-text'>Password</span>
            </label>
            <input type="password" placeholder='Enter Password' className='w-full input input-bordered h-10' name="password"
            value={inputs.password} onChange={(e) => setInputs({...inputs, password: e.target.value})}/>
          </div>

          <div>
            <label className='label p-2'>
              <span className='text-base label-text'> Confirm Password</span>
            </label>
            <input type="password" placeholder='Confirm Password' className='w-full input input-bordered h-10' name="confirmPassword"
            value={inputs.confirmPassword} onChange={(e) => setInputs({...inputs, confirmPassword: e.target.value})}/>
          </div>

          <GenderCheckBox onCheckBoxChange={handleCheckBoxChange} selectedGender={inputs.gender} />

          <Link to="/login" className='text-sm hover:underline hover:text-blue-500 mt-2 inline-block'>
            Already have an Account?
          </Link>

          <div>
            <button className='btn btn-block btn-sm mt-2' disabled={loading}>
              {loading ? (<span className='loading loading-spinner'></span>) : ('Sign Up')}</button>
          </div>

        </form>
      </div>

    </div>
  )
}
