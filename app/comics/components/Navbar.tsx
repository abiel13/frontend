'use client'
import { useAppContext } from '@/app/context/context'
import React from 'react'

const Navbar = () => {
 const {userData} = useAppContext()

  return (
    <div style={{borderBottom:'1px solid #444'}} className=' w-full px-3 flex font-bold items-center justify-between py-3'>
<div className='text-2xl tracking-wider font-bold text-white'>Alte<span className='text-red-700'>Flix</span></div>
<div style={{background:'red'}} className='w-[50px] h-[50px] rounded-full flex items-center justify-center text-white'>{userData.firstname[0]} . {userData.lastname[0]}</div>
    </div>
  )
}

export default Navbar