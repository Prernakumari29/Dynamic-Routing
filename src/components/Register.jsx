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
            alert("you are already registered")
            reset()
            return
        }

        const updatedArr = [...oldData , data]
        localStorage.setItem("users" , JSON.stringify(updatedArr))
        alert("successfully registered")
        setUserName(data.name)
       setIsAuth(true)
       reset();
    }
  return (
    <div>
        {/* ----------------------------------Registration Form---------------------------------- */}
      <form onSubmit={handleSubmit(submit)} >

        {/* ------------------------------------name------------------------------------------------ */}
        <input {...register("name" , {required:true})} type="text"  placeholder='enter your name'/>
        {errors.name && <p className='text-red-500'>Name is required</p>}

        {/* --------------------------------------password--------------------------------------------------- */}
        <input {...register("[password" , {required:true , minLength:8})} type="text" placeholder='enter your password' />
         {errors.password?.type === "required" && <p className='text-red-500'>password is required</p> }
         {errors.password?.type === "minlength" && <p className='text-red-500'>minimum length should be 8</p> }

        {/* --------------------------------------------email------------------------------------------------- */}
        <input {...register("email" , {required:true})} type="text" placeholder='enter your email'/>
        {errors.email && <p className='text-red-500'>email is required</p> }
        <button >Register </button>
      </form>

      <p>If have an account then</p> <button className='text-blue-500' onClick={() => setToggle(true)}>Login here</button>
    </div>
  )
}

export default Register
