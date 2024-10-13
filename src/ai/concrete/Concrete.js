import React, { useEffect, useState } from 'react';
import * as tf from '@tensorflow/tfjs';

const Concrete = () => {
    const [model, setModel] = useState(null);
    const [inputData, setInputData] = useState([]);
    const [prediction, setPrediction] = useState(null);

    useEffect(() => {
        const loadModel = async () => {
            try {
                const loadedModel = await tf.loadLayersModel('/model/model.json');
                setModel(loadedModel);
            } catch (error) {
                console.error('Error loading model:', error);
            }
        };
        loadModel();
    }, []);

    const handlePredict = () => {
        if (model) {
            // Convert inputData to Tensor
            const inputTensor = tf.tensor([inputData]);

            // Predict
            const result = model.predict(inputTensor);
            setPrediction(result.dataSync()[0]);  // Assuming a single output
        }
        else {
            console.log('model was not loaded')
        }
    };

    return (
        <div>
            <h1>Predict Concrete Strength</h1>
            <input
                type="text"
                value={inputData}
                onChange={(e) => setInputData(e.target.value.split(',').map(Number))}
                placeholder="Enter input values separated by commas"
            />
            <button onClick={handlePredict}>Predict</button>
            {prediction && <p>Predicted Strength: {prediction}</p>}
        </div>
    );
};

export default Concrete;
