/**
 * Created by chris_000 on 27/05/2016.
 */
var run,
    forwards = true;

// start the function when the GO! button is pressed
function start() {
    run = true;
    forwards = true;
    skateSkills()
}

// stop the function when STOP! button is pressed
function stop() {
    run = false;
}

function skateSkills() {
    var //setTime = 300000,
    //restTime = 30000,
        timeToNext = 2000,
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
            lateralHop
        ],
        practiceArray,
        nextSkill,
        funcArray = [transitionInFunc,
            transitionOutFunc,
            transitionThreeSixtyFunc,
            stopTFunc,
            stopPlowFunc,
            stopLeftPlowFunc,
            stopRightPlowFunc,
            stopHockeyLeftFunc,
            stopHockeyRightFunc,
            stopDerbyFunc,
            recoveryLeftKneeFunc,
            recoveryDoubleLeftKneeFunc,
            recoveryRightKneeFunc,
            recoveryDoubleRightKneeFunc,
            recoveryKneeSlideFunc,
            jumpFunc,
            hopFunc,
            lateralHopFunc],
        transitionArray = [transitionInFunc, transitionOutFunc],
        practiceTransitionArray;


    practiceArray = funcArray.filter(function checked(elem, index) {
        return skillArray[index];
    });

    practiceTransitionArray = transitionArray.filter(function checkedTransition(elem, index) {
        return skillArray[index];
    });

    goCheck();

    function goCheck() {
        if (run) {
            pickSkill();
            {
                setTimeout (goCheck, timeToNext);
            }
        }
    }

    console.log("Skill array = " + skillArray);
    console.log("func array = " + funcArray);
    console.log("practice array = " + practiceArray);
    console.log("practice transition array = " + practiceTransitionArray);

// whistle sound effect for stops
    function whistle() {
        var whistleAudio = new Audio('audio/whistle.mp3');
        whistleAudio.play();

    }

//function to determine a random time for the next Skill
    function nextTime(){
     timeToNext = 3000;
     }
     

//functions to call for a specific skill

    function transitionInFunc() {
        var transitionInAudio = new Audio('audio/transitionIn.mp3');
        transitionInAudio.play();
        forwards = !forwards;
    }

    function transitionOutFunc() {
        var transitionOutAudio = new Audio('audio/transitionOut.mp3');
        transitionOutAudio.play();
        forwards = !forwards;
    }

    function transitionThreeSixtyFunc() {
        var transitionThreeSixtyAudio = new Audio('audio/transitionThreeSixty.mp3');
        transitionThreeSixtyAudio.play();

    }

    function stopTFunc() {
        var stopTAudio = new Audio('audio/stopT.mp3');
        stopTAudio.play();
        setTimeout(whistle, 1000);
        setTimeout(whistle, stopTime);
    }

    function stopPlowFunc() {
        var stopPlowAudio = new Audio('audio/stopPlow.mp3');
        stopPlowAudio.play();
        setTimeout(whistle, 1000);
        setTimeout(whistle, stopTime);
    }

    function stopLeftPlowFunc() {
        var stopLeftPlowAudio = new Audio('audio/stopLeftPlow.mp3');
        stopLeftPlowAudio.play();
        setTimeout(whistle, 1000);
        setTimeout(whistle, stopTime);
    }

    function stopRightPlowFunc() {
        var stopLeftPlowAudio = new Audio('audio/stopLeftPlow.mp3');
        stopLeftPlowAudio.play();
        setTimeout(whistle, 1000);
        setTimeout(whistle, stopTime);
    }

    function stopHockeyLeftFunc() {
        var stopHockeyLeftAudio = new Audio('audio/stopHockeyLeft.mp3');
        stopHockeyLeftAudio.play();
        setTimeout(whistle, 1000);
        setTimeout(whistle, stopTime);
    }

    function stopHockeyRightFunc() {
        var stopHockeyRightAudio = new Audio('audio/stopHockeyRight.mp3');
        stopHockeyRightAudio.play();
        setTimeout(whistle, 1000);
        setTimeout(whistle, stopTime);
    }

    function stopDerbyFunc() {
        var stopDerbyAudio = new Audio('audio/stopDerby.mp3');
        stopDerbyAudio.play();
        setTimeout(whistle, 1000);
        setTimeout(whistle, stopTime);
    }


    function recoveryLeftKneeFunc() {
        var recoveryLeftKneeAudio = new Audio('audio/recoveryLeftKnee.mp3');
        recoveryLeftKneeAudio.play();

    }

    function recoveryDoubleLeftKneeFunc() {
        var recoveryDoubleLeftKneeAudio = new Audio('audio/recoveryDoubleLeftKnee.mp3');
        recoveryDoubleLeftKneeAudio.play();

    }

    function recoveryRightKneeFunc() {
        var recoveryRightKneeAudio = new Audio('audio/recoveryRightKnee.mp3');
        recoveryRightKneeAudio.play();

    }

    function recoveryDoubleRightKneeFunc() {
        var recoveryDoubleRightKneeAudio = new Audio('audio/recoveryDoubleRightKnee.mp3');
        recoveryDoubleRightKneeAudio.play();

    }

    function recoveryKneeSlideFunc() {
        var recoveryKneeSlideAudio = new Audio('audio/recoveryKneeSlide.mp3');
        recoveryKneeSlideAudio.play();

    }

    function jumpFunc() {
        var jumpAudio = new Audio('audio/jump.mp3');
        jumpAudio.play();

    }

    function hopFunc() {
        var hopAudio = new Audio('audio/hop.mp3');
        hopAudio.play();

    }

    function lateralHopFunc() {
        var lateralHopAudio = new Audio('audio/lateralHop.mp3');
        lateralHopAudio.play();

    }

    //function to determine a random time for the next Skill
    /* function nextTime(){
     return 3000;

     }
     */

    // picking what Skill to do next
    function pickSkill() {
        if (!forwards) {
            nextSkill = practiceTransitionArray[Math.floor((Math.random() * practiceTransitionArray.length))];
            nextSkill();
        } else {
            nextSkill = practiceArray[Math.floor((Math.random() * practiceArray.length))];
            nextSkill();

        }
    }


}


