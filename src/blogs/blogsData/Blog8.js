import React from 'react'
import '../css/blog.css'
import { Helmet } from 'react-helmet'

function Blog8() {
    var Latex = require('react-latex');

    return (
        <main className='blog-container'>
            <Helmet>
                <title>What is wind load and how to apply it in ETABS?</title>
                <meta name="description" content="What is wind load and how to apply it in ETABS? SAP2000" />
            </Helmet>
            <h1>What is wind load and how to apply it in ETABS?</h1>
            <div className='author'>
                <div>Author: Abinash Mandal</div>
                <div>Date: May, 2023</div>
            </div>

            <h2>Introduction</h2>

            <p>Wind load is generally governing lateral load for light building structures because for such structures, wind load demands can be higher than seismic load.</p>
            <p>Wind load is due to area of the structure. In contrast seismic load is due to weight of the structure.</p>
            <p>Wind load is calculated by using the following general equation.</p>
            <em >Wind load = pressure coefficient x wind pressure x area</em>

            <p>Let's see why pressure coefficient appears in this equation.</p>

            <h4>Why pressure coefficient?</h4>
            <p>Force as we know is <Latex>$pressure\times area$</Latex> for uniform variation of pressure over the area.</p>
            <p>But when we calculate wind load on any structure, we also multiply <em>pressure x area</em> with some coefficient (like pressure coefficient or force coefficient).</p>
            <p>Where did this coefficient come from?</p>
            <p>Well during calculation of wind load, we use the following formula (IS 875 part 3) to calculate design wind pressure.
                <Latex displayMode={true}>$$p_z=0.6\times v_z^2$$</Latex>
                where <Latex>$v_z$</Latex> is design wind speed at height z in m/s. Here <Latex>$p_z$</Latex> is the wind pressure (dynamic) in free-stream condition (meaning no obstruction like buildings and other structures). But due to presence of obstructions, distribution of wind pressure changes significantly which is determined through extensive research and experiments like wind tunnel test. To address such behavior, building code gives coefficients to determine the wind pressure more accurately.
            </p>
            <h2>Provisions of IS 875 Part 3</h2>
            <h4>1. Wind load on individual members</h4>
            <Latex displayMode={true}>
                {`$$F = (C_{pe} - C_{pi})\\, A\\, p_d \\hspace{1cm}--eq^n\\,1$$`}
            </Latex>
            where <br />
            <Latex>{`$C_{pe}$`}</Latex> is external pressure coefficient.<br />
            <Latex>{`$C_{pi}$`}</Latex> is internal pressure coefficient.<br />
            A is surface area of structural element or cladding unit, and <br />
            <Latex>{`$p_{d}$`}</Latex> is design wind pressure and is given by:<br />
            <Latex displayMode={true}>
                {`$$p_d =K_d\\, K_a\\, K_c\\, p_z$$`}
            </Latex>
            <h4>2. Wind load on structure</h4>
            <Latex displayMode={true}>
                {`$$F = C_f\\, A_e\\, p_d$$`}
            </Latex>
            where <br />
            <Latex>{`$C_{f}$`}</Latex> is the force coefficient for the building.<br />
            <Latex>{`$A_{e}$`}</Latex> is effective frontal area of the building or structure.<br />
            <Latex>{`$p_{d}$`}</Latex> is design wind pressure (same as defined above).<br />
            <p>This was just an overview of some of the codal provisions. Since the intent of this article is to show how to apply wind load in ETABS, I am skipping this part now. These are well defined in the code. So the interested reader should refer to the code. If any parameter in the code is not clear, please let me know in the comment section or in telegram group.</p>

            <h2>Implementation in ETABS</h2>
            <p>To define auto wind load in ETABS or SAP2000, go to Define &gt; Load patterns. Select type as Wind and auto lateral load as IS 875: 2015 (you can do similarly for other codes as well). Click Add new load and then click on modify Lateral load.  </p>
            <p>This will open dialogue box to enter all the codal parameters. We have to understand these parameters (in the image below) to apply the wind load correctly.</p>
            <img src='/images/wind/is875.PNG' alt="diaphragm extent for auto wind load" style={{ maxWidth: '100%' }} />
            <li>In the image above, the wind exposure parameters and wind coefficients (enclosed in blue rectangle) are code specific. The exposure and pressure coefficients and exposure height (enclosed in red rectangle) do not depend on code.</li>
            <li>Let's look at exposure and pressure coefficients in detail. Other parameters are straight forward. In ETABS there are two ways to apply wind pressure on the structure. One is by using diaphragm and other is by applying wind pressure directly on shell elements. They are explained in detail in following sub-headings.</li>
            <h4>Exposure from extents of diaphragm</h4>
            <p>Diaphragms generally mean the slab system in buildings which are present at each story level. When we select exposure from extents of diaphragm while defining the auto wind load, ETABS will calculate tributary area to a diaphragm as shown in figure below (this is similar to as seismic load calculation) and then calculate and apply the wind load at center of mass of the diaphragm.</p>
            <figure>
                <img src='/images/wind/diaphragm.PNG' alt="diaphragm extent for auto wind load" style={{ maxWidth: '100%' }} />
                <figcaption>Fig: Showing tributary area to each diaphragm.</figcaption>
            </figure>
            The above image is taken from <em>Analysis reference manual of ETABS</em>.
            <p>Please take some moment and understand the tributary area to a diaphragm clearly from above figure.</p>

            <h4>Exposure from shell objects</h4>
            <p>Another option is exposure from shell objects as seen in above screenshot.</p>
            <p>If you choose exposure from shell objects, you can't assign wind pressure coefficient here unlike exposure from diaphragm. You have to assign pressure coefficient by going to Assign &gt; Shell Loads &gt; Wind pressure coefficient, just like you assign any other load type to the shell. This way you can assign different coefficient to the shell or area elements.</p>
            <p>ETABS will calculate wind force based on area of the shell element according to equation 1 shown above and apply those forces on those shell elements.</p>
            <p style={{ color: "royalblue", fontWeight: "bold" }}>It is important to note that you have to use net pressure coefficient, i.e. <Latex>
                {`$(C_{pe} - C_{pi})$`}
            </Latex>.
            </p>

            <h2>Example in ETABS</h2>
            Note that process will be quite similar in SAP2000 as well because both these software packages are developed by same company.
            <ul>
                <li>Create a model in ETABS. (If you are new to ETABS, follow some beginner's videos on youtube). My model is as shown in figure. It is two bay with 5 m column spacing and total of 3 story each having 3m story height as shown in figure below.</li>
            </ul>
            <img src='/images/wind/model.PNG' alt="3D model for wind analysis" style={{ maxWidth: '100%' }} />
            <ul>
                <li>Assign diaphragm to each floor. This is done to apply wind load from diaphragm option.</li>
                <li>Define auto wind load as described in above section. Choose <em>Exposure from extents of diaphragm</em> as the exposure and pressure coefficients.</li>
                <li>Change the parameters from respective code. I am taking windward coefficient as 0.8 and Leeward coefficient as 0.5. (These coefficients are net pressure coefficients considering both external and internal pressure coefficients). Wind speed = 50 m/s and k₁ and k₃ as 1 as shown in first figure in this page.</li>
                <li>Note that the program will calculate tributary area for each diaphragm for wind load based on geometry of the model. You can change it if required.</li>
                <li>Click ok. Let's now create another wind load, this time by choosing <em>exposure from shell objects.</em> We are doing this to compare the results from two methods.</li>
                <li>Note that as soon as you choose exposure from shell objects, the wind exposure parameters grays out. Because you have to assign wind coefficients manually to each of the area elements.</li>
                <li>Click ok. Now we have two load patterns, one from diaphragm method and other from shell objects method.</li>
                <li>We now have to apply wind pressure coefficients to the walls (area elements). Since we don't have walls in our model, we will create dummy area elements in place of walls.</li>
                <li>Go to Draw &gt; Auto Draw Cladding. Select <em>Use floors</em> and click ok. This will draw null area elements at exterior of the building.</li>
                <li>Next select windward side area elements. Go to Assign &gt; Shell Loads &gt; Wind pressure coefficient.</li>
                <li>Choose appropriate load pattern. Give wind pressure coefficient as 0.8 same as defined in case of diaphragm method. Below is the screenshot for this.</li>
            </ul>
            <img src='/images/wind/coeff-shell.PNG' alt="3D model for wind analysis" style={{ maxWidth: '100%' }} />
            <ul>
                <li>Now select leeward walls (null areas we created above). Repeat the process. This time choose Leeward side and coefficient as 0.5 (-0.5 in my case because local axes of area element in my case is towards the structure, so -ve sign will apply the load outwards which is suction pressure.) same as defined in case of diaphragm method.</li>
                <li>You can see in figure below. I have applied wind pressure coefficient on windward side (0.8) and Leeward side (0.5). In my model I have applied +ve coefficient on windward side to represent pressure force and -ve coefficient on Leeward side to represent suction force. </li>
            </ul>
            <img src='/images/wind/coeff.PNG' alt="3D model for wind analysis" style={{ maxWidth: '100%' }} />
            <ul>
                <li>We are now done with load assignment. Click run analysis. We will see the results now.</li>
                <li>First thing first, let's check the base reaction for wind load case, which is just equal to the wind load applied.</li>
                <li>Click <em>Ctrl+T</em> and select structure output &gt; base reactions and click ok.</li>
                <li>In my case base reaction for wind load by area method gives reaction of 175.5 kN in x direction. <strong>Let's now verify the result.</strong></li>
                <li>In my case, Design wind speed = basic wind speed = 50 m/s.
                    <Latex displayMode={true}>{'$$p_z=0.6\\times v_z^2=1.5\\,kN/m^2$$'}</Latex>
                    <Latex displayMode={true}>{'$$Area=10\\times 9=90\\,m^2$$'}</Latex>
                    So on windward face, <Latex displayMode={true}>{'$$wind \\, load=0.8\\times 90 \\times 1.5=108\\,kN$$'}</Latex>
                </li>
                Similarly on leeward face, coefficient = 0.5
                <Latex displayMode={true}>{'$$wind \\, load=0.5\\times 90 \\times 1.5=67.5\\,kN$$'}</Latex>
                So total wind load = 108 + 67.5 = 175.5 kN. This is same that we got from ETABS using area method.
                <li>Now let's see the result from diaphragm method. This method shows reaction as 146.25 kN in my model. This is slightly different from what should have been obtained. The reason for this is, at first floor level, diaphragm is taking half tributary area from 1st floor and half from ground floor. The remaining half from ground floor is not taken by any diaphragm because there is no diaphragm at ground level. So wind force is slightly lesser in this case. </li>
                <li>If you ignore the lower half area from ground floor and calculate wind force as done above, you will get 146.25 kN which is same as diaphragm method.</li>
                <li>This can be seen from ETABS also. I deleted lower half area from ground floor and then analyzed the model and saw that both method gives same wind load, i.e. 146.25 kN. </li>
            </ul>
            <h2>Conclusion</h2>
            <ul>
                <li>First of all, great job if you completed reading this post. If you are new, I recommend you practise with simple model like mine. If you want my model, I will post the model in the telegram link below.</li>
                <li>So we saw two methods for defining wind load in ETABS, namely diaphragm method and area method. This is same for SAP2000 and CSI-Bridge as well. In diaphragm method as well, ETABS behind the scene calculates the area tributary to each diaphragm from the wind exposure parameters assigned when defining the auto wind load pattern. And then by multiplying this with pressure coefficient and design pressure, ETABS calculates the wind load and apply the load at CM of the diaphragm. This is analogous to equivalent seismic load calculation.</li>
                <li>I would again emphasize that the pressure coefficient we used above, is the net pressure coefficient, i.e by considering the external as well as internal pressure coefficient.</li>
                <li>One thing to realize is that in above model, I did not apply any load on side walls because this was for illustration purpose only. In actual project, wind pressure coefficient should be applied to each wall as given in code.</li>
            </ul>
            <hr />


        </main>
    )
}

export default Blog8