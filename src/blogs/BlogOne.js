import React from 'react'
import { useParams } from 'react-router-dom'
import blogSummary from './blogsData/blogSummary'
function BlogOne() {
    const params = Number(useParams().id)
    const myBlog = blogSummary.find(obj => obj.id === params)
    return (
        <>
            {myBlog.content}
        </>
    )
}

export default BlogOne