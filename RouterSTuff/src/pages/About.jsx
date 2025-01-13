import React from 'react'

function About() {
  return (
    <div>
      <div className="container mx-auto p-4 pt-6 md:p-6 ">
          <h1 className="text-5xl font-bold text-green-600">This is a User Dashboard</h1>
          <p className="text-xl text-blue-400 mt-4">What we do here is, that we make boards of users in a dash. Thus, a user dashboard!</p>
          <div className='flex gap-10'>
          <button onClick={() => {window.location.href = '/Home'}} className="bg-red-500 hover:bg-orange-600 text-white font-bold py-2 px-4 rounded mt-6">Go Back</button>
            </div>
           
        </div>
      </div>


         
   
  )
}

export default About