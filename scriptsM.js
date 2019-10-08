//-------------------------------------------------------------------------
//---------------------MANDARIN SCRIPT FUNCTIONS---------------------------
//-------------------------------------------------------------------------
//-------------------Author: T Larkin--------------------------------------
//-------------------------------------------------------------------------
//-------------------Last modified: 1/10/19--------------------------------

function exploreIslandM() {
    //If the button, exploreIsland is clicked. "Hide" the original loading elements and "show" the pa2 elements
    document.getElementsByClassName("pa1M")[0].style.display="none";
    document.getElementsByClassName("pa1M")[1].style.display="none";
    document.getElementsByClassName("pa2M")[0].style.display="block";
    document.getElementsByClassName("pa2M")[1].style.display="block";
}

function fixBoatM() {
    //If the button, fixBoat is clicked. "Hide" the original loading elements and "show" the pa3 elements
    document.getElementsByClassName("pa1M")[0].style.display="none";
    document.getElementsByClassName("pa1M")[1].style.display="none";
    document.getElementsByClassName("pa3M")[0].style.display="block";
    document.getElementsByClassName("pa3M")[1].style.display="block";
}

function winGameM() {
    //If the button, winBoat is clicked. "Hide" the previous elements and "show" the .win elements
    document.getElementById("content").style.display="none";
    //document.getElementById("navigation").style.display="none";
    //document.getElementsByClassName("pa2")[1].style.display="none";
    //document.getElementsByClassName("pa3")[0].style.display="none";
    //document.getElementsByClassName("pa3")[1].style.display="none";
    document.getElementsByClassName("winM")[0].style.display="block";
    document.getElementsByClassName("winM")[1].style.display="block";
}

function loseGameM() {
    //If the button, winBoat is clicked. "Hide" the previous elements and "show" the .win elements
    document.getElementsByClassName("pa2M")[0].style.display="none";
    document.getElementsByClassName("pa2M")[1].style.display="none";
    document.getElementsByClassName("pa3M")[0].style.display="none";
    document.getElementsByClassName("pa3M")[1].style.display="none";
    document.getElementsByClassName("loseM")[0].style.display="block";
    document.getElementsByClassName("loseM")[1].style.display="block";
}
