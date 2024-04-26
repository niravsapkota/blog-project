import React, {useState, useEffect} from 'react'
import { useParams, useNavigate, Link } from 'react-router-dom'
import { ReactComponent as LeftArrow } from '../assets/arrow-left.svg'
import { ReactComponent as Edit } from '../assets/edit.svg'
import { ReactComponent as Delete } from '../assets/delete.svg'

const BlogPage = () => {

  const { id } = useParams()
  let blogID = id
  const navigate = useNavigate()
  
  let [blog, setBlog] = useState(null)

  let getBlog = async ()=> {
    let response = await fetch(`/api/blogs/${blogID}`)
    let data = await response.json()
    setBlog(data)
  }

  useEffect(()=>{
    getBlog()
  }, [blogID])

  let deleteBlog = async ()=>{
    fetch(`/api/blogs/${blogID}/delete/` , {
        method: "DELETE",
        headers: {
            'Content-Type': 'application/json'
        }
    })
  }

  let handleDelete = () => {
    deleteBlog()
    navigate('/')

  }  

  return (
    <div className='blog'>
      <div className='blog-header'>
        <Link to={'/'}>
          <LeftArrow />
        </Link>
        <Link to={`/blog/${blogID}/update`}>
          <Edit />
        </Link>
        <Delete onClick={handleDelete}/>
      </div>
      <h3>{blog?.title}</h3>
      <div className='blog-body'>
      <p>{blog?.body}</p>
      </div>
    </div>
  )
}

export default BlogPage