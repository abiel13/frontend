// import React from 'react'
// import {FaHome , FaBookmark ,FaStar , }    from 'react-icons/fa'
// import {BiLibrary} from 'react-icons/bi'
// import Link  from 'next/link'
// import { usePathname } from 'next/navigation'

// const BottomNav = () => {
//   const path:string =  usePathname()

//   return (
//     <div style={{background:'#dd0000'}} className='flex items-center w-full   opacity-100 fixed px-2 bottom-0 justify-around md:hidden'>
// <Link  className={`${path == '/comics' ? 'border-t-4 border-white' : ''} flex flex-col bg-blue-500s items-center gap-1' `}href={'/comics'}>
// <FaHome fontSize={20} fill='white' />
// <p className='text-base font-bold text-white tracking-wider'>Home</p>
// </Link>
// <Link className={` ${path == '/comics/bookmarks' ? 'border-t-4 border-white' : ''}  flex flex-col items-center gap-1' `} href={'/comics/bookmarks'}>
// <FaBookmark fontSize={20} fill='white' />
// <p className='text-base font-bold text-white tracking-wider'>BookMarks</p>
// </Link>
// <Link  className={` ${path == '/comics/favorites' ? 'border-t-4 border-white' : ''}  flex flex-col items-center gap-1' `}href={'/comics/favorites'}>
// <FaStar  fontSize={20} fill='white'/>
// <p className='text-base font-bold text-white tracking-wider'>Favorites</p>
// </Link>
// <Link className={` ${path == '/comics/library' ? 'border-t-4 border-white' : ''}  flex flex-col items-center gap-1' `} href={'/comics/library'}>
// <BiLibrary fontSize={20} fill='white' />
// <p className='text-base font-bold text-white tracking-wider'>Library</p>
// </Link>

//     </div>
//   )
// }

// export default BottomNav



import * as React from 'react';
import BottomNavigation from '@mui/material/BottomNavigation';
import BottomNavigationAction from '@mui/material/BottomNavigationAction';
import FolderIcon from '@mui/icons-material/Folder';
import Paper from '@mui/material/Paper'
import AddHomeIcon from '@mui/icons-material/AddHome';
import CollectionsBookmarkIcon from '@mui/icons-material/CollectionsBookmark';
import FavoriteIcon from '@mui/icons-material/Favorite';
import LocalLibraryIcon from '@mui/icons-material/LocalLibrary';

export default function BottomNav() {
  const [value, setValue] = React.useState('recents');

  const handleChange = (event: React.SyntheticEvent, newValue: string) => {
    setValue(newValue);
  };

  return (
    <div className='block md:hidden'>
          <Paper sx={{ position: 'fixed', bottom: 0, left: 0, right: 0 }} elevation={3}>
        <BottomNavigation sx={{ width: 'auto' }} value={value} onChange={handleChange}>
      <BottomNavigationAction
        label="Home"
        value="Home"
        icon={<AddHomeIcon />}
      />
      <BottomNavigationAction
        label="Favorites"
        value="favorites"
        icon={<FavoriteIcon />}
      />
      <BottomNavigationAction
        label="Library"
        value="Library"
        icon={<LocalLibraryIcon />}
      />
      <BottomNavigationAction label="BookMark" value="Bookmark" icon={<CollectionsBookmarkIcon />} />
    </BottomNavigation>
</Paper>
    </div>
  
  );
}
