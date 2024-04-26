import React from 'react'
import { Link } from 'react-router-dom'

const Header = () => {
  return (
    <div className='app-header'>
        <Link to={'/'}><h1>Blog Website</h1></Link>
    </div>
  )
}

export default Header