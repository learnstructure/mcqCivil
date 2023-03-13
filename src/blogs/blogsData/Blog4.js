import React from 'react'
import '../css/blog.css'
import { Helmet } from 'react-helmet'
function Blog4() {
    return (
        <main className='blog-container'>
            <Helmet>
                <title>Pushover analysis in ETABS</title>
                <meta name="description" content="What is pushover analysis and how to perform it in ETABS?" />
            </Helmet>
            <h1>What is pushover analysis and how to perform it in ETABS?</h1>

            <h2>Introduction</h2>
            <p>Pushover analysis is the <em>non-linear static </em>analysis. Non-linear means if we draw graph between load and displacement, the curve won't be straight line passing through the origin unlike in linear analysis. And by static means load doesn't change with time </p>
            <p>Basically non-linearity can be of two types. They are material non-linearity and geometric non-linearity. Material non-linearity means the fundamental stress-strain diagram of the material is non-linear and so this non-linearity is on <strong>material</strong> level. One example of such non-linearity (which we all are familiar with since taking fundamental course on theory of structures in college) is formation of plastic hinge.</p>
            <p>The second type, i.e. geometric non-linearity is on the <strong>member</strong> level. One example of such (which we all are familiar with) is P-Δ effect. </p>
            <p>In this article we will focus on <em>material non-linearity </em> and we will discuss geometric non-linearity some other time.</p>
            <p>Now back to the topic, <strong>pushover analysis means application of loads in steps</strong>. Loads are applied in steps because the stiffness of the member usually reduces at each step due to formation of cracks or plastic hinges. If the stiffness would not change along the way, this would be same as linear analysis.
                Pushover analysis helps to see the behavior of structure during earthquake, i.e. how the plasticity develops in it. It is one of the method of performance based design approach.</p>
            <h2> Plastic hinges</h2>
            <p>To understand pushover analysis, understanding plastic hinges is very important. So let's review (what we already learnt in college) how plastic hinges form for elasto-plastic curve and homogeneous material.
                The elasto-plastic stress strain curve is simplified form of complex curve and this looks like as shown in figure below.
            </p>

            <div className='img-flex'>

                <p>Let us suppose a simply supported beam of length L is subjected to uniformly distributed load (udl) of w as shown in figure aside. The figure also shows the bending stress distribution with maximum at outer fibers and zero at neutral axis. Bending stress is σ=(M/I) y</p>
                <div><img src='/images/nonlinear/stress-strain.PNG' alt="stress strain curve" /></div>
                <div><img src='/images/nonlinear/bending-stress.PNG' alt="beam and bending stress" /></div>
            </div>
            <div className='img-flex'>
                <p> Let’s assume the load was initially small so that stress at outermost fiber σ&lt;σᵧ where σᵧ is the yield stress. This is represented in fig a. Now as the load increases stress at outermost fiber reaches σᵧ as shown in fig b. Now on increasing load further, outermost stress remains constant at σ=σᵧ (this is because of our assumed stress strain diagram) and stress at inner fibers increase to σᵧ. This is shown in fig c. If the load is further increased stress at all fibers becomes σᵧ as shown in fig d. This fig d is in plastic condition meaning whole section has reached plastic state σ=σᵧ   throughout the cross section. The moment at section where plastic condition has reached is called plastic moment (Mₚ) and the section is called plastic hinge section (in other words, plastic hinge has formed at that section). On any further increase on load, moment at the section remains constant at Mₚ and now behaves similar to normal internal hinge.</p>
                <div><img src='/images/nonlinear/plastic-stress.PNG' alt="formation of plastic hinge" /></div>
            </div>
            <p>Now we can easily calculate plastic moment using simple statics. But we won't do it right now because ETABS will automatically do that for us. If you want in depth explanation about <em>plastic analysis</em> , please let me know in the comment section below. If we are doing it in ETABS or any analysis software, we only have to input the stress strain diagram (or load deflection curve), like the elasto-plastic curve shown in first figure above. In ETABS there are options to generate auto hinge property based on ASCE 41-17 which will automatically create load deflection curve and so simplify the task.</p>

            <h2>Implementation in ETABS</h2>
            <h3>1. Modelling and initial design</h3>
            <p>If you are just starting non-linear analysis, start with a simple and small model because non-linear analysis is time consuming and you may have to do it several times at least while learning.</p>
            <p>Creating a model is fairly easy. (If you are new to ETABS, follow some beginner's videos on youtube). Apply all the static loads in respective load patterns. Also define equivalent static loads for earthquake. Run the analysis and design the structure.</p>
            <p>Note that this is preliminary design we are performing because we want to use auto hinge generation in ETABS which requires % of reinforcement as per ASCE 41-17 guide. This way we don't have to manually input the stress-strain curve which is tedious but be aware this should be done very carefully in real project.</p>

            <h3>2. Define hinge property</h3>
            <p>At this point I assume you successfully designed (preliminary) your structure. Now unlock the model. We will now assign hinge property to the frames. Remember by assigning hinges at a particular location, we are saying the software that this is the location where hinge can form (because software is a machine, will do something only if told so) but depending on the load, hinge may or may not form at that location.</p>
            <p>Let's first assign hinge property to the beams.  </p>
            <ul>
                <li>For this select the beams you want to assign hinges to. I selected all 8 beams that I have in my model.</li>
                <li>Go to Assign &gt; Frames &gt; Hinges.. </li>
                <li>In the Frame Assignment - Hinges window, all the parameters should be selected very carefully in reference to ASCE guides.</li>
                <li>Below is my model along with Frame Assignment - Hinges window.</li>
            </ul>
            <img src='/images/nonlinear/model.PNG' alt="model and hinge definition" style={{ maxWidth: "100%" }} />
            <ul>
                <li>We see 'Auto' is set as hinge property by default. If you need to manually define hinge property, you can do this by going to Define &gt; Section properties &gt; Frame/wall non linear hinges.. </li>
                <li>Then we need to choose relative distance, this varies from 0 to 1, 0 being one end (first joint when you created the beam) and 1 being other end of frame. If you put any intermediate value, hinge will be assigned inside the two ends of frame based on relative value.</li>
                <li>Relative distance specifies the location where hinge will be formed. The hinges are likely to form where bending moment is maximum. Here we assume that hinges will be formed at 5% of span from each ends. (I didn't take the exact end points of beam because the joints are generally assumed to be rigid in RCC structures</li>
                <li>So we will assign two hinges on a frame. First I put 0.05 for relative distance. And click Add as shown in figure. This will display new dialogue box.</li>
            </ul>
            <img src='/images/nonlinear/hinge.PNG' alt="hinge definition to beams" style={{ maxWidth: "100%" }} />
            <ul>
                <li>Here select hinge table as Table 10-7 Concrete beams. This is from ASCE 41-17. If you have steel beams, then select steel beams. </li>
                <li>Degree of freedom should be M3 for beams, since M3 is the major bending axis in ETABS.</li>
                <li>Reinforcing ratio is selected from current design.</li>
                <li>V value shown in figure is the design shear force that is developed in beams during formation of plastic hinge. There are methods to estimate this conservatively. But for the sake of simplicity we will choose here a load combination and ETABS will take the shear force from that combination.</li>
                <li>If you want to know about these parameters in more detail, you should first go through the manual.</li>
                <li>Click ok. Again to assign hinge near other end, add 0.95 as relative distance and repeat the process.</li>
                <li>Now select the columns and repeat above process. But this time select Concrete columns as hinge table. (Again if you have steel columns, select steel columns)</li>
                <li>Select degree of freedom. P-M2-M3 is the general type of hinge. P is the compression and M2 & M3 are moments about 2 and 3 axes in columns. I will apply lateral load for non-linear case. So P will be relatively small in comparison to moments. Therefore, I will set M2-M3 as degree of freedom. </li>
                <li>Below is the screenshot of how I defined hinge for the columns. I have left many of the values as default since my purpose here is to carryout non-linear analysis and not to focus much on ASCE guidelines.</li>
            </ul>
            <img src='/images/nonlinear/hinge-col.PNG' alt="hinge assignment to column" style={{ maxWidth: "100%" }} />
            <ul>
                <li>Remember if you have hinge support at base of columns, you don't have to assign plastic hinge there.</li>
                <li>We are now done with the assignment of hinge to beams and columns.</li>
                <li>What we have done here is supply ETABS with load (or moment) deflection (rotation) curve (also known as backbone curve), which we can see by going to Define &gt; Section properties &gt; Frame/wall non linear hinges..</li>
                <li>We can see here as many hinges as were assigned to the members. If we click on any of the hinge to show it's property, we can see the actual load deflection curve generated automatically by ETABS based on the parameters we fed earlier when assigning auto hinge properties.</li>
                <li>Next we will define non-linear load case.</li>
            </ul>

            <h3>3. Define non-linear load case</h3>
            <ul>
                <li>Go to Define &gt; Load cases..and click on add new case.</li>
            </ul>
            <img src='/images/nonlinear/nlcase.PNG' alt="defining non-linear load case" style={{ maxWidth: "100%" }} />
            <ul>
                <li>The screenshot of nonlinear load case definition is shown above. Choose load case type as <strong>nonlinear</strong>  static</li>
                <li>For the sake of simplicity, choose initial conditions as zero initial conditions. In actual project, there will be dead and live load already which you can choose if you want. But you have to create a new nonlinear load case with dead and specified live load and only then you can select that here.</li>
                <li>Inside loads applied, choose acceleration as load type. If you want to perform non-linear analysis for known value of loads, you can choose load pattern as load type and select the required loads with suitable scale factors</li>
                <li>Scale factor is given -1 value, so the base shear curve will be shown on positive quadrant.</li>
                <li>Click on modify/show which is on right of load application.</li>

            </ul>
            <img src='/images/nonlinear/displacement.PNG' alt="load application control" style={{ maxWidth: "100%" }} />
            <ul>
                <li>Now choose load application control as displacement control. Again if we wanted to apply specified load, we could choose this as load control.</li>
                <li>Give a desired value of monitored displacement, I have given 150mm. This is the value of displacement when reached, the analysis would stop.</li>
                <li>Select monitored displacement. Usually any joint on top story is selected. 150mm displacement we selected above corresponds to this joint. Click ok.</li>
                <li>By default ETABS will save only the final result. Since we want to generate pushover curve, we will change the result saved to multiple states.</li>
                <li>Now we are done with defining nonlinear load case.</li>
            </ul>
            <h3>4. Run the analysis and interpret the results.</h3>
            <ul>
                <li>Run the analysis</li>
                <li>You might have gotten some warnings. In non-linear analysis, program has to solve the equations iteratively and so non-convergence is very common. You have to identify the warnings and try to eliminate them. For example if you set the target value very high, there might be null steps exceeding the maximum limit. There could be other warnings, please let me know in the comment section and I will try to give a solution.</li>
                <li>First thing first let's check the deformed shape in non-linear case.</li>
                <li>We can see there are many steps for deformed shape for this nonlinear case (9 steps in my case). This is because loads are applied in stages (as I mentioned earlier) and there is change in stiffness due to various causes of plasticity. ETABS reports the result at end of each step if requested.</li>
                <li>At last step, if we hover mouse at monitored joint, this will show displacement along x as approximately equal to what was defined before (150mm in my case)  </li>
            </ul>
            <img src='/images/nonlinear/pushover.PNG' alt="push over curve" style={{ maxWidth: "100%" }} />
            <ul>
                <li>As we go through the steps, we will see some colored dots at location of hinges defined in step 2 denoting acceptance criteria. Acceptance criteria was automatically defined by ETABS when defining hinges. This represents level of damage we could allow in the structures. There are generally three acceptance criteria, namely immediate occupancy, life safety and collapse prevention. If you are not familiar with these terms, please wait for part 2 of this article.</li>
                <li>Let's check the base shear. Go to display &gt; static base shear. This displays base shear curve as shown in figure above.</li>
                <li>If you see the curve carefully, you will see the curve is first straight line (linear part), then at step 1, the slope of curve reduces (meaning stiffness decreases) and on going further, slope reduces further. </li>
                <li>We can also see the hinge results for each hinge assignment. This shows how far in the backbone curve, moment has reached for the respective hinge, and so gives the idea about the level of damage in the particular hinge location.</li>
            </ul>

            <h3>5. Conclusion</h3>
            <ul>
                <li>First I want to congratulate you if you followed the steps or got everything explained here.</li>
                <li>The pushover curve that we obtained is the capacity curve, not the demand curve. Note that we never applied the specific seismic load. </li>
                <li>If we integrate the demand curve (i.e. response spectrum function) with capacity curve, the point of intersection of these two curves is known as performance point which is the estimated maximum displacement of the structure for given response spectrum.</li>
                <li>One method of achieving this is capacity spectrum method. We will see this in detail next time. Lastly I would like to emphasize that learning non-linear analysis would take some time and effort from you.</li>
                <li>This article is meant to be the foundation for further studies and I will be continuing this next time.</li>
            </ul>

            <hr />


        </main>
    )
}

export default Blog4