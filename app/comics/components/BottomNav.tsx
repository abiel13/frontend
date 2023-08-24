import React from 'react'
import {FaHome , FaBookmark ,FaStar , }    from 'react-icons/fa'
import {BiLibrary} from 'react-icons/bi'
import Link from 'next/link'

const BottomNav = () => {
  return (
    <div className='flex items-center w-full bg-white  opacity-100 py-5 fixed bottom-0 justify-around md:hidden'>
<Link  className='flex flex-col items-center gap-1' href={'/comics'}>
<FaHome fontSize={27} />
<p>Home</p>
</Link>
<Link className='flex flex-col items-center gap-1'  href={'/comics'}>
<FaBookmark fontSize={27} />
<p>BookMarks</p>
</Link>
<Link  className='flex flex-col items-center gap-1' href={'/comics'}>
<FaStar  fontSize={27}/>
<p>Favorites</p>
</Link>
<Link className='flex flex-col items-center gap-1'  href={'/comics'}>
<BiLibrary fontSize={27} />
<p>Library</p>
</Link>

    </div>
  )
}

export default BottomNav