'use client'
import React , {useState} from 'react'
import {FaSearch} from 'react-icons/fa'
import { useRouter } from 'next/navigation'

const Search = () => {
const [searchItem, setSearchItem] = useState<string>('')
const router = useRouter();
const handleChange = (e:React.ChangeEvent<HTMLInputElement>) => {
 const {value} = e.target;
 if(!value.length) return;
 router.push(`/comics/search/${value}`)
}

  return (
    <div className='w-full flex  items-center justify-center  flex-col px-4 mt-5'>
   <div className='bg-white drop-shadow-lg shadow-lg w-full md:w-1/2 relative rounded-full'>
    <input type="text" onChange={(e) => handleChange(e)}  placeholder='search ....' className='bg-white border-none outline-none px-4  py-4 rounded-full w-full'/>   
    <FaSearch fill={'black'} className=' right-[10%] bottom-[50%] translate-y-[50%] text-[1.2rem] absolute' />
</div>     
    </div>

  )
}

export default Search