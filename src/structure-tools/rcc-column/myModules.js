import { multiInterpolate } from '../modules/interpolate'
const Es = 2 * Math.pow(10, 5)
const strain415 = [0, 0.00144, 0.00163, 0.00192, 0.00241, 0.00276, 0.00380];
const stress415 = [0, 288.7, 306.7, 324.8, 342.8, 351.8, 360.9];

const strain500 = [0, 0.00174, 0.00195, 0.00226, 0.00277, 0.00312, 0.00417];
const stress500 = [0, 347.8, 369.6, 391.3, 413.0, 423.9, 434.8];

export function get_fs(fy, strain) {
    strain = Math.abs(strain)

    switch (fy) {
        case 250:
            return strain < 0.87 * fy / Es ? Es * strain : 0.87 * fy
        case 415:
            return (strain >= 0.87 * fy / Es + 0.002) ? 0.87 * fy : multiInterpolate(strain, strain415, stress415)
        default:
            return (strain >= 0.87 * fy / Es + 0.002) ? 0.87 * fy : multiInterpolate(strain, strain500, stress500)
    }
}

export function get_fc(fck, strain) {
    if (strain <= 0) {
        return 0
    }
    else if (strain >= 0.002) {
        return 0.447 * fck
    } else {
        return 0.447 * fck * (2 * strain / 0.002 - Math.pow((strain / 0.002), 2))
    }

}

export function get_strain(xu, D, y) {
    if (xu <= D) {
        return 0.0035 * (xu - 0.5 * D + y) / xu
    } else {
        return 0.002 * (1 + (y - D / 14) / (xu - 3 * D / 7))
    }

}

export function get_a_xbar(xu, D) {
    const g = 16 / Math.pow(7 * xu / D - 3, 2)
    var a, xbar
    if (xu <= D) {
        a = 0.362 * xu / D
        xbar = 0.416 * xu
    } else {
        a = 0.447 * (1 - 4 * g / 21)
        xbar = (0.5 - 8 * g / 49) * D / (1 - 4 * g / 21)
    }
    return [a, xbar]
}