import React, {useState} from 'react'
import { useNavigate} from 'react-router-dom'
import { ReactComponent as Tick } from '../assets/tick.svg'

const BlogCreate = () => {

  const navigate = useNavigate()

  let [blog, setBlog] = useState(
    {
      title: "",
      body: "",
    }
  )

  let handleChange = (e) => {
    const { name, value } = e.target;
    setBlog({
      ...blog,
      [name]: value,
    });
  };

  let createBlog = async ()=>{
    fetch(`/api/blog/create/` , {
        method: "POST",
        headers: {
            'Content-Type': 'application/json'
        },
        body: JSON.stringify(blog),
    })
  }

  const handleSubmit = (e) => {
    e.preventDefault();
    if (!blog.title.trim() || !blog.body.trim()) {
      alert('Please fill in both the fields')
    } else {
      createBlog();
      navigate('/')
    }
  };
  
  return (
    <div className='blog'>
      <div className='blog-header'>
          <Tick onClick={handleSubmit} />
      </div>
      <form>
        <div className='form-group'>
          <input
            id='title'
            name='title'
            type="text" 
            placeholder='Enter title (max 255 characters)'
            maxLength={255}
            value={blog.title}
            onChange={handleChange}
          />
        </div>
        <div className='form-group'>
          <textarea
            id='body'
            name='body'
            placeholder='Enter body'
            onChange={handleChange}
          ></textarea>
        </div>
      </form>
    </div>
  )
}

export default BlogCreate