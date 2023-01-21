//Note: An element in the front will be stored in the evolvingElementsBack, as it depends on the back plane for its evolution
//List of evolving elements in the back
let phoneScreen = document.getElementById('phoneScreen');
let phoneScreenData = [
    //element
    phoneScreen,
    //current step
    0,
    //time limits
    [0, 30, 60, 90, 120],
    //textures
    ["#phone1Texture", "phone2Texture", "phone3Texture", "#brokenTexture" ], 
];

let evolvingElementsFront = [
    phoneScreenData
];


//List of evolving elements on the left. Nothing yet
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
    [0, 30, 60, 90, 120, 150],
    //textures
    ["#welcomeTexture", "#note1Texture", "#delaiTexture", "#note2Texture", "#suicideTexture", "#note3texture"],
];

let evolvingElementsBack = [
    laptopScreenData
];


//List of evolving elements on the right. Nothing yet
let evolvingElementsLeft = [
    "nothing"
];

//We group all the elements in one array
let evolvingElements = [
    evolvingElementsFront,
    evolvingElementsRight,
    evolvingElementsBack,
    evolvingElementsLeft
];

//These planes allow us to track where the player is looking without having to use frustum .
//Frustums would be more elegant, precise, and efficient. Alas I didn't have the time to look into it.
let lookFront = document.getElementById('lookFront');
let lookRight = document.getElementById('lookRight');
let lookBack = document.getElementById('lookBack');
let lookLeft = document.getElementById('lookLeft');

//We group the different planes in an array
let lookReferences = [
    lookFront,
    lookRight,
    lookBack,
    lookLeft
];

//How many seconds have passed since the start of the experience.
//I also use it as a way to activate the different sound effects.
let timer = 0;
setInterval(function(){
    timer++;
    console.log(timer);

    switch(timer){
        //Activating the phonecall
        //Exceptionally, the screen texture can change even if looked at
        case 90:
            let phone = document.getElementById(phoneScreen);
            //we play the ringtone
            phone.components.sound.playSound();
            //we change the screen texture
            phone.setAttribute('material', {src: "#callTexture"});
            //When the ringtone ends we change the screen texture again
            setTimeout(function(){
                phone.setAttribute('material', {src: "#missedCallTexture"});
            }, 8000)
            break;

    }

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

                //We change the texture
                evolvingElement.setAttribute('material', {src: texture});

                //We pass to the next step
                step++;

                //And change the variables values accordingly
                timeLimit = evolvingElements[refIndex][elIndex][2][step];
                texture = evolvingElements[refIndex][elIndex][3][step];

                console.log(document.getElementById("phoneScreen").components);
                
            }


        });

    });

});