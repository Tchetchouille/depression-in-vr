let initialScene = document.getElementById('initialScene');




AFRAME.registerComponent('reflected', {
  init: function () {
    let original = this.el;
    // On fait une copie de l'original
    let reflectedItem = document.getElementById(original.id).cloneNode(false);

    //On différenceie entre l'original et la réflexion avec ces attributs
    reflectedItem.setAttribute('reflexion', {originalId: original.id});
    reflectedItem.removeAttribute('reflected');
    //Pour le cas particulier de la caméra et de la tête
    if(this.el.id == "playerHead"){
      reflectedItem.setAttribute('wasd-controls', "");
      reflectedItem.setAttribute('look-controls', "");
      reflectedItem.setAttribute('position', {x: 0, y: 1.6, z: 2});
    }

    document.getElementById('mirrorRef').append(reflectedItem);
  },
});

