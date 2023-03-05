import React from 'react'
import '../css/blog.css'
import { Helmet } from 'react-helmet'
function Blog1() {
    return (
        <main className='blog-container'>
            <Helmet>
                <title>Response spectrum</title>
                <meta name="description" content={"Response Spectrum Analysis (RSA) in ETABS SAP2000 Scale factor"} />
            </Helmet>
            <h1>Response Spectrum Analysis (RSA) in ETABS</h1>

            <h2>Principles</h2>
            <p>Structural analysis can be of linear and non-linear type. We will not talk about non-linear analysis here.
                Basically linear analysis means the method of analysis in which there is linear (direct) relationship between force and deformation. Linear analysis can further be of static and dynamic (time history) nature.
            </p>
            <p>Static analysis means external force or load is constant with respect to time and dynamic analysis means force is varying with time, for example time history analysis carried out for seismic loading.
            </p>
            <p>
                Although seismic loads are dynamic in nature, we can still perform the static analysis which is termed as <em>equivalent static method </em>  in most of the building codes.
            </p>
            <p>Now let's look at <strong>response spectrum analysis</strong> (RSA) which is today's topic. RSA is sort of pseudo dynamic analysis in the sense that we are not performing actual time history analysis. RSA is very useful and recommended method of analysis in building code for non-symmetrical structures.</p>
            <p >
                Any structure has a number of modes of vibration equal to its degrees of freedom. So a structure with 10 degrees of freedom has 10 modes of vibration and so on. It is important to realize that there are infinite modes of vibration in any real structure but since we are idealizing the structure into finite elements, number of modes are restricted to number of degrees of freedom. And this is the case for any software packages like ETABS, SAP2000, STAAD Pro, etc.
            </p>
            <p>The basic principle of RSA is that we find the maximum response (like displacement, forces, bending moments, etc) for each mode of the structure and then later combine those responses of each modes using suitable method like SRSS. The combined result is the required response of the whole structure.</p>

            <h2>Implementation in ETABS</h2>
            <p>Response spectrum analysis in ETABS involves the following steps:</p>
            {/* <ol>
                <li>Define the design seismic input</li>
                <li>Define the structural model</li>
                <li>Define the analysis settings</li>
                <li>Run the analysis</li>
                <li>Interpret the results</li>
            </ol> */}
            <h3>1. Model the structure correctly</h3>
            <img src='/images/modelrsa.JPG' alt="3D model of structure" style={{ maxWidth: '100%' }} />
            <p>Making the model is easy. If you are new to ETABS, follow some beginner's videos on youtube</p>
            <p>Apply all the static loads in respective load patterns in reference to your building code. Here we have also defined eqx and eqy seismic loads. These are static loads, applied here to compare RSA results with those of equivalent static method.</p>

            <p>We are assuming here that you are comfortable with defining and applying the static loads.</p>

            <h3>2. Define load cases for RSA</h3>
            <p>ETABS automatically creates load cases for static load patterns that we created in step 1.</p>
            <p>However, we have to create load cases for RSA.</p>
            <p>First we will define the response spectra and modal load case required for RSA.</p>
            <p>To define response spectrum function, go to define &gt; Functions &gt; Response spectrum.
                Select the appropriate building code, click on 'Add new function' and input all the parameters as per the code. Then click on ok.
            </p>
            <p>Now we define modal load case. For this, go to define &gt; load cases. Click on add new case.
                Select modal in load case type and leave the default parameters. Click ok</p>
            <p>Now we will create a load case for RSA. Again click on add new case. And this time choose response spectrum for load case type. In this form 'loads applied' is important and so choose the parameters carefully here</p>
            <p><span style={{ color: 'green', fontWeight: 'bold' }}>Scale factor often confuses the designer. </span>
                So we will look at this in detail. Scale factor can be different depending on your building code. </p>
            <p>Here we take IS 1893: 2016 as reference. The scale factor shown in figure below is for initial analysis (which is equal to g. In my model unit of acceleration is in mm/sec². So I put <strong>initial scale factor = 9810</strong>. Unit can be checked by pressing Ctrl+U and under 'Time related' there is acceleration-tran which is the unit of acceleration.)</p>
            <p>Note: If you are following IS 1893: 2002, put initial scale factor as <em>Ig/2R</em>. This is how ETABS has implemented.</p>
            <img src='/images/rsa.JPG' alt="response spectrum analysis ETABS" style={{ maxWidth: '100%' }} />
            <p>RSA was defined for x direction. In a similar way, define RSA load case for y direction. </p>

            <h3>3. Run the analysis</h3>
            <p>The most difficult part, if was done by human, is done in seconds in software.</p>
            <p>Just go to 'analyse &gt; Run analysis' and software will do the analysis</p>
            <p>If any error was thrown, modify the model and re-analyse.</p>

            <h3>4. Check the modal results</h3>
            <p>Display table by pressing Ctrl+T and select modal participating mass ratios from the analysis results</p>
            <p>By default ETABS will show 12 modes. Check the time period for the modes. A thumb rule is time period = 0.1 * number of stories. ETABS will show slightly different values from thumb rule but that's fine. But if time period shown is like very high for example 100 sec or more, its very likely that there was error in the model.</p>
            <p>Next we have to check is modal participating mass ratio, i.e. sumUx and sumUy in the table. If sumUx and sumUy &gt; 0.9 for the default 12 modes, that's good. If not, we have to increase number of modes in modal analysis and re-analyse the structure.</p>

            <h3>5. Compare the base shear</h3>
            <p>Now we compare the value of base shear for static earthquake load case, eqx in our example and RSA-x. The values can be seen by pressing Ctrl+T to display table and selecting 'structure output &gt; base reactions' </p>
            <p>According to IS 1893: 2016, if the base shear due to RSA is less than base shear due to equivalent static case, we have to scale up RSA base shear to match the base shear due to static case. So the new scale factor = initial SF * BS due to static method / BS due to RSA. We have to unlock the model, change scale factor in RSA load case definition and re-analyse the model. </p>
            <p>If the base shear due to RSA is more than base shear due to equivalent static case, the analysis is done here and we don't have to change scale factor.</p>
            <p>In my case base shear due to static case is 1368 kN and due to RSA is 847 kN. So my new scale factor is 9810 * 1368 / 847 = 15844</p>
            <p>After we re-analyse the model, base shear should be equal for both case. Now we are done with RSA.</p>

            <h3>6. Interpret the Results</h3>
            <p>Finally we can see other results like bending moment diagram, base reactions, displacements, etc. and compare with similar models if available.</p>
            <p>We can also define load combinations according to building codes and design the structure.</p>
            <hr />
            <p>Hope this was helpful. Thanks for reading.</p>

        </main>
    )
}

export default Blog1