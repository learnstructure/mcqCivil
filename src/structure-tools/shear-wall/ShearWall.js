import React, { useState, createContext } from 'react'
import { Helmet } from 'react-helmet'
import { check, get_bar_area, get_tauc, get_tauc_max } from '../modules/globalFunctions'
import { Link } from 'react-router-dom';
export const RccColumnParams = createContext()
function ShearWall() {
    var Latex = require('react-latex');
    const [params, setParams] = useState({ l_w: 4, t_w: 0.2, h_w: 31, l_be: 0.450, t_be: 0.450, pu: 3710, mu: 6559, vu: 1234, fy: 415, fck: 25, cover: 40, rho_v: 0.0044, rho_h: 0.0025, ring_dia: 10, main_bar: 12, l_b: 0.45, t_b: 0.45, bar_be: 16, n_be: 10, ring_be: 12 });
    const handleChange = (event) => {
        const value = parseFloat(event.target.value)
        const { name } = event.target;
        setParams({ ...params, [name]: value });
    };
    const I_w = Math.pow(params.l_w, 3) * params.t_w / 12

    const A_w = params.l_w * params.t_w
    const sigma_max = params.pu / A_w + params.mu * params.l_w * 0.5 / I_w
    const d_w = 0.8 * params.l_w
    const tau_v = params.vu / (params.t_w * d_w * 1000)   //in N/mm2
    const tauc_max = get_tauc_max(params.fck)
    const tau_c = get_tauc(params.fck, params.rho_v).toFixed(4)
    const V_us = (tau_v - tau_c) * params.t_w * d_w * 1000   //in kN
    const min_hor_spacing = 2 * get_bar_area(params.ring_dia) / (0.0025 * params.t_w * 1000)
    var spacing_hor = 0.87 * params.fy * 2 * get_bar_area(params.ring_dia) * d_w / V_us
    if (spacing_hor < 0) {
        spacing_hor = min_hor_spacing
    } else {
        spacing_hor = spacing_hor < min_hor_spacing ? spacing_hor : min_hor_spacing
    }

    //flexure design
    const xu_l_lim = 0.0035 / (0.0035 + 0.002 + 0.87 * params.fy / 200000)
    const phi = 0.87 * params.fy * params.rho_v / params.fck
    const lambda = params.pu / (params.fck * params.t_w * params.l_w * 1000)
    const xu_l = (phi + lambda) / (2 * phi + 0.36)
    const betta = (0.002 + 0.87 * params.fy / 200000) / 0.0035
    var Mur, xu_l_rev, alpha1, alpha2, alpha3, alpha4, alpha5
    if (xu_l < xu_l_lim) {
        Mur = phi * ((1 + lambda / phi) * (0.5 - 0.416 * xu_l) - Math.pow(xu_l, 2) * (0.168 + Math.pow(betta, 2) / 3)) * params.fck * params.t_w * Math.pow(params.l_w, 2) * 1000
    } else {
        alpha1 = 0.36 + phi * (1 - betta / 2 - 0.5 / betta)
        alpha2 = 0.15 + 0.5 * phi * (1 - betta + betta * betta / 3 - 1 / (3 * betta))
        alpha3 = phi * (1 / xu_l - 3) / (6 * betta)
        alpha4 = phi / betta - lambda
        alpha5 = 0.5 * phi / betta
        xu_l_rev = (-alpha4 + Math.sqrt(alpha4 * alpha4 + 4 * alpha1 * alpha5)) / (2 * alpha1)
        Mur = (alpha1 * xu_l_rev - alpha2 * xu_l_rev * xu_l_rev - alpha3 - lambda / 2) * params.fck * params.t_w * Math.pow(params.l_w, 2) * 1000
    }
    const spacing_ver = 2 * get_bar_area(params.main_bar) / (params.rho_v * params.t_w * 1000)

    //boundary element
    const cc_dist_be = params.l_w - params.l_b
    const area_be = params.l_b * params.t_b
    const area_wall_only = (params.l_w - 2 * params.l_b) * params.t_w
    const pu_be1 = params.pu * area_be / (area_be * 2 + area_wall_only)
    const pu_be2 = params.mu > Mur ? (params.mu - Mur) / cc_dist_be : 0
    const pu_be = pu_be1 + pu_be2
    const rho_be = get_bar_area(params.bar_be) * params.n_be / (area_be * 1000000)
    const Pur_be = (0.4 * params.fck * area_be * 1000000 + (0.67 * params.fy - 0.4 * params.fck) * get_bar_area(params.bar_be) * params.n_be) / 1000
    //confinement of be
    const spacing_be = Math.floor(Math.min(Math.min(params.l_be, params.t_be) * 1000 / 3, 6 * params.bar_be, 100) / 10) * 10
    const h = Math.max(params.l_be * 1000 - params.cover * 2, params.t_be * 1000 - params.cover * 2)
    const Ash_be = 0.05 * spacing_be * h * params.fck / params.fy
    const Ash_be_prov = get_bar_area(params.ring_be)
    return (
        <main className='page-container'>
            <Helmet>
                <title>Shear wall design</title>
                <meta name="description" content="Design a shear wall based on IS 456: 2007 and IS 13920 2016 for free" />
            </Helmet>
            <h1>Interactive Shear wall design</h1>
            <div >
                <img src='/images/tools/shear-wall.PNG' alt="isolated footing design" style={{ maxWidth: '100%' }} />
            </div>
            <h3>1. Input Data</h3>
            <div className='divs-container'>
                <label className='param-label'>Factored Loadings</label>
                <div className='params2'>
                    <label>
                        P<sub>u</sub> :
                        <input type="number" name="pu" value={params.pu} onChange={handleChange} min="10"
                            step="0.5" className='input-number' /> kN
                    </label>
                    <label>
                        V<sub>u</sub> :
                        <input type="number" name="vu" value={params.vu} onChange={handleChange} min="5"
                            step="0.5" className='input-number' /> kN
                    </label>
                    <label>
                        M<sub>u</sub> :
                        <input type="number" name="mu" value={params.mu} onChange={handleChange} min="0"
                            step="0.5" className='input-number' /> kN-m
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

                <label className='param-label'>Wall parameters</label>
                <div className='params2'>
                    <label>
                        Wall length, L<sub>w</sub>:
                        <input type="number" name="l_w" value={params.l_w} onChange={handleChange} min="0.1"
                            step="0.005" className='input-number' /> m
                    </label>
                    <label>
                        Wall thickness, t<sub>w</sub>:
                        <input type="number" name="t_w" value={params.t_w} onChange={handleChange} min="0.1"
                            step="0.005" className='input-number' />m {check(params.t_w > 0.15)}
                    </label>
                    <label>
                        Wall height:
                        <input type="number" name="h_w" value={params.h_w} onChange={handleChange} min="0.1"
                            step="0.005" className='input-number' />m
                    </label>
                </div>
            </div>
            <h3>2. Check for requirement of boundary element</h3>
            <div className='divs-container'>
                <div >Maximum compressive stress = {(sigma_max / 1000).toFixed(3)} N/mm²</div>
                <div >0.2 f<sub>ck</sub> = {(params.fck * 0.2)} N/mm²</div>
                <div style={{ color: 'blue' }}>So, the boundary element is {sigma_max / 1000 < params.fck * 0.2 && <span>not</span>} required.</div>
            </div>

            <h3>3. Design for shear</h3>
            <div className='divs-container'>
                <div >Effective depth of wall, d<sub>w</sub> = {d_w * 1000} mm</div>
                <div >Nominal shear stress, τ<sub>v</sub> = {tau_v.toFixed(3)} N/mm² </div>
                <div >Maximum shear stress, τ<sub>c,max</sub> = {tauc_max} N/mm² {check(tau_v < tauc_max)}</div>
                <div>
                    Vertical reinforcement ratio, ρ<sub>v</sub> :
                    <input type="number" name="rho_v" value={params.rho_v} onChange={handleChange} min="0.001"
                        step="0.00005" className='input-number' /> {params.rho_v < 0.0025 && '❌'}
                </div>
                <div >Shear strength of concrete, τ<sub>c</sub> = {tau_c} N/mm² </div>
                {tau_c > tau_v && <div>Nominal horizontal rebar required. ✅</div>}
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
                <div style={{ color: 'green', fontWeight: "bold" }}>Provide horizontal bar of {params.ring_dia}mm @ {Math.floor(spacing_hor / 10) * 10}mm c/c spacing.</div>

            </div>
            <h3>4. Design for flexure</h3>
            <div className='divs-container'>
                <div style={{ fontStyle: 'italic' }}>As per Annex A - IS13920-2016</div>
                <div >φ = {phi.toFixed(3)} </div>
                <div >λ = {lambda.toFixed(3)} </div>
                <div ><Latex >$x_u^*/L_w$</Latex> = {xu_l_lim.toFixed(3)} </div>
                <div ><Latex >$x_u/L_w$</Latex> = {xu_l.toFixed(3)} </div>
                <div >β = {betta.toFixed(3)} </div>
                <div >For   <Latex >$x_u/L_w$</Latex>{xu_l < xu_l_lim ? ' < ' : ' > '}<Latex >$x_u^*/L_w$</Latex></div>

                {xu_l > xu_l_lim && <>
                    <div>α<sub>1</sub>={alpha1.toFixed(3)}</div>
                    <div>α<sub>2</sub>={alpha2.toFixed(3)}</div>
                    <div>α<sub>3</sub>={alpha3.toFixed(3)}</div>
                    <div>α<sub>4</sub>={alpha4.toFixed(3)}</div>
                    <div>α<sub>5</sub>={alpha5.toFixed(3)}</div>
                    <div ><Latex >Revised $x_u/L_w$</Latex> = {xu_l_rev.toFixed(3)} </div>
                </>}
                <div>
                    Vertical bar dia. =
                    <select name="main_bar" value={params.main_bar} onChange={handleChange} className="dropdown-input">

                        <option value="10">10mm</option>
                        <option value="12">12mm</option>
                        <option value="16">16mm</option>
                        <option value="20">20mm</option>
                        <option value="25">25mm</option>

                    </select>
                </div>
                <div >Spacing required = {spacing_ver.toFixed(1)} mm</div>
                <div style={{ color: 'green', fontWeight: "bold" }}>Provide vertical bar of {params.main_bar}mm @ {Math.floor(spacing_ver / 10) * 10}mm c/c spacing.</div>
                <div>
                    Increase vertical reinforcement, ρ<sub>v</sub> :
                    <input type="number" name="rho_v" value={params.rho_v} onChange={handleChange} min="0.001"
                        step="0.00005" className='input-number' /> {params.rho_v < 0.0025 && '❌'}
                </div>
                <div>M<sub>ur</sub>={Mur.toFixed(1)} kN-m {params.mu < Mur && '✅'}</div>
                {params.mu > Mur && <div>Remaining moment M<sub>u</sub> - M<sub>ur</sub>={(params.mu - Mur).toFixed(1)} kN-m to be resisted by boundary element</div>}
            </div>
            {sigma_max / 1000 > params.fck * 0.2 && <>
                <h3>5. Design of boundary element</h3>
                <div className='divs-container'>

                    <div>
                        Width of boundary element, L<sub>b</sub> :
                        <input type="number" name="l_b" value={params.l_b} onChange={handleChange} min="0.1"
                            step="0.005" className='input-number' />m {params.l_b < 0.1 && '❌'}
                    </div>
                    <div>
                        Thickness of boundary element, t<sub>b</sub> :
                        <input type="number" name="t_b" value={params.t_b} onChange={handleChange} min="0.15"
                            step="0.005" className='input-number' />m {params.t_b < params.t_w && '❌'}
                    </div>
                    <div >Area of each boundary element = {area_be.toFixed(4)} m² </div>
                    <div >Area of wall excluding BE = {area_wall_only.toFixed(4)} m² </div>
                    <div >P<sub>u,b</sub> on BE based on area = {pu_be1.toFixed(2)} kN </div>
                    <div>Addition P<sub>u,b</sub> on BE due to BM={pu_be2.toFixed(2)} kN</div>
                    <div >Total P<sub>u,b</sub> on BE = {pu_be.toFixed(2)} kN </div>
                    <div>
                        Boundary element bar dia. =
                        <select name="bar_be" value={params.bar_be} onChange={handleChange} className="dropdown-input">
                            <option value="10">10mm</option>
                            <option value="12">12mm</option>
                            <option value="16">16mm</option>
                            <option value="20">20mm</option>
                            <option value="25">25mm</option>
                            <option value="32">32mm</option>

                        </select>
                    </div>
                    <div>
                        Provide no of bars in BE =
                        <input type="number" name="n_be" value={params.n_be} onChange={handleChange} min="6"
                            step="1" className='input-number' />
                    </div>
                    <div>Reinforcement ratio provided = {(rho_be * 100).toFixed(4)} % {rho_be < 0.008 || rho_be > 0.06 ? '❌' : '✅'}</div>
                    <div>Axial capacity of BE, P<sub>uR,be</sub> = {Pur_be.toFixed(1)} kN {check(Pur_be > pu_be)}</div>
                    <div style={{ color: 'green', fontWeight: "bold" }}>Provide {params.n_be} vertical bars of {params.bar_be}mm dia. in the BE.</div>

                    <p style={{ textDecorationLine: 'underline' }}> Confining reinforcement in boundary element</p>
                    <div>Spacing provided = {spacing_be} mm. (As per Cl. 10.4.4)</div>
                    <div>
                        Nominal cover =
                        <input type="number" name="cover" value={params.cover} onChange={handleChange} min="20"
                            step="0.5" className='input-number' /> mm
                    </div>
                    <div>Longer dimension of confining link, h = {h} mm</div>
                    <div>Confining reinforcement required, A<sub>sh</sub> = {Ash_be.toFixed(1)} mm²</div>
                    <div>
                        Provide confining tie of dia. =
                        <select name="ring_be" value={params.ring_be} onChange={handleChange} className="dropdown-input">
                            <option value="8">8mm</option>
                            <option value="10">10mm</option>
                            <option value="12">12mm</option>
                            <option value="16">16mm</option>
                            <option value="20">20mm</option>
                        </select>
                    </div>
                    <div>Confining reinforcement provided = {Ash_be_prov.toFixed(1)} mm² {check(Ash_be_prov > Ash_be)}</div>
                    <div style={{ color: 'green', fontWeight: "bold" }}>Provide confining ties of {params.ring_be}mm @ {spacing_be}mm c/c spacing throughout the BE.</div>

                </div>
            </>}
            <h4>The End 🙏 <Link to=".." relative='path' className='ext-link ext-link2'>More design tools here</Link></h4>
        </main>
    )
}

export default ShearWall