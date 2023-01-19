//Allows to normalize gltf. We find the dimensions needed for them to fit in a one meter cube.
AFRAME.registerComponent('resize', {
    schema: {
        //The scale for each dimension
        x: {default: 1},
        y: {default: 1},
        z: {default: 1}
    },
  
    init: function () {
        //We then multiply this by the dimension we want the model to have in the scene as stated in the html file.
        let scale = this.el.getAttribute("scale");
        scale.x *= this.data.x;
        scale.y *= this.data.y;
        scale.z *= this.data.z;
        this.el.setAttribute('scale', scale);
    }
  });