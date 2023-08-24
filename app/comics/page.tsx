'use client'
import React from 'react'
import Navbar from './components/Navbar'
import Search from './components/Search'


  return (
    <div className='bg-blak min-h-screen px-3 py-[1rem] mt-3 font-bold'>
<div className="my-4">
<Link className='px-5 py-3 rounded-lg bg-white text-black text-center' href={'/'}>Comedy</Link>
<Link className='px-5 py-3 rounded-lg bg-white text-black text-center' href={'/'}>Epic</Link>
<Link className='px-5 py-3 rounded-lg bg-white text-black text-center' href={'/'}>Adventure</Link>

  <Link className='px-5 py-3 rounded-lg bg-white text-black text-center' href={'/'}>Flokore</Link>
</div>

   <div>
    <h1 className='text-2xl text-white tracking-wide '>Latest Stories</h1>
   </div>
    </div>
  )
}

export default ComicPage