const dataSurveying = [
    {
        question: "What is the first principle of surveying?",
        optionA: "Working from whole to the part", optionB: "working from part to whole", optionC: "Both a and b", optionD: "None", correct: "a"
    },
    {
        question: "What is the length of Gunther's chain?",
        optionA: "56'", optionB: "66'", optionC: "76'", optionD: "100'", correct: "b"
    },
    {
        question: "What is the length of Engineer's chain?",
        optionA: "56'", optionB: "66'", optionC: "76'", optionD: "100'", correct: "d"
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
const surveyingRandom = Random(dataSurveying)

export { dataSurveying, surveyingRandom }