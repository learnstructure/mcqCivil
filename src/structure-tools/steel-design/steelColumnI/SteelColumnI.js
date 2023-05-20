import React, { useState, createContext } from 'react'
import { Helmet } from 'react-helmet'
import { get_section_props, buckling_curve, design_compression } from './steelModule'

export const RccColumnParams = createContext()
function SteelColumnI() {
    const [result, setResult] = useState({ fcd_y: 0, fcd_z: 0 })
    const [params, setParams] = useState({ pu: 200, mux: 100, muy: 50, fy: 250, tf: 16, tw: 8.9, h: 400, bf: 140, A: 7840, kly: 5000, klz: 5000, ry: 28.2, rz: 162, E: 200000 });
    const [section, setSection] = useState({ section: "ISMB400", buckling_z: "a", buckling_y: 'b' })
    const [connection, setConnection] = useState("rolled")
    const [isOtherSelected, setIsOtherSelected] = useState(false);
    const handleSectionChange = (event) => {
        const { name, value } = event.target

        setSection((prevSection) => ({
            ...prevSection,
            [name]: value
        }));

        let section_props
        if (value !== "Other") {
            section_props = get_section_props(value)

            setParams((prevParams) => ({
                ...prevParams,
                ...section_props
            }))
        }
        setIsOtherSelected(value === "Other");
        /* const [buckling_z, buckling_y] = buckling_curve(connection, params.h, params.bf, params.tf)
        setSection({ ...section, buckling_z: buckling_z, buckling_y: buckling_y }) */
        // console.log(section.section)
    };
    const handleConnection = (event) => {
        setConnection(event.target.value)
        const [buckling_z, buckling_y] = buckling_curve(connection, params.h, params.bf, params.tf)
        setSection({ ...section, buckling_z: buckling_z, buckling_y: buckling_y })

    }
    const handleChange = (event) => {
        const value = parseFloat(event.target.value)
        const { name } = event.target;
        setParams({ ...params, [name]: value });

    };
    const handleSubmit = (event) => {
        event.preventDefault();

        /* const Pd_z = design_compression(section.buckling_z, params.klz, params.A, params.rz, params.fy, params.E)
        console.log(Pd_z) */
        setResult({ ...result, fcd_z: design_compression(section.buckling_z, params.klz, params.A, params.rz, params.fy, params.E), fcd_y: design_compression(section.buckling_y, params.kly, params.A, params.ry, params.fy, params.E) })
        //console.log(section.section)

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
                    <label>
                        f<sub>y</sub> :
                        <input type="number" name="fy" value={params.fy} onChange={handleChange} min="5"
                            step="5" className='input-number' /> N/mm²
                    </label>
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
                        <select name="section" id="section" defaultValue="ISMB400" onChange={handleSectionChange} className='dropdown-select'>
                            <option value="ISMB100">ISMB100</option>
                            <option value="ISMB150">ISMB150</option>
                            <option value="ISMB200">ISMB200</option>
                            <option value="ISMB250">ISMB250</option>
                            <option value="ISMB300">ISMB300</option>
                            <option value="ISMB350">ISMB350</option>
                            <option value="ISMB400">ISMB400</option>
                            <option value="Other">Other</option>
                        </select>
                    </label>
                    <p>section is {section.section}</p>
                    <label>
                        h (Overall depth):
                        <input type="number" name="h" value={params.h} onChange={handleChange} min="10"
                            step="5" className='input-number' disabled={!isOtherSelected} /> mm
                    </label>
                    <label>
                        b<sub>f</sub> (Flange width):
                        <input type="number" name="bf" value={params.bf} onChange={handleChange} min="10"
                            step="5" className='input-number' disabled={!isOtherSelected} /> mm
                    </label>
                    <label>
                        t<sub>w</sub> (Web thickness):
                        <input type="number" name="tw" value={params.tw} onChange={handleChange} min="1"
                            step="0.1" className='input-number' disabled={!isOtherSelected} /> mm
                    </label>
                    <label>
                        t<sub>f</sub> (Flange thickness):
                        <input type="number" name="tf" value={params.tf} onChange={handleChange} min="1"
                            step="0.1" className='input-number' disabled={!isOtherSelected} /> mm
                    </label>

                    <label >Cross section elements:
                        <select name="connection" onChange={handleConnection} disabled={!isOtherSelected} className='dropdown-select'>
                            <option value="rolled">Rolled</option>
                            <option value="welded">Welded</option>
                        </select>
                    </label>

                    <label className='param-label'>Effective length Parameters</label>
                    <label>
                        K L<sub>y</sub> (about y-y):
                        <input type="number" name="kly" value={params.kly} onChange={handleChange} min="10"
                            step="10" className='input-number' /> mm
                    </label>
                    <label>
                        K L<sub>z</sub> (about z-z):
                        <input type="number" name="klz" value={params.klz} onChange={handleChange} min="10"
                            step="10" className='input-number' /> mm
                    </label>


                    {/* <img src='/images/column.PNG' alt="column design" style={{ maxWidth: '100%' }} /> */}

                    <button type="submit">Design column</button>
                </form>
            </div>
            <h3>Results</h3>
            <div className='calc-container'>
                <p> f<sub>cd,z</sub> = {result.fcd_z.toFixed(2)} N/mm²</p>
                <p> f<sub>cd,y</sub> = {result.fcd_y.toFixed(2)} N/mm²</p>
            </div>

        </main>
    )
}

export default SteelColumnI