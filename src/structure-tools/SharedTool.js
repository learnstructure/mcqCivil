import React from 'react'
import { Outlet } from 'react-router-dom'
import blog from '../blogs/blogsData/blogSummary'

function SharedTool() {

    for (let i = 0; i < blog.length; i++) {
        blog[i].id = (blog[i].title).replaceAll(/[./?°:%,*_+'";]/g, "").replace(/[¹²³⁴ᵗʰʳᵈˢᵗ]/g, "").replaceAll(' ', '-').replaceAll('  ', '-');
    }
    return (
        <>
            <Outlet context={{ blog }} />
        </>
    )
}

export default SharedTool