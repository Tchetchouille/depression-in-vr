let initialScene = document.getElementById('initialScene');

AFRAME.registerComponent('reflected', {
    init: function () {
        let original = this;
        console.log(document.getElementById('cliff'));
        console.log(original.el);
        let reflectedItem = document.getElementById('cliff').cloneNode(false);
        
        reflectedItem.removeAttribute('reflected');
        reflectedItem.setAttribute('rotation', {x: 0, y: 180, z: 0});
        initialScene.append(reflectedItem);
    }
  });