import React from 'react'
import { useParams } from 'react-router-dom'
import BlogComment from './BlogComment'

import { useOutletContext } from 'react-router-dom';
function BlogOne() {
    const { blog } = useOutletContext()
    const params = useParams().id

    const myBlog = blog.find(obj => obj.id === params)
    return (
        <>
            {myBlog.content}
            <div className='blog-container'>
                <p>Hope this was helpful. Thanks for reading. ❤️</p>

                <BlogComment id={params} />
            </div>
        </>
    )
}

export default BlogOne