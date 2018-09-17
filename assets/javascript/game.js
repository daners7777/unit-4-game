//JavaScript doesn't get run until the HTML is finished loading
$(document).ready(function() {
    
//defined variables
var totalNumber= 0; 
var wins= 0;
var loss = 0;
var crystal = new Array (4);
var sum = 0;

//Generates random whole number between 19 and 120
var totalNumber = [Math.floor(Math.random() * (121 - 19)+ 19)];

//Random number shows up in index.html
$("#random-number").text(totalNumber);

// randomizes crystal numbers between 1 and 12
function Randomize() {
    for (i=0; i < crystal.length; i++) {
        crystal[i]=[Math.floor(Math.random() * (13 - 1)+ 1)];
    }
}

//Functions to add each crystal click to the previous click and change string to an integer
function CrystalClick0() {
    sum+=parseInt(crystal[0]);
  return sum;
}

function CrystalClick1() {
    sum+=parseInt(crystal[1]);
  return sum;
}

function CrystalClick2() {
    sum+=parseInt(crystal[2]);
  return sum;
}

function CrystalClick3() {
    sum+=parseInt(crystal[3]);
  return sum;
}

Randomize();

//Event listener to look for clikcs on each crystal
document.getElementById("crystal1").addEventListener("click", DisplayTotal0);
document.getElementById("crystal2").addEventListener("click", DisplayTotal1);
document.getElementById("crystal3").addEventListener("click", DisplayTotal2);
document.getElementById("crystal4").addEventListener("click", DisplayTotal3);

//Function to display each crystal's total in total score box
function DisplayTotal0() {
    document.getElementById("total-score").innerHTML = CrystalClick0();
    DisplayWins();
}

function DisplayTotal1() {
    document.getElementById("total-score").innerHTML = CrystalClick1();
    DisplayWins();
}

function DisplayTotal2() {
    document.getElementById("total-score").innerHTML = CrystalClick2();
    DisplayWins();
}

function DisplayTotal3() {
    document.getElementById("total-score").innerHTML = CrystalClick3();
    DisplayWins();
}

//Funciton to display the total wins or losses after matching the random number or exceeding it
function DisplayWins () {
    if (sum > totalNumber) {
        loss++;
        sum=0;
        //Runs the randomize fucniton upon a win or a loss
        Randomize();
        totalNumber = [Math.floor(Math.random() * (121 - 19)+ 19)];

    }
    if (sum == totalNumber) {
        wins++;
        sum=0;
        Randomize();
        totalNumber = [Math.floor(Math.random() * (121 - 19)+ 19)];
    }
    
    //Display wins, losses, total score and random number to HTML
    document.getElementById("wins").innerHTML = wins;
    document.getElementById("losses").innerHTML = loss;
    document.getElementById("total-score").innerHTML = sum;
    document.getElementById("random-number").innerHTML = totalNumber;
}

});