import React from  'react'
import { Link } from 'react-router-dom'
const Header  = () => {
    return (
        <div className='flex items-end  justify-between'> 
            <h1 className='text-2xl text-white font-medium'> Hello <br/> <span className=' text-3xl font-semibold' > Gaurav </span><span/></h1>
            <Link to="/" className='bg-red-600 text-lg font-medium text-white px-5 py-2 rounded-sm'> Log Out</Link>
         </div>
    )
}

export default Header 