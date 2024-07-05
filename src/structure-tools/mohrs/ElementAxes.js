// src/ElementAxes.js

import React from 'react';

const ElementAxes = ({ theta_deg, yaxis }) => {
    const size = 150; // Size of the element
    const halfSize = size / 2;
    theta_deg = - theta_deg
    const theta = (theta_deg * Math.PI) / 180;

    // Calculate rotated axes
    const cosTheta = Math.cos(theta);
    const sinTheta = Math.sin(theta);

    const axisX = { x1: -halfSize * cosTheta, y1: -halfSize * sinTheta, x2: halfSize * cosTheta, y2: halfSize * sinTheta };
    const axisY = { x1: halfSize * sinTheta, y1: -halfSize * cosTheta, x2: -halfSize * sinTheta, y2: halfSize * cosTheta };

    return (

        <svg width={2 * size} height={2 * size} viewBox={`-${size} -${size} ${2 * size} ${2 * size}`}>
            {/* Element */}
            <rect x={-halfSize} y={-halfSize} width={size} height={size} fill="none" stroke="black" />
            {/* Axes */}
            <line x1={-halfSize} y1="0" x2={halfSize} y2="0" stroke="red" />
            <line x1="0" y1={-halfSize} x2="0" y2={halfSize} stroke="blue" />
            {/* Rotated axes */}
            <line x1={axisX.x1} y1={axisX.y1} x2={axisX.x2} y2={axisX.y2} stroke="red" />
            {yaxis && <line x1={axisY.x1} y1={axisY.y1} x2={axisY.x2} y2={axisY.y2} stroke="blue" />}
        </svg>

    );
};

export default ElementAxes;
