import React from 'react';
import { Link } from 'react-router-dom';


function Navbar() {
  return (
    <div className='bg-zinc-200 flex gap-4 items-center justify-evenly px-10 border border-b-2 border-gray-600 p-5'>
        <Link className='text-xl text-blue-800 font-sans hover:text-gray-600 hover:underline transition ease-in-out duration-200' to = {'/'}> Home</Link>
        <Link className='text-xl text-blue-800 font-sans hover:text-gray-600 hover:underline transition ease-in-out duration-200' to = {'/About'}> About</Link>
        <Link className='text-xl text-blue-800 font-sans hover:text-gray-600 hover:underline transition ease-in-out duration-200' to = {'/Users'}>Users </Link>




    </div>
  )
}

export default Navbar