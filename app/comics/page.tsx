'use client'
import Link from 'next/link'
import React , {useState} from 'react'


 


const ComicPage:React.FC =  () => {
  const [categories, setcategories] = useState()
  return (
    <div className='bg-blak    min-h-screen px-3 py-[1rem] mt-3 font-bold'>
<div className="my-4 w-[90] flex items-center bg-red-400 gap-4 overflow-x-hidden ">
<Link className='px-5 py-3 rounded-lg bg-white text-black text-center' href={'/'}>Comedy</Link>
<Link className='px-5 py-3 rounded-lg bg-white text-black text-center' href={'/'}>Epic</Link>
<Link className='px-5 py-3 rounded-lg bg-white text-black text-center' href={'/'}>Adventure</Link>

  <Link className='px-5 py-3 rounded-lg bg-white text-black text-center' href={'/'}>Folkore</Link>
</div>

   <div>
    <h1 className='text-2xl text-white tracking-wide '>Latest Stories</h1>
   </div>
   </div>
)}

export default ComicPage