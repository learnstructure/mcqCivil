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
    { question: "What is the purpose of engineering drawing?", optionA: "To convey ideas and designs in a standardized language", optionB: "To create a work of art", optionC: "To showcase the artistic abilities of the designer", optionD: "To communicate complex design", correct: "a" },
    { question: "What is the main difference between an isometric drawing and a perspective drawing?", optionA: "An isometric drawing shows all three dimensions equally, while a perspective drawing shows depth and distance", optionB: "An isometric drawing is two-dimensional, while a perspective drawing is three-dimensional", optionC: "An isometric drawing is used for mechanical drawings, while a perspective drawing is used for architectural drawings", optionD: "An isometric drawing is a special of orthographic projection, while a perspective drawing is a type of axonometric projection", correct: "d" },
    { question: "What is the purpose of dimensioning in engineering drawing?", optionA: "To specify the size, location, and orientation of features on an object", optionB: "To create a visual representation of the object", optionC: "To show the material properties of the object", optionD: "To highlight the aesthetic qualities of the object", correct: "a" },
    { question: "What is the purpose of a bill of materials in engineering drawing?", optionA: "To list all the materials needed to manufacture the object", optionB: "To show the manufacturing process step by step", optionC: "To specify the size and shape of the object", optionD: "To show the object in different perspectives", correct: "a" },

    {
        question: "What is the purpose of a title block in engineering drawing?",
        optionA: "To provide essential information about the drawing",
        optionB: "To create a border around the drawing",
        optionC: "To add decorative elements to the drawing",
        optionD: "To indicate the scale of the drawing",
        correct: "a"
    },
    {
        question: "What is the difference between a leader line and a dimension line in engineering drawing?",
        optionA: "A leader line connects an object to a note or label, while a dimension line shows the distance between two points",
        optionB: "A leader line shows the overall shape of an object, while a dimension line shows the details of the object",
        optionC: "A leader line is used for freehand sketching, while a dimension line is used for technical drawing",
        optionD: "A leader line is used for perspective drawing, while a dimension line is used for isometric drawing",
        correct: "a"
    },
    {
        question: "What is a tolerance in engineering drawing?",
        optionA: "The allowable variation in a dimension",
        optionB: "The maximum size of an object",
        optionC: "The minimum size of an object",
        optionD: "The distance between two points",
        correct: "a"
    },
    {
        question: "What is the purpose of a section view in engineering drawing?",
        optionA: "To show the internal features of an object",
        optionB: "To create a three-dimensional image of the object",
        optionC: "To show the object from different angles",
        optionD: "To show the object in motion",
        correct: "a"
    },
    {
        question: "What is the purpose of an exploded view in engineering drawing?",
        optionA: "To show how the parts of an object fit together",
        optionB: "To create a three-dimensional image of the object",
        optionC: "To show the object from different angles",
        optionD: "To show the object in motion",
        correct: "a"
    },
    {
        question: "What is the difference between an elevation view and a plan view in engineering drawing?",
        optionA: "An elevation view shows the front or side of an object, while a plan view shows the top of an object",
        optionB: "An elevation view shows the top of an object, while a plan view shows the front or side of an object",
        optionC: "An elevation view shows the internal features of an object, while a plan view shows the external features of an object",
        optionD: "An elevation view shows the object in motion, while a plan view shows the object at rest",
        correct: "a"
    },

    {
        question: "What is the purpose of an auxiliary view in engineering drawing?",
        optionA: "To show the true shape and size of an inclined surface",
        optionB: "To show the internal features of an object",
        optionC: "To create a three-dimensional image of the object",
        optionD: "To show the object from different angles",
        correct: "a"
    },
    {
        question: "What is the purpose of a revolved section in engineering drawing?",
        optionA: "To show the shape of an object that has a curved or irregular shape",
        optionB: "To show the internal features of an object",
        optionC: "To create a three-dimensional image of the object",
        optionD: "To show the object from different angles",
        correct: "a"
    },
    {
        question: "What is the difference between an isometric view and a perspective view in engineering drawing?",
        optionA: "An isometric view shows the object at an angle of 30 degrees, while a perspective view shows the object at an angle of 45 degrees",
        optionB: "An isometric view shows the object in three dimensions with all three axes at the same scale, while a perspective view shows the object in three dimensions with different scales for each axis",
        optionC: "An isometric view shows the object from a single point of view, while a perspective view shows the object from multiple points of view",
        optionD: "An isometric view shows the object in motion, while a perspective view shows the object at rest",
        correct: "b"
    },
    {
        question: "What is the difference between a sketch and a drawing in engineering?",
        optionA: "A sketch is a quick freehand drawing used to capture an idea, while a drawing is a precise technical representation of an object",
        optionB: "A sketch is a detailed technical representation of an object, while a drawing is a quick freehand drawing used to capture an idea",
        optionC: "A sketch is a three-dimensional representation of an object, while a drawing is a two-dimensional representation of an object",
        optionD: "A sketch is a digital representation of an object, while a drawing is a physical representation of an object",
        correct: "a"
    },
    {
        question: "What is the purpose of a bill of materials (BOM) in engineering drawing?",
        optionA: "To list all the parts and materials needed to manufacture an object",
        optionB: "To show the internal features of an object",
        optionC: "To create a three-dimensional image of the object",
        optionD: "To show the object from different angles",
        correct: "a"
    },
    {
        question: "What is a section line in engineering drawing?",
        optionA: "A line that indicates the cutting plane for a section view",
        optionB: "A line that shows the intersection of two planes",
        optionC: "A line that connects two objects",
        optionD: "A line that shows the center of a symmetrical object",
        correct: "a"
    },
    {
        question: "What is the purpose of a break line in engineering drawing?",
        optionA: "To indicate the center of a symmetrical object",
        optionB: "To shorten an object for clarity or to fit it onto a sheet",
        optionC: "To connect two objects",
        optionD: "To show the outline of an object",
        correct: "b"
    },
    {
        question: "What is the difference between an exploded view and an assembly view in engineering drawing?",
        optionA: "An exploded view shows the individual parts of an object separated from each other, while an assembly view shows the object fully assembled",
        optionB: "An exploded view shows the object fully assembled, while an assembly view shows the individual parts of an object separated from each other",
        optionC: "An exploded view shows the object from multiple points of view, while an assembly view shows the object from a single point of view",
        optionD: "An exploded view shows the object in motion, while an assembly view shows the object at rest",
        correct: "a"
    },
    {
        question: "What is the difference between a detail view and a section view in engineering drawing?",
        optionA: "A detail view shows a small part of an object at a larger scale, while a section view shows the internal features of an object",
        optionB: "A detail view shows the internal features of an object, while a section view shows a small part of an object at a larger scale",
        optionC: "A detail view shows the object in three dimensions, while a section view shows the object in two dimensions",
        optionD: "A detail view shows the object from a single point of view, while a section view shows the object from multiple points of view",
        correct: "a"
    },
    {
        question: "What is the purpose of a datum in engineering drawing?",
        optionA: "To show the internal features of an object ",
        optionB: "To indicate the location of an object",
        optionC: "To provide a reference point for measuring and inspecting an object",
        optionD: "To create a three-dimensional image of the object",
        correct: "c"
    },
    {
        question: "What is the difference between an orthographic projection and an isometric projection in engineering drawing?",
        optionA: "An orthographic projection shows the object from multiple views, while an isometric projection shows the object in three dimensions",
        optionB: "An orthographic projection shows the object in three dimensions, while an isometric projection shows the object from multiple views",
        optionC: "An orthographic projection shows the object from a single point of view, while an isometric projection shows the object from multiple points of view",
        optionD: "An orthographic projection shows the object as if it were cut along a plane, while an isometric projection shows the object as if it were viewed from a distance",
        correct: "a"
    },
    {
        question: "What is the purpose of an arrowhead in engineering drawing?",
        optionA: "To show the direction or extent of a dimension or feature",
        optionB: "To indicate the location of an object",
        optionC: "To specify the acceptable range of variation in a dimension",
        optionD: "To show the external features of an object",
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
const drawingRandom = Random(dataDrawing)

export { dataDrawing, drawingRandom }