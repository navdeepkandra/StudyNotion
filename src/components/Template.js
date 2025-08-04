import React from 'react'
import frame from "../assets/frame.png" 
import SignupForm from './SignupForm'
import LoginForm from './LoginForm'
import {FcGoogle} from 'react-icons/fc'

const Template = ({title, desc1, desc2, image, formtype, setIsLoggedIn}) => {
  return (
    <div className='justify-between flex w-11/12 max-w-[1160px] py-12 gap-x-12 gap-y-0 mx-auto'>
      <div className='w-11/12 max-w-[450px]'>
        <h1 className='text-richblack-5 font-semibold text-[1.875rem] leading-[2.735rem]'>{title}</h1>

        <p className='text-[1.125rem] leading-[1.625rem] mt-4'>
            <span className='text-richblack-100'>{desc1}</span>
            <br />
            <span className='text-blue-100 italic'>{desc2}</span>
        </p>

        {formtype === "signup" ? (<SignupForm setIsLoggedIn={setIsLoggedIn}/>) : (<LoginForm setIsLoggedIn={setIsLoggedIn}/>)}

        <div className='flex items-center my-4 w-full gap-x-2'>
            <div className='w-full h-[1px] bg-richblack-700'></div>
            <p className='text-richblack-700 text-medium leading-[1.375rem]'>OR</p>
            <div className='w-full h-[1px] bg-richblack-700'></div>
        </div>

        <button className='flex w-full justify-center items-center rounded-[8px] font-medium text-richblack-100 border border-richblack-700 py-[8px] px-[12px] gap-x-2 mt-6'
        ><FcGoogle /> {formtype === "signup" ? (<p>Signup with Google</p>) : (<p>Login with Google</p>)}</button>
      </div>

      <div className='relative w-11/12 max-w-[450px]'>
        <img src={frame}
        alt="pattern"
        width={558} height={504} loading='lazy'/>
  
       <img src={image} 
        alt="students" 
        className='absolute right-4 -top-4'
        width={558} height={504} loading='lazy'/>
      </div>

    </div>
  )
}

export default Template
