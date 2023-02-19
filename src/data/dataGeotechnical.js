const dataGeotechnical = [
    {
        question: "A plane inclined at an angle φ to the horizontal at which the soil is expected to stay in the absence of any lateral support is known as",
        optionA: "Natural slope line",
        optionB: "Repose line",
        optionC: "The φ line",
        optionD: "All the above",
        correct: "d"
    },
    {
        question: "Rise of water table above the ground surface causes",
        optionA: "Equal increase in pore water pressure and total stress",
        optionB: "Equal decrease in pore water pressure and total stress",
        optionC: "Increase in pore water pressure but decrease in total stress",
        optionD: "Decrease in pore water pressure but increase in total stress",
        correct: "a"
    },
    {
        question: "Terzaghi's theory of 1D consolidation assumes",
        optionA: "Soil is homogeneous and fully saturated",
        optionB: "Water and soil particles are incompressible",
        optionC: "Deformation of the soil is entirely due to change in volume",
        optionD: "All the above",
        correct: "d"
    },
    {
        question: "If the material of the base of the Casagrande liquid limit device on which the cup containing soil paste drops is softer than the standard hard rubber, then",
        optionA: "The liquid limit of soil always increases",
        optionB: "The liquid limit of soil always decreases",
        optionC: "The liquid limit of soil may increase",
        optionD: "The liquid limit of soil may decrease",
        correct: "a"
    },
    {
        question: "A triaxial shear test is preferred to direct shear test because",
        optionA: "It can be performed under all three drainage conditions with complete control",
        optionB: "Precise measurement of pore pressure and change in volume during test is not possible",
        optionC: "Stress distribution on the failure plane is non uniform",
        optionD: "None of these",
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
const geotechnicalRandom = Random(dataGeotechnical)

export { dataGeotechnical, geotechnicalRandom }