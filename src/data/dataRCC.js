const dataRCC = [
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

]
//module.exports = dataRCC

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
const rccRandom = Random(dataRCC)

export { dataRCC, rccRandom }
//module.exports = rccRandom