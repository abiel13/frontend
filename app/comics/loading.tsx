import React from 'react'
import { Grid } from '@mui/material'
import Skeleton from 'react-loading-skeleton'
import { Container } from '@mui/material'

const Loading = () => {
  return (
    <div className='mt-[3rem]'>
<div>
  <div className='flex flex-col  gap-5 mt-[1rem]'>
  <div className='flex gap-5 items-center justify-around'>
    {[0,0,0,0,0].map((item, id) => (
      <Skeleton key={id} width={70} height={40} />
    ))}
  </div>
<Container>
   <Grid sx={{margin:'auto' }} container spacing={1} >
    {[0,0,0,0,0,0,0].map((item, id) => (
      <Grid xs={4} sx={{display:'flex' , flexDirection:'column' , gap:'1rem'}} key={id} item>
         <Skeleton   width={250} height={100} />
         <Skeleton   width={250} height={30} />
         <Skeleton   width={200} height={20} />
      </Grid> 
    ))}
  </Grid>
</Container>
 
  
  </div>
</div>
    </div>
  )
}

export default Loading