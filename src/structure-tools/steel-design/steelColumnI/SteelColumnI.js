import React, { useState, createContext } from 'react'
import { Helmet } from 'react-helmet'
import { get_section_props } from './steelModule'

export const RccColumnParams = createContext()
function SteelColumnI() {
    const [result, setResult] = useState(null)
    const [params, setParams] = useState({ D: 500, B: 300, l: 1.8, pu: 200, mux: 100, muy: 50, fy: 415, fck: 25, tf: 0, tw: 0 });
    const [section, setSection] = useState("ISMB100")
    const handleSectionChange = (event) => {
        const value = event.target.value
        setSection(value)
        const [tf, tw] = get_section_props(value)
        setParams({ ...params, tf: tf, tw: tw });
    };
    const handleChange = (event) => {
        const value = parseFloat(event.target.value)
        const { name } = event.target;
        setParams({ ...params, [name]: value });
    };
    const handleSubmit = (event) => {
        event.preventDefault();

        /*  setResult(<RccColumnParams.Provider value={{ params }} >
             <GetInteraction />
         </RccColumnParams.Provider>) */

    };
    return (
        <main className='page-container'>
            <Helmet>
                <title>Steel Column design </title>
                <meta name="description" content="Design Steel Column based on IS 456: 2007 for free" />
            </Helmet>
            <h2>Steel Column Design (I-Section)</h2>
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
                    <label >Choose a section:
                        <select name="section" id="section" onChange={handleSectionChange}>
                            <option value="ISMB100">ISMB100</option>
                            <option value="ISMB150">ISMB150</option>
                            <option value="ISMB200">ISMB200</option>
                            <option value="ISMB250">ISMB250</option>
                            <option value="ISMB300">ISMB300</option>
                            <option value="Other">Other</option>
                        </select>
                    </label>
                    <h3>Option selected is {section}</h3>
                    <h3>tf is {params.tf}</h3>
                    <h3>tw is {params.tw}</h3>
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

                    {/* <img src='/images/column.PNG' alt="column design" style={{ maxWidth: '100%' }} /> */}

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

export default SteelColumnI