import React, { useContext } from 'react'
import { mystore } from '../contextAPI'
import { useForm } from 'react-hook-form'

const Register = ({setToggle}) => {
    const {handleSubmit , register , reset , formState:{errors}} = useForm();

    let { setIsAuth,  setUserName} = useContext(mystore);

    const submit= (data)=>{
        let oldData = JSON.parse(localStorage.getItem("users")) || []

        // ---------------------check if already registered or not--------------------------------
        const alreadyRegisterd = oldData.find((u) => u.name === data.name && u.email === data.email)
        if(alreadyRegisterd){
            alert("Looks like you already have an account.\nPlease log in 😊")
            reset()
            return
        }

        const updatedArr = [...oldData , data]
        localStorage.setItem("users" , JSON.stringify(updatedArr))
        alert("You're successfully registered 🎉")
        setUserName(data.name)
       setIsAuth(true)
       reset();
    }
  return (
    <div>
        <h1 className='text-2xl font-semibold text-center mb-6'>Register </h1>
        {/* ----------------------------------Registration Form---------------------------------- */}
      <form onSubmit={handleSubmit(submit)} className='flex flex-col gap-6' >

        {/* ------------------------------------name------------------------------------------------ */}
         <div>
        <input {...register("name" , {required:true})} type="text"  placeholder='enter your name'
        className='w-full px-4 py-2 border rounded-md bg-transparent outline-none focus:border-blue-500 '/>
        {errors.name && <p className='text-red-500'>Name is required</p>}
         </div>

        {/* --------------------------------------password--------------------------------------------------- */}
       <div>
         <input {...register("[password" , {required:true , minLength:8})} type="text" placeholder='enter your password' 
        className='w-full px-4 py-2 border rounded-md bg-transparent outline-none focus:border-blue-500 '/>
         {errors.password?.type === "required" && <p className='text-red-500'>password is required</p> }
         {errors.password?.type === "minLength" && <p className='text-red-500'>minimum length should be 8</p> }
       </div>

        {/* --------------------------------------------email------------------------------------------------- */}
        <div>
        <input {...register("email" , {required:true})} type="text" placeholder='enter your email'
        className='w-full px-4 py-2 border rounded-md bg-transparent outline-none focus:border-blue-500 '/>

          {errors.email && <p className='text-red-500'>email is required</p> }
        </div>

        <div>
            <button className='bg-blue-500 w-full p-1 rounded text-white px-3 text-center active:scale-90 cursor-pointer' >Register </button>
        </div>
      </form>

      <div className='flex gap-3 mt-3'>
        <p> Have an account? </p>
       <button className='text-blue-900 hover:border-b-2 cursor-pointer' onClick={() => setToggle(true)}>Login here</button>
      </div>
    </div>
  )
}

export default Register
