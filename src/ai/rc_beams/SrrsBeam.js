// import React, { useState } from 'react';
// import { Helmet } from 'react-helmet';
// import '../css/ai.css';

// const SrrsBeam = () => {


//     const [prediction, setPrediction] = useState(null);

//     const [params, setParams] = useState({ fck: 30, fy: 500, mu: 200 });
//     const handleChange = (event) => {
//         const value = parseFloat(event.target.value)
//         const { name } = event.target;
//         setParams({ ...params, [name]: value });
//     };

//     const handlePredict = async () => {
//         try {
//             const response = await fetch('http://127.0.0.1:5000/srrs_beam', {
//                 method: 'POST',
//                 headers: {
//                     'Content-Type': 'application/json',
//                 },
//                 body: JSON.stringify({
//                     fck: params.fck,
//                     fy: params.fy,
//                     Mu: params.mu
//                 }),
//             });
//             if (!response.ok) {
//                 throw new Error('Network response was not ok');
//             }
//             const data = await response.json();
//             setPrediction(data.result.predictions);  // only save predictions object
//         } catch (error) {
//             console.error('Error fetching the prediction:', error);
//         }
//     };

//     return (
//         <main className='page-container'>
//             <Helmet>
//                 <title>RC beam</title>
//                 <meta name="description" content="Optimize design of singly reinforced RC beam" />
//             </Helmet>
//             <h2>Optimize design of singly reinforced RC beam</h2>
//             <div className='params3 prediction-box '>
//                 <div >
//                     <label >
//                         f<sub>ck</sub>:
//                         <input type="number" name="fck" value={params.fck} onChange={handleChange} min="0"
//                             className='input-number' /> MPa
//                     </label>
//                 </div>
//                 <div >
//                     <label >
//                         f<sub>y</sub>:
//                         <input type="number" name="fy" value={params.fy} onChange={handleChange} min="0"
//                             className='input-number' /> MPa
//                     </label>
//                 </div>
//                 <div>
//                     <label>
//                         M<sub>u</sub>:
//                         <input type="number" name="mu" value={params.mu} onChange={handleChange} min="0"
//                             className='input-number' /> kNm
//                     </label>
//                 </div>

//             </div>

//             <button onClick={handlePredict} className='button'>Optimize</button>
//             {!prediction &&
//                 <span style={{ fontStyle: 'italic' }}>The initial optimization may take about 50 seconds if the server is not already running.</span>
//             }
//             {prediction && (
//                 <div className="prediction-box">
//                     <p className="prediction-title">Predictions based on various machine learning models</p>
//                     <p className="prediction-text">
//                         Artificial neural network:
//                         <br />
//                         b = {prediction.mlp_pipeline.b} mm, d = {prediction.mlp_pipeline.d} mm, Ast = {prediction.mlp_pipeline.Ast} mm²
//                     </p>
//                     <hr />
//                     <p className="prediction-text">
//                         Gradient boosting:
//                         <br />
//                         b = {prediction.gb_pipeline.b} mm, d = {prediction.gb_pipeline.d} mm, Ast = {prediction.gb_pipeline.Ast} mm²
//                     </p>
//                     <hr />
//                     <p className="prediction-text">
//                         K-Nearest Neighbor:
//                         <br />
//                         b = {prediction.best_knn.b} mm, d = {prediction.best_knn.d} mm, Ast = {prediction.best_knn.Ast} mm²
//                     </p>
//                 </div>
//             )}

//         </main>
//     );
// };

// export default SrrsBeam;


// // --- Design validation functions ---
// const getXul = (d, fy) => {
//     const Es = 2e5;
//     return Math.round((0.0035 * d) / (0.0055 + 0.87 * fy / Es) * 100) / 100;
// };

// const calculateMomentCapacity = (b, d, Ast, fck, fy) => {
//     const xu = (0.87 * fy * Ast) / (0.36 * fck * b);
//     const MOR = 0.87 * fy * Ast * (d - 0.416 * xu) / 1e6;
//     const xul = getXul(d, fy);
//     const Mul = 0.36 * fck * b * xul * (d - 0.416 * xul) / 1e6;
//     return { MOR: Math.round(MOR * 1000) / 1000, Mul: Math.round(Mul * 1000) / 1000 };
// };

// const AstLimits = (b, d, fy) => {
//     const Ast_min = 0.85 * b * d / fy;
//     const Ast_max = 0.04 * b * d;
//     return { Ast_min: Math.round(Ast_min * 100) / 100, Ast_max: Math.round(Ast_max * 100) / 100 };
// };

// const bdRatio = (b, d) => b / d;

// const isValidDesign = (b, d, Ast, fck, fy, Mu) => {
//     const { Ast_min, Ast_max } = AstLimits(b, d, fy);
//     if (Ast < Ast_min || Ast > Ast_max) return false;
//     if (bdRatio(b, d) < 0.3) return false;
//     const { MOR, Mul } = calculateMomentCapacity(b, d, Ast, fck, fy);
//     if (Mu > MOR || MOR > Mul) return false;
//     return true;
// };

import React, { useState } from 'react';
import { Helmet } from 'react-helmet';
import '../css/ai.css'; // Adjust the path if necessary

