import React from 'react'
import '../css/blog.css'
import { Helmet } from 'react-helmet'
function Blog2() {
    return (
        <main className='blog-container'>
            <Helmet>
                <title>Diaphragms in ETABS</title>
                <meta name="description" content="Differences between various types of diaphragms in ETABS" />
            </Helmet>
            <h1>What are actually rigid, semi-rigid and no diaphragm in ETABS? And which one to assign?</h1>

            <h2>Rigid diaphragm</h2>
            <p>Well diaphragms are constraints applied in a floor system which are implemented in almost every analysis software like ETABS, SAP2000, STAAD Pro, MIDAS and so on.
            </p>
            <p>First let's understand what a constraint is. In 3D finite element, in general, a node has 6 degrees of freedom (3 translational and 3 rotational) before applying any constraint. So if a structure, let's say slab, has 10 nodes, that means total degrees of freedom in the structure is 60. But when a constraint is assigned, the degrees of freedom reduce, by how much we will see.</p>
            <p> The constraint is basically a relation among certain degrees of freedom. Let's say, translation along x axis in above structure is same for all the 10 nodes. So the degrees of freedom (independent) now will be 60-10+1 = 51 only. What happened here is - all the nodes of a slab has now same displacement along x axis. So 10 is subtracted and 1 is added because 10 nodes have now 1 displacement along x axis. This is what <strong>constraining or constraint</strong> means.
            </p>
            <p>
                If similar constraint is applied along y direction for the same slab, now the degrees of freedom reduces to 51-10+1 = 42.
            </p>
            <p >It is important to note that no constraint has been applied in z direction (vertical direction). So the slab can still have 10 different values of displacement along z axis.
            </p>
            <p>What we have achieved here is called <strong>rigid diaphragm</strong> constraint in slab. So rigid diaphragm means single value of displacement along x axis and single value of displacement along y axis for the whole slab.</p>
            <p>When we define rigid diaphragm in ETABS, we are applying this behavior to the structure. And this is pretty close approximation of how RCC slab behaves in reality. Since the RCC slab has very high stiffness (rigidity) in its own plane in comparison to its stiffness out of plane, we can assume that the slab would deflect as a rigid body in it's own plane only.  </p>
            <p>I hope you got the idea when to apply rigid diaphragm!! The short answer is in case of RCC slab. But wait let's first see what semi-rigid diaphragm is and what if no diaphragm is assigned.</p>

            <h2>No diaphragm at all</h2>
            <p>If we don't assign rigid or semi-rigid diaphragm, that means there are no constraints. So the slab we discussed above will have again 60 degrees of freedom. That means the software has to solve 60 x 60 matrix. Since the computer nowadays is super-fast, there won't be any noticeable difference in analysis time for simple structures.</p>

            <h2>Semi rigid diaphragm</h2>
            <p>Semi rigid diaphragm is something new that CSI America have implemented in ETABS. But it has not been well documented. All they have said is - "semi-rigid diaphragms simulate actual in-plane stiffness properties and behavior". And as a matter of fact this is what happens also in case of 'no diaphragm'.</p>
            <p>So we can say that semi rigid diaphragm is similar to no diaphragm at all ! But there is a major difference that when you assign semi rigid diaphragm, you can also assign eccentricity while defining the seismic load. And eccentricity is required to be defined as per most of the building codes. <span style={{ color: 'royalBlue' }}>So assigning semi-rigid diaphragm is always safer than not assigning diaphragm at all. </span></p>

            <h2>Implementation in ETABS</h2>
            <p>Defining and assigning diaphragm to any floor in ETABS is pretty simple. This involves following steps.</p>
            <ul>
                <li>Model the structure correctly.</li>
                <li>Define diaphragm by going to Define &gt; Diaphragms</li>
                <li>Click on Add new diaphragm</li>
                <li>Choose rigid or semi rigid as rigidity.</li>
                <li>Now to apply the above defined diaphragm, select slabs in a story.</li>
                <li>Go to Assign &gt; Shells &gt; Diaphragms and after selecting a diaphragm click apply.</li>
            </ul>
            <h4>Let's see what are the differences between rigid and semi-rigid in ETABS</h4>
            <img src='/images/diaphragm.JPG' alt="rigid vs semi rigid" style={{ maxWidth: '100%' }} />
            <ul>
                <li>The figure above shows slab having assigned rigid diaphragm in left and semi-rigid in right. Also the seismic loads applied are shown.</li>
                <li>The image is not of high quality but what's important is in case of rigid diaphragm seismic load is applied only at the center of mass of the slab.</li>
                <li>But for semi rigid diaphragm seismic loads are applied at each nodes in the slab.</li>
                <li>Remember when we discussed how assigning rigid diaphragm can reduce the number of degrees of freedom.</li>
                <li>Since there is only one degree of freedom for translation along x axis in case of rigid diaphragm, ETABS automatically applies the load at one point, the point being the center of mass.</li>
                <li>This makes the ETABS easier to carry out the analysis.</li>
                <li>But it is important to note that base shear in each case is same.</li>
            </ul>

            <h2>Summary</h2>
            <ul>
                <li>Base shear and story shears due to EQ loads are same in each case whether you define rigid or semi-rigid or no diaphragm at all.</li>
                <li>In case of rigid diaphragm EQ loads are applied at CM of diaphragm whereas in no diaphragm and semi-rigid diaphragm, EQ loads are applied at each internally and externally meshed joint.</li>
                <li>Difference between no diaphragm and semi-rigid diaphragm is that in case of semi-rigid diaphragm, eccentricity can be applied that produces moment at each joints whereas eccentricity can not be applied in case of no diaphragm</li>
                <li><span style={{ color: 'royalBlue' }}>Very important: </span> In case of semi-rigid and no diaphragm, in-plane shear forces in slab are calculated which is transferred to surrounding elements but this feature is not available in rigid diaphragm. As a result, axial forces are zero in beams connected to slab in case of rigid diaphragm.</li>
                <li>So to conclude, I would suggest to always always assign <strong>semi-rigid diaphragm </strong> unless you are sure that floor has very high in-plane stiffness and so rigid diaphragm can be also be assigned.</li>
            </ul>

            <hr />


        </main>
    )
}

export default Blog2