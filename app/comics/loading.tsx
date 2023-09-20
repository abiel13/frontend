import React from 'react'
import Skeleton from 'react-loading-skeleton'

const Loading = () => {
  return (
    <div className=''>
<div>
  <div className='flex gap-5'>
  
    <Skeleton count={4} />
  </div>
</div>
    </div>
  )
}

export default Loading