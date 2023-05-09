import React, { useContext } from 'react'
import Calculation from './Calculation'
import { calc_area } from './Calculation';
import { RccColumnParams } from './RccColumn';
import { LineChart, Line, XAxis, YAxis, CartesianGrid, Tooltip, ResponsiveContainer, Label } from 'recharts';
import { linearInterpolate } from '../modules/interpolate';

function GetInteraction() {
    const { D, B, fy, fck, nb, nd, dia_d, dia_b, mux, muy, pu } = useContext(RccColumnParams).params

    const Asc = 2 * calc_area(nd, dia_d) + 2 * calc_area(nb - 2, dia_b)
    const P0 = 0.447 * fck * B * D + (0.79 * fy - 0.447 * fck) * Asc

    let x0 = bisection(0, 0.5, 10)
    const init = x0 ? parseFloat(x0.toFixed(3)) : 0.3

    var data = []
    for (let i = init; i <= 1.6; i = i + 0.04) {
        var [P_ur, M_ur] = Calculation(i)
        if (x0 && i === init) {
            P_ur = 0
        }
        data.push({ p_ur: parseFloat((P_ur / 1000).toFixed(2)), m_ur: parseFloat((M_ur / 1000000).toFixed(2)) })
    }
    data.push({ p_ur: parseFloat((P0 / 1000).toFixed(2)), m_ur: 0 })

    data.reverse();

    const getMurForPur = (pur) => {
        let a = 0;
        let b = 1.6;
        let tol = 0.001;

        while (true) {
            let c = (a + b) / 2;
            const [P_ur, M_ur] = Calculation(c);
            const diff = P_ur / 1000 - pur;

            if (Math.abs(diff) < tol) {
                return M_ur / 1000000;
            }

            if (diff > 0) {
                b = c;
            } else {
                a = c;
            }
        }
    }

    const Mux1 = getMurForPur(pu)
    const Muy1 = getMurForPur(pu)
    const Puz = (0.45 * fck * B * D + 0.75 * fy * Asc) / 1000
    const P_ratio = pu / Puz
    const alpha = P_ratio < 0.2 ? 1 : (P_ratio > 0.8 ? 2 : linearInterpolate(P_ratio, 0.2, 0.8, 1, 2))
    const dc_ratio = Math.pow(mux / Mux1, alpha) + Math.pow(muy / Muy1, alpha)

    return (
        <div>
            <div className='chart'>
                <ResponsiveContainer width="100%" height="80%">
                    <LineChart data={data} margin={{ bottom: 15, left: 7, top: 40 }}>
                        <CartesianGrid strokeDasharray="3 3" />
                        <XAxis dataKey="m_ur" type='number' >
                            <Label value="Mᵤᵣ (in kNm)" offset={0} position="bottom" style={{ fontWeight: 'bold' }} />
                        </XAxis>
                        <YAxis label={{ value: 'Pᵤᵣ (in kN)', position: 'top', offset: 20, fontWeight: 'bold' }} />
                        <Tooltip content={<CustomTooltip />} />

                        <Line type="monotone" dataKey="p_ur" stroke="#82ca9d" activeDot={{ r: 8 }} />
                    </LineChart>
                </ResponsiveContainer>
                <h4>Fig: Interaction Diagram</h4>

            </div>
            <p>Aₛₜ provided = {(Asc * 100 / (B * D)).toFixed(2)} %</p>
            <p>Mᵤₓ₁ = {Mux1.toFixed(2)} kNm</p>
            <p>Mᵤᵧ₁ = {Muy1.toFixed(2)} kNm</p>
            <p>α = {alpha}</p>
            <p style={{ color: 'royalblue', fontWeight: 'bold' }}>Demand-capacity ratio = {dc_ratio.toFixed(3)}</p>
        </div>
    )

}

export default GetInteraction


// Define the bisection method
function bisection(a, b, tol) {
    let [P_ur_a] = Calculation(a);
    let fa = P_ur_a;


    let c = (a + b) / 2;
    let [P_ur_c] = Calculation(c);
    let fc = P_ur_c;

    while (Math.abs(fc) > tol) {
        if (fa * fc < 0) {
            b = c;

        } else {
            a = c;
            fa = fc;
        }
        c = (a + b) / 2;
        [P_ur_c] = Calculation(c);
        fc = P_ur_c;
    }
    return c;
}

const CustomTooltip = ({ active, payload, label }) => {
    if (active && payload && payload.length) {
        return (
            <div style={{ color: 'green' }}>
                <p style={{ marginBottom: '5px' }}>({`${label} kNm, ${payload[0].value} kN`})</p>
            </div>
        );
    }

    return null;
};



