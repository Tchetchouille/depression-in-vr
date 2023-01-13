//Getting all the walls, floor and ceiiling.
//I am not using a cube because I will need to let an opening for a window
let initialScene = document.getElementById('initialScene');
let floor = document.getElementById('floor');
let ceilling = document.getElementById('ceilling');
let leftWall = document.getElementById('leftWall');
let rightWall = document.getElementById('rightWall');
let frontWall = document.getElementById('frontWall');
let backWall = document.getElementById('backWall');
//A variable "room" to cointain all the walls and such
let room = [floor, ceilling, leftWall, rightWall, frontWall, backWall];

//Allows for an easy modification of the room dimensions
let roomDimensions = {x: 4, y: 5, z: 8};
//Position of the player (and chair) relative to the room.
let offset = {x: 1, y: 0, z: -2};

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
room[4].setAttribute("position", {x: offset.x, y: offset.y + roomDimensions.y/2, z: offset.z + roomDimensions.z/2});
room[5].setAttribute("position", {x: offset.x, y: offset.y + roomDimensions.y/2, z: offset.z - roomDimensions.z/2});

//We rotate each plane in such a way that it makes a room.
room[0].setAttribute("rotation", {x: -90, y: 0, z: 0});
room[1].setAttribute("rotation", {x: 90, y: 0, z: 0});
room[2].setAttribute("rotation", {x: 0, y: 90, z: 0});
room[3].setAttribute("rotation", {x: 0, y: -90, z: 0});
room[4].setAttribute("rotation", {x: 0, y: 0, z: 90});
room[5].setAttribute("rotation", {x: 0, y: 0, z: -90});