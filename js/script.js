document.addEventListener("impress:stepenter", function(event) {
    var currentStep = event.target;
    console.log("Entered the Step: ", currentStep.id);
});

