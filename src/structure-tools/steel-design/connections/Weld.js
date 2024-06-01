import React, { useState } from 'react'
import { Helmet } from 'react-helmet'

import { Link } from 'react-router-dom';

function Weld() {
    const [params, setParams] = useState({ fu: 410, gamma: 1.25, lw: 100, weld_size: 6 });
    const handleChange = (event) => {
        const value = parseFloat(event.target.value)
        const { name } = event.target;
        setParams({ ...params, [name]: value });
    };
    var fy
    switch (params.fu) {
        case 410:
            fy = 250
            break;
        case 440:
            fy = 300
            break;
        case 490:
            fy = 350
            break;
        case 540:
            fy = 410
            break;
        case 590:
            fy = 450
            break;
        default:
            fy = 250
            break;
    }
    const throat = 0.7 * params.weld_size
    const strength = params.lw * throat * params.fu / (1000 * Math.sqrt(3) * params.gamma)

    return (
        <main className='page-container'>
            <Helmet>
                <title>Fillet weld design</title>
                <meta name="description" content="Design a fillet weld based on IS 800 2007 for free" />
            </Helmet>
            <h1>Fillet Weld Strength as per IS 800: 2007</h1>
            <div >
                <img src='/images/tools/fillet-weld.PNG' alt="Fillet weld" style={{ maxWidth: '100%' }} />
            </div>
            <div>
                Ultimate tensile strength, fu =
                <select name="fu" value={params.fu} onChange={handleChange} className="dropdown-input">
                    <option value="410">410</option>
                    <option value="440">440</option>
                    <option value="490">490</option>
                    <option value="540">540</option>
                    <option value="590">590</option>
                </select> MPa
            </div>
            <div className='params3'>

                <label>
                    Yield strength, f<sub>y</sub> :
                    <input type="number" name="fy" value={fy} onChange={handleChange} min="5"
                        step="0.5" disabled className='input-number' /> MPa
                </label>
                <label>
                    Length of weld, L<sub>w</sub> :
                    <input type="number" name="lw" value={params.lw} onChange={handleChange} min="0"
                        step="0.5" className='input-number' /> mm
                </label>

                <label>
                    Partial safety factor,  γ<sub>mw</sub> :
                    <select name="gamma" value={params.gamma} onChange={handleChange} className="dropdown-input">
                        <option value="1.25">1.25 (Shop weld)</option>
                        <option value="1.5">1.5 (Site weld)</option>
                    </select>
                </label>
                <label>
                    Weld size:
                    <input type="number" name="weld_size" value={params.weld_size} onChange={handleChange} min="0"
                        step="0.1" className='input-number' /> mm
                </label>

            </div>
            <h4 style={{ color: 'red' }}>Strength = {strength.toFixed(2)} kN</h4>



            <h4>The End 🙏 <Link to=".." relative='path' className='ext-link ext-link2'>More design tools here</Link></h4>
        </main>
    )
}

export default Weld