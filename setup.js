
// We set the room size based on the space available irl (min 2m)
let room_width = 4;
let room_length = 4;
let floor_heigth = 50;

// We get the floor from the html file
let floor = document.getElementById("floor");

// We scale and place the floor accordingly to the available space
floor.setAttribute('scale', {x: room_width, y: floor_heigth, z: room_length});
floor.setAttribute('position', {x: 0, y: -floor_heigth/2, z: -floor.getAttribute('scale').z/2});

console.log(floor.getAttribute('scale').y/2);