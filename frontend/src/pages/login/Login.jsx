import React, { useState } from 'react'
import { Link } from 'react-router-dom'
import useLogin from '../../hooks/useLogin'

export const Login = () => {
    const [username, setUsername] = useState("")
    const [password, setPassword] = useState("")
    const {loading, login} = useLogin();
    const handleSubmit = async (e) => {
        e.preventDefault();
        await login(username, password);
    }

  return (
    <div className='flex flex-col items-center justify-center min-h-screen'>
        <div className='w-full max-w-md p-6 rounded-lg shadow-lg bg-white/10 backdrop-blur-md border border-white/20 bg-opacity-30 text-gray-300'>
            <h1 className='text-3xl font-semibold text-center text-gray-300'>
                Login
                <span className='text-blue-500'> ChatApp</span>    
            </h1>

            <form onSubmit={handleSubmit}>
                <div>
                    <label className='label p-2'>
                        <span className='text-base label-text'>Username</span>
                    </label>
                    <input type="text" placeholder='Enter Username' className='w-full input input-bordered h-10' onChange={(e) => setUsername(e.target.value)} value={username} />
                </div>

                <div>
                    <label className='label p-2'>
                        <span className='text-base label-text'>Password</span>
                    </label>
                    <input type="password" placeholder='Enter Password' className='w-full input input-bordered h-10' onChange={(e) => setPassword(e.target.value)} value={password} />
                </div>
                
                <Link to="/signup" className='text-sm hover:underline hover:text-blue-500 mt-2 inline-block'>
                    {"Don't"} have an Account?
                </Link>

                <div>
                    <button className='btn btn-block btn-sm mt-2' disabled={loading}>
                        {!loading ? ('Login') : (
                            <span className='loading loading-spinner'></span>
                        )}
                    </button>    
                </div>

            </form>
        </div>

    </div>
  )
}