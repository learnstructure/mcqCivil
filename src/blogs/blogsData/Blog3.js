import React from 'react'
import '../css/blog.css'
import { Helmet } from 'react-helmet'
function Blog3() {
    return (
        <main className='blog-container'>
            <Helmet>
                <title>Types of forces in structural analysis</title>
                <meta name="description" content="What actually are axial force, shear force and bending moment?" />
            </Helmet>
            <h1>What actually are axial force, shear force and bending moment ? 🤔</h1>
            <div className='author'>
                <div>Author: Abinash Mandal</div>
                <div>Date: March, 2023</div>
            </div>

            <h2>Introduction</h2>
            <p>When external load (force or moment) is applied on a deformable body, internal force develops within the body. This internal force acting on unit area is known as stress. There are basically two types of stress: normal stress (tensile stress and compressive stress) and shear stress.
            </p>
            <p>The distribution of normal and or shear stresses in a specific manner gives rise to specific type of forces, like axial force (tension and compression), shear force, bending moment and torsion. For the sake of generality I have put bending moment and torsion as type of force. If we look deeply, they are actually type of forces, which you will be convinced by the end of this article.</p>

            <h2>Axial Force & Axial Stress</h2>
            <p>Axial force is the internal force acting normal to the cross section of a member and axial stress is axial force acting on unit cross sectional area as shown in figure below.</p>
            <div className='img-flex'>
                <div><img src='/images/forces/axial.PNG' alt="axial force" /></div>
                <div>
                    <p>To visualize axial force, imagine a solid circular bar of radius r fixed at one end and subjected to load P at free end. Due to load P, all the cross sections of rod will be subjected to stress normal (or perpendicular) to its plane as shown in figure. For small area we have <span className='highlight'> Δforce = stress x  Δarea</span>. (If the stress is constant throughout the area, this expression will convert to regular formula as we see in the books, i.e. <span className='highlight'> Force = stress x  Area</span>). </p>
                    <p>If we multiply these stresses with corresponding small areas, we obtain the forces acting on that small areas. By adding up all these forces throughout the cross section what we get is called axial force. Axial forces tend to either elongate or shorten the member. </p>
                </div>
            </div>
            <p >Axial force if it tends to increase the length of member then it is called tensile force and corresponding stress is called tensile stress. Similarly if axial force tends to reduce the length of member then it is called compressive force and corresponding stress is called compressive stress.</p>

            <h2 >Shear Force & Shear Stress</h2>
            <p>Shear force is the internal force acting parallel to the cross section of a member. And shear stress is shear force acting on unit area. τ is the shear stress shown in figure below.</p>

            <div className='img-flex'>
                <div><img src='/images/forces/shear.PNG' alt="shear force" /></div>
                <p>To visualize shear force, imagine two planks as shown in figure. The bottom plank is clamped to the ground and top plank is attached on top of bottom plank with the help of glue. Now the top plank is subjected to load P. As a result shear stress τ is developed on interface. When the shear stress τ exceeds strength of glue, then the planks get separated.</p>
            </div>
            <p>Again like we show in case of axial force, if we multiply τ by the area on which τ is acting, we get shear force P. But note that in this case area will be length * width of the plank. So we can say <span className='highlight'> P = τ x  L B </span> </p>
            <p>Notice that shear force tends to change the angle between the planes.</p>

            <h2>Bending Moment & Bending Stress</h2>
            <p>Well the definition goes like - bending moment at any section of a member is algebraic sum of moments developed due to external loads and reactions to the left or right of the section only. But this definition would only help once we understand bending moment.</p>
            <p>If there is purely compressive stress on whole section, the section will be in compression only and if there is purely tensile stress on whole section, then the section will be in tension only. Bending moment at any section occurs whenever there is both compressive and tensile force on that section like shown in figure below. </p>
            <div className='img-flex'>
                <div><img src='/images/forces/bending.PNG' alt="bending moment" /></div>

                <p>When a transverse force acts on any member (let's say beam), the beam will bend in the plane of load as shown in figure. Now let's observe carefully, the upper fibers of the beam will be shortened and so will be in compression, whereas lower fibers will be elongated and so will be in tension. This type of stress is called bending stress.</p>
            </div>
            <p>In between those planes, there is one plane which has same length before and after the application of load. This plane is called neutral plane. The intersection of neutral plane with the cross section of beam gives neutral axis. </p>
            <p>The summation of forces above the neutral axis gives compression force and below the neutral axis gives tension force. The couple formed by equal and opposite tension and compression is called <strong>bending moment</strong>.</p>
            <p>Well we just saw that bending moment is caused by two equal and opposite forces acting on the same section. We can write this as <span className='highlight'> M = Compression (or tension) x lever arm</span>. Lever arm is the distance between centroid of tension and centroid of compression.</p>


            <h2>Summary</h2>
            <ul>
                <li>Axial force tends to either elongate or shorten the member.</li>
                <li>If the axial stress is constant throughout the cross-section, <em>axial force = axial stress x cross section area</em></li>
                <li>Shear force tends to change the angle between planes.</li>
                <li>If shear stress is <strong>constant</strong> throughout the section considered, <em>shear force = shear stress x section considered</em></li>
                <li>Bending moment at a section is caused by a pair of tension and compression at that section. BM tends to change the curvature along the member.</li>
                <li>Expression for BM can be written as <em>BM = compression (or tension) * lever arm</em></li>
            </ul>

            <hr />


        </main>
    )
}

export default Blog3