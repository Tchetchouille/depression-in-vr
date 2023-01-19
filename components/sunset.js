//This component allows us to easily link the animations of the different lights
AFRAME.registerComponent('sunset', {  
    init: function () {
        //Duration of the animation in minutes
        let aDuration =   10000;
        
        if(this.el.id == "sunlight"){
            this.el.setAttribute('animation__intensity', {property: "light.intensity", to: 0.6, dur: aDuration, loop: true, easing: "linear", dir: "alternate"});
            this.el.setAttribute('animation__color', {property: "light.color", to: "#f97247", dur: aDuration, loop: true, easing: "easeInQuad", dir: "alternate"});
            this.el.parentEl.setAttribute('animation__rotation', {property: "rotation", to: {x: 60, y: 0, z: 0}, dur: aDuration, loop: true, easing: "linear", dir: "alternate"});
        }
        else{
            this.el.setAttribute('animation', {property: "light.intensity", to: 0, dur: aDuration, loop: true, easing: "linear", dir: "alternate"});
        }
    }
  });