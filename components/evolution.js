//This component will allow us to store data about an element that is gonna change through the exeperience.
//Each element present in the scene is gonna have different states (steps).
//As the experience goes on, the room evolves, and objects appear or change in a variety of ways.
//We store some key values for each step of any given element
AFRAME.registerComponent('evolution', {
    schema: {
        //This score indicates how important it is that the player notices the element in the current step.
        evImportance: {default: []},
        //This score indicates how much the element has been looked at in the current step.
        //If elScore > elImportance, the next steps begin.
        evScore: {default: []},
        //This is the earliest possible time at which the current step can start.
        //The step will start only if elScore > elImportance.
        evWindowStart: {default: []},
        //This is the latest possible time for the step to end.
        //At this point in time, the next step starts even if elScore <= elImportance.
        evWindowEnd: {default: []},
        //This is the total number of steps the element has. The minimum is one.
        evSteps: {default: 1}
    },
  
    init: function () {
        let data = this.data;
        //We set elStep to the correct value using the length of elImportance.
        data.evSteps = data.evImportance.length;
    }
  });