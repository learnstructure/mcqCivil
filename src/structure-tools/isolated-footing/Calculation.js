import React, { useContext, useMemo, useState } from 'react'
import { FootingParams } from './IsolatedFooting'

function Calculation() {
    //bearing check
    const cover = 0.05
    const [dia, setDia] = useState(12)

    const { a, b, h1, h2, l, abc, p, mx, my, fy, fck } = useContext(FootingParams).params
    const sigma_max = (p / Math.pow(l, 2)) * (1.1 + 6 * mx / (p * l) + 6 * my / (p * l))
    const sigma_min = (p / Math.pow(l, 2)) * (1.1 - 6 * mx / (p * l) - 6 * my / (p * l))
    const q = (1.5 * p / Math.pow(l, 2)) * (1 + 6 * mx / (p * l) + 6 * my / (p * l))
    const d = h1 - cover - dia / 1000
    //rebar calculation
    const x = (l - a) / 2
    const Mu = q * l * x * x / 2
    const Mubd = Mu / ((a + 2 * b) * d * d)
    const Astbd_formula = fck * (1 - Math.pow(1 - 4.598 * Mubd / (fck * 1000), 0.5)) / (2 * fy)
    const Astbd_min = 0.0015
    const Astbd = (Astbd_formula < Astbd_min) ? Astbd_min : Astbd_formula

    const Ast = Astbd * (a + 2 * b) * d * Math.pow(10, 6)
    const nbars = 4 * Ast / (Math.PI * dia * dia)
    var spacing = (l * 1000 - 2 * cover) / nbars
    spacing = Math.floor(spacing / 10) * 10

    //one way shear check
    const x1 = (l - a) / 2 - d
    const b_edge = (l - a) / 2 - b
    const w1 = l - 2 * x1
    let d1
    if (b_edge < x1) {
        d1 = d
    } else {
        d1 = h2 + ((h1 - h2) / b_edge) * x1 - cover - dia / 1000
    }
    const v1 = q * x1 * 0.5 * (w1 + l)
    const t1 = v1 / (w1 * d1) / 1000
    const [spacingProv, setSpacingProv] = useState(300);
    const [Ast1, setAst1] = useState(3.14 * dia * dia * 0.25 * (1000 / spacingProv + 1) / (d1 * 1000000))
    const handleSpacingChange = (event) => {
        setSpacingProv(event.target.value);
    };
    useMemo(() => {
        setAst1(3.14 * dia * dia * 0.25 * (1000 / spacingProv + 1) / (d1 * 1000000))
    }, [spacingProv, d1, dia])
    var betta = 0.8 * fck / (6.89 * Ast1 * 100)
    betta = betta < 1 ? 1 : betta
    const tc1 = 0.85 * Math.sqrt(0.8 * fck) * (Math.sqrt(1 + 5 * betta) - 1) / (6 * betta)

    //two way shear check
    const x2 = (l - a) / 2 - d / 2
    const w2 = l - 2 * x2
    let d2
    if (b_edge < x1) {
        d2 = d
    } else {
        d2 = h2 + ((h1 - h2) / b_edge) * x2 - cover - dia / 1000
    }
    const v2 = q * (l * l - Math.pow(a + d, 2))
    const t2 = v2 / (4 * w2 * d2 * 1000)
    const tc2 = 1 * 0.25 * Math.sqrt(fck)
    //development length
    const tbd = fy === 250 ? get_tbd(fck) : 1.6 * get_tbd(fck)
    const Ld_req = dia * 0.87 * fy / (4 * tbd)
    const Ld_avail = ((l - a) / 2 - cover) * 1000
    //load transfer check
    const fbr = 1.5 * p / (Math.pow(a, 2) * 1000)
    const fperm_col = 0.45 * fck
    const a_ratio = l / a < 2 ? l / a : 2
    const fperm_foot = 0.45 * fck * a_ratio
    const fperm = fperm_col > fperm_foot ? fperm_foot : fperm_col

    const handleDiaChange = (event) => {
        setDia(event.target.value);
    };

    return (
        <>

            <h3>Bearing pressure check</h3>
            <p>Maximum soil pressure = {sigma_max.toFixed(2)} kN/m²
                {check(sigma_max < abc)}</p>
            <p>Minimum soil pressure = {sigma_min.toFixed(2)} kN/m²
                {check(sigma_min > 0)}</p>

            <h3>Reinforcement requirement</h3>
            <p>Factored net pressure = {q.toFixed(3)} kN/m²</p>
            <p>Ultimate moment = {Mu.toFixed(3)} kNm</p>
            <p>Effective depth = {d.toFixed(3)} m</p>
            <p>Mᵤ/bd² = {Mubd.toFixed(3)} kN/m²</p>
            <p>Aₛₜ/bd = {Astbd_formula.toFixed(5)}</p>
            <p>Minimum Aₛₜ/bd = {Astbd_min.toFixed(5)}</p>
            <p>Aₛₜ/bd taken = {Astbd.toFixed(5)}</p>
            <p>Aₛₜ = {Ast.toFixed(1)} mm²</p>
            <p>Spacing required for
                <select value={dia} onChange={handleDiaChange} className="dropdown-input">
                    <option value="10">10</option>
                    <option value="12">12</option>
                    <option value="16">16</option>
                    <option value="20">20</option>
                </select>
                mm dia bar = {spacing} mm</p>
            <p>Spacing provided =  <input type="number" value={spacingProv} onChange={handleSpacingChange} min="100" step="5" className='input-number' /> mm <br /><span style={{ color: 'red' }}>{!check(tc1 > t1) ? "Try reducing spacing for passing 1 way shear" : ""}</span></p>

            <h3>One way shear check</h3>
            <p>Dist. of critical section from edge of footing = {x1.toFixed(3)} m</p>
            <p>Width of footing at critical section = {w1.toFixed(3)} m</p>
            <p>Depth of footing at critical section = {d1.toFixed(3)} m</p>
            <p>Shear at critical section = {v1.toFixed(3)} kN</p>
            <p>Shear stress at critical section = {t1.toFixed(3)} N/mm²</p>
            <p>Concrete shear strength = {tc1.toFixed(3)} N/mm²
                {check(tc1 > t1)}</p>

            <h3>Two way shear check</h3>
            <p>Dist. of critical section from edge of footing = {x2.toFixed(3)} m</p>
            <p>Width of footing at critical section = {w2.toFixed(3)} m</p>
            <p>Depth of footing at critical section = {d2.toFixed(3)} m</p>
            <p>Shear at critical section = {v2.toFixed(3)} kN</p>
            <p>Shear stress at critical section = {t2.toFixed(3)} N/mm²</p>
            <p>Concrete shear strength = {tc2.toFixed(3)} N/mm²
                {check(tc2 > t2)}</p>

            <h3>Transfer of load check</h3>
            <p>Bearing pressure = {fbr.toFixed(3)} N/mm²</p>
            <p>Permissible bearing pressure at column face = {fperm_col.toFixed(2)} N/mm²</p>
            <p>Permissible bearing pressure at footing face = {fperm_foot.toFixed(2)} N/mm²</p>
            <p>Permissible bearing pressure = {fperm.toFixed(2)} N/mm²
                {check(fperm > fbr)}</p>

            <h3>Development length check</h3>
            <p>Bond strength = {tbd} N/mm²</p>
            <p>Ld required = {Ld_req.toFixed(2)} mm</p>
            <p>Ld available = {Ld_avail.toFixed(2)} mm
                {check(Ld_avail > Ld_req)}</p>
        </>

    )
}
function check(arg) {
    return arg ? " ✅" : " ❌"
}
function get_tbd(fck) {
    switch (fck) {
        case 20:
            return 1.2
        case 25:
            return 1.4
        case 30:
            return 1.5
        case 35:
            return 1.7
        default:
            return 1.9
    }
}

export default Calculation
