import React, {useState, useEffect} from 'react'
import BlogItem from '../components/BlogItem'
import AddButton from '../components/AddButton'

const BlogListPage = () => {
  let [blogs, setBlogs] = useState([])
  useEffect(()=>{
    getBlogs()
  }, [])

  let getBlogs = async() => {
    let response = await fetch('/api/blogs/')
    let data = await response.json()
    setBlogs(data)
  }
  return (
    <div>
        <div className='blogs-list'>
          {blogs.map((blog, index)=>(
            <BlogItem key={index} blog={blog} />
          ))}

        </div>
        <AddButton />
    </div>
  )
}

export default BlogListPage