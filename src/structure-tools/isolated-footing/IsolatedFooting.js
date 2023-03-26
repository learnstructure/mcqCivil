import React, { createContext, useState } from 'react'
import '../css/calculator.css'
import Calculation from './Calculation';
import { Helmet } from 'react-helmet';
export const FootingParams = createContext()

function IsolatedFooting() {
    const [result, setResult] = useState(null)
    const [params, setParams] = useState({ a: 0.3, b: 0.1, l: 1.8, h1: 0.4, h2: 0.15, abc: 100, p: 200, mx: 10, my: 10, fy: 500, fck: 20 });
    const handleChange = (event) => {
        const { name, value } = event.target;
        setParams({ ...params, [name]: value });
    };
    const handleSubmit = (event) => {
        event.preventDefault();
        //console.log("Form values:", params);
        setResult(<FootingParams.Provider value={{ params }} >
            <Calculation />
        </FootingParams.Provider>)

    };
    return (
        <main className='page-container'>
            <Helmet>
                <title>Sloped isolated footing design</title>
                <meta name="description" content="Design sloped isolated footing with moments based on IS 456: 2007 for free" />
            </Helmet>
            <h2>Isolated Footing Design Tool</h2>
            <div className='calc-container'>
                <div >
                    <img src='/images/tools/isolated-footing.PNG' alt="isolated footing design" style={{ maxWidth: '100%' }} />
                </div>

                <form onSubmit={handleSubmit} className='params'>
                    <label className='param-label'>Loadings (unfactored)</label>
                    <label>
                        P :
                        <input type="number" name="p" value={params.p} onChange={handleChange} min="0"
                            step="0.05" className='input-number' /> kN
                    </label>
                    <label>
                        Mₓ :
                        <input type="number" name="mx" value={params.mx} onChange={handleChange} min="0"
                            step="0.05" className='input-number' /> kNm
                    </label>
                    <label>
                        Mᵧ :
                        <input type="number" name="my" value={params.my} onChange={handleChange} min="0"
                            step="0.05" className='input-number' /> kNm
                    </label>
                    <label className='param-label'>Column Parameters</label>
                    <label>
                        a :
                        <input type="number" name="a" value={params.a} onChange={handleChange} min="0.01"
                            step="0.01" className='input-number' /> m
                    </label>
                    <label className='param-label'>Footing Parameters</label>
                    <label>
                        L :
                        <input type="number" name="l" value={params.l} onChange={handleChange} min="0.01"
                            step="0.01" className='input-number' /> m
                    </label>
                    <label>
                        h₁ :
                        <input type="number" name="h1" value={params.h1} onChange={handleChange} min="0.01"
                            step="0.01" className='input-number' /> m
                    </label>
                    <label>
                        h₂ :
                        <input type="number" name="h2" value={params.h2} onChange={handleChange} min="0.01"
                            step="0.01" className='input-number' /> m
                    </label>
                    <label>
                        b :
                        <input type="number" name="b" value={params.b} onChange={handleChange} min="0.01"
                            step="0.01" className='input-number' /> m
                    </label>
                    <label className='param-label'>Soil Parameters</label>
                    <label>
                        ABC :
                        <input type="number" name="abc" value={params.abc} onChange={handleChange} min="0.05"
                            step="0.05" className='input-number' /> kN/m²
                    </label>
                    <label className='param-label'>Design Parameters</label>
                    <label>
                        fᵧ :
                        <input type="number" name="fy" value={params.fy} onChange={handleChange} min="5"
                            step="5" className='input-number' /> N/mm²
                    </label>
                    <label>
                        f꜀ₖ :
                        <input type="number" name="fck" value={params.fck} onChange={handleChange} min="1"
                            step="1" className='input-number' /> N/mm²
                    </label>
                    <button type="submit">Calculate</button>
                </form>

            </div>
            <h3>Results</h3>
            <div className='result-container'>
                {result}
            </div>

        </main>
    )
}

export default IsolatedFooting