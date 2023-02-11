const dataBuildingMat = [
    {
        question: "Which of the following has more fire resisting characteristics? ",
        optionA: "Marble",
        optionB: "Limestone",
        optionC: "Compact sandstone",
        optionD: "Granite",
        correct: "c"
    },
    {
        question: "The rocks which are formed due to cooling of magma at a considerable depth from earth's surface are called ",
        optionA: "Plutonic rocks",
        optionB: "Hypabyssal rocks",
        optionC: "Volcanic rocks",
        optionD: "Igneous rocks",
        correct: "a"
    },
    {
        question: "Plywood has the advantage of",
        optionA: "Greater tensile strength in longer direction ",
        optionB: "Greater tensile strength in shorter direction ",
        optionC: "Same tensile strength in all directions",
        optionD: "None of the above",
        correct: "c"
    },
    {
        question: "Due to attack of dry rot, the timber ",
        optionA: "Cracks",
        optionB: "Shrinks",
        optionC: "Reduces to powder",
        optionD: "None of these",
        correct: "c"
    },
    {
        question: "Excess of alumina in brick earth makes the brick",
        optionA: "Impermeable",
        optionB: "Brittle and weak",
        optionC: "to lose cohesion",
        optionD: "To crack and warp on drying",
        correct: "d"
    },
    {
        question: "Pick up the correct statement from the following",
        optionA: "In stone arches, the stones are placed with their natural beds radial",
        optionB: "In cornices, the stones are placed with their natural beds as vertical",
        optionC: "In stone walls, the stones are placed with their natural beds as horizontal",
        optionD: "All of the above",
        correct: "d"
    },
    {
        question: "The constituent of cement which is responsible for all the undesirable properties of cement is",
        optionA: "Di-calcium  silicate",
        optionB: "Tri-calcium  silicate",
        optionC: "Tri-calcium  aluminate",
        optionD: "Tetra calcium alumino ferrite",
        correct: "c"
    },
    {
        question: "Inner part of a timber log surrounding the pith, is called",
        optionA: "Sapwood",
        optionB: "Cambium layer",
        optionC: "Heart wood",
        optionD: "None of above",
        correct: "c"
    },
    {
        question: "For testing compressive and tensile strength of cement, the cement mortar is made by mixing cement and standard sand in the proportions  of",
        optionA: "1 : 2",
        optionB: "1 : 3",
        optionC: "1 : 4",
        optionD: "1 : 6",
        correct: "b"
    },
    {
        question: "If 'P' is the percentage of water required for normal consistency, water to be added for determination of initial setting time, is",
        optionA: "0.70 P",
        optionB: "0.75 P",
        optionC: "0.80 P",
        optionD: "0.85 P",
        correct: "d"
    },
    {
        question: "The basic purpose of a retarder in concrete is",
        optionA: "To increase the initial setting time of cement paste in concrete",
        optionB: "To decrease the initial setting time of cement paste in concrete",
        optionC: "To render the concrete more water tight",
        optionD: "To improve the workability of concrete mix",
        correct: "a"
    },
    {
        question: "Clay and silt content in a good brick earth must be at least",
        optionA: "50 % ",
        optionB: "40 % ",
        optionC: "30 % ",
        optionD: "25 % ",
        correct: "a"
    },
    {
        question: "Which of the following is the purest form of iron?",
        optionA: "Cast iron",
        optionB: "Wrought iron",
        optionC: "Mild steel",
        optionD: "High carbon steel",
        correct: "b"
    },
    {
        question: "If the iron ore contains clay as an impurity, the flux added during calcination, is",
        optionA: "Clay",
        optionB: "Lime stone",
        optionC: "Argillaceous iron ore ",
        optionD: "All the above ",
        correct: "b"
    },
    {
        question: "The stretcher bond in brick masonry can be used only when the thickness of wall is",
        optionA: "90 mm",
        optionB: "180 mm",
        optionC: "190 mm",
        optionD: "280 mm",
        correct: "a"
    },
    {
        question: "The plywood",
        optionA: "Has good strength along the panel only",
        optionB: "Can be spilt in the plane of the panel",
        optionC: "Has greater impact resistance to blows than ordinary wood",
        optionD: "Cannot be bent more easily than ordinary wood of same thickness",
        correct: "c"
    },
    {
        question: "Pick up the correct statement from the following:",
        optionA: "The phenol is carbolic acid",
        optionB: "The phenol is either extracted from coal-tar or prepared from benzene",
        optionC: "Phenol reacts with formaldehyde, to form phenol formaldehyde resin ",
        optionD: "All of the above",
        correct: "d"
    },
    {
        question: "Advantage of a clamp compared to a kiln for burning bricks is that",
        optionA: "It takes less time for burning",
        optionB: "It gives more output of first class bricks",
        optionC: "It has less initial cost",
        optionD: "It is suitable when bricks are required in large numbers",
        correct: "c"
    },
    {
        question: "Pick up the correct statement from the following:",
        optionA: "Solder material is an alloy which melts at a temperature above 400°C",
        optionB: "Brazing is done at temperature above 600°C to 1100°C",
        optionC: "Brazing joint is stronger than the solder joint",
        optionD: "All of the above",
        correct: "d"
    },
    {
        question: "Assertion A : Pure lime takes a long time to develop adequate strength. Reason R : Pure lime has slow hardening characteristics.",
        optionA: "Both A and R is true and R is correct explanation of A",
        optionB: "Both A and R is true and R is not a correct explanation of A ",
        optionC: "A is true but R is false",
        optionD: "A is false but R is true",
        correct: "a"
    },

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
const buildingMatRandom = Random(dataBuildingMat)

export { dataBuildingMat, buildingMatRandom }