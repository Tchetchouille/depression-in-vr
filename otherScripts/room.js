//The room is based on a room from the Vortex appartment complex
//The room in question can be seen here : https://www.youtube.com/watch?v=OzmulU_59QY
//I tried not to include peronnal items from the person shooting the video, anly what is part of the Vortex room

let scene = document.getElementById('scene');

// --- DIMENSIONS ---

//I decided to put all the dimensions here for easier access.

//Allows for an easy modification of the room dimensions
let roomDimensions = {x: 3.6, y: 2.7, z: 5};
//Position of the player (and chair) relative to the room.
let offset = {x: 0, y: 0, z: 0};

//Dimensions of the windows frames
let frameDimensions = {x: 0.2, z: 0.1};
let rodsDimensions = {x: roomDimensions.x, y: 0.55, z: 0.55};

//Dimensions of the balcony
let balconyDimensions = {x: roomDimensions + 2, z: 1.5}

// --- WALLS ---

//This array will contain the 6 planes needed for a room
let room = [];

for(i=0;i<6;i++){
    room[i] = document.createElement("a-plane");

    //We want the walls to be able to recieve shadows
    room[i].setAttribute("shadow", {receive: true});
}

//Gives each plane its width
room[0].setAttribute("width", roomDimensions.x);
room[1].setAttribute("width", roomDimensions.x);
room[2].setAttribute("width", roomDimensions.z);
room[3].setAttribute("width", roomDimensions.z);
room[4].setAttribute("width", roomDimensions.y);
room[5].setAttribute("width", roomDimensions.y);
//Gives each plane its height
room[0].setAttribute("height", roomDimensions.z);
room[1].setAttribute("height", roomDimensions.z);
room[2].setAttribute("height", roomDimensions.y);
room[3].setAttribute("height", roomDimensions.y);
room[4].setAttribute("height", roomDimensions.x);
room[5].setAttribute("height", roomDimensions.x);

//We position each plane in such a way that it makes a room.
//The offset allows us to have the player at the origin
room[0].setAttribute("position", {x: offset.x, y: offset.y, z: offset.z});
room[1].setAttribute("position", {x: offset.x, y: offset.y + roomDimensions.y, z: offset.z});
room[2].setAttribute("position", {x: offset.x - roomDimensions.x/2, y: offset.y + roomDimensions.y/2, z: offset.z});
room[3].setAttribute("position", {x: offset.x + roomDimensions.x/2, y: offset.y + roomDimensions.y/2, z: offset.z});
room[4].setAttribute("position", {x: offset.x, y: offset.y + roomDimensions.y/2, z: offset.z - roomDimensions.z/2});
room[5].setAttribute("position", {x: offset.x, y: offset.y + roomDimensions.y/2, z: offset.z + roomDimensions.z/2});

//We rotate each plane in such a way that it makes a room.
room[0].setAttribute("rotation", {x: -90, y: 0, z: 0});
room[1].setAttribute("rotation", {x: 90, y: 180, z: 0});
room[2].setAttribute("rotation", {x: 0, y: 90, z: 0});
room[3].setAttribute("rotation", {x: 0, y: -90, z: 0});
room[4].setAttribute("rotation", {x: 0, y: 0, z: 90});
room[5].setAttribute("rotation", {x: 0, y: 180, z: 90});

//Some of the walls are not painted and so we give them a concrete texture. The floor has a different texture too
room[0].setAttribute("material", { src: "/assets/textures/woodFloor/WoodFloor051_1K_Color.jpg", ambientOcclusionMap: "/assets/textures/woodFloor/WoodFloor051_1K_AmbientOcclusion.jpg", normalMap: "/assets/textures/woodFloor/WoodFloor051_1K_NormalDX.jpg"});
room[1].setAttribute("material", { src: "/assets/textures/concrete/Concrete031_1K_Color.jpg", ambientOcclusionMap: "/assets/textures/concrete/Concrete031_1K_AmbientOcclusion.jpg", normalMap: "/assets/textures/concrete/Concrete031_1K_NormalDX.jpg", repeat: {x: roomDimensions.x/3, y: roomDimensions.z/3}});
room[2].setAttribute("material", { src: "/assets/textures/concrete/Concrete031_1K_Color.jpg", ambientOcclusionMap: "/assets/textures/concrete/Concrete031_1K_AmbientOcclusion.jpg", normalMap: "/assets/textures/concrete/Concrete031_1K_NormalDX.jpg", repeat: {x: roomDimensions.z/3, y: roomDimensions.y/3}});


