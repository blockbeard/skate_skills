/**
 * Created by chris_000 on 27/05/2016.
 */
function skateSkills(){
    var setTime = 300000,
        restTime = 30000,
        timeToNext = 10000,
        stopTime = 4000,
        transitionIn = document.getElementById("transitionIn").checked,
        transitionOut = document.getElementById("transitionOut").checked,
        transitionThreeSixty = document.getElementById("transitionThreeSixty").checked,
        stopT = document.getElementById("stopT").checked,
        stopPlow = document.getElementById("stopPlow").checked,
        stopLeftPlow = document.getElementById("stopLeftPlow").checked,
        stopRightPlow = document.getElementById("stopRightPlow").checked,
        stopHockeyLeft = document.getElementById("stopHockeyLeft").checked,
        stopHockeyRight = document.getElementById("stopHockeyRight").checked,
        stopDerby = document.getElementById("stopDerby").checked,
        recoveryLeftKnee = document.getElementById("recoveryLeftKnee").checked,
        recoveryDoubleLeftKnee = document.getElementById("recoveryDoubleLeftKnee").checked,
        recoveryRightKnee = document.getElementById("recoveryRightKnee").checked,
        recoveryDoubleRightKnee = document.getElementById("recoveryDoubleRightKnee").checked,
        recoveryKneeSlide = document.getElementById("recoveryKneeSlide").checked,
        jump = document.getElementById("jump").checked,
        hop = document.getElementById("hop").checked,
        lateralHop = document.getElementById("lateralHop").checked,
        forwards = true,
        skillArray = [transitionIn,
            transitionOut,
            transitionThreeSixty,
            stopT,
            stopPlow,
            stopLeftPlow,
            stopRightPlow,
            stopHockeyLeft,
            stopHockeyRight,
            stopDerby,
            recoveryLeftKnee,
            recoveryDoubleLeftKnee,
            recoveryRightKnee,
            recoveryDoubleRightKnee,
            recoveryKneeSlide,
            jump,
            hop,
            lateralHop],
    practiceArray = [];

practiceArray = skillArray.filter(function checked(value){
        return value;
    })
    
    //function to call when next exercise is transition
    function transitions(CWTransition, CCWTransition, threeSixtyTransition){

    }
    //function to determine a random time for the next exercise
    function nextTime(){

    }
    //function to rea
    function getInput(){

    }
    function pickExercise(){

    }


console.log(practiceArray);
} 

