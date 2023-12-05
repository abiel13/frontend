'use client'
import { Container } from '@mui/material'
import React from 'react'
import { ColorRing } from 'react-loader-spinner'

const loading = () => {
  return (
    <Container sx={{marginTop:'2rem' , display:'flex', justifyContent:'center'}}>
      <ColorRing
    visible={true}
    height="80"
    width="80"
    ariaLabel="blocks-loading"
    wrapperStyle={{}}
    wrapperClass="blocks-wrapper"
    colors={['#00f', '#00f', '#00f', '#00f', '#00f']}
  />
    </Container>
    
  )
}

export default loading