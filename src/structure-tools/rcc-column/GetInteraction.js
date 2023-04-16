import React, { useContext } from 'react'
import Calculation from './Calculation'
import { calc_area } from './Calculation';
import { RccColumnParams } from './RccColumn';
import { LineChart, Line, XAxis, YAxis, CartesianGrid, Tooltip, Legend, ResponsiveContainer, Label } from 'recharts';

function GetInteraction() {
    const { D, B, pu, mux, muy, fy, fck, nb, nd, dia_d, dia_b, cover } = useContext(RccColumnParams).params
    const Asc = 2 * calc_area(nd, dia_d) + 2 * calc_area(nb - 2, dia_b)
    const P0 = 0.447 * fck * B * D + (0.79 * fy - 0.447 * fck) * Asc

    var data = []
    for (let i = 0.3; i <= 1.31; i = i + 0.04) {
        var [P_ur, M_ur] = Calculation(i)
        data.push({ p_ur: parseFloat((P_ur / 1000).toFixed(2)), m_ur: parseFloat((M_ur / 1000000).toFixed(2)) })
    }
    data.push({ p_ur: parseFloat((P0 / 1000).toFixed(2)), m_ur: 0 })

    data.reverse();


    return (
        <div style={{ display: 'flex', flexDirection: 'column', alignItems: 'center', textAlign: 'center' }}>

            <LineChart width={500} height={350} data={data} margin={{ bottom: 15 }}>
                <CartesianGrid strokeDasharray="3 3" />
                <XAxis dataKey="m_ur" type='number' >
                    <Label value="Mᵤᵣ (in kNm)" offset={0} position="bottom" />
                </XAxis>
                <YAxis label={{ value: 'Pᵤᵣ (in kN)', angle: -90, position: 'insideLeft' }} />
                <Tooltip />

                <Line type="monotone" dataKey="p_ur" stroke="#82ca9d" activeDot={{ r: 8 }} />
            </LineChart>
            <h4>Fig: Interaction Diagram</h4>
        </div>
    )

}

export default GetInteraction
