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

            {blogSummary.map(blog => (<div key={blog.id} className="blog-container-one" >
                <h2>{blog.title}</h2>
                <div className='blog-summary-container'>
                    <div>
                        <img src={blog.image} alt={blog.imageAlt} style={{ maxWidth: '100%' }} />
                    </div>
                    <div style={{ fontSize: "1.2rem" }}>{blog.preview}... <Link to={`/blog/${blog.id}`}  >See more</Link>
                    </div>
                </div>

            </div>))}

        </div>
    )
}

export default Blog