

import React from 'react';

import { ScatterChart, Scatter, XAxis, YAxis, CartesianGrid, Tooltip, } from 'recharts';

const Mohrs = ({ sigma_x, sigma_y, tau_xy, theta_deg, mtype, yaxis }) => {


    const center = (sigma_x + sigma_y) / 2;
    const radius = Math.sqrt(Math.pow((sigma_x - sigma_y) / 2, 2) + Math.pow(tau_xy, 2));
    const theta = (theta_deg * Math.PI) / 180;

    var sigma_x_prime, sigma_y_prime, tau_xy_prime, thetaP, thetaP_deg

    if (mtype === 'stress') {
        sigma_x_prime = center + (sigma_x - sigma_y) / 2 * Math.cos(2 * theta) + tau_xy * Math.sin(2 * theta);
        sigma_y_prime = center - (sigma_x - sigma_y) / 2 * Math.cos(2 * theta) - tau_xy * Math.sin(2 * theta);
        tau_xy_prime = -(sigma_x - sigma_y) / 2 * Math.sin(2 * theta) + tau_xy * Math.cos(2 * theta);

        thetaP = 0.5 * Math.atan(2 * tau_xy / (sigma_x - sigma_y));
        thetaP_deg = (thetaP * 180) / Math.PI;
        if (tau_xy >= 0 && (sigma_x - sigma_y) < 0) {
            thetaP_deg = (90 + thetaP_deg)
        } else if (tau_xy <= 0 && (sigma_x - sigma_y) < 0) {
            thetaP_deg = -(90 - thetaP_deg)
        }

    } else {
        sigma_x_prime = center + (sigma_x - sigma_y) / 2 * Math.cos(2 * theta) - tau_xy * Math.sin(2 * theta);
        sigma_y_prime = center - (sigma_x - sigma_y) / 2 * Math.cos(2 * theta) + tau_xy * Math.sin(2 * theta);
        tau_xy_prime = (sigma_x - sigma_y) / 2 * Math.sin(2 * theta) + tau_xy * Math.cos(2 * theta);

        thetaP = 0.5 * Math.atan(-2 * tau_xy / (sigma_x - sigma_y));
        thetaP_deg = (thetaP * 180) / Math.PI;
        if (tau_xy >= 0 && (sigma_x - sigma_y) < 0) {
            thetaP_deg = -(90 - thetaP_deg)
        } else if (tau_xy <= 0 && (sigma_x - sigma_y) < 0) {
            thetaP_deg = 90 + thetaP_deg
        }
    }


    const circleData = Array.from({ length: 360 }, (_, i) => {
        const angle = (i * Math.PI) / 180;
        return { x: (center + radius * Math.cos(angle)).toFixed(2), y: (radius * Math.sin(angle)).toFixed(2) };
    });
    const sigma_max = (center + radius).toFixed(2)
    const sigma_min = (center - radius).toFixed(2)
    const pointsx = [
        { x: sigma_x.toFixed(2), y: tau_xy.toFixed(2) },
        { x: sigma_x_prime.toFixed(2), y: tau_xy_prime.toFixed(2) },
    ];
    const pointsy = [
        { x: sigma_y.toFixed(2), y: -tau_xy.toFixed(2) },
        { x: sigma_y_prime.toFixed(2), y: -tau_xy_prime.toFixed(2) },
    ];
    const pointmax = [
        { x: sigma_max, y: 0 },
        { x: sigma_min, y: 0 },
    ];

    // Determine Y-axis ticks to include 0

    return (
        <>
            <div>
                <p>   R = {radius.toFixed(2)}  </p>
                <p>   {mtype === 'stress' ? 'σ' : 'I'}<sub>max</sub> = {sigma_max}  </p>
                <p title='Negative sign means clockwise rotation'>θ<sub>p,max</sub> = {thetaP_deg.toFixed(2)}°</p>
                <p>  {mtype === 'stress' ? 'σ' : 'I'}<sub>min</sub> = {sigma_min} </p>
            </div>
            <ScatterChart width={500} height={500} margin={{ bottom: 30, left: 30, top: 30, right: 30 }}>

                <XAxis
                    type="number"
                    dataKey="x"
                    domain={[(center - radius - radius / 2), (center + radius + radius / 2)]}
                    tickFormatter={tick => Math.round(tick)}
                    ticks={[sigma_min, center, sigma_max]}
                    label={{ value: `${mtype === 'stress' ? 'σ' : 'I'}ᵤ`, position: 'bottom', offset: 0, fontWeight: 'bold' }}
                    allowDecimals={false} />

                <YAxis
                    type="number"
                    dataKey="y"
                    domain={[(-radius - radius / 1.8), (radius + radius / 1.8)]}
                    tickFormatter={tick => Math.round(tick)}
                    ticks={[-radius, 0, radius]}
                    label={{ value: `${mtype === 'stress' ? '𝜏' : 'I'}ᵤᵥ`, position: 'top', offset: 20, fontWeight: 'bold' }}
                    allowDecimals={false} />

                <Tooltip content={<CustomTooltip mtype={mtype} />} />

                <Scatter name="Mohr's Circle" data={circleData} fill='#989e49' line />
                <Scatter name="Stress Points" data={pointsx} fill="red" />
                {yaxis && <Scatter name="Stress Points" data={pointsy} fill="blueviolet" />}
                <Scatter name="Max min stress" data={pointmax} fill='blue' shape='triangle' />
                <Scatter name="Center" data={[{ x: center, y: 0 }]} fill="indigo" />
                <CartesianGrid />
            </ScatterChart>
        </>
    );
};

export default Mohrs;

const CustomTooltip = ({ active, payload, mtype }) => {
    if (active && payload && payload.length) {
        return (
            <div style={{ color: 'green' }}>
                <p style={{ marginBottom: '5px' }}>({mtype === 'stress' ? 'σ' : 'I'}<sub>u</sub>={payload[0].value}, {mtype === 'stress' ? '𝜏' : 'I'}<sub>uv</sub>={payload[1].value} )</p>
            </div>
        );
    }

    return null;
};
