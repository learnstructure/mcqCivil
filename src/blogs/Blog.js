import React from 'react'
import { Link } from 'react-router-dom'
import blogSummary from './blogsData/blogSummary'
import { Helmet } from 'react-helmet'
import './css/blog.css'
function Blog() {

    return (
        <div className='blog-container'>
            <Helmet>
                <title>Structure engineering</title>
                <meta name="description" content={"structure analysis blogs etabs sap2000 staad pro midas civil"} />
            </Helmet>

            {blogSummary.map(blog => (<div key={blog.id}>
                <h2>{blog.title}</h2>
                <img src={blog.image} alt="3D model of structure" style={{ maxWidth: '100%' }} />
                <div>{blog.preview}....<Link to={`/blog/${blog.id}`}  >See more</Link>
                </div>

                <hr />
            </div>))}

        </div>
    )
}

export default Blog