import React from 'react'
import { Link } from 'react-router-dom'
import {ReactComponent as Add} from '../assets/add.svg'

const AddButton = () => {
  return (
    <Link to={'/blog/create'} className='floating-button'>
        <Add />
    </Link>
  )
}

export default AddButton