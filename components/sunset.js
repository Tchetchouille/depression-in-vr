//This component allows us to easily link the animations of the different lights
AFRAME.registerComponent('sunset', {  
    init: function () {
        //Duration of the animation in minutes
        let aDuration =   130 * 1000;
        
        if(this.el.id == "sunlight"){
            this.el.setAttribute('animation__intensity', {property: "light.intensity", to: 0.4, dur: aDuration, easing: "linear"});
            this.el.setAttribute('animation__color', {property: "light.color", to: "#f97247", dur: aDuration, easing: "easeInQuad"});
            this.el.parentEl.setAttribute('animation__rotation', {property: "rotation", to: {x: 75, y: -25, z: 0}, dur: aDuration, easing: "linear"});
        }
        else{
            this.el.setAttribute('animation', {property: "light.intensity", to: 0, dur: aDuration, easing: "linear"});
        }
    }
  });