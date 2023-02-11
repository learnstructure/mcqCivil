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
    },
    {
        question: "The center of gravity of a triangle lies at the point of",
        optionA: "Intersection of the medians",
        optionB: "Intersection of its altitudes",
        optionC: "Intersection of bisector of angles",
        optionD: "Intersection of diagonals",
        correct: "a"
    },
    {
        question: "The necessary condition for forces to be in equilibrium is that these should be",
        optionA: "Coplanar",
        optionB: "Meet at one point",
        optionC: "Both (A) and (B) above",
        optionD: "All be equal",
        correct: "c"
    },
    {
        question: "In determining stresses in frames by methods of sections, the frame is divided into two parts by an imaginary section drawn in such a way as not to cut more than",
        optionA: "Two members with unknown forces of the frame",
        optionB: "Three members with unknown forces of the frame",
        optionC: "Four members with unknown forces of the frame ",
        optionD: "Three members with known forces of the frame ",
        correct: "b"
    },
    {
        question: "Which of the following do not have identical dimensions",
        optionA: "Momentum and impulse",
        optionB: "Torque and energy",
        optionC: "Torque and work",
        optionD: "Moment of a force and angular momentum",
        correct: "d"
    },
    {
        question: "The maximum twisting moment a shaft can resist, is the product of the permissible shear stress and",
        optionA: "Moment of inertia",
        optionB: "Polar moment of inertia",
        optionC: "Polar modulus",
        optionD: "Modulus of rigidly",
        correct: "c"
    },
    {
        question: "Pick up the correct statement from the following:",
        optionA: "The point through which the resultant of the shear stresses passes is known as shear centre",
        optionB: "In the standard rolled channels, the shear centre is on the horizontal line passing through and away from the C.G. beyond web",
        optionC: "In equal angles, the shear centre is on the horizontal plane and away from the C.G., outside of the leg projection ",
        optionD: "All the above ",
        correct: "d"
    },
    {
        question: "A heavy string attached at two ends at same horizontal level and when central dip is very small approaches the following curve",
        optionA: "Catenary",
        optionB: "Parabola",
        optionC: "Hyperbola",
        optionD: "Elliptical",
        correct: "b"
    },
    {
        question: "A beam is said to be of uniform strength if",
        optionA: "B.M. is same throughout the beam",
        optionB: "Deflection is same throughout the beam",
        optionC: "Bending stress is same throughout the beam",
        optionD: "Shear stress is same throughout the beam",
        correct: "c"
    },
    {
        question: "The under mentioned type is simple strain",
        optionA: "Tensile strain",
        optionB: "Compressive strain",
        optionC: "Shear strain ",
        optionD: "All the above ",
        correct: "d"
    },
    {
        question: "In a solid arch, shear force acts",
        optionA: "Vertically upwards",
        optionB: "Along the axis of the arch",
        optionC: "Perpendicular to the axis of arch",
        optionD: "Tangentially to the arch",
        correct: "c"
    },
    {
        question: "An arch with three hinges, is a structure",
        optionA: "Statically determinate",
        optionB: "Statically indeterminate",
        optionC: "Geometrically unstable",
        optionD: "Structurally sound but indeterminate",
        correct: "a"
    },
    {
        question: "Beams of uniform strength are preferred to those of uniform section because these are economical for",
        optionA: "Large spans",
        optionB: "Heavy weights",
        optionC: "Light weights",
        optionD: "Short spans",
        correct: "a"
    },
    {
        question: "The M.I. of hollow circular section about a central axis perpendicular to section as compared to its M.I. about horizontal axis is",
        optionA: "Same",
        optionB: "Double",
        optionC: "Half",
        optionD: "Four times",
        correct: "b"
    },
    {
        question: "A long vertical member, subjected to an axial compressive load, is called",
        optionA: "A column",
        optionB: "A strut",
        optionC: "A tie",
        optionD: "A stanchion",
        correct: "a"
    },
    /* {
        question: "",
        optionA: "",
        optionB: "",
        optionC: "",
        optionD: "",
        correct: ""
    }, */

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