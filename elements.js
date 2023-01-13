//CONSTRUCTOR
//The function takes arrays for each parameter. 
//Each array contains the different values that one parameter will take depending on the step.
function El(elValues){
    //This is the number of steps the element will go through during the scene.
    this.totalSteps = elValues[0].length;
    //How important this specific element step is to the story
    this.importance = elValues[0];
    //How much this element step has been looked at
    this.percievedScore = elValues[1];
    //When can this element step start
    this.windowStart = elValues[2];
    //When does this element step have to end
    this.windowEnd = elValues[3];
};

//ELEMENTS
//Example of an element
let elValues = [
    //Importance
    [],
    //percievedScore
    [],
    //windowStart
    [],
    //WindowEnd
    []
];

let laptopValues = [
    [90, 10, 20, 30, 000],
    [00, 00, 00, 00, 000],
    [00, 10, 30, 40, 100],
    [00, 15, 35, 70, 100]
]
