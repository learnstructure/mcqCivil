import React, { useState } from 'react'
import { Helmet } from 'react-helmet'
import { check, get_bar_area, get_tauc, get_tauc_max, get_xu_d_lim } from '../modules/globalFunctions'
import { Link } from 'react-router-dom';

function BeamRCC() {

    const [params, setParams] = useState({ B: 250, D: 500, mu: 130, vu: 50, fy: 415, fck: 20, cover_clr: 25, ring_dia: 8, bot_bar: 20, n_bot_bar: 3, top_bar: 20, n_top_bar: 2, span: 5 });
    const handleChange = (event) => {
        const value = parseFloat(event.target.value)
        const { name } = event.target;
        setParams({ ...params, [name]: value });
    };
    const d = params.D - params.cover_clr - params.ring_dia / 2
    const xu_d_lim = get_xu_d_lim(params.fy)
    const M_lim = 0.36 * xu_d_lim * (1 - 0.416 * xu_d_lim) * params.B * d * d * params.fck
    const Ast_bot = params.n_bot_bar * get_bar_area(params.bot_bar)
    const Ast_bot_perc = Ast_bot * 100 / (params.B * d)
    const Ast_min = 0.85 * 100 / params.fy
    const M_ur = 0.87 * params.fy * Ast_bot * d * (1 - Ast_bot * params.fy / (params.B * d * params.fck))

    const rho = Ast_bot * 100 / (params.B * d)
    const tau_v = params.vu * 1000 / (params.B * d)   //in N/mm2
    const tauc_max = get_tauc_max(params.fck)
    const tau_c = get_tauc(params.fck, rho).toFixed(4)
    const V_us = (tau_v - tau_c) * params.B * d / 1000   //in kN
    const min_hor_spacing = 2 * get_bar_area(params.ring_dia) * 0.87 * params.fy / (0.4 * params.B)
    var spacing_hor = 0.87 * params.fy * 2 * get_bar_area(params.ring_dia) * d / (V_us * 1000)
    if (spacing_hor < 0) {
        spacing_hor = min_hor_spacing
    } else {
        spacing_hor = spacing_hor < min_hor_spacing ? spacing_hor : min_hor_spacing
    }
    const conf_ring_spac = Math.min(
        params.span * 1000 / 4, 6 * params.bot_bar, 100)
    const ring_spacing = spacing_hor < conf_ring_spac ? spacing_hor : conf_ring_spac
    return (
        <main className='page-container'>
            <Helmet>
                <title>Rectangular RCC Beam design</title>
                <meta name="description" content="Design a RCC beam based on IS 456: 2007 and IS 13920 2016 for free" />
            </Helmet>
            <h1>Interactive Rectangular RCC Beam design</h1>
            <div >
                <img src='/images/tools/beam.PNG' alt="isolated footing design" style={{ maxWidth: '100%' }} />
            </div>
            <h3>1. Input Data</h3>
            <div className='divs-container'>
                <label className='param-label'>Factored Loadings</label>
                <div className='params2'>
                    <label>
                        M<sub>u</sub> :
                        <input type="number" name="mu" value={params.mu} onChange={handleChange} min="0"
                            step="0.5" className='input-number' /> kN-m
                    </label>
                    <label>
                        V<sub>u</sub> :
                        <input type="number" name="vu" value={params.vu} onChange={handleChange} min="5"
                            step="0.5" className='input-number' /> kN
                    </label>

                </div>
                <label className='param-label'>Design parameters</label>
                <div className='params2'>
                    <label>
                        f<sub>y</sub> :
                        <input type="number" name="fy" value={params.fy} onChange={handleChange} min="5"
                            step="5" className='input-number' /> N/mm²
                    </label>
                    <label>
                        f<sub>ck</sub> :
                        <input type="number" name="fck" value={params.fck} onChange={handleChange} min="1"
                            step="1" className='input-number' /> N/mm² {params.fck < 15 && '❌'}
                    </label>
                </div>

                <label className='param-label'>Beam dimensions</label>
                <div className='params2'>
                    <label>
                        Beam width, B:
                        <input type="number" name="B" value={params.B} onChange={handleChange} min="10"
                            step="5" className='input-number' /> mm
                    </label>
                    <label>
                        Beam depth, D:
                        <input type="number" name="D" value={params.D} onChange={handleChange} min="10"
                            step="5" className='input-number' /> mm
                    </label>

                </div>
                <p><label>
                    Clear cover =
                    <input type="number" name="cover_clr" value={params.cover_clr} onChange={handleChange} min="10"
                        step="0.1" className='input-number' />
                </label> mm</p>
            </div>
            <h3>2. Check whether section is under-reinforced</h3>
            <div className='divs-container'>
                <div >Effective depth, d = {(d).toFixed(2)} mm</div>
                <div >For Fe{params.fy} rebar, (x<sub>u</sub>/d)<sub>lim</sub> = {xu_d_lim}</div>
                <div >M<sub>u,lim</sub> = {(M_lim / 1000000).toFixed(2)} kN-m</div>
                <div>M<sub>u</sub> = {params.mu} kN-m {params.mu < M_lim / 1000000 ? "<" : ">"} M<sub>u,lim</sub> {check(params.mu < M_lim / 1000000)}</div>
            </div>
            <h3>3. Design for Bending moment</h3>
            <div className='divs-container'>
                <label >Bottom reinforcement in beam: ↓</label>
                <div className='params2'>
                    <label>
                        No. of bars :
                        <input type="number" name="n_bot_bar" value={params.n_bot_bar} onChange={handleChange} min="2"
                            step="1" className='input-number' />
                    </label>
                    <label>
                        Bar dia. :
                        <select name="bot_bar" value={params.bot_bar} onChange={handleChange} className="dropdown-input">
                            <option value="8">8mm</option>
                            <option value="10">10mm</option>
                            <option value="12">12mm</option>
                            <option value="16">16mm</option>
                            <option value="20">20mm</option>
                            <option value="25">25mm</option>
                            <option value="28">28mm</option>
                            <option value="32">32mm</option>

                        </select>
                    </label>
                </div>
                <p>A<sub>st, prov</sub> = {Ast_bot.toFixed(2)} mm² </p>
                <div>A<sub>st, prov</sub> = {Ast_bot_perc.toFixed(3)} % {check(Ast_bot_perc < 4)}</div>
                <div>A<sub>st, min</sub> = {Ast_min.toFixed(3)} % {check(Ast_bot_perc > Ast_min)}</div>
                <div title='Moment of resistance of section'>M<sub>uR</sub> = {(M_ur / 1000000).toFixed(2)} kN-m</div>
                <div>M<sub>u</sub> = {params.mu} kN-m {params.mu < M_ur / 1000000 ? "<" : ">"} M<sub>uR</sub> {check(params.mu < M_ur / 1000000)}</div>
                <div style={{ color: 'green', fontWeight: "bold" }}>Provide {params.n_bot_bar} longitudinal bar of {params.bot_bar}mm dia on bottom face and 2 hanger bars on top.</div>
            </div>
            <h3>4. Design for Shear</h3>

            <div className='divs-container'>
                <div >Effective depth of beam, d = {d} mm</div>
                <div >Nominal shear stress, τ<sub>v</sub> = {tau_v.toFixed(3)} N/mm² </div>
                <div >Maximum shear stress, τ<sub>c,max</sub> = {tauc_max} N/mm² {check(tau_v < tauc_max)}</div>
                <div>
                    100 A<sub>s</sub> / bd = {rho.toFixed(3)}%
                </div>
                <div >Shear strength of concrete, τ<sub>c</sub> = {tau_c} N/mm² </div>
                {tau_c > tau_v && <strong>Nominal shear reinforcement required.</strong>}
                {tau_c < tau_v && <div >Shear to be resisted by stirrups, V<sub>u,s</sub> = {V_us.toFixed(2)} kN </div>}
                <div>
                    Horizontal bar dia. =
                    <select name="ring_dia" value={params.ring_dia} onChange={handleChange} className="dropdown-input">
                        <option value="8">8mm</option>
                        <option value="10">10mm</option>
                        <option value="12">12mm</option>
                        <option value="16">16mm</option>

                    </select>
                </div>
                <div >Spacing required = {spacing_hor.toFixed(1)} mm</div>


                <label >Special confining reinforcement: ↓ <strong><em>IS 13920 Cl. 8.1</em></strong></label>
                <div className='params2'>
                    <label>
                        Beam span =
                        <input type="number" name="span" value={params.span} onChange={handleChange} min="0.5"
                            step="0.05" className='input-number' /> m
                    </label>
                    <div>Max spacing = {conf_ring_spac} mm</div>
                </div>
                <div style={{ color: 'green', fontWeight: "bold" }}>Provide 2 legged vertical shear stirrups of {params.ring_dia}mm dia. @ {Math.floor(ring_spacing / 10) * 10}mm c/c spacing near support.</div>
            </div>


            <h4>The End 🙏 <Link to=".." relative='path' className='ext-link ext-link2'>More design tools here</Link></h4>
        </main>
    )
}

export default BeamRCC