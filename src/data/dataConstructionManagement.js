const dataConstructionManagement = [
    {
        question: "In time-cost optimization of a project, crashing is done",
        optionA: "On all the activities",
        optionB: "On all the activities lying on the critical path",
        optionC: "Only on activities lying on the original critical path and having flatter cost slopes",
        optionD: "On original critical activities and those that become critical at any stage of crashing in the order of ascending cost slope",
        correct: "d"
    },
    {
        question: "Which of the following does not represent an activity?",
        optionA: "Site located",
        optionB: "Foundation is being dug",
        optionC: "The office area is being cleaned",
        optionD: "The invitations are being sent ",
        correct: "a"
    },
    {
        question: "In resources levelling",
        optionA: "Total duration of project is reduced",
        optionB: "Total duration of project is increased",
        optionC: "Uniform  demand of resources is achieved",
        optionD: "Cost of project is controlled",
        correct: "c"
    },
    {
        question: "Sensitivity analysis is a study of",
        optionA: "Comparison of profit and loss",
        optionB: "Comparison of assets and liabilities",
        optionC: "Change in output due to change in input",
        optionD: "Economics of cost and benefits of the project",
        correct: "c"
    },
    {
        question: "Preliminary project report for a road project must contain",
        optionA: "The detailed estimated cost based on detailed design",
        optionB: "The several alternatives of the project that have been considered ",
        optionC: "The soil survey, traffic survey, concept design and approximate cost",
        optionD: "The contract documents for inviting tenders",
        correct: "c"
    },
    {
        question: "For which of the following materials, the output of power shovels for a fixed shovel size will be maximum",
        optionA: "Moist loam",
        optionB: "Good common earth",
        optionC: "Well blasted rock ",
        optionD: "Wet sticky clay",
        correct: "a"
    },
    {
        question: "In PERT analysis, the time estimates of activities and probability of their occurrence follow",
        optionA: "Normal distribution curve ",
        optionB: "Poisson's distribution curve",
        optionC: "Beta distribution curve",
        optionD: "None of the above",
        correct: "c"
    },
    {
        question: "Free float is mainly used to",
        optionA: "Identify the activities which can be delayed without affecting the total float of preceding activity",
        optionB: "Identify the activities, which can be delayed without affecting the total float of succeeding activity",
        optionC: "Establish priorities",
        optionD: "Identify the activities which can be delayed without affecting the total float of either the preceding or succeeding activities",
        correct: "b"
    },
    {
        question: "Grader is used mainly for",
        optionA: "Trimming and finishing ",
        optionB: "Shaping and trimming ",
        optionC: "Finishing and shaping",
        optionD: "Finishing, shaping and trimming",
        correct: "d"
    },
    {
        question: "Which of the following surfaces will give highest rolling resistance for a rubber tyred vehicle?",
        optionA: "Concrete",
        optionB: "Loose sand",
        optionC: "Asphalt",
        optionD: "Firm earth",
        correct: "b"
    },
    {
        question: "Which of the following earth moving machines has the shortest cycle time?",
        optionA: "Drag line",
        optionB: "Hoe",
        optionC: "Clamshell",
        optionD: "Dipper shovel",
        correct: "d"
    },
    {
        question: "Updating may result in",
        optionA: "Change of critical path",
        optionB: "Decrease of project completion time ",
        optionC: "Increase of project completion time ",
        optionD: "All of the above",
        correct: "d"
    },
    {
        question: "The time by which a particular activity can be delayed without affecting the preceding and succeeding activities is known as",
        optionA: "Total float",
        optionB: "Free float",
        optionC: "Interfering float ",
        optionD: "Independent float ",
        correct: "d"
    },
    {
        question: "During the construction period, price variation clause in contracts caters to",
        optionA: "Increase in rates of only important materials",
        optionB: "Variation in cost in materials element, labour element and petrol-oil-lubricant element",
        optionC: "Variation in total cost of the project on an 'ad hoc' basis",
        optionD: "Rate of inflation",
        correct: "b"
    },
    {
        question: "Critical path method",
        optionA: "Is an improvement upon bar chart method",
        optionB: "Provides a realistic approach to daily problems",
        optionC: "Avoids delays which are very common in bar charts",
        optionD: "All of the above",
        correct: "d"
    },
    {
        question: "At a work site, statistical quality control of concrete means",
        optionA: "Measurement of risks to eliminate failures",
        optionB: "Applying the theory' of probability to sample testing or inspection",
        optionC: "Reduction in wastage of inspection costs",
        optionD: "Reduction in costs for the removal of defects",
        correct: "b"
    },
    {
        question: "A critical ratio scheduling",
        optionA: "Determines the status of each activity",
        optionB: "Adjusts automatically changes in activity progress",
        optionC: "Is a dynamic system ",
        optionD: "None of these",
        correct: "d"
    },
    {
        question: "For a given activity, the optimistic time, pessimistic time and the most probable estimates are 5, 17 and 8 days respectively. The expected time is",
        optionA: "8 days ",
        optionB: "9 days ",
        optionC: "10 days ",
        optionD: "11 days ",
        correct: "b"
    },
    {
        question: "In the time-cost optimization, using CPM method for network analysis, the crashing of the activities along the critical path is done starting with the activity having",
        optionA: "Longest duration ",
        optionB: "Highest cost slope ",
        optionC: "Least cost slope ",
        optionD: "Shortest duration ",
        correct: "c"
    },
    {
        question: "A golden rule for the procurement of construction stones, suggests",
        optionA: "100% at the site",
        optionB: "67% at the site and 33% under procurement ",
        optionC: "50% at the site and 50% under procurement ",
        optionD: "33% at the site and 67% under procurement ",
        correct: "b"
    },
    /* {
        question: "",
        optionA: "",
        optionB: "",
        optionC: "",
        optionD: "",
        correct: "d"
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
const constructionManagementRandom = Random(dataConstructionManagement)

export { dataConstructionManagement, constructionManagementRandom }