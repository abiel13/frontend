import React from 'react'
import {FaHome , FaBookmark ,FaStar , }    from 'react-icons/fa'
import {BiLibrary} from 'react-icons/bi'
import Link  from 'next/link'
import { usePathname } from 'next/navigation'

const BottomNav = () => {
  const path:string =  usePathname()

  return (
    <div style={{background:'#dd0000'}} className='flex items-center w-full   opacity-100 fixed px-2 bottom-0 justify-around md:hidden'>
<Link  className={`${path == '/comics' ? 'border-t-4 border-white' : ''} flex flex-col bg-blue-500s items-center gap-1' `}href={'/comics'}>
<FaHome fontSize={20} fill='white' />
<p className='text-base font-bold text-white tracking-wider'>Home</p>
</Link>
<Link className={` ${path == '/comics/bookmarks' ? 'border-t-4 border-white' : ''}  flex flex-col items-center gap-1' `} href={'/comics/bookmarks'}>
<FaBookmark fontSize={20} fill='white' />
<p className='text-base font-bold text-white tracking-wider'>BookMarks</p>
</Link>
<Link  className={` ${path == '/comics/favorites' ? 'border-t-4 border-white' : ''}  flex flex-col items-center gap-1' `}href={'/comics/favorites'}>
<FaStar  fontSize={20} fill='white'/>
<p className='text-base font-bold text-white tracking-wider'>Favorites</p>
</Link>
<Link className={` ${path == '/comics/library' ? 'border-t-4 border-white' : ''}  flex flex-col items-center gap-1' `} href={'/comics/library'}>
<BiLibrary fontSize={20} fill='white' />
<p className='text-base font-bold text-white tracking-wider'>Library</p>
</Link>

    </div>
  )
}

export default BottomNav