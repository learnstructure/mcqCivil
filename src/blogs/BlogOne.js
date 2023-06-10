import React from 'react'
import { useParams } from 'react-router-dom'
import BlogComment from './BlogComment'

import { useOutletContext } from 'react-router-dom';
function BlogOne() {
    const { blog } = useOutletContext()
    const params = useParams().id

    const myBlog = blog.find(obj => obj.id === params)
    //console.log(myBlog)
    return (
        <>
            {myBlog.content}
            <div className='blog-container'>
                <p>Hope this was helpful. Thanks for reading. ❤️</p>
                <p>
                    Join our <a href='https://t.me/civilengineering_structure' target="_blank" rel="noreferrer" className='ext-link'>Telegram</a> channel to get updates and to make any queries.

                </p>

                <BlogComment id={myBlog.id} />
            </div>
        </>
    )
}

export default BlogOne