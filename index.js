// We set the room size based on the space available irl (min 2m)
let room_width = 2;
let room_length = 2;

// We get the floor from the html file
let cube = document.getElementById("floor");

// We scale and place the floor accordingly to the available space
cube.setAttribute('scale', {x: room_width, y: 50, z: room_length});
cube.setAttribute('position', {x: 0, y: -cube.getAttribute('scale').y/2, z: -cube.getAttribute('scale').z/2});
