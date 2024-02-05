import React, { useState } from 'react'
import { Link } from 'react-router-dom';

export default function Singup() {
    const [formData, setFormData] = useState({});
    const [error, setError] = useState(false);
    const [loading, setLoading] = useState(false);
    const handleChange = (e) => {
        setFormData({...formData, [e.target.id]: e.target.value});
    };
    const handleSubmit = async (e) =>{
        e.preventDefault();
        try {
            setLoading(true);
            const res = await fetch('/api/auth/singup', {
                method : "POST",
                headers:{
                   'Content-Type': 'application/json',
                },
                body: JSON.stringify(formData),
               
               });
           const data = await res.json();
            setLoading(false);
           if(data.sucess === false){
            setError(true);
            return ;
           }
           setError(false);

        } catch (error) {
            setLoading(false);
            setError(false);

        }
        
    };
  return (
    <div className='p-3 max-w-lg mx-auto'>
        <h1 className='text-3xl text-center font-semibold my-7'>Sing Up</h1>
        <form onSubmit={handleSubmit} className='flex flex-col gap-4'>
        <input type="text" placeholder="Username" id="username" className='bg-slate-100 p-3 rounded-lg' onChange={handleChange}></input>
        <input type="text" placeholder="email" id="email" className='bg-slate-100 p-3 rounded-lg' onChange={handleChange}></input>
        <input type="password" placeholder="password" id="password" className='bg-slate-100 p-3 rounded-lg' onChange={handleChange}></input>
       <button disabled={loading} className='bg-slate-700 text-white p-3 rounded-lg uppercase hover:opacity-95 disabled:opacity-80'> 
         {loading? 'Loading...' : 'Sing Up'}
        </button>
        </form>
        <div className='flex gap-2 mt-5'>
            <p>Have an account?</p>
            <Link to="/sing-in">
            <span className='text-blue-500'>Sing in</span>
            </Link>
        </div>
        <p className='text-red-700 mt-5'> {error && 'Something went wrong'} </p>
    </div> 
  );
}
