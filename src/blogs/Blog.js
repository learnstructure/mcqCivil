import React from 'react'
import { Link } from 'react-router-dom'

import { useOutletContext } from 'react-router-dom';
import { Helmet } from 'react-helmet'
import './css/blog.css'

function Blog() {
    const { blog } = useOutletContext()
    return (
        <div className='blog-container'>
            <Helmet>
                <title>Structure engineering blogs</title>
                <meta name="description" content={"Structure analysis and design articles, blogs etabs sap2000 staad pro midas civil"} />
            </Helmet>

            {blog.map(blog => {
                /* const urlId = (blog.title).replaceAll(/[./?°:%,*_+'";]/g, "").replace(/[¹²³⁴ᵗʰʳᵈˢᵗ]/g, "").replaceAll(' ', '-').replaceAll('  ', '-'); */
                return (<div key={blog.id} className="blog-container-one" >
                    <h1>{blog.title}</h1>
                    <div className='img-flex'>
                        <div style={{ minWidth: '35%' }}>
                            <img src={blog.image} alt={blog.imageAlt} style={{ maxWidth: '100%' }} />
                        </div>
                        <div style={{ lineHeight: "1.7" }}>{blog.preview}... <Link to={`/structural-engineering/${blog.id}`}  >See more</Link>
                        </div>
                    </div>

                </div>)
            })}


        </div>
    )

}

export default Blog