import React from "react";
import "./App.css";


let permission = Notification.permission;
if(permission === "granted") {
   showNotification();
} else if(permission === "default"){
   requestAndShowPermission();
} else {
  alert("Use normal alert");
}
function showNotification() {
   
   var title = "Bill due";
   var body = "Bill due date comeing up!";
   var notification = new Notification(title, { body });
   notification.onclick = () => { 
          notification.close();
          window.parent.focus();
   }
}
function requestAndShowPermission() {
   Notification.requestPermission(function (permission) {
      if (permission === "granted") {
            showNotification();
      }
   });
}


function LogIn({setUserNumber, setLogInState}) {
return(
    <div className="flex flex-col justify-center m-4 mt-40 p-5 xl:w-1/4 xl:mx-auto bg-white rounded shadow">
      
      
      
      <button 
      onClick={() => {
        
        showNotification()
        console.log("working")
      }}
      className=" bg-red-500 text-white hover:bg-green-500">test</button>
      
      
      
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