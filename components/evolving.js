//This component will allow us to store data about an element that is gonna change through the exeperience.
//Each element present in the scene is gonna have different states (steps).
//As the experience goes on, the room evolves, and objects appear or change in a variety of ways.
//We store some key values for each step of any given element
AFRAME.registerComponent('evolving', {
    schema: {
        //This score indicates how important it is that the player notices the element in the current step.
        evImportances: {type: 'array', default: [0]},
        //This score indicates how much the element has been looked at in the current step.
        //If elScore > elImportance, the next steps begin.
        evScores: {type: 'array', default: [0]},
        //This is the earliest possible time at which the current step can start.
        //The step will start only if elScore > elImportance.
        evWindowStarts: {type: 'array', default: [0]},
        //This is the latest possible time for the step to end.
        //At this point in time, the next step starts even if elScore <= elImportance.
        evWindowEnds: {type: 'array', default: [0]},
        //This is the total number of steps the element has. The minimum is one.
        evNumberOfSteps: {type: 'int', default: 1},
        //This is the current step
        evStep: {type: 'int', default: 0}
    },
  
    init: function () {
        let data = this.data;
        let el = this.el;

        //We split every data in order to have arrays
        data.evImportances = data.evImportances[0].split(" ");
        data.evScores = data.evScores[0].split(" ");
        data.evWindowStarts = data.evWindowStarts[0].split(" ");
        data.evWindowEnds = data.evWindowEnds[0].split(" ");

        //We set evNumberOfSteps to the correct value using the length of evImportances.
        data.evNumberOfSteps = data.evImportances.length;

        //We convert each string to the correct type of data
        for(i=0;i<data.evNumberOfSteps;i++){
            data.evImportances[i] = parseInt(data.evImportances[i]);
            data.evScores[i] = parseInt(data.evScores[i]);
            data.evWindowStarts[i] = parseInt(data.evWindowStarts[i]);
            data.evWindowEnds[i] = parseInt(data.evWindowEnds[i]);
        }

        console.log(data.evImportances);
        console.log(data.evScores);
        console.log(data.evWindowStarts);
        console.log(data.evWindowEnds);



        //This allow for the raycaster not to check every single object, but only those with this class
        el.setAttribute('class', "evolving");
        //
        el.addEventListener('mouseenter', function () {
            data.evScores[data.evStep] += 100;
            console.log(data.evScores);
          });
    }
  });

