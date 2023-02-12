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
    },
    {
        question: "If in a pin-jointed plane frame (m + r) > 2j, then the frame is (where m is number of members, r is reaction components and j is number of joints)",
        optionA: "Stable and statically determinate",
        optionB: "Stable and statically indeterminate",
        optionC: "Unstable and statically determinate",
        optionD: "Unstable and statically indeterminate",
        correct: "b"
    },
    {
        question: "When a uniformly distributed load, longer than the span of the girder, moves from left to right, then the maximum bending moment at mid-section of span occurs when the uniformly distributed load occupies",
        optionA: "Less than the left half span",
        optionB: "Whole of left half span",
        optionC: "More than the left half span",
        optionD: "Whole span",
        correct: "d"
    },
    {
        question: "For stable structures, one of the important properties of flexibility and stiffness matrices is that the elements on the main diagonal must be",
        optionA: "negative",
        optionB: "positive",
        optionC: "zero",
        optionD: "one",
        correct: "b"
    },
    {
        question: "When a load crosses a through type Pratt truss in the direction left to right, the nature of force in any diagonal member in the left half of the span would",
        optionA: "Change from compression to tension",
        optionB: "Change from tension to compression",
        optionC: "Always be compression",
        optionD: "Always be tension",
        correct: "a"
    },
    {
        question: "Which of the following is not a displacement method?",
        optionA: "Equilibrium method",
        optionB: "Column analogy method",
        optionC: "Moment distribution method",
        optionD: "Kani's method",
        correct: "b"
    },
    {
        question: "For a symmetrical two hinged parabolic arch, if one of the supports settles horizontally, then the horizontal thrust",
        optionA: "is increased",
        optionB: "is decreased",
        optionC: "remains unchanged ",
        optionD: "becomes zero ",
        correct: "b"
    },
    {
        question: "The deflection at any point of a plane frame can be obtained by applying a unit load at the joint in",
        optionA: "Vertical direction",
        optionB: "Horizontal direction",
        optionC: "Inclined direction",
        optionD: "The direction in which the deflection is required",
        correct: "d"
    },
    {
        question: "The principle of virtual work can be applied to elastic system by considering the virtual work of",
        optionA: "Internal forces only",
        optionB: "External forces only",
        optionC: "Internal as well as external forces",
        optionD: "Either internal or external forces",
        correct: "c"
    },
    {
        question: "If in a rigid-jointed space frame, (6m + r) < 6j, then the frame is",
        optionA: "Unstable",
        optionB: "Stable and statically determinate",
        optionC: "Stable and statically indeterminate",
        optionD: "None of the above",
        correct: "a"
    },
    {
        question: "The three moments equation is applicable only when",
        optionA: "The beam is prismatic",
        optionB: "There is no settlement of supports",
        optionC: "There is no discontinuity such as hinges within the span",
        optionD: "Both b and c",
        correct: "c"
    },
    {
        question: "Which of the following methods of structural analysis is a displacement method?",
        optionA: "Method of consistent deformation",
        optionB: "Column analogy method ",
        optionC: "Three moment equation ",
        optionD: "Moment distribution method",
        correct: "d"
    },
    {
        question: "The fixed support in a real beam becomes in the conjugate beam a",
        optionA: "Roller support",
        optionB: "Hinged support",
        optionC: "Fixed support",
        optionD: "Free end",
        correct: "d"
    },
    {
        question: "To generate the jth column of the flexibility matrix",
        optionA: "A unit force is applied at coordinate j and the displacements are calculated at all coordinates",
        optionB: "A unit displacement is applied at coordinate j and the forces are calculated at all coordinates",
        optionC: "A unit force is applied at coordinate j and the forces are calculated at all coordinates",
        optionD: "A unit displacement is applied at coordinate j and the displacements are calculated at all coordinates ",
        correct: "a"
    },
    {
        question: "A load W is moving from left to right on a simply supported beam of span L. The maximum bending moment at 0.4L from the left support is",
        optionA: "0.16 WL",
        optionB: "0.20 WL",
        optionC: "0.24 WL",
        optionD: "0.30 WL",
        correct: "c"
    },
    {
        question: "In the displacement method of structural analysis, the basic unknowns are",
        optionA: "Displacements",
        optionB: "Force",
        optionC: "Displacements and forces",
        optionD: "None of the above",
        correct: "a"
    },
    {
        question: "A rigid-jointed plane frame is stable and statically determinate if (Where m is number of members, r is reaction components and j is number of joints)",
        optionA: "(m + r) = 2j",
        optionB: "(m + r) = 3j",
        optionC: "(3m + r) = 3j",
        optionD: "(m + 3r) = 3j",
        correct: "c"
    },
    {
        question: "In moment distribution method, the sum of distribution factors of all the members meeting at any joint is always",
        optionA: "0",
        optionB: "less than 1",
        optionC: "1",
        optionD: "greater than 1",
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