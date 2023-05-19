export function get_section_props(section) {
    var tf, tw
    switch (section) {

        case 'ISMB100':
            tf = 10
            tw = 8
            break;

        default:
            tf = 12
            tw = 7
            break;
    }
    return [tf, tw]
}