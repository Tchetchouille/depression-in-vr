let initialScene = document.getElementById('initialScene');




AFRAME.registerComponent('reflected', {
  init: function () {
    let original = this.el;
    // On fait une copie de l'original
    let reflectedItem = document.getElementById(original.id).cloneNode(false);

    //On différenceie entre l'original et la réflexion avec ces attributs
    reflectedItem.setAttribute('reflexion', {originalId: original.id});
    reflectedItem.removeAttribute('reflected');
    if(this.el.id == "playerHead"){
      reflectedItem.setAttribute('wasd-controls', "");
      reflectedItem.setAttribute('look-controls', "");
      reflectedItem.setAttribute('position', {x: 0, y: 1.6, z: 2});
    }

    document.getElementById('mirrorRef').append(reflectedItem);
  },
});


/*

AFRAME.registerComponent('reflected', {
    schema: {
      // On va essayer de gstocker la position et la rotation absolues. C'est pas gagné :/
      worldPos : { type: 'vec3', default: {x: 0,y: 0,z: 0}},
      worldRot : { type: 'vec3', default: {x: 0,y: 0,z: 0}},
    },
    init: function () {
      let original = this.el;
      // On fait une copie de l'original
      let reflectedItem = document.getElementById(original.id).cloneNode(false);

      //On différenceie entre l'original et la réflexion avec ces attributs
      reflectedItem.setAttribute('reflexion', {originalId: original.id});
      reflectedItem.removeAttribute('reflected');

      //On change la scale pour donner un effet de miroir
      reflectedItem.setAttribute('scale', {x: -1, y: 1, z: 1});
      //On fait une rotation de 180 degré pour que la réflexion soit de face et non de dos
      reflectedItem.setAttribute('rotation', {x: 0, y: 180, z: 0});
      initialScene.append(reflectedItem);
    },
    tick: function(){
      let position = new THREE.Vector3();
      let quaternion = new THREE.Quaternion();
  
      this.el.setAttribute('reflected', {
        worldPos : this.el.object3D.getWorldPosition(position), 
        worldRot : this.el.object3D.getWorldQuaternion(quaternion)
      });
      console.log(this.data.worldPos);
    }
  });

  AFRAME.registerComponent('reflexion',{
    schema: {
      originalId : {type: 'string', default: ''}
    },
    tick: function () {
      let original = document.getElementById(this.data.originalId);
      let originalPos = original.getAttribute('reflected');
      console.log(originalPos);
      //this.el.setAttribute('position', {x: originalPos.x, y: originalPos.y, z: -originalPos.z})
    }
  });

  */