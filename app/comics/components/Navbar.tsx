import React from 'react'

const Navbar = () => {
  return (
    <div style={{borderBottom:'1px solid #444'}} className=' w-full px-3 flex font-bold items-center justify-between py-3'>
<div className='text-2xl tracking-wider font-bold text-white'>Alte<span className='text-red-700'>Flix</span></div>
<div className='w-[50px] h-[50px] rounded-full bg-white'></div>
    </div>
  )
}

export default Navbar