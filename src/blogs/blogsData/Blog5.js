import React from 'react'
import '../css/blog.css'
import { Helmet } from 'react-helmet'
import { Link } from 'react-router-dom'
function Blog5() {
    return (
        <main className='blog-container'>
            <Helmet>
                <title>What is displacement based design approach?</title>
                <meta name="description" content="In displacement based design philosophy, the process is opposite to what we saw in force based design. Here the displacement demands are calculated using non-linear analysis and displacement capacities are ensured to allow those deformation demands." />
            </Helmet>
            <h1>What is displacement based design approach?</h1>
            <div className='author'>
                <div>Author: Abinash Mandal</div>
                <div>Date: March, 2023</div>
            </div>
            <p>This is two-part series on introduction to displacement based design approach. This part contains the theory for understanding pushover analysis and other important parameters like acceptance criteria, performance point and so on. The <Link to='/structural-engineering/What-is-pushover-analysis-and-how-to-perform-it-in-ETABS' >second part</Link> contains implementation of pushover analysis in ETABS. </p>

            <h2>Force based design</h2>
            <p>First let's understand what force based design is and what its limitations are.</p>
            <p>Force based design or strength based design is a design philosophy in which internal forces (demands) are calculated in each structural components due to external loads, based on linear analysis (usually) and the corresponding capacities of the components are kept slightly higher. This is the approach in most building codes, for example Indian standard and Nepal standard (These are the two I am familiar with). </p>
            <p>For large earthquake, the building codes also allow to apply response reduction factor. If the structure were to remain elastic during large earthquakes (which has very low probability of occurrence during service life of the structure), demands corresponding to that earthquake would be calculated and the structure components would have to be designed for those force demands, which would result in uneconomical design. </p>
            <p>So the building code permits the inelastic deformation in structures during large earthquake, which in turn reduces the force demand in structures. This reduction of force demand depends on the ability of structural components to undergo inelastic deformation, which is also known as ductility. For example IS code allows to reduce the demand by 5 times for RC buildings with special moment resisting frame (meaning R=5). But if any component is brittle, then it should be designed for elastic demand without any reduction.</p>
            <p>So to summarize, in force based approach, structural components are designed for design force or load (limit state of strength). For service load, deflection is checked (limit state of serviceability).</p>
            <p>There are certain problems with this approach. Some of the important problems are the assumption of response reduction factor and calculation of time period.
            </p>

            <h2>Displacement based design</h2>
            <p>The problems seen in force based design are more gracefully handled in displacement based design approach. This is so because more accurate performance of the structure can be observed in this method.</p>
            <p>In displacement based design philosophy, the process is opposite to what we saw in force based design. Here the displacement demands are calculated using non-linear analysis and displacement capacities are ensured to allow those deformation demands. Displacement capacities are calculated using methods like capacity spectrum method, displacement coefficient method, etc. Performance based design (PBD) philosophy, which is more evolving field now, is based on displacement design approach.</p>
            <p>There are basically two methods of analysis for displacement based design. They are non-linear static analysis (pushover analysis) and non-linear dynamic analysis (NL time history). Pushover analysis is relatively simpler and less time consuming than NL time history analysis. We will be discussing pushover analysis here.</p>

            <h2>Pushover analysis</h2>
            <p>Pushover analysis is the <em>non-linear static </em>analysis. Non-linear means if we draw graph between load and displacement, the curve won't be straight line passing through the origin unlike in linear analysis. And by static means load doesn't change with time </p>
            <p>Basically non-linearity can be of two types. They are material non-linearity and geometric non-linearity. Material non-linearity means the fundamental stress-strain diagram of the material is non-linear and so this non-linearity is on <strong>material</strong> level. One example of such non-linearity (which we all are familiar with since taking fundamental course on theory of structures in college) is formation of plastic hinge.</p>
            <p>The second type, i.e. geometric non-linearity is on the <strong>member</strong> level. One example of such (which we all are familiar with) is P-Δ effect. </p>
            <p>In this article we will focus on <em>material non-linearity </em> and we will discuss geometric non-linearity some other time.</p>
            <p>Now back to the topic, <strong>pushover analysis means application of loads in steps</strong>. Loads are applied in steps because the stiffness of the member usually reduces at each step due to formation of cracks or plastic hinges. If the stiffness would not change along the way, this would be same as linear analysis.
                Pushover analysis helps to see the behavior of structure during earthquake, i.e. how the plasticity develops in it. It is one of the method of performance based design approach.</p>
            <h3> Plastic hinges</h3>
            <p>To understand pushover analysis, understanding plastic hinges is very important. So let's review (what we already learnt in college) how plastic hinges form for elasto-plastic curve and homogeneous material.
                The elasto-plastic stress strain curve is simplified form of complex curve and this looks like as shown in figure below.
            </p>
            <p>Let us suppose a simply supported beam of length L is subjected to uniformly distributed load (udl) of w as shown in figure aside. The figure also shows the bending stress distribution with maximum at outer fibers and zero at neutral axis. Bending stress is σ=(M/I) y</p>
            <div className='img-flex'>
                <img src='/images/nonlinear/stress-strain.PNG' alt="stress strain curve" />
                <img src='/images/nonlinear/bending-stress.PNG' alt="beam and bending stress" />
            </div>
            <p> Let’s assume the load was initially small so that stress at outermost fiber σ&lt;σᵧ where σᵧ is the yield stress. This is represented in fig a. Now as the load increases stress at outermost fiber reaches σᵧ as shown in fig b. Now on increasing load further, outermost stress remains constant at σ=σᵧ (this is because of our assumed stress strain diagram) and stress at inner fibers increase to σᵧ. This is shown in fig c. If the load is further increased stress at all fibers becomes σᵧ as shown in fig d. This fig d is in plastic condition meaning whole section has reached plastic state σ=σᵧ   throughout the cross section. The moment at section where plastic condition has reached is called plastic moment (Mₚ) and the section is called plastic hinge section (in other words, plastic hinge has formed at that section). On any further increase on load, moment at the section remains constant at Mₚ and now behaves similar to normal internal hinge.</p>
            <div className='img-flex'>

                <div><img src='/images/nonlinear/plastic-stress.PNG' alt="formation of plastic hinge" /></div>
            </div>
            <p>Now we can easily calculate plastic moment using simple statics. But we won't do it right now because ETABS will automatically do that for us. If you want in depth explanation about <em>plastic analysis</em> , please let me know in the comment section below. If we are doing it in ETABS or any analysis software, we only have to input the stress strain diagram (or load deflection curve), like the elasto-plastic curve shown in first figure above. In ETABS there are options to generate auto hinge property based on ASCE 41-17 which will automatically create load deflection curve and so simplify the task.</p>

            <h3>Pushover analysis procedure</h3>
            <ul>
                <li>Create a structural model in the software package that you use. I will be doing this in ETABS in 2nd part of this series.</li>
                <li>Apply all the loads, gravity + lateral. Analyze the structure and design it. This is only preliminary design which can be useful to determine reinforcement required to obtain hinge property.</li>
                <li>Define and assign hinge property to the structural components where plastic hinge is likely to form.</li>
                <li>Create a nonlinear load case. Two important things to address here, are lateral load pattern to be applied on the structure and the extent upto which the structure to be pushed. Load pattern with shape of first mode shape can be applied for low rise building because first mode is most dominant in such structures. If there are significant contribution from higher modes, then multi-mode pushover analysis should be carried out. The peak value of displacement to be pushed, can be known by few trials. It is important to note that this is not the peak displacement structure will undergo during the earthquake. It is just the deformation value upto which structure is to be pushed while generating base shear curve using pushover analysis method.</li>
                <li>Run the analysis. This will create a plot of base shear vs monitored displacement. This is known as base shear curve or also capacity curve.</li>
                <li>Generate demand curve using methods like capacity spectrum method or displacement coefficient method or equivalent linearization method. The intersection of demand curve and capacity curve is the performance point. This is the maximum value of displacement that is likely to occur in the structure during the earthquake considered. So this is just the displacement demand. This is explained in more detail in 'methods to determine performance point' heading.</li>
                <li>Now the performance point that we obtained can be checked for the acceptance criteria. For example, for small earthquake, it may be a criteria for the structure to be in elastic range. This is explained in more detail in following heading.</li>
                <li>Finally the structure can be designed for the seismic demand corresponding to this performance point.</li>
            </ul>
            <p>Actual implementation of pushover analysis is shown in part 2 of this series.</p>

            <h2>Acceptance criteria</h2>
            <p>The earthquake design philosophy is as follows. For minor earthquakes which occurs frequently, there should be no damage in any structural components and some repairable damage allowed in non-structural components. For moderate earthquake, some repairable damage is allowed in structural component. For large earthquake which is rare, there may be significant damage in the structure but it should not collapse.</p>
            <p>In displacement based design approach, above criteria can be addressed in proper way. </p>
            <div className='img-flex'>
                <img src='/images/nonlinear/acceptance.PNG' alt="acceptance criteria" />
            </div>
            <p>There are usually three acceptance criteria also known as <strong>performance levels</strong>. They are immediate occupancy (IO), life safety (LS) and collapse prevention (CP) as shown in figure above. Remember these criteria are not coming from structural analysis. Rather these are set by the client or may be set based on the importance of the buildings. </p>
            <p>If performance point as obtained from pushover analysis lies within the performance level (acceptance criteria), then this satisfies the acceptance criteria.</p>

            <h2>Methods to determine performance point</h2>
            <p>After obtaining the pushover curve, performance point can be obtained. It is the point where response spectrum function (demand) intersects the pushover curve (capacity). But since response spectrum function are usually in different scale than pushover curve, they should be converted into same scale so that they can be plotted in same graph. Some of the methods are explained below:  </p>

            <h3>1. Capacity spectrum method</h3>
            <ul>
                <li>This method is explained in ATC 40.</li>
                <li>In this method pushover curve is converted into capacity spectrum curve in (SA-SD) form where SA means spectral acceleration and SD means spectral displacement.</li>
                <li>Similarly response spectrum curve is converted into SA-SD form.</li>
                <li>There are formulae given in ATC 40 for those conversions.</li>
                <li>Now the above curves can be plotted in same graph. The intersection point is the performance point or target displacement.</li>
                <li>Finally the structure should be designed for the responses corresponding to the performance point.</li>
            </ul>
            <h3>2. Improved equivalent linearization method</h3>
            <ul>
                <li>This is explained in detail in FEMA 440 and is available in ETABS.</li>
                <li>This method is modification to capacity spectrum method of ATC 40</li>
                <li>The basic assumption in equivalent linear methods is that the maximum displacement of a nonlinear SDOF system can be estimated from the maximum displacement of a linear elastic SDOF system, that has a period and a damping ratio larger than those of the initial values for the nonlinear system.</li>
                <li>I will show this method in ETABS in 2nd part. </li>
            </ul>

            <h3>3. Other methods</h3>
            <ul>
                <li>Nonlinear static procedure - This is explained in ASCE 41-13 and is available in ETABS</li>
                <li>Displacement coefficient method - This is explained in ATC 40 and FEMA 440.</li>
            </ul>

            <h2>Conclusion</h2>
            <ul>
                <li>In force based design, internal forces are calculated and then structural components are designed based on building codes.</li>
                <li>In displacement based design, displacement demands are calculated using non-linear analysis and displacement capacities are ensured to allow those deformation demands.</li>
                <li>Pushover analysis is easiest and approximate solution for displacement based design. More accurate and time consuming solution is nonlinear time history analysis.</li>
                <li>Performance point is the point where demand spectrum and capacity spectrum intersects. This is probable peak displacement of structure during the considered earthquake. </li>
                <li>If performance point for a given earthquake is within performance level (IO, LS and CP), then the acceptance criteria is satisfied. </li>
                <li>Structure should be designed for the demand corresponding to the performance point.</li>
                <Link to='/structural-engineering/What-is-pushover-analysis-and-how-to-perform-it-in-ETABS'>See part 2</Link>.
            </ul>

            <hr />


        </main>
    )
}

export default Blog5