import React from 'react'

function Users() {
   


  return (
    <div>
     <div className="container mx-auto p-4 pt-6 md:p-6 ">
     <h1 className="text-5xl font-bold text-blue-600">List of Users:</h1>



           
       <div className='flex gap-10'>    <button onClick={() => {window.location.href = '/AddUser'}} className="bg-blue-500 hover:bg-cyan-600 text-white font-bold py-2 px-4 rounded mt-6">Add User </button>
           <button onClick={() => {window.location.href = '/DeleteUser'}} className="bg-red-500 hover:bg-orange-600 text-white font-bold py-2 px-4 rounded mt-6">Delete User</button>
       </div>
 






    </div>





    </div>
  )
}

export default Users