

import React from 'react';
import { ScatterChart, Scatter, XAxis, YAxis, CartesianGrid, Tooltip, Legend } from 'recharts';

const Mohrs = ({ sigma_x, sigma_y, tau_xy, theta_deg }) => {
    const center = (sigma_x + sigma_y) / 2;
    const radius = Math.sqrt(Math.pow((sigma_x - sigma_y) / 2, 2) + Math.pow(tau_xy, 2));
    const theta = (theta_deg * Math.PI) / 180;

    const sigma_x_prime = center + (sigma_x - sigma_y) / 2 * Math.cos(2 * theta) + tau_xy * Math.sin(2 * theta);
    const tau_xy_prime = -(sigma_x - sigma_y) / 2 * Math.sin(2 * theta) + tau_xy * Math.cos(2 * theta);

    const circleData = Array.from({ length: 360 }, (_, i) => {
        const angle = (i * Math.PI) / 180;
        return { x: (center + radius * Math.cos(angle)).toFixed(2), y: (radius * Math.sin(angle)).toFixed(2) };
    });

    const points = [
        { x: sigma_x.toFixed(2), y: tau_xy.toFixed(2) },
        { x: sigma_y.toFixed(2), y: -tau_xy.toFixed(2) },
        { x: sigma_x_prime.toFixed(2), y: tau_xy_prime.toFixed(2) },
    ];

    return (
        <ScatterChart width={400} height={400}>
            <CartesianGrid horizontal={true} vertical={true} />
            <XAxis type="number" dataKey="x" domain={[(center - radius - 10), (center + radius + 10)]} tickFormatter={tick => Math.round(tick)} />
            <YAxis type="number" dataKey="y" domain={[(-radius - 10), (radius + 10)]} tickFormatter={tick => Math.round(tick)} />
            {/* <Tooltip cursor={{ strokeDasharray: '3 3' }} /> */}
            <Tooltip content={<CustomTooltip />} />
            <Legend />
            <Scatter name="Mohr's Circle" data={circleData} fill="#8884d8" line />
            <Scatter name="Stress Points" data={points} fill="red" />
        </ScatterChart>
    );
};

export default Mohrs;


const CustomTooltip = ({ active, payload }) => {
    if (active && payload && payload.length) {
        return (
            <div style={{ color: 'green' }}>
                <p style={{ marginBottom: '5px' }}>(σ<sub>x</sub>={payload[0].value}, 𝜏<sub>xy</sub>={payload[1].value} )</p>
            </div>
        );
    }

    return null;
};