 'use client'
import React from 'react'
import Navbar from './components/Navbar'
import Search from './components/Search'

const ComicPage = () => {
  return (
    <div className='bg-black min-h-screen py-3'>
    <Navbar />
    <Search />
    </div>
  )
}

export default ComicPage