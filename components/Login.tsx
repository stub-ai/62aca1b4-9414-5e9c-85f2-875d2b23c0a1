import React from 'react';

const Login = () => {
  return (
    <div className="p-4 rounded shadow bg-white">
      <h1 className="text-2xl font-bold mb-4">Login</h1>
      <form>
        <label className="block mb-2">Username</label>
        <input type="text" className="block w-full mb-4 p-2 border rounded" />
        <label className="block mb-2">Password</label>
        <input type="password" className="block w-full mb-4 p-2 border rounded" />
        <button type="submit" className="mt-2 px-4 py-2 bg-blue-500 text-white rounded">Login</button>
      </form>
    </div>
  );
};

export default Login;