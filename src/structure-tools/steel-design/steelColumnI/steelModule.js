/* export function get_section_props(section) {
    var A, tf, tw, h, bf
    switch (section) {

        case 'ISMB100':
            A = 1140
            h = 100
            bf = 50
            tw = 4.7
            tf = 7
            break;
        case 'ISMB150':
            A = 1910
            h = 150
            bf = 75
            tw = 8
            tf = 8
            break;
        case 'ISMB200':
            A = 3080
            h = 200
            bf = 100
            tw = 4.7
            tf = 7
            break;
        case 'ISMB250':
            A = 1140
            h = 100
            bf = 50
            tw = 5.7
            tf = 10
            break;
        case 'ISMB300':
            A = 5860
            h = 300
            bf = 140
            tw = 7.7
            tf = 13.1
            break;
        case 'ISMB350':
            A = 6670
            h = 350
            bf = 140
            tw = 8.1
            tf = 14.2
            break;

        default:    //for ISMB400
            A = 7840
            h = 400
            bf = 140
            tw = 8.9
            tf = 16
            break;
    }
    return [A, h, bf, tw, tf]
} */

export function get_section_props(section) {
    let props = {};
    switch (section) {
        case 'ISMB100':
            props = {
                A: 1140,
                h: 100,
                bf: 50,
                tw: 4.7,
                tf: 7,
                rz: 40,
                ry: 10.5
            };
            break;
        case 'ISMB150':
            props = {
                A: 1910,
                h: 150,
                bf: 75,
                tw: 8,
                tf: 8,
                rz: 61.3,
                ry: 15.7
            };
            break;
        case 'ISMB200':
            props = {
                A: 3080,
                h: 200,
                bf: 100,
                tw: 4.7,
                tf: 7,
                rz: 82.9,
                ry: 21.2
            };
            break;
        case 'ISMB250':
            props = {
                A: 1140,
                h: 100,
                bf: 50,
                tw: 5.7,
                tf: 10,
                rz: 104,
                ry: 26.5
            };
            break;
        case 'ISMB300':
            props = {
                A: 5860,
                h: 300,
                bf: 140,
                tw: 7.7,
                tf: 13.1,
                rz: 124,
                ry: 28.6
            };
            break;
        case 'ISMB350':
            props = {
                A: 6670,
                h: 350,
                bf: 140,
                tw: 8.1,
                tf: 14.2,
                rz: 143,
                ry: 28.4
            };
            break;
        default: //for ISMB400
            props = {
                A: 7840,
                h: 400,
                bf: 140,
                tw: 8.9,
                tf: 16,
                rz: 162,
                ry: 28.2
            };
            break;
    }
    return props;
}

export function buckling_curve(connection, h, bf, tf) {
    //let z_z, y_y
    if (connection === "rolled") {
        if (h / bf > 1.2) {
            return tf <= 40 ? ['a', 'b'] : ['b', 'c']
        } else {
            return tf <= 100 ? ['b', 'c'] : ['d', 'd']
        }
    } else {
        /* if (tf <= 40) {
            return ['b', 'c']   //for major and minor axis
        } else {
            return ['c', 'd']
        } */
        return tf <= 40 ? ['b', 'c'] : ['c', 'd'] //for major and minor axis
    }

}

function imperfection_factor(buckling_class) {
    switch (buckling_class) {
        case 'a':
            return 0.21
        case 'b':
            return 0.34
        case 'c':
            return 0.49
        default:
            return 0.76
    }
}
export function design_compression(buckling_class, l_eff, A, r, fy, E) {
    const alpha = imperfection_factor(buckling_class)
    const slenderness = l_eff / r
    const fcc = Math.pow(Math.PI, 2) * E / Math.pow(slenderness, 2)
    const lambda = Math.pow(fy / fcc, 0.5)
    const phi = 0.5 * (1 + alpha * (lambda - 0.2) + Math.pow(lambda, 2))
    let fcd = fy / (phi + Math.pow(phi * phi - lambda * lambda, 0.5))
    fcd = fcd > fy ? fy / 1.1 : fcd / 1.1
    console.log(fcd)
    console.log(r)
    return fcd
}