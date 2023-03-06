import React from 'react'
import { useParams } from 'react-router-dom'
import BlogComment from './BlogComment'
import blogSummary from './blogsData/blogSummary'
function BlogOne() {
    const params = Number(useParams().id)
    const myBlog = blogSummary.find(obj => obj.id === params)
    return (
        <>
            {myBlog.content}
            <div className='blog-container'>
                <p>Hope this was helpful. Thanks for reading. ❤️</p>
                {/* <p>If this was helpful, smash the red heart of mine😀.❤️</p> */}

                <BlogComment id={params.toString()} />
            </div>
        </>
    )
}

export default BlogOne