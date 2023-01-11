let initialScene = document.getElementById('initialScene');




AFRAME.registerComponent('reflected', {
  init: function () {
    let original = this.el;
    // On fait une copie de l'original
    let reflectedItem = document.getElementById(original.id).cloneNode(true);

    //On différenceie entre l'original et la réflexion avec ces attributs
    reflectedItem.setAttribute('reflexion', {originalId: original.id});
    reflectedItem.removeAttribute('reflected');
    //Pour le cas particulier de la caméra et de la tête
    /*
    if(this.el.id == "playerHead"){
      reflectedItem.setAttribute('wasd-controls', "");
      reflectedItem.setAttribute('look-controls', "");
      reflectedItem.setAttribute('position', {x: 0, y: 1.6, z: 2});
    }
    */
    console.log(reflectedItem.getAttribute('position'));
    document.getElementById('mirrorRef').append(reflectedItem);
  },
});

AFRAME.registerComponent('worldCoordinates', {
  /**
   * We use IIFE (immediately-invoked function expression) to only allocate one
   * vector or euler and not re-create on every tick to save memory.
   */
  tick: (function () {
    var position = new THREE.Vector3();
    var quaternion = new THREE.Quaternion();

    return function () {
      this.el.object3D.getWorldPosition(position);
      this.el.object3D.getWorldQuaternion(quaternion);
      // position and rotation now contain vector and quaternion in world space.
    };
  })()
});