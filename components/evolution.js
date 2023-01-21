


let phoneScreen = document.getElementById('phoneScreen');
let phoneScreenData = [
    phoneScreen,
    [0, 10, 30], 
    "textures", 
    "positions"
];

let evolvingElementsFront = [
    phoneScreenData
];


let evolvingElementsRight = [
    "nothing"
];


let laptopScreen = document.getElementById('laptopScreen');
let laptopScreenData = [
    laptopScreen,
    [0, 10, 30], 
    "textures", 
    "positions"
];

let evolvingElementsBack = [
    laptopScreenData
];


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




lookReferences.forEach(function(v1, refIndex){
    
    lookReferences[refIndex].addEventListener('mouseenter', function(){

        evolvingElements[refIndex].forEach(function(v2, elIndex){

            console.log(evolvingElements[refIndex][elIndex]);
            
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