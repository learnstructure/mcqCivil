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
        question: "The rocks which are formed due to cooling of magma at a relatively shallow depth from the earth's surface are",
        optionA: "Plutonic rocks",
        optionB: "Hypabyssal  rocks",
        optionC: "Volcanic rocks ",
        optionD: "Igneous rocks ",
        correct: "b"
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
    {
        question: "During pudding",
        optionA: "Molten metal is kept clear of the fuel",
        optionB: "Carbon is converted into carbonic acid gas",
        optionC: "Silicon forms a slag",
        optionD: "All the above",
        correct: "d"
    },
    {
        question: "Early attainment of strength in rapid hardening cement is mainly due to",
        optionA: "Gypsum",
        optionB: "Finer grinding",
        optionC: "Tri-calcium  silicate",
        optionD: "Tri-calcium aluminate",
        correct: "b"
    },
    {
        question: "Pick up the correct statement from the following:",
        optionA: "Quick lime is obtained by burning pure lime stone",
        optionB: "Hydraulic lime is obtained by burning lime stone containing clay 5% to 30%",
        optionC: "Poor lime is obtained by burning lime stone containing impurities more than 5%",
        optionD: " All the above",
        correct: "d"
    },
    {
        question: "Which of the following cements contains maximum percentage of dicalcium silicate?",
        optionA: "Ordinary  Portland cement",
        optionB: "Low heat cement",
        optionC: "Rapid hardening cement ",
        optionD: "Sulphate resisting cement ",
        correct: "b"
    },
    {
        question: "Pick up the incorrect statement from the following",
        optionA: "Hydraulic lime is generally obtained by burning kankar",
        optionB: "Hydraulic lime sets slowly as compared to fat lime",
        optionC: "Hydraulic lime is generally used in lime mortar",
        optionD: "None of these",
        correct: "d"
    },
    {
        question: "Which of the following stresses is used for identifying the quality of structural steel?",
        optionA: "Ultimate stress",
        optionB: "Yield stress",
        optionC: "Proof stress",
        optionD: "None of the above",
        correct: "b"
    },
    {
        question: "Quick lime",
        optionA: "Generates heat when added to water",
        optionB: "Reacts with carbon dioxide",
        optionC: "May be used for white-washing",
        optionD: "All the above",
        correct: "d"
    },
    {
        question: "Assertion A : Normally turpentine oil is recommended as thinner for indoor painting. Reason R : Turpentine oil is costlier than other thinners. Select your answer according to the coding system given below",
        optionA: "Both A and R is true and R is the correct explanation of A",
        optionB: "Both A and R is true but R is not the correct explanation of A",
        optionC: "A is true but R is false",
        optionD: "A is false but R is true",
        correct: "b"
    },
    {
        question: "Putty is",
        optionA: "Made with finely powdered chalk and linseed oil",
        optionB: "Used for fixing glass panes",
        optionC: "Softened by a solution of pearl ash and quick-lime soaked in water",
        optionD: "All the above",
        correct: "d"
    },
    {
        question: "A mortar joint in masonry which is normal to the face of wall is known as",
        optionA: " Bed joint",
        optionB: "Wall joint ",
        optionC: "Cross joint",
        optionD: "Bonded joint",
        correct: "c"
    },
    {
        question: "A volatile substance added to a paint to make its application easy and smooth is known as",
        optionA: "Base",
        optionB: "Solvent",
        optionC: "Vehicle",
        optionD: "None to these",
        correct: "b"
    },
    {
        question: "Jumper is a tool used for",
        optionA: "Testing of stones",
        optionB: "Quarrying  of stones ",
        optionC: "Dressing of stones ",
        optionD: "None of the above ",
        correct: "b"
    },
    {
        question: "Pick up the volcanic rock from the following:",
        optionA: "Granite",
        optionB: "Dolerite",
        optionC: "Basalt",
        optionD: "All the above",
        correct: "c"
    },
    {
        question: "Sapwood consists of",
        optionA: "Innermost annular rings around the pith",
        optionB: "Portion of timber between heartwood and cambium layer",
        optionC: "Thin layers below the bark",
        optionD: "Thin fibre which extends from the pith outwards and holds the annular rings together",
        correct: "b"
    },
    {
        question: "Strength of cement concrete primarily depends upon",
        optionA: "Quality of water",
        optionB: "Quantity of aggregate ",
        optionC: "Quantity of cement ",
        optionD: "Water-cement ratio ",
        correct: "d"
    },
    {
        question: "The main function of alumina in brick earth is",
        optionA: "To impart plasticity",
        optionB: "To make the brick durable",
        optionC: "To prevent shrinkage",
        optionD: "To make the brick impermeable",
        correct: "a"
    },
    {
        question: "Cast iron",
        optionA: "Is obtained by purifying pig iron",
        optionB: "Is manufactured in required shapes",
        optionC: "May contain 2 to 4 per cent of carbon with other impurities",
        optionD: " All the above",
        correct: "d"
    },
    {
        question: "Which of the following pairs gives a correct combination of the useful and harmful constituents respectively of a good brick earth?",
        optionA: "Lime stone and alumina",
        optionB: "Silica and alkalies",
        optionC: "Alumina and iron",
        optionD: "Alkalies and magnesium",
        correct: "b"
    },
    {
        question: "Pick up the correct statement from the following",
        optionA: "The distinct plane of division along which a stone can easily be split is called natural bed of stone",
        optionB: "The natural bed of sedimentary rocks is along the planes of stratification",
        optionC: "The natural bed of igneous rocks is not defined",
        optionD: "All the above",
        correct: "d"
    },
    {
        question: "Hydraulic lime is obtained by",
        optionA: "Burning of lime stone",
        optionB: "Burning of kankar",
        optionC: "Adding water to quick lime",
        optionD: "Calcination of pure clay",
        correct: "b"
    },
    {
        question: "Oil varnish generally consists of",
        optionA: "Synthetic resin and spirit",
        optionB: "Oil, wax and resin",
        optionC: "Resin, oil and turpentine",
        optionD: "Spirit, oil and wax",
        correct: "c"
    },
    {
        question: "For testing compressive strength of cement, the size of cube used is",
        optionA: "50 mm",
        optionB: "70.6 mm",
        optionC: "75 mm",
        optionD: "100 mm",
        correct: "a"
    },
    {
        question: "When a brick is immersed in water for 24 hours and then dried, if",
        optionA: "No grey or white deposits appear on the surface, the brick is free from soluble salts",
        optionB: "10 percent surface is covered with grey or white deposits, the brick has slight efflorescence ",
        optionC: "50 percent surface is covered with grey or white deposits, the brick has serious efflorescence ",
        optionD: "All the above",
        correct: "d"
    },
    {
        question: "For sanitary pipes and chemical stonewares,",
        optionA: "Salt glazing is used",
        optionB: "Lead glazing is used",
        optionC: "Opaque glazing is used",
        optionD: "None of these",
        correct: "a"
    },
    {
        question: "The most commonly used retarder in cement is",
        optionA: "Gypsum",
        optionB: "Calcium chloride",
        optionC: "Calcium carbonate",
        optionD: "None of the above",
        correct: "a"
    },
    {
        question: "The ratio of the thickness of web to that of flange of steel rolled structural beams and channels is",
        optionA: "Less than 1",
        optionB: "Equal to 1",
        optionC: "Greater than 1",
        optionD: "Less than 1 in beams but greater than 1 in channels",
        correct: "a"
    },
    {
        question: "Non acid-resistant  asbestos  is:",
        optionA: "Tremolite asbestos",
        optionB: "Chrysotile asbestos",
        optionC: "Amosite asbestos",
        optionD: "None of these",
        correct: "b"
    },
    {
        question: "The pressure acting on the stones in stone masonry construction should be",
        optionA: "Along the direction of bedding planes",
        optionB: "At 45° to the direction of bedding planes",
        optionC: "At 60° to the direction of bedding planes",
        optionD: "Perpendicular to the direction of bedding planes",
        correct: "d"
    },
    {
        question: "Pick up the constituent of good brick earth whose excess causes the raw bricks shrink and warp during drying and burning from the following:",
        optionA: "Alumina",
        optionB: "Lime",
        optionC: "Iron-oxide",
        optionD: "Magnesia",
        correct: "a"
    },
    {
        question: "The type of bond provided in brick masonry for carrying heavy loads is",
        optionA: "Single Flemish bond ",
        optionB: "Double Flemish bond ",
        optionC: "English bond",
        optionD: "Zigzag bond",
        correct: "c"
    },
    {
        question: "Blister steel",
        optionA: "Is obtained by cementation process",
        optionB: "Is full of fissures and cavities",
        optionC: "Can be easily welded",
        optionD: "All the above",
        correct: "d"
    },
    {
        question: "Gypsum is a",
        optionA: "Mechanically formed sedimentary rock",
        optionB: "Igneous rock",
        optionC: "Chemically precipitated sedimentary rock",
        optionD: "Metamorphic rock",
        correct: "c"
    },
    {
        question: "Seasoning of timber is done",
        optionA: "To make it water proof",
        optionB: "To paint its surface",
        optionC: "To increase its temperature",
        optionD: "To remove water",
        correct: "d"
    },
    {
        question: "Which of the following is a rock?",
        optionA: "Quartz",
        optionB: "Mica",
        optionC: "Gypsum",
        optionD: "None of the above",
        correct: "c"
    },
    {
        question: "Gypsum consists of",
        optionA: "CaSO₄ and H₂O",
        optionB: "H₂S and CO₂",
        optionC: "Lime and H₂O",
        optionD: "CO₂ and Ca",
        correct: "a"
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
const buildingMatRandom = Random(dataBuildingMat)

export { dataBuildingMat, buildingMatRandom }