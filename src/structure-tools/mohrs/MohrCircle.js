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
    const [mtype, setmtype] = useState('stress');   //mtype means mohr circle type
    const [yaxis, setYaxis] = useState(true)
    return (
        <div className='page-container'>
            <Helmet>
                <title>Mohr's circle for stress analysis</title>
                <meta name="description" content="Visualize the transformation of stress using Mohr's circle" />
            </Helmet>
            <h1>Mohr's Circle Interactive Visualization</h1>
            <div className="switch-container">
                <button onClick={() => setmtype('stress')} className={mtype === 'stress' ? 'active' : ''}>Stress</button>
                <button onClick={() => setmtype('moi')} className={mtype === 'moi' ? 'active' : ''}>Moment of Inertia</button>
            </div>

            <p>
                <label title='To type negative number, first type the number and then add - sign before the number'>
                    {mtype === 'stress' ? 'σ' : 'I'}<sub>x</sub> :
                    <input
                        type="number"
                        value={sigmaX}
                        onChange={(e) => setSigmaX(Number(e.target.value))}
                        className='input-number'
                    />

                </label>
            </p>
            <p>
                <label title='To type negative number, first type the number and then add - sign before the number'>
                    {mtype === 'stress' ? 'σ' : 'I'}<sub>y</sub> :
                    <input
                        type="number"
                        value={sigmaY}
                        onChange={(e) => setSigmaY(Number(e.target.value))}
                        className='input-number'
                    />

                </label>
            </p>
            <p>
                <label title='To type negative number, first type the number and then add - sign before the number'>
                    {mtype === 'stress' ? '𝜏' : 'I'}<sub>xy</sub> :
                    <input
                        type="number"

                        value={tauXY}
                        onChange={(e) => setTauXY(Number(e.target.value))}
                        className='input-number'
                    />

                </label>
            </p>
            <p>
                <label>
                    θ  :
                    <input
                        type="range"
                        min="0"
                        max="360"
                        value={thetaDeg}
                        onChange={(e) => setThetaDeg(Number(e.target.value))}
                    />
                    {thetaDeg}°
                </label>
            </p>
            <p className="toggle-y-axis">
                <label>
                    Show rotation of vertical axis:
                    <input
                        type="radio"
                        value="yes"
                        checked={yaxis === true}
                        onChange={() => setYaxis(true)}
                    /> Yes
                    <input
                        type="radio"
                        value="no"
                        checked={yaxis === false}
                        onChange={() => setYaxis(false)}
                    /> No
                </label>
            </p>

            <div className='calc-container' style={{ alignItems: 'center' }}>
                <ElementAxes sigma_x={sigmaX} sigma_y={sigmaY} tau_xy={tauXY} theta_deg={thetaDeg} yaxis={yaxis} />
                <Mohrs sigma_x={sigmaX} sigma_y={sigmaY} tau_xy={tauXY} theta_deg={thetaDeg} mtype={mtype} yaxis={yaxis} />

            </div>
        </div>
    );
};

export default MohrCircle;
