'use client'
import * as React from 'react';
import BottomNavigation from '@mui/material/BottomNavigation';
import BottomNavigationAction from '@mui/material/BottomNavigationAction';
import Paper from '@mui/material/Paper'
import AddHomeIcon from '@mui/icons-material/AddHome';
import CollectionsBookmarkIcon from '@mui/icons-material/CollectionsBookmark';
import FavoriteIcon from '@mui/icons-material/Favorite';
import LocalLibraryIcon from '@mui/icons-material/LocalLibrary';
import { useRouter } from 'next/navigation';

export default function BottomNav() {
  const [value, setValue] = React.useState('recents');
  const router = useRouter()
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
        onClick={() =>  router.push('/comics')}
      />

     
      <BottomNavigationAction
        label="Favorites"
        value="favorites"
        icon={<FavoriteIcon />}
        onClick={() => router.push('/comics/bookmarks')}
      />
      <BottomNavigationAction
        label="Library"
        value="Library"
        icon={<LocalLibraryIcon />}
        onClick={()=> router.push('/comics/library')}
      />
      <BottomNavigationAction label="BookMark" value="Bookmark" icon={<CollectionsBookmarkIcon onClick={() => router.push('/comics/bookmarks')} />} />
    </BottomNavigation>
</Paper>
    </div>
  
  );
}
