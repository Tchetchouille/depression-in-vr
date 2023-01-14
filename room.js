let scene = document.getElementById('scene');

//Allows for an easy modification of the room dimensions
let roomDimensions = {x: 3.6, y: 2.7, z: 5};
//Position of the player (and chair) relative to the room.
let offset = {x: 0, y: 0, z: 0};

//This array will contain the 6 planes needed for a room
let room = [];

for(i=0;i<6;i++){
    room[i] = document.createElement("a-plane");
    console.log(room)
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
room[1].setAttribute("rotation", {x: 90, y: 0, z: 0});
room[2].setAttribute("rotation", {x: 0, y: 90, z: 0});
room[3].setAttribute("rotation", {x: 0, y: -90, z: 0});
room[4].setAttribute("rotation", {x: 0, y: 0, z: 90});
room[5].setAttribute("rotation", {x: 0, y: 180, z: 90});

//Finally we add the planes to the room
for(i=0;i<6;i++){
    scene.appendChild(room[i]);
}