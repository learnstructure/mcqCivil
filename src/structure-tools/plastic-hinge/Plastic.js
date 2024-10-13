import React, { useState } from 'react';
import { LineChart, Line, XAxis, YAxis, CartesianGrid, Tooltip, Legend } from 'recharts';
import { Slider, Typography } from '@material-ui/core';

const Plastic = () => {
    const [load, setLoad] = useState(0);
    const maxLoad = 100; // Maximum load value

    const handleLoadChange = (event, newValue) => {
        setLoad(newValue);
    };

    // Generate stress data for the diagram
    const stressData = Array.from({ length: 11 }, (_, i) => ({
        depth: i * 10,
        stress: (load * (i * 10)) / 100,
    }));

    return (
        <div>
            <Typography variant="h4">Beam under Point Load</Typography>
            <div style={{ margin: '20px 0' }}>
                <div style={{ position: 'relative', width: '80%', height: '40px', background: 'gray', margin: '0 auto' }}>
                    <div
                        style={{
                            position: 'absolute',
                            left: '50%',
                            top: 0,
                            bottom: 0,
                            width: '2px',
                            background: 'red',
                        }}
                    />
                    <div style={{ position: 'absolute', left: '50%', top: '-10px', width: '2px', height: '10px', background: 'black' }}>
                        {Array.from({ length: load }, (_, i) => (
                            <div
                                key={i}
                                style={{
                                    position: 'absolute',
                                    left: '-2px',
                                    top: `${10 + i * 2}px`,
                                    width: '6px',
                                    height: '2px',
                                    background: 'red',
                                }}
                            />
                        ))}
                    </div>
                </div>
                <Slider
                    value={load}
                    onChange={handleLoadChange}
                    aria-labelledby="continuous-slider"
                    max={maxLoad}
                    style={{ width: '80%', margin: '20px auto' }}
                />
                <Typography>Load: {load} kN</Typography>
            </div>
            <Typography variant="h5">Normal Stress Distribution</Typography>
            <LineChart
                width={600}
                height={300}
                data={stressData}
                margin={{ top: 5, right: 30, left: 20, bottom: 5 }}
            >
                <CartesianGrid strokeDasharray="3 3" />
                <XAxis dataKey="depth" label={{ value: 'Depth (mm)', position: 'insideBottomRight', offset: -5 }} />
                <YAxis label={{ value: 'Stress (MPa)', angle: -90, position: 'insideLeft' }} />
                <Tooltip />
                <Legend />
                <Line type="monotone" dataKey="stress" stroke="#8884d8" />
            </LineChart>
        </div>
    );
};

export default Plastic;
