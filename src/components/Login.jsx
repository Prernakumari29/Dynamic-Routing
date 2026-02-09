import React, { useContext } from 'react'
import { mystore } from '../contextAPI'
import { useForm } from "react-hook-form"

const Login = ({setToggle}) => {
    let {setIsAuth, setUserName} = useContext(mystore)
    const {handleSubmit , register , reset , formState:{errors}} = useForm();

    const submit = (data)=>{

        // -----------------------localStorage------------------------------------------
        let users = JSON.parse(localStorage.getItem("users")) || []
        const foundUser = users.find((u) => u.name === data.name && u.password === data.password)
        if(foundUser){
            alert("Login successful 🎉")
            setUserName(foundUser.name)
         setIsAuth(true)
         reset();
        }
        else{
            alert("Account not found 🚫.\n Please register first 😊.")
            reset();
        }         
    }
  return (
    <div >
        <h1 className='text-2xl font-semibold text-center mb-6'>Login </h1>
        {/* --------------------------------Login Form------------------------------------------ */}
      <form onSubmit={handleSubmit(submit)} className='flex flex-col gap-8 ' >

        {/* ---------------------------------name-------------------------------------- */}
        <div >
            <input {...register("name" , {required:true})} type="text" placeholder='enter your name' 
            className='w-full px-4 py-2 border rounded-md bg-transparent outline-none focus:border-blue-500 '/>
             {errors.name && <p className='text-red-500'>Name is required</p>}
        </div>

        {/* ------------------------------------password-------------------------------------- */}
        <div >
            <input {...register("password" , {required:true , minLength:6})} type="text" placeholder='enter your password' 
            className='w-full px-4 py-2 border rounded-md bg-transparent outline-none focus:border-blue-500 '/>
        {errors.password?.type === 'required' && <p className='text-red-500'>password is required</p>}
        {errors.password?.type === 'minLength' && <p className='text-red-500'>minimum length should be 6</p>}
        </div>


        <div >
            <button className='bg-blue-500 w-full p-1 rounded text-white px-3 text-center active:scale-90 cursor-pointer'>Log In</button>
        </div>
      </form>

      <div className='flex gap-2 mt-6'>
        <p> Don't have an account ? </p> 
      <button className='text-blue-900 hover:border-b-2 cursor-pointer' onClick={() => setToggle(false)}>register here</button>
      </div>
    </div>
  )
}

export default Login
