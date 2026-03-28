import React, { useContext } from 'react'
import { mystore } from '../contextAPI'
import { useForm } from "react-hook-form"
import {toast} from "react-toastify"
import "react-toastify/dist/ReactToastify.css";

const Login = ({setToggle}) => {
    let {setIsAuth, setUserName} = useContext(mystore)
    const {handleSubmit , register , reset , formState:{errors}} = useForm();

    const submit = (data)=>{

        let users = JSON.parse(localStorage.getItem("users")) || []
        const foundUser = users.find((u) => u.name === data.name && u.password === data.password)

        if(foundUser){
            toast.success("Login successful 🎉")
            
            setIsAuth(true)
            localStorage.setItem("auth","true") 
            localStorage.setItem("username",foundUser.name)
            setUserName(foundUser.name)
            setToggle(true)
            reset();
        }
        else{
            toast.error("Account not found 🚫.\n Please register first 😊.")
            reset();
        }         
    }

  return (
    <div className="px-4 sm:px-6 md:px-0 max-w-md mx-auto md:max-w-none">

        <h1 className='text-xl sm:text-2xl md:text-2xl font-semibold text-center mb-4 sm:mb-6 md:mb-6'>
          Login 
        </h1>

        {/* --------------------------------Login Form------------------------------------------ */}
      <form onSubmit={handleSubmit(submit)} className='flex flex-col gap-5 sm:gap-6 md:gap-8' >

        {/* ---------------------------------name-------------------------------------- */}
        <div >
            <input 
              {...register("name" , {required:true})}
              type="text" 
              placeholder='enter your name' 
              className='w-full px-3 sm:px-4 md:px-4 py-2 border rounded-md bg-transparent outline-none focus:border-blue-500 text-sm sm:text-base md:text-base'
            />
             {errors.name && <p className='text-red-500 text-sm mt-1'>Name is required</p>}
        </div>

        {/* ------------------------------------password-------------------------------------- */}
        <div >
            <input 
              {...register("password" , {required:true , minLength:6})}
              type="text" 
              placeholder='enter your password' 
              className='w-full px-3 sm:px-4 md:px-4 py-2 border rounded-md bg-transparent outline-none focus:border-blue-500 text-sm sm:text-base md:text-base'
            />
        {errors.password?.type === 'required' && <p className='text-red-500 text-sm mt-1'>password is required</p>}
        {errors.password?.type === 'minLength' && <p className='text-red-500 text-sm mt-1'>minimum length should be 6</p>}
        </div>

        <div >
            <button className='bg-blue-500 w-full py-2 md:p-1 rounded text-white text-sm sm:text-base md:text-base px-3 text-center active:scale-90 cursor-pointer'>
              Log In
            </button>
        </div>
      </form>

      <div className='flex flex-col sm:flex-row md:flex-row items-center justify-center gap-1 sm:gap-2 md:gap-2 mt-4 sm:mt-6 md:mt-6 text-sm sm:text-base md:text-base text-center'>
        <p> Don't have an account ? </p> 
        <button 
          className='text-blue-900 hover:border-b-2 cursor-pointer' 
          onClick={() => setToggle(false)}
        >
          register here
        </button>
      </div>
    </div>
  )
}

export default Login