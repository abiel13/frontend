import { Container, Typography } from '@mui/material'
import React from 'react'
import { useAppContext } from '../context/context';

const UserDetails = () => {
  const { userData } = useAppContext();
  const fullname = userData?.firstname + " " + userData?.lastname;
  return (
    <Container sx={{ marginTop: { md: "5%", xs: "20%" } }}>
    <Typography fontWeight='bold' fontSize={28}>
      {fullname == 'undefined undefined' ? '' :fullname}
    </Typography>
    <Typography>
      {userData?.email == 'undefined ' ? ' ' : userData?.email}
    </Typography>
  </Container>
  )
}

export default UserDetails