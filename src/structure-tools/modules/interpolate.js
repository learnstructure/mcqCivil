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
export function linearInterpolate(x, x0, x1, y0, y1) {
    // Calculate the slope of the line
    const slope = (y1 - y0) / (x1 - x0);
    // Calculate the y-intercept of the line
    const yIntercept = y0 - slope * x0;
    // Calculate the y value at x using the equation of the line
    const y = slope * x + yIntercept;
    // Return the interpolated value
    return y;
}