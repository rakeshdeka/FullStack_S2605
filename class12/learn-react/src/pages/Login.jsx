// import React from 'react'

import { useAuth } from "../context/AuthContext";

const Login = () => {
  const { login } = useAuth();

  const handleLogin = () => {
    const user = {
      id: 1,
      name: "Jhon",
      email: "jhon@gmail.com",
      role: "Admin",
    };
    login(user);
  };

  return (
    <div>
      {/* <h1>Login</h1> */}

      <button onClick={handleLogin}  className="bg-green-300 w-fit py-2 px-2 rounded-md cursor-pointer" >Login</button>
    </div>  
  );
};

export default Login;
