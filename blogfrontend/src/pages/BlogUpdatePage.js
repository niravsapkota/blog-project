import React, {useState, useEffect} from 'react'
import { useParams, useNavigate} from 'react-router-dom'
import { ReactComponent as Tick } from '../assets/tick.svg'

const BlogUpdatePage = () => {

  const { id } = useParams()
  let blogID = id  
  let [blog, setBlog] = useState(null)

  const navigate = useNavigate()

  useEffect(()=>{
    getBlog()
  }, [blogID])

  let getBlog = async ()=> {
    let response = await fetch(`/api/blogs/${blogID}`)
    let data = await response.json()
    setBlog(data)
  }

  let updateBlog = async ()=>{
    fetch(`/api/blogs/${blogID}/update/` , {
        method: "PUT",
        headers: {
            'Content-Type': 'application/json'
        },
        body: JSON.stringify(blog)
    })
  }

  let handleSubmit = ()=>{
    if (!blog.body.trim()) {
      alert('Body cannot be empty')
    } 
    else {
      updateBlog()
      navigate('/') 
    }
  }

  return (
    <div className='blog'>
      <div className='blog-header'>
          <Tick onClick={handleSubmit} />
      </div>
      <h3>{blog?.title}</h3>
      <textarea
        onChange={(e) => {
          setBlog({ ...blog, 'body': e.target.value });
        }}
        defaultValue={blog?.body || ''}>
      </textarea>
    </div>
  )
}

export default BlogUpdatePage