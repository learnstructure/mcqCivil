import React, { useContext } from 'react'
import { FootingParams } from './IsolatedFooting'

function Calculation() {
    //bearing check
    const cover = 0.50
    const { a, b, h1, h2, l, abc, p, mx, my, fy, fck } = useContext(FootingParams).params
    const sigma_max = (p / Math.pow(l, 2)) * (1.1 + 6 * mx / (p * l) + 6 * my / (p * l))
    const sigma_min = (p / Math.pow(l, 2)) * (1.1 - 6 * mx / (p * l) - 6 * my / (p * l))
    const q = (1.5 * p / Math.pow(l, 2)) * (1 + 6 * mx / (p * l) + 6 * my / (p * l))
    const d = h1 - 0.05 - 0.016
    //rebar calculation
    const x = (l - a) / 2
    const Mu = q * l * x * x / 2
    const Mubd = Mu / ((a + 2 * b) * d * d)
    var Astbd = fck * (1 - Math.pow(1 - 4.598 * Mubd / (fck * 1000), 0.5)) / (2 * fy)
    Astbd = (Astbd < 0.0015) ? 0.0015 : Astbd
    const Ast = Astbd * (a + 2 * b) * d * Math.pow(10, 6)
    const dia = 12
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
        d1 = h2 + ((h1 - h2) / b_edge) * x1 - 0.05 - 0.016
    }
    const v1 = q * x1 * 0.5 * (w1 + l)
    const t1 = v1 / (w1 * d1) / 1000

    return (
        <>
            {spacing}
            <h3>Bearing pressure check</h3>
            <p>Maximum soil pressure = {sigma_max.toFixed(2)} kN/m²
                {check(sigma_max < abc)}</p>
            <p>Minimum soil pressure = {sigma_min.toFixed(2)} kN/m²
                {check(sigma_min > 0)}</p>

            <h3>One way shear check</h3>
            <p>Dist. of critical section from edge of footing = {x1.toFixed(3)} m</p>
            <p>Width of footing at critical section = {w1.toFixed(3)} m</p>
            <p>Depth of footing at critical section = {d1.toFixed(3)} m</p>
            <p>Shear at critical section = {v1.toFixed(3)} kN</p>
            <p>Shear stress at critical section = {t1.toFixed(3)} N/mm²</p>
        </>

    )
}
function check(arg) {
    return arg ? " ✅" : " ❌"
}

export default Calculation
