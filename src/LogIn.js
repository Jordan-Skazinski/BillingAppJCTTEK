import React from "react";
import "./App.css";





function LogIn({setUserNumber, setLogInState}) {
return(
    <div className="flex flex-col justify-center m-4 mt-40 p-5 xl:w-1/4 xl:mx-auto bg-blue-900 text-white rounded shadow">
      
      
      
      
      
      
      <label className="w-1/2" htmlFor="Email">Email</label>
      <input
        className="mb-5 rounded"
        type="text"
        name="Email"
        id="Email"
        placeholder="Email"
        onChange={(e) => setUserNumber(e.target.value)}
      ></input>
      <label className="w-1/2 " htmlFor="Password">Password</label>
      <input
        className="mb-5 rounded"
        type="text"
        name="Password"
        id="Password"
        placeholder="Password"
        //onChange={() => setUserPassword(e.target.value)}
      ></input>
      <button
        onClick={() => setLogInState("1")}
        className="
      bg-blue-500 
      text-white 
      font-bold 
      py-2 
      px-8 
      rounded 
      shadow 
      border-2 
      border-blue-500 
      hover:bg-transparent 
      hover:text-blue-500 
      transition-all 
      duration-300"
      >
        Log In
      </button>
      <div className="columns-2">
      <button
        onClick={() => setLogInState("2")}
        className="
      mt-5
      text-white  
      hover:bg-transparent 
      hover:text-blue-500 
      transition-all 
      duration-300"
      >
        Register
      </button>
      <button
        onClick={() => setLogInState("3")}
        className="
      ml-5
      mt-5
      text-white  
      hover:bg-transparent 
      hover:text-blue-500 
      transition-all 
      duration-300"
      >
        Reset Password
      </button>
      </div>
    </div>
)
}

export default LogIn