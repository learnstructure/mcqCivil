import React from 'react'
import Calculation from './Calculation'

function GetInteraction() {
    var [P_ur, M_ur] = Calculation()
    return (
        <div>{P_ur} & {M_ur}</div>
    )
}

export default GetInteraction