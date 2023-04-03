import React from 'react'
import '../css/blog.css'
import { Helmet } from 'react-helmet'

function Blog7() {

    return (
        <main className='blog-container'>
            <Helmet>
                <title>What is P-delta analysis and how to perform it?</title>
                <meta name="description" content="What is P-delta analysis and how to perform it? small and large delta effect" />
            </Helmet>
            <h1>What is P-delta analysis and how to perform it?</h1>
            <div className='author'>
                <div>Author: Abinash Mandal</div>
                <div>Date: April, 2023</div>
            </div>

            <h2>Introduction</h2>
            <p>	P-Δ (delta) analysis is a type of non-linear analysis. In some of my previous posts, I said there are basically two types of non-linear analysis. They are material non-linearity and geometric non-linearity. We saw material non-linearity during pushover analysis. This P-Δ is a kind of geometric non-linearity.</p>
            <p>Let's first see in detail what geometric non-linearity is.</p>
            <p>Consider a column fixed at bottom and free at top with compressive load P and lateral load F at its top as shown in figure below. </p>
            <img src='/images/pdelta/bmd.PNG' alt="p delta effect" style={{ maxWidth: '100%' }} />
            <p>If we apply the equilibrium equation on undeformed shape of the column, the bending moment at bottom of column would be, <em> M = F * L</em>. This is the default behaviour that we get if we don't consider geometric non-linearity or don't consider P-Δ effect. (Remember when we were doing structural analysis in college, we were writing the equilibrium equation on undeformed shape of the structure). This is known as linear analysis or <strong>elastic first order analysis</strong>.</p>
            <p>But if we write the equilibrium equation on deformed shape of the column, we would get the bending moment at bottom, <em>M = F * L  + P * Δ</em>. This P * Δ is the extra moment known as <strong>secondary moment</strong> that we get here and this is what <strong>P-Δ effect</strong> is. This is also known as elastic <strong>second order </strong>analysis.</p>
            <p>We still say this elastic because material has not necessarily reached the plastic range. We call this second order because we are considering the deformed shape while writing the equilibrium equation and so we are actually considering the geometric non-linearity. And as a matter of fact if we plot F vs Δ here, we don't get linear relationship but we will see a non-linear graph of F vs Δ (not shown here but may add later).</p>
            <p>It is important to understand that in our example above, the axial load was compressive, so it has increasing effect on responses like BM and displacements. This is also known as softening effect. However if the load was tensile, it would actually decrease the BM and displacements, which is known as stiffening effect. This can be easily proved by reconsidering the equilibrium equation.</p>

            <h3>Types of geometric non-linearity</h3>
            Before going to ETABS, let's quickly look at the types of geometric non-linearity.
            <ul>
                <li><strong>Large displacement:</strong> This is a general type of geometric non-linearity where the  equilibrium equations are <strong>truly</strong> written in the deformed shape of the structure. Loads are applied in steps and stiffness matrix is modified each time to consider the deformed shape. So this requires a number of iterations to be performed. This method also captures P-Δ effect but requires more computation.</li>
                <li><strong>P-Δ effect only:</strong> This is a special case of geometric non-linearity where there may be no need of iterations and equilibrium on deformed shape can be directly satisfied. This can be done quickly and so is carried out in most of the case. </li>
            </ul>
            <p>In ETABS both of the above methods can be performed.</p>
            <p style={{ color: 'blueviolet', textDecoration: 'underline' }}>When to consider P-Δ effect?</p>
            <ul>
                <li>In P-Δ effect, P is the axial load usually in vertical members like columns and Δ is the lateral deflection that usually comes from lateral loads like earthquake, wind, etc. </li>
                <li>So when the axial load in column is significant, there will be significant P-Δ effect and we have to consider P-Δ effect in our analysis. To be more specific, it is generally believed that there won't be any considerable P-Δ effect in low to medium rise buildings. </li>
                <li>I usually do 5 to 6 story building design and I don't find any noticeable difference due to inclusion of P-Δ. If you have like 10 or higher story building, you can check by including P-Δ.</li>
                <li>I would also like to mention that if you have any structure with significant deformation for example in case of buckling problems, it is better to perform large displacement analysis.</li>
            </ul>

            <h2>Implementation in ETABS</h2>
            Note that process will be quite similar in SAP2000 as well because both these software packages are developed by same company.
            <ul>
                <li>Create a model in ETABS. (If you are new to ETABS, follow some beginner's videos on youtube). My model is as shown in figure. It is one bay of 5m x 5m and total of 5 story each having 3m story height.</li>
            </ul>
            <img src='/images/pdelta/model.PNG' alt="p delta effect" style={{ maxWidth: '100%' }} />
            <ul>
                <li>Apply all the gravity loads in respective load patterns. I have applied dead load of 10 kN/m on each of the beams and live load of 8 kN/m² on each slabs.</li>
                <li>Also define equivalent static loads to apply seismic load. I have  applied auto seismic load as per IS code along x direction only since I intend to see the P-Δ effect for this direction only. </li>
                <li>Modify the existing mass source by going to Define &gt; Mass Source. Make sure to not include dead load twice in mass source. It is good practice to uncheck element self mass and include dead load inside specified load pattern. By doing this way, any load defined in dead load case will also be considered in mass matrix.</li>
                <li>Now the model is ready. Run the analysis. We have not applied P-Δ effect yet. We will do this in next step.</li>
                <li>Save as the model with different name. In this case we will add P-Δ effect.</li>
                <li>In ETABS P-Delta option can be directly added to each of the load case in single step. If you are doing it in SAP2000, you may have to do it manually for each load case.</li>
                <li>Go to Define &gt; P-Delta options. The following window will appear.</li>
                <img src='/images/pdelta/pdelta.PNG' alt="p delta effect" style={{ maxWidth: '100%' }} />
                <li>For automation method, choose <em>iterative-Based on loads </em>options. This is recommended by ETABS team than to have non-iterative option.</li>
                <li>Inside iterative P-delta load case, choose gravity loads as required by building codes. From this combination of loads, ETABS calculates the <strong>P</strong> as in P-Δ effect.</li>
                <li>Click ok. This will add p-delta option in each load case but important is the lateral load case. You can check this by going to any load case and you will see that <em>iterative based on loads</em> has been selected inside P-Delta/Nonlinear stiffness.</li>
                <li>Run the analysis. We have included P-delta in our analysis. Now let's compare some results.</li>
            </ul>
            <h3>Comparing the Results</h3>
            <p>Go to Display &gt; displaced shape and find the maximum displacement in both models. Below is the peak displacement in eq-x load case for p-delta and no p-delta option in my model.</p>
            <img src='/images/pdelta/disp.PNG' alt="p delta effect" style={{ maxWidth: '100%' }} />
            <p>We see that due to P-Δ effect, peak displacement has increased from 136mm to 148mm. However like we said before, if the axial load on column was tensile, then peak displacement would have decreased. But this is very rare in building structures because the load on columns are usually compressive.</p>
            <p> Again go to Display &gt; Force diagrams &gt; frame forces. Select load case eq-x and component as Moment 3-3. This will show bending moment diagram. Below is the BM at base for p-delta and no p-delta option in my model</p>
            <img src='/images/pdelta/bmcompare.PNG' alt="p delta effect" style={{ maxWidth: '100%' }} />
            <p>Again we can see that bending moment has increased from 103.6 kNm to 112.5 kNm.</p>
            <h2>P-Δ (large delta) and P-𝛅 (small delta)</h2>
            <p>Up until this point we only talked about P-Δ where Δ is the lateral deflection at top of column relative to its bottom. So this is also known as global or large delta.</p>
            <p>In addition to Δ, there is also 𝛅 which is deflection of column locally with respect to reference line connecting end points of column as shown in figure below. </p>
            <img src='/images/pdelta/local.PNG' alt="small and large p-delta" style={{ maxWidth: '100%' }} />
            <p>This 𝛅 also causes secondary moments and forces in the frames (in a similar way we saw for Δ) and this is often known as P-𝛅 (small delta) effect. </p>
            <p>For design of frame structures, we have to consider both P-Δ and P-𝛅 effect. We already included P-Δ effect during analysis in our model as shown in previous heading. Now to capture P-𝛅 effect, we could break the columns at intermediate points but this is not necessary. It is recommended in the manual to capture P-𝛅 (small delta) effect during actual column design by the use of amplification factors as given in code. For example, IS 456 in Cl. 39.7.1 gives the formula to calculate additional moment. This process of including additional moment (P-𝛅 effect) happens automatically in ETABS during the design of columns.</p>

            <h2>Conclusion</h2>
            <ul>
                <li>P-Δ effect occurs due to the axial force P in a member which produces secondary moment and other secondary responses in the member which has gone through Δ lateral displacement. </li>
                <li>If the axial force P is compression, it has softening effect, meaning increased moments and displacements. This is common in building structures.</li>
                <li>If the axial force P is tension, it has stiffening effect, meaning reduced moments and displacements. This occurs in cable structures.</li>
                <li>I would like to emphasize the fact that my model was only 5 story building but the moment seems to have increased by about 8.5% which is high for typical 5 story buildings. Well this happens if the weight of structure (which causes axial load in columns) is high in proportion to the lateral stiffness of the structure. I had intentionally made it so so that we could see some difference. But this shouldn't happen in real projects.</li>
                <li>To conclude this I would say, it's not necessary to include P-Δ for most common buildings which are upto 3 to 7 story buildings. But if your building is slender like my model and you are not sure, you can always include P-Δ and see the difference. And most importantly your building code says specifically when and how to consider P-Δ effect. </li>
                <li>If you have not included P-Δ in your analysis, its important to set <em>Consider P-delta done?</em> to <em>No</em>. You can set this in frame design preference. This way ETABS will try to approximately capture second order effects as given in code.</li>
            </ul>

            <hr />


        </main>
    )
}

export default Blog7