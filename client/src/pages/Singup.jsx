import React from 'react'
import { Link } from 'react-router-dom';
export default function Singup() {
  return (
    <div className='p-3 max-w-lg mx-auto'>
        <h1 className='text-3xl text-center font-semibold my-7'>Sing Up</h1>
        <form className='flex flex-col gap-4'>
        <input type="text" placeholder="Username" id="username" className='bg-slate-100 p-3 rounded-lg'></input>
        <input type="text" placeholder="email" id="email" className='bg-slate-100 p-3 rounded-lg'></input>
        <input type="text" placeholder="password" id="password" className='bg-slate-100 p-3 rounded-lg'></input>
       <button className='bg-slate-700 text-white p-3 rounded-lg uppercase hover:opacity-95 disabled:opacity-80'>Sing up</button>
        </form>
        <div className='flex gap-2 mt-5'>
            <p>Have an account?</p>
            <Link to="/sing-in">
            <span className='text-blue-500'>Sing in</span>
            </Link>
        </div>
    </div>
  );
}
