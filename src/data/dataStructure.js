const dataStructure = [
    {
        question: "Principle of superposition is applicable when",
        optionA: "Deflections are linear functions of applied forces",
        optionB: "Material obeys Hooke's law",
        optionC: "The action of applied forces will be affected by small deformations of the structure",
        optionD: "None of the above", correct: "a"
    },
    {
        question: "The Castigliano's second theorem can be used to compute deflections",
        optionA: "In statically determinate structures only",
        optionB: "For any type of structure ",
        optionC: "At the point under the load only",
        optionD: "For beams and frames only", correct: "b"
    },
    {
        question: "Which of the following methods of structural analysis is a force method?",
        optionA: "Slope deflection method ",
        optionB: "Column analogy method ",
        optionC: "Moment distribution method ",
        optionD: "None of the above", correct: "b"
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
const structureRandom = Random(dataStructure)

export { dataStructure, structureRandom }