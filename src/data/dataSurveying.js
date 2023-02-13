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
    },
    {
        question: "To avoid large centering error with very short legs, observations are generally made",
        optionA: "To chain pins",
        optionB: "By using optical system for centering the theodolite",
        optionC: "To a target fixed on theodolite tripod on which theodolite may be fitted easily",
        optionD: "All the above",
        correct: "c"
    },
    {
        question: "Different grades are joined together by a",
        optionA: "Compound curve",
        optionB: "Transition curve ",
        optionC: 'Reverse curve',
        optionD: "Vertical curve",
        correct: "d"
    },
    {
        question: "Which of the following methods of theodolite traversing is suitable for locating the details which are far away from transit stations?",
        optionA: "Measuring angle and distance from one transit station",
        optionB: "Measuring angles to the point from at least two stations",
        optionC: "Measuring angle at one station and distance from other",
        optionD: "Measuring distance from two points on traverse line",
        correct: "b"
    },
    {
        question: "The line of collimation method of reduction of levels, does not provide a check on",
        optionA: "Intermediate sights",
        optionB: "Fore sights ",
        optionC: "Back sights",
        optionD: "Reduced levels",
        correct: "a"
    },
    {
        question: "Which of the following methods of contouring is most suitable for a hilly terrain?",
        optionA: "Direct method",
        optionB: "Square method",
        optionC: "Cross-sections method",
        optionD: "Tachometric method",
        correct: "d"
    },
    {
        question: "The chord of a curve less than peg interval, is known as",
        optionA: "Small chord",
        optionB: "Sub-chord",
        optionC: "Normal chord",
        optionD: "Short chord",
        correct: "b"
    },
    {
        question: "The size of a plane table is ",
        optionA: "750 mm × 900 mm ",
        optionB: "600 mm × 750 mm ",
        optionC: "450 mm × 600 mm ",
        optionD: "300 mm × 450 mm ",
        correct: "b"
    },
    {
        question: "If the reduced bearing of a line AB is N60°W and length is 100 m, then the latitude and departure respectively of the line AB will be",
        optionA: "+50m, +86.6 m, ",
        optionB: "+86.6 m, -50 m  ",
        optionC: "+50 m, -86.6 m ",
        optionD: "+70.7 m, -50 m ",
        correct: "c"
    },

]
const Random = (data) => {
    const num = 5;
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