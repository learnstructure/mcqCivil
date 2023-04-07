import React, { useContext, useMemo, useState } from 'react'
import { RccColumnParams } from './RccColumn'

import { get_strain, get_fc, get_fs, get_a_xbar } from './myModules'

export default function Calculation() {

    const { D, B, pu, mux, muy, fy, fck, nb, nd, dia_d, dia_b, cover } = useContext(RccColumnParams).params
    const layer_dist = (D - 2 * cover) / (nd - 1)

    const xu = 1.2 * D
    var steelLayer = []
    var Cs = 0, Ms = 0
    for (let i = 1; i <= nd; i++) {
        var Asi
        if (i === 1 || i === parseInt(nd)) {
            Asi = calc_area(nb - 2, dia_b) + calc_area(2, dia_d)
        } else {
            Asi = calc_area(2, dia_d)
        }
        var yi = -0.5 * D + (i - 1) * layer_dist + cover


        var esi = get_strain(xu, D, yi)

        var fsi = get_fs(fy, esi)

        fsi = (D / 2 - xu > yi) ? -fsi : fsi
        var fci = get_fc(fck, esi)
        steelLayer.push({
            id: i, area: Asi,
            yi: yi,
            esi: esi,
            fsi: fsi,
            fci: fci
        })

        Cs += (fsi - fci) * Asi
        Ms += (fsi - fci) * Asi * yi
    }
    var [a, xbar] = get_a_xbar(xu, D)
    const Cc = a * fck * B * D
    const Mc = Cc * (D / 2 - xbar)

    const P_ur = Cs + Cc
    const M_ur = Mc + Ms
    return [P_ur, M_ur]
    /*  return (
         <>
            
             <h4>{P_ur / 1000}</h4>
 
             <h4>{M_ur / 1000000}</h4>
              <div>{steelLayer.map(layer => <p key={layer.id}>{layer.fci}</p>)}</div> 
 
         </>
     ) */
}

function calc_area(no, dia) {
    return no * Math.PI * dia * dia / 4
}

function check(arg) {
    return arg ? " ✅" : " ❌"
}



