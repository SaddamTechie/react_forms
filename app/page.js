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
    if(formData.username.trim()==="" || formData.email.trim()==="" || formData.password.trim()===""){
      Swal.fire({
        title:'FORM SUBMISSION ERROR',
        icon:'error',
        text:'Fill all fields',
        confirmButtonText:'Ok',
      })
    }else{
      if(formData.password.length < 8){
        Swal.fire({
          title:'FORM SUBMISSION ERROR',
          icon:'error',
          text:'Password should be more than 8 characters',
          confirmButtonText:'Ok',
        })
      }else{
        let users = []
        users.push(formData)
        const isLocalStorageEmpty = !!localStorage.getItem("users")
        if(!isLocalStorageEmpty){
          localStorage.setItem("users",JSON.stringify(users))
        }else{
          users = JSON.parse(localStorage.getItem("users"))
          users.push(formData)
          localStorage.setItem("users",JSON.stringify(users))
          const lol = localStorage.getItem("users")
          console.log(lol)
        }

        Swal.fire({
          title:'FORM SUBMITTED',
          icon:'success',
          text:'Data Submitted to the server',
          confirmButtonText:'Ok',
        })
      }
      
    }
  }

/*
  const onChange = (e) =>{
    const {name,value} = e.target;
    setFormData({...formData,[name]:value})
  }
*/

const onChange = (e) =>{
  const {name,value} = e.target;
  setFormData((prev)=>({
    ...prev,
    [name]:value
  }))
  console.log(value)
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
            name="username" onChange={onChange}
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
            name="email" onChange={onChange}
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
            name="password" onChange={onChange}
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