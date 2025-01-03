import React, { useState } from 'react';
import { Helmet } from 'react-helmet';
import '../css/ai.css'; // Adjust the path if necessary


const Concrete = () => {


    const [prediction, setPrediction] = useState(null);

    const [params, setParams] = useState({ cem: 320, bfs: 30, flyash: 40, water: 170, sp: 6, ca: 1000, fa: 800, age: 28 });
    const handleChange = (event) => {
        const value = parseFloat(event.target.value)
        const { name } = event.target;
        setParams({ ...params, [name]: value });
    };

    const handlePredict = async () => {
        try {
            const response = await fetch('https://ml-concrete.onrender.com/predict', {
                method: 'POST',
                headers: {
                    'Content-Type': 'application/json',
                },
                body: JSON.stringify({ features: [params.cem, params.bfs, params.flyash, params.water, params.sp, params.ca, params.fa, params.age] }),
            });
            if (!response.ok) {
                throw new Error('Network response was not ok');
            }
            const data = await response.json();
            setPrediction(data);
        } catch (error) {
            console.error('Error fetching the prediction:', error);
            // Optionally, set an error state here to display to the user
        }
    };


    return (
        <main className='page-container'>
            <Helmet>
                <title>Compressive strength</title>
                <meta name="description" content="Predict compressive strength of concrete using advanced machine learning techniques" />
            </Helmet>
            <h2>Predict Compressive Strength of Concrete</h2>
            <div className='params3 prediction-box '>
                <div >
                    <label >
                        Cement:
                        <input type="number" name="cem" value={params.cem} onChange={handleChange} min="0"
                            className='input-number' /> kg/m³
                    </label>
                </div>
                <div >
                    <label >
                        Water:
                        <input type="number" name="water" value={params.water} onChange={handleChange} min="0"
                            className='input-number' /> kg/m³
                    </label>
                </div>
                <div>
                    <label>
                        Coarse aggregate:
                        <input type="number" name="ca" value={params.ca} onChange={handleChange} min="0"
                            className='input-number' /> kg/m³
                    </label>
                </div>
                <div >
                    <label>
                        Fine aggregate:
                        <input type="number" name="fa" value={params.fa} onChange={handleChange} min="0"
                            className='input-number' /> kg/m³
                    </label>
                </div>
                <div >
                    <label>
                        Age:
                        <input type="number" name="age" value={params.age} onChange={handleChange} min="0"
                            className='input-number' /> days
                    </label>
                </div>
                <div >
                    <label>
                        Superplasticizer:
                        <input type="number" name="sp" value={params.sp} onChange={handleChange} min="0"
                            className='input-number' /> kg/m³
                    </label>
                </div>
                <div >
                    <label>
                        Flyash:
                        <input type="number" name="flyash" value={params.flyash} onChange={handleChange} min="0"
                            className='input-number' /> kg/m³
                    </label>
                </div>
                <div >
                    <label>
                        Blast furnace slag:
                        <input type="number" name="bfs" value={params.bfs} onChange={handleChange} min="0"
                            className='input-number' /> kg/m³
                    </label>
                </div>

            </div>

            <button onClick={handlePredict} className='button'>Predict</button>
            {!prediction &&
                <span style={{ fontStyle: 'italic' }}>The initial prediction may take a moment if the server is not already running.</span>
            }
            {prediction && (
                <div className="prediction-box">
                    <p className="prediction-title">Predictions based on various machine learning models</p>
                    <p className="prediction-text">Gradient Boosting: {parseFloat(prediction.gbr).toFixed(2)} MPa</p>
                    <p className="prediction-text">Support vector machine: {parseFloat(prediction.svr).toFixed(2)} MPa</p>
                    <p className="prediction-text">Linear Regression: {parseFloat(prediction.linear).toFixed(2)} MPa</p>
                </div>
            )}
        </main>
    );
};

export default Concrete;
