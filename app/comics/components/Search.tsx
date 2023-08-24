import React from 'react'
import {FaSearch} from 'react-icons/fa'


const Search = () => {
  return (
    <div className=' px-4 mt-5'>
   <div className='bg-white relative rounded-full'>
    <input type="text"  placeholder='search ....' className='bg-white opacity-100 border-none outline-none px-4  py-4 rounded-full w-full'/>   
    <FaSearch fill={'black'} className=' right-[10%] bottom-[50%] translate-y-[50%] text-[1.2rem] absolute' />
</div>     
    </div>

  )
}

export default Search