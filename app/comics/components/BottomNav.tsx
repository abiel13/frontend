import React from 'react'
import {FaHome , FaBookmark ,FaStar , }    from 'react-icons/fa'
import {BiLibrary} from 'react-icons/bi'
import Link  from 'next/link'

const BottomNav = () => {
  return (
    <div style={{background:'#dd0000'}} className='flex items-center w-full   opacity-100 pt-1 fixed px-2 bottom-0 justify-around md:hidden'>
<Link  className='flex flex-col items-center gap-1' href={'/comics'}>
<FaHome fontSize={20} fill='white' />
<p className='text-base font-bold text-white tracking-wider'>Home</p>
</Link>
<Link className='flex flex-col items-center gap-1'  href={'/comics/bookmarks'}>
<FaBookmark fontSize={20} fill='white' />
<p className='text-base font-bold text-white tracking-wider'>BookMarks</p>
</Link>
<Link  className='flex flex-col items-center gap-1' href={'/comics/favorites'}>
<FaStar  fontSize={20} fill='white'/>
<p className='text-base font-bold text-white tracking-wider'>Favorites</p>
</Link>
<Link className='flex flex-col items-center gap-1'  href={'/comics/library'}>
<BiLibrary fontSize={20} fill='white' />
<p className='text-base font-bold text-white tracking-wider'>Library</p>
</Link>

    </div>
  )
}

export default BottomNav