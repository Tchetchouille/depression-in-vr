//Note: An element in the front will be stored in the evolvingElementsBack, as it depends on the back plane for its evolution
//List of evolving elements in the back
let phoneScreen = document.getElementById('phoneScreen');
let phoneScreenData = [
    //element
    phoneScreen,
    //current step
    0,
    //time limits
    [2, 10, 30],
    //textures
    ["#concreteTexture", "", ""], 
    //sounds
    ["", "", ""]
];

let evolvingElementsFront = [
    phoneScreenData
];


//List of evolving elements on the left
let evolvingElementsRight = [
    "nothing"
];


//List of evolving elements in the front
let laptopScreen = document.getElementById('laptopScreen');
let laptopScreenData = [
    //element
    laptopScreen,
    //current step
    0,
    //time limits
    [2, 10, 30],
    //textures
    ["#suicideTexture", "", ""],
    //sounds
    ["", "", ""]
];

let evolvingElementsBack = [
    laptopScreenData
];


//List of evolving elements on the right
let evolvingElementsLeft = [
    "nothing"
];


let evolvingElements = [
    evolvingElementsFront,
    evolvingElementsRight,
    evolvingElementsBack,
    evolvingElementsLeft
];


let lookFront = document.getElementById('lookFront');
let lookRight = document.getElementById('lookRight');
let lookBack = document.getElementById('lookBack');
let lookLeft = document.getElementById('lookLeft');

let lookReferences = [
    lookFront,
    lookRight,
    lookBack,
    lookLeft
];

let timer = 0;
setInterval(function(){
    timer++;
}, 1000);



//For each plane
lookReferences.forEach(function(v1, refIndex){
    
    //We add an eventListener that allows us to know if the plane is looked at
    lookReferences[refIndex].addEventListener('mouseenter', function(){

        //For each evolving element dependant on a given plane
        evolvingElements[refIndex].forEach(function(v2, elIndex){

            //The evolving element
            let evolvingElement = evolvingElements[refIndex][elIndex][0];

            //We determine at what step they are depending on how much time has passed
            //They start at 0, and everytime we look at the coresponding plane, if enough time has passed, we go to the next step
            let step = evolvingElements[refIndex][elIndex][1];
            let timeLimit = evolvingElements[refIndex][elIndex][2][step];
            let texture = evolvingElements[refIndex][elIndex][3][step];

            //If we go to the next step, we also apply the coresponding changes
            if(timeLimit <= timer){

                evolvingElement.setAttribute('material', {src: texture, color: "#FEA090"});

                console.log(texture);

                step++;

                timeLimit = evolvingElements[refIndex][elIndex][2][step];
                texture = evolvingElements[refIndex][elIndex][3][step];

                console.log(evolvingElements[refIndex][elIndex][3][step]);
                
            }


        });

    });

});



/*
for(i=0;i<lookReferences.length;i++){


    //i is lost when calling the event. this allows us not to lose its value
    let j = i;

    lookReferences[i].addEventListener('mouseenter', function(){

        for(k=0; k<evolvingElements[j].length;k++){
            
            if(evolvingElements[j][k][1] )


        }


    });
}

*/