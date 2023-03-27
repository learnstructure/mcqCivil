import React from 'react'
import '../css/blog.css'
import { Helmet } from 'react-helmet'
function Blog6() {
    return (
        <main className='blog-container'>
            <Helmet>
                <title>What is membrane and shell elements in ETABS and which one to assign?</title>
                <meta name="description" content="If you assign membrane shell in ETABS, transverse loads applied on the shell will be transferred to the supporting member using tributary area method. This is in contrast to shell thin where load is transferred by finite element analysis, i.e. by meshing of shells." />
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
            <p>There are two different classes of shells - thick shells and thin shells. In thick shells, there is transverse shear deformation in addition to bending deformation. So the assumption that plane section remains plane after deformation is not valid here. The analysis of such shells is very complex but can be easily done in ETABS. </p>
            <p>In thin shells, there is only bending deformation. This is the topic that we will be seeing today and also this is the most frequent case in real projects.</p>
            <p>Thin shell can be considered as a special case of thick shell where transverse shear deformation is negligible. You may wonder why choose thin shell if thick shell is more general type and can also handle thin slabs. Well this is mainly due to numerical accuracy problems. When there is negligible shear deformation in comparison to bending deformation, thick shell formulation might cause errors since it is more sensitive. And also other reason is that thin shell formulation is easier to understand and gives satisfactory results for most of the real projects.</p>

            <h2>Load carrying mechanism of thin shells</h2>
            <p>The load carrying mechanism of shells can be viewed as two different types of internal forces. They are membrane behaviour and plate bending behaviour. </p>

            <h3>1. Membrane behaviour</h3>
            <p>Imagine a bed sheet with its each corner tied to a vertical support. Now if some weight is placed over the sheet, tension develops in the sheet and but no bending moment because it has negligible bending stiffness. This is pure membrane behaviour, i.e. taking the external loads only by the in-plane forces. Membrane forces are in-plane normal forces (tension and compression) and in-plane shear forces.
            </p>
            <p>It is important to note that even with significant bending stiffness, membrane forces can still develop in a structure due to specific shape of structure. For example  tension and compression develop in curved surface like domes. This is analogous to arch in 1D.</p>
            <p>Usually there is no tension or compression developed in a beam and it resists the load by bending moment. But if the beam is bent (which is just arch), there will be now compression in arch for the same load. Similar behaviour is seen in slabs as well. </p>
            <p>I have discussed about how moments are developed at a section in one of my previous posts. It is basically due to variation of normal stresses on a cross section. And this is the case in moment theory. But in membrane theory, there is constant normal stress across thickness and so no bending moment develops.</p>

            <h3>2. Plate bending behaviour</h3>
            <p>Plate bending behaviour means taking the external load by bending action, i.e. development of bending moment. Pure bending behaviour means only the out of plane internal forces unlike in membrane behaviour.</p>
            <p>Plate bending behaviour is very common for regular slabs in buildings.</p>
            <p>Membrane and moment forces are shown in figure below. In case of moment forces, there is also torsional moment but it is not shown in figure for clarity purpose.</p>
            <img src='/images/shell/force.PNG' alt="full shell behaviour" style={{ maxWidth: '100%' }} />
            <ul>
                <li>In fig. above, Nₓ and Nᵧ are in-plane normal forces and Nₓᵧ is in-plane shear force. These are membrane forces.</li>
                <li>Mₓ and Mᵧ are moments along y and x axes. Vₓ and Vᵧ are transverse shear forces. These forces are induced due to plate bending behavior.</li>
            </ul>
            <h3>3. Full shell behaviour</h3>
            <p>This is combination of membrane behavior and plate bending behavior.</p>
            <p>Let's look at degrees of freedom. </p>
            <ul>
                <li>In membrane theory, number of degrees of freedom at each node of shell element is 3. They are 2 translations along x and y and 1 rotation about z axis. These are in-plane translations and rotation. </li>
                <li>In moment theory, number of degrees of freedom at each node of shell element is 3. They are 1 translation and 2 rotations. These are out of plane translation and rotations.</li>
                <li>In full shell (membrane + moment), total DOF at each node is 3+3 = 6. This is the most general type of shell in terms of degrees of freedom. This general type is implemented in ETABS and is recommended.</li>
                <li>This is shown in image below. The image is taken from the book <em>Three-Dimensional Static and Dynamic Analysis of Structures</em> by Edward L. Wilson.</li>
            </ul>
            <img src='/images/shell/shell.PNG' alt="full shell behaviour" style={{ maxWidth: '100%' }} />
            <h2>Implementation in ETABS</h2>
            <ul>
                <li>In ETABS there is option to choose either membrane or shell thin. </li>
                <li><strong>Shell thin</strong> in ETABS is the full shell behavior we discussed above and it is generally recommended to go for this option.</li>
                <li>Defining shell type is easy in ETABS. Just go to Define &gt; section properties &gt; Slab sections </li>
                <li>Click on Add new property and change the modeling type as shell thin or membrane as required.</li>
            </ul>

            <p>If you assign membrane shell in ETABS, transverse loads applied on the shell will be transferred to the supporting member using tributary area method. This is in contrast to shell thin where load is transferred by finite element analysis, i.e. by meshing of shells. </p>
            <ul>
                <li>This can be seen by going to Display &gt; Load assigns &gt; Frame</li>
                <li>You will see any load that was applied to membrane shell is now transferred to adjoining beams.</li>

                <li>Since membrane shell distributes the transverse loads by tributary area method, this usually gives higher value of moment in the adjoining beams in comparison to thin shell assignment. Because in case of thin shell assignment, some load is taken by the shell elements as well since they have flexural stiffness.</li>
                <li>So assignment of membrane shell may lead to uneconomical design.</li>
                <li>Below is the image that shows bending moment in thin shell (left) and membrane shell (right) for same geometry and loading condition. We can see from the figure that membrane shell assignment has led to significantly higher value of moment in comparison to thin shell assignment.</li>
            </ul>
            <img src='/images/shell/moment.PNG' alt="shell thin vs membrane" style={{ maxWidth: '100%' }} />

            <h2>Conclusion</h2>
            <ul>
                <li>Membrane behavior refers to load carrying mechanism which resist the load by in-plane stiffness of the shell only.</li>
                <li>Moment behavior refers to load carrying mechanism which resist the load by out of plane stiffness of the shell.</li>
                <li><strong>Thin shell</strong> option as given in ETABS is combination of both membrane and moment behavior.</li>
                <li>We saw how membrane shell assignment leads to uneconomical design. However there are certain cases where membrane shell can be assigned.</li>
                <li>First and foremost if a shell has negligible flexural stiffness, membrane shell can be assigned. But since thin shell in ETABS also includes membrane behavior, assigning thin shell wouldn't harm even in this case.</li>
                <li>When you specifically want only membrane behavior, for example if you are doing a research project on shell behavior, you may need membrane behavior only. </li>
                <li>So to conclude I would suggest to almost always include thin shell assignment. Specially in case of plane slab in regular buildings, thin shell assignment is must. </li>
                <li>One more thing, because some people get confused - membrane shell does not mean rigid in its plane. In fact they are opposite.  </li>

            </ul>

            <hr />


        </main>
    )
}

export default Blog6