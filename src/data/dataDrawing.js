const dataDrawing = [
    {
        question: "The part that doesn’t belong to T-square is",
        optionA: "Working edge",
        optionB: "Blade",
        optionC: "Stock",
        optionD: "Ebony",
        correct: "d"
    },
    {
        question: "The angle which we can’t make using a single Set-square is",
        optionA: "30°",
        optionB: "45°",
        optionC: "60°",
        optionD: "75°",
        correct: "d"
    },
    {
        question: "The angle which we can’t make using both the Set-squares is",
        optionA: "15°",
        optionB: "105°",
        optionC: "125°",
        optionD: "165°",
        correct: "c"
    },
    {
        question: "Which is not the use of divider?",
        optionA: "To divide curved or straight lines into the desired number of equal parts",
        optionB: "To draw circles",
        optionC: "To transfer dimensions from one part of the drawing to another part",
        optionD: "To set-off given distances from the scale to the drawing",
        correct: "b"
    },
    {
        question: "_____ is used to draw curves which are not circular.",
        optionA: "Compass",
        optionB: "Protractor",
        optionC: "French curves",
        optionD: "Pro circle",
        correct: "c"
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
const drawingRandom = Random(dataDrawing)

export { dataDrawing, drawingRandom }