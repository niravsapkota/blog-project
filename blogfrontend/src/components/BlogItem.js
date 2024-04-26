import React from 'react'
import { Link } from 'react-router-dom'

const BlogItem = ({blog}) => {
  return (
    <div className='blog-list-item'>
      <Link to={`/blog/${blog.id}`}>
      <h3 >{blog.title}</h3>
      </Link>
      <p>{blog.body.length > 300 ? blog.body.slice(0, 300) + '...': blog.body}</p>
      
    </div>
  )
}

export default BlogItem