const SrrsBeam = () => {

    const [prediction, setPrediction] = useState(null);

    const [params, setParams] = useState({ fck: 30, fy: 500, mu: 200 });

    const handleChange = (event) => {
        const value = parseFloat(event.target.value);
        const { name } = event.target;
        setParams({ ...params, [name]: value });
    };

    // --- Design validation functions ---
    const getXul = (d, fy) => {
        const Es = 2e5;
        return Math.round((0.0035 * d) / (0.0055 + 0.87 * fy / Es) * 100) / 100;
    };

    const calculateMomentCapacity = (b, d, Ast, fck, fy) => {
        const xu = (0.87 * fy * Ast) / (0.36 * fck * b);
        const MOR = 0.87 * fy * Ast * (d - 0.416 * xu) / 1e6;
        const xul = getXul(d, fy);
        const Mul = 0.36 * fck * b * xul * (d - 0.416 * xul) / 1e6;
        return { MOR: Math.round(MOR * 1000) / 1000, Mul: Math.round(Mul * 1000) / 1000 };
    };

    const AstLimits = (b, d, fy) => {
        const Ast_min = 0.85 * b * d / fy;
        const Ast_max = 0.04 * b * d;
        return { Ast_min: Math.round(Ast_min * 100) / 100, Ast_max: Math.round(Ast_max * 100) / 100 };
    };

    const bdRatio = (b, d) => b / d;

    const isValidDesign = (b, d, Ast, fck, fy, Mu) => {
        const { Ast_min, Ast_max } = AstLimits(b, d, fy);
        if (Ast < Ast_min || Ast > Ast_max) return false;
        if (bdRatio(b, d) < 0.3) return false;
        const { MOR, Mul } = calculateMomentCapacity(b, d, Ast, fck, fy);
        if (Mu > MOR || MOR > Mul) return false;
        return true;
    };

    // --- API call ---
    const handlePredict = async () => {
        try {
            const response = await fetch('https://rcc-optimization.onrender.com/srrs_beam', {
                method: 'POST',
                headers: { 'Content-Type': 'application/json' },
                body: JSON.stringify({ fck: params.fck, fy: params.fy, Mu: params.mu }),
            });

            if (!response.ok) throw new Error('Network response was not ok');

            const data = await response.json();
            const preds = data.result.predictions;

            // Add validity check for each model
            const predsWithValidity = {};
            Object.entries(preds).forEach(([modelName, val]) => {
                predsWithValidity[modelName] = {
                    ...val,
                    isValid: isValidDesign(val.b, val.d, val.Ast, params.fck, params.fy, params.mu)
                };
            });

            setPrediction(predsWithValidity);
        } catch (error) {
            console.error('Error fetching the prediction:', error);
        }
    };

    return (
        <main className='page-container'>
            <Helmet>
                <title>RC beam</title>
                <meta name="description" content="Optimize design of singly reinforced RC beam" />
            </Helmet>

            <h2>Optimize design of singly reinforced RC beam</h2>

            <div className='params3 prediction-box'>
                <div>
                    <label>
                        f<sub>ck</sub>:
                        <input type="number" name="fck" value={params.fck} onChange={handleChange} min="0"
                            className='input-number' /> MPa
                    </label>
                </div>
                <div>
                    <label>
                        f<sub>y</sub>:
                        <input type="number" name="fy" value={params.fy} onChange={handleChange} min="0"
                            className='input-number' /> MPa
                    </label>
                </div>
                <div>
                    <label>
                        M<sub>u</sub>:
                        <input type="number" name="mu" value={params.mu} onChange={handleChange} min="0"
                            className='input-number' /> kNm
                    </label>
                </div>
            </div>

            <button onClick={handlePredict} className='button'>Optimize</button>

            {!prediction &&
                <span style={{ fontStyle: 'italic' }}>
                    The initial optimization may take about 50 seconds if the server is not already running.
                </span>
            }

            {prediction && (
                <div className="prediction-box">
                    <p>The optimized beam width (b), effective depth (d), & tensile reinforcement (Ast) are: </p>
                    <p className="prediction-text">
                        <strong>Artificial neural network:</strong>
                        <br />
                        b = {prediction.mlp_pipeline.b} mm, d = {prediction.mlp_pipeline.d} mm, Ast = {prediction.mlp_pipeline.Ast} mm²
                        <br />
                        IS 456-2000 Check: {prediction.mlp_pipeline.isValid ? '✅ Satisfied' : '❌ Not satisfied'}
                    </p>
                    <hr />
                    <p className="prediction-text">
                        <strong>Gradient boosting:</strong>
                        <br />
                        b = {prediction.gb_pipeline.b} mm, d = {prediction.gb_pipeline.d} mm, Ast = {prediction.gb_pipeline.Ast} mm²
                        <br />
                        IS 456-2000 Check: {prediction.gb_pipeline.isValid ? '✅ Satisfied' : '❌ Not satisfied'}
                    </p>
                    <hr />
                    <p className="prediction-text">
                        <strong>K-Nearest Neighbor:</strong>
                        <br />
                        b = {prediction.best_knn.b} mm, d = {prediction.best_knn.d} mm, Ast = {prediction.best_knn.Ast} mm²
                        <br />
                        IS 456-2000 Check: {prediction.best_knn.isValid ? '✅ Satisfied' : '❌ Not satisfied'}
                    </p>
                </div>
            )}

        </main>
    );
};

export default SrrsBeam;
