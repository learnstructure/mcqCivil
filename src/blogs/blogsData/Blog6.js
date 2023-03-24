import React from 'react'
import '../css/blog.css'
import { Helmet } from 'react-helmet'
function Blog6() {
    return (
        <main className='blog-container'>
            <Helmet>
                <title>Displacement based design</title>
                <meta name="description" content="What is displacement based design approach?" />
            </Helmet>
            <h1>What is membrane and shell elements in ETABS and which one to assign?</h1>
            <div className='author'>
                <div>Author: Abinash Mandal</div>
                <div>Date: March, 2023</div>
            </div>

            <h2>Introduction</h2>
            <p>First let's understand what shell is in most general sense. Shells are the curved surfaces (planar or flat surface is a special case) with thickness very small in comparison to other two dimensions.</p>
            <p>If you have not heard the term <em>shell</em> before, you can think of this as an area element, for example slabs, domes, etc.</p>
            <p>In ETABS or any design software, only the flat shell elements are available. And such elements serve the purpose even if we have to deal with curved surfaces. This is achieved by dividing (meshing) the curved surface into small areas.  </p>
            <p>There are two different classes of shells - thick shells and thin shells. In thick shells, there is shear deformation in addition to bending deformation. So the the assumption that plane section remains plane after deformation is not valid here. The analysis of such shells is very complex. But no worries because most of the shell elements that we have to deal with, fall under thin shells category. </p>
            <p>In thin shells, there is only bending deformation. This is the topic that we will be seeing today and also this is the most frequent case in real projects.</p>

            <h2>Load carrying mechanism of thin shells</h2>
            <p>The load carrying mechanism of shells can be viewed as two different types of internal forces. They are membrane behaviour and plate bending behaviour. </p>

            <h3>1. Membrane behaviour</h3>
            <p>Imagine a
                The first one is due to development of in-plane forces, i.e. in-plane normal and shear forces. This is known as membrane behaviour of shells.
            </p>

            <h3>2. Plate bending behaviour</h3>
            <ul>
                <li>The other one is transverse forces and moments</li>
            </ul>

            {/* <div className='img-flex'>
                <img src='/images/nonlinear/stress-strain.PNG' alt="stress strain curve" />
                <img src='/images/nonlinear/bending-stress.PNG' alt="beam and bending stress" />
            </div> */}

            <h2>Types of thin shells</h2>


            <h2>Implementation in ETABS</h2>



            <h2>Conclusion</h2>
            <ul>
                <li></li>

            </ul>

            <hr />


        </main>
    )
}

export default Blog6