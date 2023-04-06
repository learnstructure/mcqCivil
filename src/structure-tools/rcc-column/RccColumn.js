import React, { useState, createContext } from 'react'
import { Helmet } from 'react-helmet'
import Calculation from './Calculation';
export const RccColumnParams = createContext()
function RccColumn() {
    const [result, setResult] = useState(null)
    const [params, setParams] = useState({ D: 500, B: 300, l: 1.8, pu: 200, mux: 100, muy: 0, fy: 415, fck: 25, nb: 2, nd: 3, dia_b: 25, dia_d: 25, cover: 60.5 });
    const handleChange = (event) => {
        const { name, value } = event.target;
        setParams({ ...params, [name]: value });
    };
    const handleSubmit = (event) => {
        event.preventDefault();
        //console.log("Form values:", params);
        setResult(<RccColumnParams.Provider value={{ params }} >
            <Calculation />
        </RccColumnParams.Provider>)

    };
    return (
        <main className='page-container'>
            <Helmet>
                <title>RCC Column design</title>
                <meta name="description" content="Design RCC Column based on IS 456: 2007 for free" />
            </Helmet>
            <h2>RCC Column Design</h2>
            <div className='calc-container'>
                <form onSubmit={handleSubmit} className='params'>
                    <label className='param-label'>Loadings (factored)</label>
                    <label>
                        Pᵤ :
                        <input type="number" name="pu" value={params.pu} onChange={handleChange} min="0"
                            step="0.05" className='input-number' /> kN
                    </label>
                    <label>
                        Mᵤₓ :
                        <input type="number" name="mux" value={params.mux} onChange={handleChange} min="0"
                            step="0.05" className='input-number' /> kNm
                    </label>
                    <label>
                        Mᵤᵧ :
                        <input type="number" name="muy" value={params.muy} onChange={handleChange} min="0"
                            step="0.05" className='input-number' /> kNm
                    </label>
                    <label className='param-label'>Column Parameters</label>
                    <label>
                        D :
                        <input type="number" name="D" value={params.D} onChange={handleChange} min="0.01"
                            step="0.01" className='input-number' /> mm
                    </label>
                    <label>
                        B :
                        <input type="number" name="B" value={params.B} onChange={handleChange} min="0.01"
                            step="0.01" className='input-number' /> mm
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
                    <label className='param-label'>Rebar Parameters</label>
                    <label>
                        Effective Cover :
                        <input type="number" name="cover" value={params.cover} onChange={handleChange} min="1"
                            step="0.1" className='input-number' /> mm
                    </label>
                    <label>
                        Bars along bending - No:
                        <input type="number" name="nd" value={params.nd} onChange={handleChange} min="2"
                            step="1" className='input-number' />
                        Dia:
                        <input type="number" name="dia_d" value={params.dia_d} onChange={handleChange} min="2"
                            step="1" className='input-number' /> mm
                    </label>
                    <label>
                        Bars across bending - No:
                        <input type="number" name="nb" value={params.nb} onChange={handleChange} min="2"
                            step="1" className='input-number' />
                        Dia:
                        <input type="number" name="dia_b" value={params.dia_b} onChange={handleChange} min="2"
                            step="1" className='input-number' /> mm
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

export default RccColumn