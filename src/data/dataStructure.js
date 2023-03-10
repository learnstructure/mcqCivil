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
        question: "The degree of static indeterminacy of a rigid-jointed space frame is",
        optionA: "(m + 3r) - 3j",
        optionB: "(m + 6r) - 6j",
        optionC: "(3m + r) - 3j",
        optionD: "(6m + r) - 6j",
        correct: "d"
    },
    {
        question: "Degree of kinematic indeterminacy of a pin-jointed plane frame is given by",
        optionA: "2j - r",
        optionB: "j - 2r",
        optionC: "3j - r",
        optionD: "2j + r",
        correct: "a"
    },
    {
        question: "A pin-jointed plane frame is unstable if",
        optionA: "(m + r) < 2j",
        optionB: "(m + r) = 2j",
        optionC: "(m + r) > 2j",
        optionD: "None of the above",
        correct: "a"
    },


    {
        question: "Degree of kinematic indeterminacy of a pin-jointed space frame is given by",
        optionA: "2j - r",
        optionB: "j - 2r",
        optionC: "3j - r",
        optionD: "2j + r",
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
    {
        question: "When a uniformly distributed load, shorter than the span of the girder, moves from left to right, then the conditions for maximum bending moment at a section is that",
        optionA: "The head of the load reaches the section",
        optionB: "The tail of the load reaches the section",
        optionC: "The load position should be such that the section divides it equally on both sides",
        optionD: "The load position should be such that the section divides the load in the same ratio as it divides the span",
        correct: "d"
    },
    {
        question: "Muller Breslau's principle for obtaining influence lines is applicable to",
        optionA: "Statically determinate structures",
        optionB: "Statically indeterminate structures",
        optionC: "Statically determinate and indeterminate structures, material of which is elastic and follows Hooke's law",
        optionD: "Any structure",
        correct: "c"
    },
    {
        question: "The number of independent equations to be satisfied for static equilibrium of a plane structure is",
        optionA: "3",
        optionB: "4",
        optionC: "5",
        optionD: "6",
        correct: "a"
    },
    {
        question: "While using three moments equation, a fixed end of a continuous beam is replaced by an additional span of",
        optionA: "Zero length",
        optionB: "Infinite length",
        optionC: "Zero moment of inertia",
        optionD: "None of the above",
        correct: "a"
    },
    {
        question: "While using three moments equation, a fixed end of a continuous beam is replaced by an additional span of",
        optionA: "Infinite length",
        optionB: "Infinite stiffness",
        optionC: "Zero stiffness",
        optionD: "Both a and b",
        correct: "b"
    },
    {
        question: "Select the correct statement",
        optionA: "Flexibility matrix is a square symmetrical matrix ",
        optionB: "Stiffness matrix is a square symmetrical matrix ",
        optionC: "Both (A) and (B)",
        optionD: "None of the above",
        correct: "c"
    },
    {
        question: "For a single point load w moving on a symmetrical three hinged parabolic arch of span l, the maximum sagging moment occurs at a distance x from ends. The value of x is",
        optionA: "0.11 L",
        optionB: "0.21 L",
        optionC: "0.25 L",
        optionD: "0.31 L",
        correct: "b"
    },
    {
        question: "Select the correct statement",
        optionA: "The displacement method is more useful when degree of kinematic indeterminacy is greater than the degree of static indeterminacy",
        optionB: "The force method is more useful when degree of static indeterminacy is greater than the degree of kinematic indeterminacy.",
        optionC: "The displacement method is more useful when degree of kinematic indeterminacy is less than the degree of static indeterminacy.",
        optionD: "None of the above",
        correct: "c"
    },
    {
        question: "Bending moment at any section in a conjugate beam gives in the actual beam",
        optionA: "Slope",
        optionB: "Curvature",
        optionC: "Deflection",
        optionD: "All of the above",
        correct: "c"
    },
    {
        question: "Shear force at any section in a conjugate beam gives in the actual beam",
        optionA: "Slope",
        optionB: "Curvature",
        optionC: "Deflection",
        optionD: "All of the above",
        correct: "a"
    },
    {
        question: "The number of independent displacement components at each joint of a rigid-jointed space frame is",
        optionA: "1",
        optionB: "2",
        optionC: "3",
        optionD: "6",
        correct: "d"
    },
    {
        question: "Independent displacement components at each joint of a rigid-jointed plane frame are",
        optionA: "Three linear movements",
        optionB: "Two linear movements and one rotation",
        optionC: "One linear movement and two rotations",
        optionD: "Three rotations",
        correct: "b"
    },
    {
        question: "The carryover factor in a prismatic member whose far end is fixed is",
        optionA: "0",
        optionB: "0.5",
        optionC: "0.75",
        optionD: "1",
        correct: "b"
    },
    {
        question: "Effects of shear force and axial force on plastic moment capacity of a structure are respectively to",
        optionA: "Increase and decrease",
        optionB: "Increase and increase",
        optionC: "Decrease and increase",
        optionD: "Decrease and decrease",
        correct: "d"
    },
    {
        question: "The maximum bending moment due to a train of wheel loads on a simply supported girder",
        optionA: "Always occurs at centre of span",
        optionB: "Always occurs under a wheel load",
        optionC: "Always occurs under a leading wheel load",
        optionD: "Always occurs under a trailing wheel load",
        correct: "b"
    },
    {
        question: "When a series of wheel loads crosses a simply supported girder, the maximum bending moment under any given wheel load occurs when",
        optionA: "The centre of gravity of the load system is midway between the centre of span and wheel load under consideration",
        optionB: "The centre of span is midway between the centre of gravity of the load system and the wheel load under consideration",
        optionC: "The wheel load under consideration is midway between the centre of span and the centre of gravity of the load system",
        optionD: "Any of the above",
        correct: "b"
    },
    {
        question: "Sinking of an intermediate support of a continuous beam",
        optionA: "reduces the negative moment at support",
        optionB: "increases the negative moment at support",
        optionC: "reduces the positive moment at support",
        optionD: "increases the positive moment at support",
        correct: "a"
    },
    {
        question: "Castigliano's first theorem is applicable",
        optionA: "For statically determinate structures only",
        optionB: "When the system behaves elastically",
        optionC: "Only when principle of superposition is valid",
        optionD: "For any type of structures",
        correct: "c"
    },
    {
        question: "Number of unknown internal forces in each member of a rigid jointed plane frame is",
        optionA: "1",
        optionB: "2",
        optionC: "3",
        optionD: "6",
        correct: "c"
    },
    {
        question: "The number of independent equations to be satisfied for static equilibrium in a space structure is",
        optionA: "2",
        optionB: "3",
        optionC: "4",
        optionD: "6",
        correct: "d"
    },
    {
        question: "A simply supported beam deflects by 5 mm when it is subjected to a concentrated load of 10 kN at its centre. What will be deflection in a 1/10 model of the beam if the model is subjected to a 1 kN load at its centre?",
        optionA: "5 mm",
        optionB: "0.5 mm",
        optionC: "0.05 mm",
        optionD: "0.005 mm",
        correct: "a"
    },
    {
        question: "Degree of static indeterminacy of a rigid-jointed plane frame having 15 members, 3 reaction components and 14 joints is",
        optionA: "2",
        optionB: "3",
        optionC: "6",
        optionD: "8",
        correct: "c"
    },
    {
        question: "In the slope deflection equations, the deformations are considered to be caused by",
        optionA: "Bending moment",
        optionB: "Shear force",
        optionC: "Axial force",
        optionD: "All of the above",
        correct: "a"
    },
    {
        question: "A single rolling load of 8 kN rolls along a girder of 15 m span. The absolute maximum bending moment will be",
        optionA: "8 kN.m ",
        optionB: "15 kN.m ",
        optionC: "30 kN.m ",
        optionD: "60 kN.m ",
        correct: "c"
    },
    {
        question: "The deformation of a spring produced by unit load is called",
        optionA: "Stiffness",
        optionB: "Flexibility",
        optionC: "Influence coefficient",
        optionD: "Unit strain",
        correct: "b"
    },
    {
        question: "The force required on a spring to produce unit deformation is called",
        optionA: "Stiffness",
        optionB: "Flexibility",
        optionC: "Influence coefficient",
        optionD: "Unit strain",
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


export { dataStructure }