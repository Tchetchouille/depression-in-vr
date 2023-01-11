let initialScene = document.getElementById('initialScene');
let floor = document.getElementById('floor');
let ceilling = document.getElementById('ceilling');
let leftWall = document.getElementById('leftWall');
let rightWall = document.getElementById('rightWall');
let frontWall = document.getElementById('frontWall');
let backWall = document.getElementById('backWall');
let room = [floor, ceilling, leftWall, rightWall, frontWall, backWall];

let roomDimensions = {x: 4, y: 6, z: 8};
let offset = 1;

room[0].setAttribute("width", roomDimensions.x);
room[1].setAttribute("width", roomDimensions.x);
room[2].setAttribute("width", roomDimensions.z);
room[3].setAttribute("width", roomDimensions.z);
room[4].setAttribute("width", roomDimensions.x);
room[5].setAttribute("width", roomDimensions.x);

room[0].setAttribute("heigth", roomDimensions.z);
room[1].setAttribute("heigth", roomDimensions.z);
room[2].setAttribute("heigth", roomDimensions.y);
room[3].setAttribute("heigth", roomDimensions.y);
room[4].setAttribute("heigth", roomDimensions.y);
room[5].setAttribute("heigth", roomDimensions.y);

room[0].setAttribute("position", {x: 0, y: 0, z: offset});
room[1].setAttribute("position", {x: 0, y: roomDimensions.y, z: offset});
room[2].setAttribute("position", {x: -roomDimensions.x/2, y: 0, z: offset});
room[3].setAttribute("position", {x: roomDimensions.x/2, y: 0, z: offset});
room[4].setAttribute("position", {x: 0, y: 0, z: roomDimensions.z/2 + offset});
room[5].setAttribute("position", {x: 0, y: 0, z: -roomDimensions.z/2 + offset});

room[0].setAttribute("rotation", {x: -90, y: 0, z: 0});
room[1].setAttribute("rotation", {x: 90, y: 0, z: 0});
room[2].setAttribute("rotation", {x: 0, y: 90, z: 0});
room[3].setAttribute("rotation", {x: 0, y: -90, z: 0});
room[4].setAttribute("rotation", {x: 0, y: 0, z: 90});
room[5].setAttribute("rotation", {x: 0, y: 0, z: -90});


