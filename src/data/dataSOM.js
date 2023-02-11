const dataSOM = [
    {
        question: "A number of forces acting at a point will be in equilibrium if ",
        optionA: "Their total sum is zero",
        optionB: "Two resolved parts in two directions at right angles are equal",
        optionC: "Sum of resolved parts in any two perpendicular directions are both zero",
        optionD: "All of them are inclined equally", correct: "c"
    },
    {
        question: "A cable with a uniformly distributed load per horizontal metre run will take the following shape ",
        optionA: "Straight line ", optionB: "Parabola", optionC: "Hyperbola", optionD: "Elliptical", correct: "b"
    },
    {
        question: "If a three hinged parabolic arch carries a uniformly distributed load on its entire span, every section of the arch resists-",
        optionA: "Compressive force", optionB: "Tensile force", optionC: "Shear force", optionD: "Bending moment", correct: "a"
    },
    {
        question: "According to Lami's theorem",
        optionA: "Three forces acting at a point will be in equilibrium",
        optionB: "Three forces acting at a point can be represented by a triangle, each side being proportional to force",
        optionC: "If three forces acting upon a particle are represented in magnitude and direction by the sides of a triangle, taken in order, they will be in equilibrium",
        optionD: "If three forces acting at a point are in equilibrium, each force is proportional to the sine of the angle between the other two",
        correct: "d"
    }

]
const Random = (data) => {
    const num = 2;
    const res = [];
    for (let i = 0; i < num;) {
        const random = Math.floor(Math.random() * data.length);
        if (res.indexOf(data[random]) !== -1) {
            continue;
        };
        res.push(data[random]);
        i++;
    };
    return res;
};
const somRandom = Random(dataSOM)

export { dataSOM, somRandom }