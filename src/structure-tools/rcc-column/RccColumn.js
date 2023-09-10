import React, { useState, createContext } from 'react'
import { Helmet } from 'react-helmet'
import GetInteraction from './GetInteraction';
import { calc_area } from './Calculation';
export const RccColumnParams = createContext()
function RccColumn() {
    const [result, setResult] = useState(null)
    const [params, setParams] = useState({ D: 500, B: 300, l: 1.8, pu: 200, mux: 100, muy: 50, fy: 415, fck: 25, nb: 2, nd: 3, dia_b: 25, dia_d: 25, cover: 60.5 });
    const handleChange = (event) => {
        const value = parseFloat(event.target.value)
        const { name } = event.target;
        setParams({ ...params, [name]: value });
    };
    const handleSubmit = (event) => {
        event.preventDefault();

        setResult(<RccColumnParams.Provider value={{ params }} >
            <GetInteraction />
        </RccColumnParams.Provider>)

    };
    const Ast_percent = 100 * (2 * calc_area(params.nd, params.dia_d) + 2 * calc_area(params.nb - 2, params.dia_b)) / (params.D * params.B)
    return (
        <main className='page-container'>
            <Helmet>
                <title>RCC Column design </title>
                <meta name="description" content="Design RCC Column based on IS 456: 2007 for free" />
            </Helmet>
            <h2>RCC Column Design</h2>
            <div className='calc-container'>
                <form onSubmit={handleSubmit} className='params'>
                    <label className='param-label'>Loadings (factored)</label>
                    <label>
                        P<sub>u</sub> :
                        <input type="number" name="pu" value={params.pu} onChange={handleChange} min="0"
                            step="0.05" className='input-number' /> kN
                    </label>
                    <label>
                        M<sub>ux</sub> :
                        <input type="number" name="mux" value={params.mux} onChange={handleChange} min="0"
                            step="0.05" className='input-number' /> kNm
                    </label>
                    <label>
                        M<sub>uy</sub> :
                        <input type="number" name="muy" value={params.muy} onChange={handleChange} min="0"
                            step="0.05" className='input-number' /> kNm
                    </label>
                    <label className='param-label'>Column Parameters</label>
                    <label>
                        D (Major-x):
                        <input type="number" name="D" value={params.D} onChange={handleChange} min="0.01"
                            step="0.01" className='input-number' /> mm
                    </label>
                    <label>
                        B (Minor-y):
                        <input type="number" name="B" value={params.B} onChange={handleChange} min="0.01"
                            step="0.01" className='input-number' /> mm
                    </label>

                    <label className='param-label'>Design Parameters</label>
                    <label>
                        f<sub>y</sub> :
                        <input type="number" name="fy" value={params.fy} onChange={handleChange} min="5"
                            step="5" className='input-number' /> N/mm²
                    </label>
                    <label>
                        f<sub>ck</sub> :
                        <input type="number" name="fck" value={params.fck} onChange={handleChange} min="1"
                            step="1" className='input-number' /> N/mm²
                    </label>
                    <label className='param-label'>Rebar Parameters</label>
                    <label>
                        Effective Cover :
                        <input type="number" name="cover" value={params.cover} onChange={handleChange} min="10"
                            step="0.5" className='input-number' /> mm
                    </label>
                    <img src='/images/column.PNG' alt="column design" style={{ maxWidth: '100%' }} />
                    <label>
                        Bars along x - No:
                        <input type="number" name="nd" value={params.nd} onChange={handleChange} min="2"
                            step="1" className='input-number' /> &
                        Dia:
                        <input type="number" name="dia_d" value={params.dia_d} onChange={handleChange} min="2"
                            step="1" className='input-number' /> mm
                    </label>

                    <label>
                        Bars along y - No:
                        <input type="number" name="nb" value={params.nb} onChange={handleChange} min="2"
                            step="1" className='input-number' /> &
                        Dia:
                        <input type="number" name="dia_b" value={params.dia_b} onChange={handleChange} min="2"
                            step="1" className='input-number' /> mm
                    </label>
                    <label>
                        A<sub>st</sub>= {Ast_percent.toFixed(2)} %
                    </label>
                    <button type="submit">Design column</button>
                </form>
            </div>
            <h3>Results</h3>
            <div className='calc-container'>
                {result}
            </div>

        </main>
    )
}

export default RccColumn