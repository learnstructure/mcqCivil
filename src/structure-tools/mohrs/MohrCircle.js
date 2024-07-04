// src/App.js

import React, { useState } from 'react';

import Mohrs from './Mohrs';
import ElementAxes from './ElementAxes';
import { Helmet } from 'react-helmet'


const MohrCircle = () => {
    const [sigmaX, setSigmaX] = useState(50);
    const [sigmaY, setSigmaY] = useState(30);
    const [tauXY, setTauXY] = useState(20);
    const [thetaDeg, setThetaDeg] = useState(0);

    return (
        <div className='page-container'>
            <Helmet>
                <title>Mohr's circle for stress analysis</title>
                <meta name="description" content="Visualize the transformation of stress using Mohr's circle" />
            </Helmet>
            <h1>Mohr's Circle Interactive Visualization</h1>
            <p>
                <label>
                    σ<sub>x</sub> :
                    <input
                        type="range"
                        min="-100"
                        max="100"
                        value={sigmaX}
                        onChange={(e) => setSigmaX(Number(e.target.value))}
                    />
                    {sigmaX}
                </label>
            </p>
            <p>
                <label>
                    σ<sub>y</sub> :
                    <input
                        type="range"
                        min="-100"
                        max="100"
                        value={sigmaY}
                        onChange={(e) => setSigmaY(Number(e.target.value))}
                    />
                    {sigmaY}
                </label>
            </p>
            <p>
                <label>
                    𝜏<sub>xy</sub> :
                    <input
                        type="range"
                        min="-100"
                        max="100"
                        value={tauXY}
                        onChange={(e) => setTauXY(Number(e.target.value))}
                    />
                    {tauXY}
                </label>
            </p>
            <p>
                <label>
                    θ (degrees) :
                    <input
                        type="range"
                        min="0"
                        max="360"
                        value={thetaDeg}
                        onChange={(e) => setThetaDeg(Number(e.target.value))}
                    />
                    {thetaDeg}
                </label>
            </p>
            <div style={{ display: 'flex' }}>
                <Mohrs sigma_x={sigmaX} sigma_y={sigmaY} tau_xy={tauXY} theta_deg={thetaDeg} />
                <ElementAxes sigma_x={sigmaX} sigma_y={sigmaY} tau_xy={tauXY} theta_deg={thetaDeg} />
            </div>
        </div>
    );
};

export default MohrCircle;