//Finally we add the planes to the room
//I didn't add the last wall (the windows) for easier light manipulation. I left it in the code however, as I might still use it later.
for(i=0;i<5;i++){
    scene.appendChild(room[i]);
}


// --- WINDOWS ---

//The windows have a frame made of several boxes
let windowFrame = [];

//The backward wall is a special case because of the windows. We make it transparent.
room[5].setAttribute('transparency', true);
room[5].setAttribute('opacity', 0.3);

//The curtains rods are part of a box-like structure 
rods = document.createElement("a-box");
rods.setAttribute('scale', {x: rodsDimensions.x, y: rodsDimensions.y, z: rodsDimensions.z});
rods.setAttribute('position', {x: 0, y: roomDimensions.y - rodsDimensions.y/2, z: roomDimensions.z/2 - rodsDimensions.z/2});
rods.setAttribute('shadow', {cast: true, receive: true});
let rails = document.createElement("a-box");
rails.setAttribute('scale', {x: 1, y: 0.05, z: 0.01});
rails.setAttribute('position', {x: 0, y: -0.5, z: 0});
rails.setAttribute('color', "#444444");
rods.appendChild(rails);

//We create the frames
for(i=0;i<5;i++){
    windowFrame[i] = document.createElement("a-box");
    //Two of the frames are horizontal. Three are vertical. 
    if(i % 2 != 0){
        windowFrame[i].setAttribute('scale', {x: frameDimensions.x, y: roomDimensions.x, z: frameDimensions.z});
        windowFrame[i].setAttribute('rotation', {x: 0, y: 0, z: 90});
    }
    else{
        windowFrame[i].setAttribute('scale', {x: frameDimensions.x, y: roomDimensions.y - frameDimensions.x - rodsDimensions.y, z: frameDimensions.z});
    }
    //We had a texture to the frames
    //Image by jannoon028 on Freepik 
    windowFrame[i].setAttribute('material', {src: "/assets/textures/wooden-board_jannoon028.jpg", repeat: "0.06 0.9"});
    //And the ability to receive shadows
    windowFrame[i].setAttribute('shadow', {cast: true, receive: true});
}

//We position the different frames
windowFrame[1].setAttribute('position', {x: offset.x, y: offset.y, z: offset.z + roomDimensions.z/2});
windowFrame[3].setAttribute('position', {x: offset.x, y: offset.y + roomDimensions.y - rodsDimensions.y, z: offset.z + roomDimensions.z/2});
windowFrame[0].setAttribute('position', {x: offset.x + frameDimensions.x, y: offset.y + roomDimensions.y/2 - rodsDimensions.y/2, z: offset.z + roomDimensions.z/2});
windowFrame[2].setAttribute('position', {x: offset.x - roomDimensions.x/2 + frameDimensions.x/2, y: offset.y + roomDimensions.y/2 - rodsDimensions.y/2, z: offset.z + roomDimensions.z/2});
windowFrame[4].setAttribute('position', {x: offset.x + roomDimensions.x/2 - frameDimensions.x/2, y: offset.y + roomDimensions.y/2 - rodsDimensions.y/2, z: offset.z + roomDimensions.z/2});

//Finally we add the frames and the rods to the room
for(i=0;i<5;i++){
    scene.appendChild(windowFrame[i]);
}
scene.appendChild(rods);