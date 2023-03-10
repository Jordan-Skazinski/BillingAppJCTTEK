import React from "react";
import "./App.css";





function LogIn({setUserNumber, setLogInState}) {
return(
    <div className="flex flex-col justify-center m-4 mt-40 p-5 xl:w-1/4 xl:mx-auto bg-white rounded shadow">
      
      
      
      
      
      
      
      <label className="w-1/2" htmlFor="Username">Enter Username</label>
      <input
        className="mb-5"
        type="text"
        name="Username"
        id="Username"
        placeholder="Username"
        onChange={(e) => setUserNumber(e.target.value)}
      ></input>
      <label className="w-1/2" htmlFor="Password">Enter Password</label>
      <input
        className="mb-5"
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
    </div>
)
}

export default LogIn