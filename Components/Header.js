import React from 'react'
import Link from 'next/link'

const Header = (props) => {
  return (
    <> 
    <div className='h-8 bg-green-500 flex items-center justify-between p-5'>

    <h2>Logo</h2>

    <div className='flex space-x-28 '>
      
    <Link href="/About">About</Link>
    <Link href="/Courses">Courses</Link>
    </div>
    
  </div>
  </>
   
  )
}

export default Header
