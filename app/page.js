'use client';
import { useState } from "react";
import Swal from "sweetalert2";

const App = () => {
  const [formData,setFormData] = useState({
    username:'',
    email:'',
    password:'',
  });

  const handleSubmit=(e)=>{
    e.preventDefault();
    Swal.fire({
      title:'FORM SUBMITTED',
      icon:'success',
      text:'Data Submitted to the server',
      confirmButtonText:'Ok',
    })
  }

  return (
    <div className=" h-screen flex w-full justify-center items-center bg-neutral-300">
      <form action="#" onSubmit={handleSubmit} className="p-4 shadow-lg max-w-[800px] w-[90%] bg-white">
        <p className="font-semibold text-2xl my-4 text-center text-orange-500">
          SIGNUP TO AGRIBIX
        </p>
        <div>
          <p>Username</p>
          <input
            type="text"
            name="username"
            className="h-[40px] p-[10px]  w-full"
            placeholder="Enter username"
            style={{
              border: "1px solid #333",
            }}
          />
        </div>
        <div className="mt-4">
          <p>Email</p>
          <input
            type="email"
            name="email"
            className="h-[40px] p-[10px]  w-full"
            placeholder="Enter email"
            style={{
              border: "1px solid #333",
            }}
          />
        </div>
        <div className="mt-4">
          <p>Password</p>
          <input
            type="password"
            name="password"
            className="h-[40px] p-[10px]  w-full"
            placeholder="Enter Password"
            style={{
              border: "1px solid #333",
            }}
          />
        </div>
        <button
          type="submit"
          className="rounded-md p-2 text-white bg-gradient-to-tr from-orange-500 to-orange-800 w-full mt-4"
        >
          SIGNUP
        </button>
      </form>
    </div>
  );
};

export default App;