import React from 'react'

import { useState } from 'react';

function AddUser() {
  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [status, setStatus] = useState(false);

  const handleSubmit = (e) => {
    e.preventDefault();
    const newUser = { name, email, status };
    // Add the new user to the state or API here
    console.log(newUser);
  };

  return (
    <div>
      <form onSubmit={handleSubmit}>
        <input
          type="text"
          value={name}
          onChange={(e) => setName(e.target.value)}
          placeholder="Name"
          className="block w-full p-2 mb-2"
        />
        <input
          type="email"
          value={email}
          onChange={(e) => setEmail(e.target.value)}
          placeholder="Email"
          className="block w-full p-2 mb-2"
        />
        <select
          value={status}
          onChange={(e) => setStatus(e.target.value === 'true')}
          className="block w-full p-2 mb-2"
        >
          <option value="false">Inactive</option>
          <option value="true">Active</option>
        </select>
        <button  type="submit" className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded" >
          Add User
        </button>
      </form>
    </div>
  );
}

export default AddUser;
