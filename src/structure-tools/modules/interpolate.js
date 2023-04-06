export function multiInterpolate(x, xValues, yValues) {
    var i = 1;
    while (xValues[i] < x) {
        i++;
    }
    var x1 = xValues[i - 1];
    var x2 = xValues[i];
    var y1 = yValues[i - 1];
    var y2 = yValues[i];
    var slope = (y2 - y1) / (x2 - x1);
    var intercept = y1 - slope * x1;
    return slope * x + intercept;
}