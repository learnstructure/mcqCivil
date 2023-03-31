import React from 'react';
import {
    Chart as ChartJS,
    CategoryScale,
    LinearScale,
    PointElement,
    LineElement,
    Title,
    Tooltip,
    Legend,
} from 'chart.js';
import { Line } from 'react-chartjs-2';

ChartJS.register(
    CategoryScale,
    LinearScale,
    PointElement,
    LineElement,
    Title,
    Tooltip,
    Legend
);
//units in N, mm
const e = 20
const L = 5000
//const P = 50*1000
const P = [];
for (let i = 0; i <= 1000; i += 50) {
    P.push(i);
}
const E = 22360
const I = Math.pow(200, 4) / 12         //300*300

const del = P.map(p => {
    const ang = L * Math.sqrt(1000 * p / (E * I)) / 2
    return e * (1 / Math.cos(ang) - 1)
})

//const xValues = yValues.map((y) => 2 * y);
console.log(del)
console.log(P)
const data = {
    labels: del,
    datasets: [
        {
            label: 'y = x',
            data: P,
            fill: false,
            borderColor: 'red',
            tension: 1, //for generating curve
            /* pointRadius: 0,
            pointHoverRadius: 0, */
        },
    ],
};

const options = {

    scales: {
        x: {
            type: 'linear',
            title: {
                display: true,
                text: 'X-axis label',
            },
        },
        y: {
            title: {
                display: true,
                text: 'Y-axis label',
            },
        },
    },
};

export default function LineChart() {
    return <Line options={options} data={data} />;
}
