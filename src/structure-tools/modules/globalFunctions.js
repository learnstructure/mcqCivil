import { multiInterpolate } from "./interpolate"
export function check(arg) {
    return arg ? " ✅" : " ❌"
}
export function get_tauc_max(fck) {
    if (fck > 40) {
        return 4
    }
    const grade = [15, 20, 25, 30, 35, 40]
    const tauc_max = [2.5, 2.8, 3.1, 3.5, 3.7, 4]
    return multiInterpolate(fck, grade, tauc_max)
}
export function get_tauc(fck, rho) {
    var betta = 0.8 * fck / (6.89 * rho * 100)
    betta = betta < 1 ? 1 : betta
    return (0.85 * Math.sqrt(0.8 * fck) * (Math.sqrt(1 + 5 * betta) - 1) / (6 * betta))
}

export function get_tbd(fck) {
    switch (fck) {
        case 20:
            return 1.2
        case 25:
            return 1.4
        case 30:
            return 1.5
        case 35:
            return 1.7
        default:
            return 1.9
    }
}
export function get_bar_area(dia) {
    return Math.PI * dia * dia / 4
}