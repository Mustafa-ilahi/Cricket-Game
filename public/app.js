
function toss(tossEl) {
    var tossNum = Math.ceil(Math.random() * 2);

    if (tossNum === 1) {
        chose.innerHTML = "You won the toss";
        // console.log("You won the toss");

        var nodeToAddForSelect = document.createElement("h3");
        nodeToAddForSelect.setAttribute("id", "heading");
        var heading = document.createTextNode("Please Select Bat Or Ball");
        nodeToAddForSelect.appendChild(heading);
        heading1.appendChild(nodeToAddForSelect);



        var nodeToAddForBat = document.createElement("button");
        nodeToAddForBat.setAttribute("id", "regular1");
        nodeToAddForBat.setAttribute("onClick", "forBat();");
        var bat = document.createTextNode("Bat!");
        nodeToAddForBat.appendChild(bat);
        fieldEl.appendChild(nodeToAddForBat);
        nodeToAddForBat.onclick = function () {
            console.log("Bat")

        };


        var nodeToAddForBall = document.createElement("button");
        nodeToAddForBall.setAttribute("id", "regular2");
        nodeToAddForBall.setAttribute("onClick", "forBall();");
        var ball = document.createTextNode("Ball!");
        nodeToAddForBall.appendChild(ball);
        fieldEl.appendChild(nodeToAddForBall);
        nodeToAddForBall.onclick = function () {
            // console.log("Ball");
        };
    }

    else if (tossNum === 2) {
        chose.innerHTML = "You loss the toss";
        // console.log("You loss the toss");




        var nodeToAddForSelect = document.createElement("h3");
        nodeToAddForSelect.setAttribute("id", "heading");
        var heading = document.createTextNode("Please Select Bat Or Ball");
        nodeToAddForSelect.appendChild(heading);
        heading1.appendChild(nodeToAddForSelect);



        var nodeToAddForBat = document.createElement("button");
        nodeToAddForBat.setAttribute("id", "regular1");
        nodeToAddForBat.setAttribute("onClick", "forBat();");
        var bat = document.createTextNode("Bat!");
        nodeToAddForBat.appendChild(bat);
        fieldEl.appendChild(nodeToAddForBat);
        nodeToAddForBat.onclick = function () {
        };


        var nodeToAddForBall = document.createElement("button");
        nodeToAddForBall.setAttribute("id", "regular2");
        nodeToAddForBall.setAttribute("onClick", "forBall();");
        var ball = document.createTextNode("Ball!");
        nodeToAddForBall.appendChild(ball);
        fieldEl.appendChild(nodeToAddForBall);
        nodeToAddForBall.onclick = function () {

            // console.log("Ball");
        };
    }
}


var scoreEl = document.getElementById("score");
var wicketsEl = document.getElementById("wickets");
var ballsEl = document.getElementById("balls");


var scoreTeam1 = 0;
var scoreTeam2 = 0;
var balls1 = 0;
var balls2 = 0;
var wickets1 = 0;
var wickets2 = 0;
var matchFlag1 = false;
var matchFlag2 = false;

function bowling() {

    if (matchFlag1 === false) {
        balls1 += 1;
        var runs = Math.ceil(Math.random() * 6);
        if (runs === 0) {
            wickets1 += 1;
        }
        scoreTeam1 = scoreTeam1 + runs
        scoreEl.innerHTML = scoreTeam1;
        wicketsEl.innerHTML = wickets1;
        ballsEl.innerHTML = balls1;
    }

    if (balls1 === 6) {

    }
    if (balls1 === 12 || wickets === 2) {
        matchFlag1 = true;
        var target = scoreTeam1 + 1;
        showInning.innerHTML = "Target " + target;
    }



    if (matchFlag2 === false && matchFlag1 === true) {
        balls2 += 1;
        var runs = Math.ceil(Math.random() * 6);
        if (runs === 0) {
            wickets2 += 1;
        }
        scoreTeam2 = scoreTeam2 + runs
        // showInning2.innerHTML = scoreTeam2;
        scoreEl.innerHTML = scoreTeam2;
        wicketsEl.innerHTML = wickets2;
        ballsEl.innerHTML = balls2;
    }

    if (balls2 === 12 || wickets === 2) {
        matchFlag2 = true;
    }

    if (balls1 === 12 && balls2 === 12) {
        if (scoreTeam1 > scoreTeam2) {
            // console.log("Team A win the match")
            showInning.innerHTML = 'Team A win the match'
        }


        else if (scoreTeam1 < scoreTeam2) {
            // console.log("Team b win the match")
            showInning.innerHTML = 'Team B win the match'
        }
        else if (scoreTeam1 === scoreTeam2) {
            // console.log("Match Tie")
            showInning.innerHTML = 'Match tie'

        }
    }
}



function validateRadios() {
    var radios = document.getElementsByName("Team");
    for (var i = 0; i < radios.length; i++) {
        if (radios[i].checked) {
            return true;
        }
    }
    alert("Please check one.");
    return false;
}

