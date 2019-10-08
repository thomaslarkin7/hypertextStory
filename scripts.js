//-------------------------------------------------------------------------
//----------------------ENGLISH SCRIPT FUNCTIONS---------------------------
//-------------------------------------------------------------------------
//-------------------Author: T Larkin--------------------------------------
//-------------------------------------------------------------------------
//-------------------Last modified: 7/10/19--------------------------------

var aE = []; //an array to store the current active elements on the webpage

//turn on the loadOverlay
function loadOn(){
    //document.getElementById("englishScript").style.display = "none"; //hide all english script elems
    //document.getElementById("mandarinScript").style.display = "none"; //hide all mandarin script elems
    //document.getElementsByClassName("prologue")[0].style.display="block";
    //document.getElementsByClassName("prologue")[1].style.display="block";
    document.location.reload(); //reload the entire webpage
    //document.getElementById("loadOverlay").style.display = "block"; //show load screen
}

//turn off the loadOverlay
function off(){
    document.getElementById("loadOverlay").style.display = "none";
}

//toggle to MANDARIN script
function mandarin(){
    document.getElementById("loadOverlay").style.display = "none"; //remove the overlay load screen
    document.getElementById("englishScript").style.display = "none"; //hide the English script HTML
    document.getElementById("mandarinScript").style.display = "block"; //show the Mandarin Script HTML
}

//toggle to ENGLISH script
function english(){
    document.getElementById("loadOverlay").style.display = "none"; //remove the overlay load screen
    document.getElementById("mandarinScript").style.display = "none"; //hide the mandarin script HTML
    document.getElementById("englishScript").style.display = "block"; //show the english Script HTML
}

// Get the modal
var modal = document.getElementById("myModal");

function modalPopup(){
    document.getElementById("myModal").style.display = "block"; //show the modal on button click
}

function closeModal(){
    document.getElementById("myModal").style.display = "none"; //show the modal on button click
}

//Toggle Opacity of the Basilisk Image
function toggleBasilisk(){
    var imgBB = document.getElementById("basiliskInvB");
    var imgBT = document.getElementById("basiliskInvT");
    imgBB.classList.toggle("m-fadeOut");
    imgBT.classList.toggle("m-fadeIn");
}

//Toggle Opacity of the Dragon Image
function toggleDragon(){
    var imgDB = document.getElementById("dragonInvB");
    var imgDT = document.getElementById("dragonInvT");
    imgDB.classList.toggle("m-fadeOut");
    imgDT.classList.toggle("m-fadeIn");
}

//Toggle Opacity of the Phoenix Image
function togglePhoenix(){
    var imgPB = document.getElementById("phoenixInvB");
    var imgPT = document.getElementById("phoenixInvT");
    imgPB.classList.toggle("m-fadeOut");
    imgPT.classList.toggle("m-fadeIn");
}

//Toggle Opacity of the Hydrus Image
function toggleHydrus(){
    var imgHB = document.getElementById("hydrusInvB");
    var imgHT = document.getElementById("hydrusInvT");
    imgHB.classList.toggle("m-fadeOut");
    imgHT.classList.toggle("m-fadeIn");
}

//Toggle Opacity of the Phoenix Image
function toggleUnicorn(){
    var imgUB = document.getElementById("unicornInvB");
    var imgUT = document.getElementById("unicornInvT");
    imgUB.classList.toggle("m-fadeOut");
    imgUT.classList.toggle("m-fadeIn");
}

//------------------------------------------------------------------------------------------------
//----------------------------- ENTER ANIMALS FUNCTIONS ------------------------------------------
//------------------------------------------------------------------------------------------------
function goPrologue() {
    // var bodyTextDElems = document.getElementsByClassName("bodyTextD");
    // for (var i = 0; i < bodyTextDElems.length; i++){
    //     document.getElementsByClassName("bodyTextD")[i].style.display = "none";
    // }

    // var bodyTextUElems = document.getElementsByClassName("bodyTextU");
    // for (var i = 0; i < bodyTextUElems.length; i++){
    //     document.getElementsByClassName("bodyTextU")[i].style.display = "none";
    // }
    //document.getElementsByClassName("bodyTextD")[0].style.display="none";
    //document.getElementsByClassName("bodyTextD")[1].style.display="none";
    document.getElementsByClassName("D3aa")[0].style.display="none";
    document.getElementsByClassName("D3aa")[1].style.display="none";
    document.getElementsByClassName("D4aba")[0].style.display="none";
    document.getElementsByClassName("D4aba")[1].style.display="none";
    document.getElementsByClassName("D3ba")[0].style.display="none";
    document.getElementsByClassName("D3ba")[1].style.display="none";
    document.getElementsByClassName("D4bba")[0].style.display="none";
    document.getElementsByClassName("D4bba")[1].style.display="none";
    document.getElementsByClassName("D7acbaba")[0].style.display="none";
    document.getElementsByClassName("D7acbaba")[1].style.display="none";
    document.getElementsByClassName("D3ca")[0].style.display="none";
    document.getElementsByClassName("D3ca")[1].style.display="none";
    document.getElementsByClassName("D4cba")[0].style.display="none";
    document.getElementsByClassName("D4cba")[1].style.display="none";
    document.getElementsByClassName("D4cca")[0].style.display="none";
    document.getElementsByClassName("D4cca")[1].style.display="none";
    document.getElementsByClassName("D5ccbb")[0].style.display="none";
    document.getElementsByClassName("D5ccbb")[1].style.display="none";
    document.getElementsByClassName("D6ccbaa")[0].style.display="none";
    document.getElementsByClassName("D6ccbaa")[1].style.display="none";
    document.getElementsByClassName("D6ccbab")[0].style.display="none";
    document.getElementsByClassName("D6ccbab")[1].style.display="none";
    document.getElementsByClassName("D7ccbaca")[0].style.display="none";
    document.getElementsByClassName("D7ccbaca")[1].style.display="none";


    document.getElementsByClassName("U2c")[0].style.display="none";
    document.getElementsByClassName("U2c")[1].style.display="none";
    document.getElementsByClassName("U3bc")[0].style.display="none";
    document.getElementsByClassName("U3bc")[1].style.display="none";
    document.getElementsByClassName("U3aa")[0].style.display="none";
    document.getElementsByClassName("U3aa")[1].style.display="none";
    document.getElementsByClassName("U4baa")[0].style.display="none";
    document.getElementsByClassName("U4baa")[1].style.display="none";
    document.getElementsByClassName("U4bba")[0].style.display="none";
    document.getElementsByClassName("U4bba")[1].style.display="none";
    document.getElementsByClassName("U4aba")[0].style.display="none";
    document.getElementsByClassName("U4aba")[1].style.display="none";
    document.getElementsByClassName("U4abc")[0].style.display="none";
    document.getElementsByClassName("U4abc")[1].style.display="none";
    document.getElementsByClassName("U4aca")[0].style.display="none";
    document.getElementsByClassName("U4aca")[1].style.display="none";
    document.getElementsByClassName("U5baba")[0].style.display="none";
    document.getElementsByClassName("U5baba")[1].style.display="none";
    document.getElementsByClassName("U5abba")[0].style.display="none";
    document.getElementsByClassName("U5abba")[1].style.display="none";
    document.getElementsByClassName("U5abbb")[0].style.display="none";
    document.getElementsByClassName("U5abbb")[1].style.display="none";
    document.getElementsByClassName("U6babcb")[0].style.display="none";
    document.getElementsByClassName("U6babcb")[1].style.display="none";
    document.getElementsByClassName("U6acbba")[0].style.display="none";
    document.getElementsByClassName("U6acbba")[1].style.display="none";
    //console.log("here we are");
    //document.getElementById("englishScript").style.display = "block"; //show the english Script HTML
    //document.getElementsByClassName("bodyTextU")[0].style.display="none";
    //document.getElementsByClassName("bodyTextU")[1].style.display="none";
    //console.log("here we are");
    document.getElementsByClassName("prologue")[0].style.display="block";
    document.getElementsByClassName("prologue")[1].style.display="block";
}

function enterUnicorn(){
    document.getElementsByClassName("prologue")[0].style.display="none";
    document.getElementsByClassName("prologue")[1].style.display="none";
    document.getElementById("myProgressU").style.display = "block"; //show unicorn progress bar
    //document.getElementsByClassName("dragonEnd")[0].style.display="none";
    //document.getElementsByClassName("dragonEnd")[1].style.display="none";
    //document.getElementsByClassName("bodyTextD")[0].style.display="none";
    //document.getElementsByClassName("bodyTextD")[1].style.display="none";
    //document.getElementsByClassName("bodyTextU")[0].style.display="none";
    //document.getElementsByClassName("bodyTextU")[1].style.display="none";
    //document.getElementById("bodyTextD").style.display = "none";
    document.getElementsByClassName("U1")[0].style.display="block";
    document.getElementsByClassName("U1")[1].style.display="block";
}

function enterDragon(){
    document.getElementsByClassName("prologue")[0].style.display="none";
    document.getElementsByClassName("prologue")[1].style.display="none";
    document.getElementsByClassName("U6babca")[0].style.display="none";
    document.getElementsByClassName("U6babca")[1].style.display="none";
    document.getElementsByClassName("U6babcc")[0].style.display="none";
    document.getElementsByClassName("U6babcc")[1].style.display="none";
    document.getElementsByClassName("U6acbba")[0].style.display="none";
    document.getElementsByClassName("U6acbba")[1].style.display="none";
    document.getElementsByClassName("U6acbbc")[0].style.display="none";
    document.getElementsByClassName("U6acbbc")[1].style.display="none";
    var someX = document.getElementsByClassName("D1");
    document.getElementById("myProgressD").style.display = "block"; //show dragon progress bar
    document.getElementsByClassName("D1")[0].style.display="block";

    document.getElementsByClassName("D1")[1].style.display="block";
}

function enterHydrus(){
    document.getElementsByClassName("prologue")[0].style.display="none";
    document.getElementsByClassName("prologue")[1].style.display="none";
    document.getElementsByClassName("endDragon")[0].style.display="none";
    document.getElementsByClassName("endDragon")[1].style.display="none";
    document.getElementsByClassName("H1")[0].style.display="block";
    document.getElementsByClassName("H1")[1].style.display="block";
}

function enterBasilisk(){
    document.getElementsByClassName("prologue")[0].style.display="none";
    document.getElementsByClassName("prologue")[1].style.display="none";
    document.getElementsByClassName("endDragon")[0].style.display="none";
    document.getElementsByClassName("endDragon")[1].style.display="none";
    document.getElementsByClassName("B1")[0].style.display="block";
    document.getElementsByClassName("B1")[1].style.display="block";
}

function enterPhoenix(){
    document.getElementsByClassName("prologue")[0].style.display="none";
    document.getElementsByClassName("prologue")[1].style.display="none";
    document.getElementsByClassName("endDragon")[0].style.display="none";
    document.getElementsByClassName("endDragon")[1].style.display="none";
    document.getElementsByClassName("P1")[0].style.display="block";
    document.getElementsByClassName("P1")[1].style.display="block";
}



//-------------------------------------------------------------------------------------------
//---------------------------- unicorn narrative functions ----------------------------------
//-------------------------------------------------------------------------------------------

function seeKing() {
    //If the button, exploreIsland is clicked. "Hide" the original loading elements and "show" the pa2 elements
    document.getElementsByClassName("U1")[0].style.display="none";
    document.getElementsByClassName("U1")[1].style.display="none";
    document.getElementsByClassName("U2a")[0].style.display="block";
    document.getElementsByClassName("U2a")[1].style.display="block";
}

function seeMonk() {
    //If the button, fixBoat is clicked. "Hide" the original loading elements and "show" the pa3 elements
    document.getElementsByClassName("U1")[0].style.display="none";
    document.getElementsByClassName("U1")[1].style.display="none";
    document.getElementsByClassName("U2b")[0].style.display="block";
    document.getElementsByClassName("U2b")[1].style.display="block";
}

function seeDoctor() {
    //If the button, exploreIsland is clicked. "Hide" the original loading elements and "show" the pa2 elements
    document.getElementsByClassName("U1")[0].style.display="none";
    document.getElementsByClassName("U1")[1].style.display="none";
    document.getElementsByClassName("U2c")[0].style.display="block";
    document.getElementsByClassName("U2c")[1].style.display="block";
}

function seeAristocracy(){
    document.getElementsByClassName("U2a")[0].style.display="none";
    document.getElementsByClassName("U2a")[1].style.display="none";
    document.getElementsByClassName("U3aa")[0].style.display="block";
    document.getElementsByClassName("U3aa")[1].style.display="block";
}

function seeAlchemist(){
    document.getElementsByClassName("U2a")[0].style.display="none";
    document.getElementsByClassName("U2a")[1].style.display="none";
    document.getElementsByClassName("U3ab")[0].style.display="block";
    document.getElementsByClassName("U3ab")[1].style.display="block";
}

function seeClergy(){
    document.getElementsByClassName("U2a")[0].style.display="none";
    document.getElementsByClassName("U2a")[1].style.display="none";
    document.getElementsByClassName("U3ac")[0].style.display="block";
    document.getElementsByClassName("U3ac")[1].style.display="block";
}

function seePentagram(){
    document.getElementsByClassName("U2b")[0].style.display="none";
    document.getElementsByClassName("U2b")[1].style.display="none";
    document.getElementsByClassName("U3ba")[0].style.display="block";
    document.getElementsByClassName("U3ba")[1].style.display="block";
}

function seeFiligree(){
    document.getElementsByClassName("U2b")[0].style.display="none";
    document.getElementsByClassName("U2b")[1].style.display="none";
    document.getElementsByClassName("U3bb")[0].style.display="block";
    document.getElementsByClassName("U3bb")[1].style.display="block";
}

function seeDiary(){
    document.getElementsByClassName("U2b")[0].style.display="none";
    document.getElementsByClassName("U2b")[1].style.display="none";
    document.getElementsByClassName("U3bc")[0].style.display="block";
    document.getElementsByClassName("U3bc")[1].style.display="block";
}

function seePrivy(){
    document.getElementsByClassName("U3ab")[0].style.display="none";
    document.getElementsByClassName("U3ab")[1].style.display="none";
    document.getElementsByClassName("U4aba")[0].style.display="block";
    document.getElementsByClassName("U4aba")[1].style.display="block";
}

function seeLaboratory(){
    //var y = document.getElementsByClassName("U3ab");
    //console.log(y);
    document.getElementsByClassName("U3ab")[0].style.display="none";
    document.getElementsByClassName("U3ab")[1].style.display="none";
    //var x = document.getElementsByClassName("U4abb");
    //console.log(x);
    document.getElementsByClassName("U4abb")[0].style.display="block";
    document.getElementsByClassName("U4abb")[1].style.display="block";
}

function seeWhereKing(){
    document.getElementsByClassName("U3ab")[0].style.display="none";
    document.getElementsByClassName("U3ab")[1].style.display="none";
    document.getElementsByClassName("U4abc")[0].style.display="block";
    document.getElementsByClassName("U4abc")[1].style.display="block";
}

function chastiseKing(){
    document.getElementsByClassName("U3ac")[0].style.display="none";
    document.getElementsByClassName("U3ac")[1].style.display="none";
    document.getElementsByClassName("U4aca")[0].style.display="block";
    document.getElementsByClassName("U4aca")[1].style.display="block";
}

function huntingOffer(){
    document.getElementsByClassName("U3ac")[0].style.display="none";
    document.getElementsByClassName("U3ac")[1].style.display="none";
    document.getElementsByClassName("U4acb")[0].style.display="block";
    document.getElementsByClassName("U4acb")[1].style.display="block";
}

function returnBook(){
    document.getElementsByClassName("U3bb")[0].style.display="none";
    document.getElementsByClassName("U3bb")[1].style.display="none";
    document.getElementsByClassName("U4bba")[0].style.display="block";
    document.getElementsByClassName("U4bba")[1].style.display="block";
}

function readUnicornChap(){
    document.getElementsByClassName("U3bb")[0].style.display="none";
    document.getElementsByClassName("U3bb")[1].style.display="none";
    document.getElementsByClassName("U4bbb")[0].style.display="block";
    document.getElementsByClassName("U4bbb")[1].style.display="block";
}

function womansAddress(){
    document.getElementsByClassName("U3bb")[0].style.display="none";
    document.getElementsByClassName("U3bb")[1].style.display="none";
    document.getElementsByClassName("U4bbc")[0].style.display="block";
    document.getElementsByClassName("U4bbc")[1].style.display="block";
}

function pushOver(){
    document.getElementsByClassName("U3ba")[0].style.display="none";
    document.getElementsByClassName("U3ba")[1].style.display="none";
    document.getElementsByClassName("U4baa")[0].style.display="block";
    document.getElementsByClassName("U4baa")[1].style.display="block";
}

function trade(){
    document.getElementsByClassName("U3ba")[0].style.display="none";
    document.getElementsByClassName("U3ba")[1].style.display="none";
    document.getElementsByClassName("U4bbc")[0].style.display="none";
    document.getElementsByClassName("U4bbc")[1].style.display="none";
    document.getElementsByClassName("U4bab")[0].style.display="block";
    document.getElementsByClassName("U4bab")[1].style.display="block";
}

function enchantSpear(){
    document.getElementsByClassName("U4bab")[0].style.display="none";
    document.getElementsByClassName("U4bab")[1].style.display="none";
    document.getElementsByClassName("U5baba")[0].style.display="block";
    document.getElementsByClassName("U5baba")[1].style.display="block";
}

function chooseSpeed(){
    document.getElementsByClassName("U4abb")[0].style.display="none";
    document.getElementsByClassName("U4abb")[1].style.display="none";
    document.getElementsByClassName("U5abba")[0].style.display="block";
    document.getElementsByClassName("U5abba")[1].style.display="block";
}

function chooseSleeping(){
    document.getElementsByClassName("U4abb")[0].style.display="none";
    document.getElementsByClassName("U4abb")[1].style.display="none";
    document.getElementsByClassName("U5abbb")[0].style.display="block";
    document.getElementsByClassName("U5abbb")[1].style.display="block";
}

function charismaPotion2(){
    document.getElementsByClassName("U4abb")[0].style.display="none";
    document.getElementsByClassName("U4abb")[1].style.display="none";
    document.getElementsByClassName("U5abbc")[0].style.display="block";
    document.getElementsByClassName("U5abbc")[1].style.display="block";
}

function spices(){
    document.getElementsByClassName("U4bab")[0].style.display="none";
    document.getElementsByClassName("U4bab")[1].style.display="none";
    document.getElementsByClassName("U5babb")[0].style.display="block";
    document.getElementsByClassName("U5babb")[1].style.display="block";
}

function charismaPotion(){
    document.getElementsByClassName("U4bab")[0].style.display="none";
    document.getElementsByClassName("U4bab")[1].style.display="none";
    document.getElementsByClassName("U5babc")[0].style.display="block";
    document.getElementsByClassName("U5babc")[1].style.display="block";
}

function holdRandom(){
    document.getElementsByClassName("U4acb")[0].style.display="none";
    document.getElementsByClassName("U4acb")[1].style.display="none";
    document.getElementsByClassName("U5acba")[0].style.display="block";
    document.getElementsByClassName("U5acba")[1].style.display="block";
}

function realTechnique(){
    document.getElementsByClassName("U4acb")[0].style.display="none";
    document.getElementsByClassName("U4acb")[1].style.display="none";
    document.getElementsByClassName("U5acbb")[0].style.display="block";
    document.getElementsByClassName("U5acbb")[1].style.display="block";
}

function complimentPetunia(){
    document.getElementsByClassName("U5babc")[0].style.display="none";
    document.getElementsByClassName("U5babc")[1].style.display="none";
    document.getElementsByClassName("U5abbc")[0].style.display="none";
    document.getElementsByClassName("U5abbc")[1].style.display="none";
    document.getElementsByClassName("U6babca")[0].style.display="block";
    document.getElementsByClassName("U6babca")[1].style.display="block";
}

function makeMove(){
    document.getElementsByClassName("U5babc")[0].style.display="none";
    document.getElementsByClassName("U5babc")[1].style.display="none";
    document.getElementsByClassName("U5abbc")[0].style.display="none";
    document.getElementsByClassName("U5abbc")[1].style.display="none";
    document.getElementsByClassName("U6babcb")[0].style.display="block";
    document.getElementsByClassName("U6babcb")[1].style.display="block";
}

function askFavor(){
    document.getElementsByClassName("U5babc")[0].style.display="none";
    document.getElementsByClassName("U5babc")[1].style.display="none";
    document.getElementsByClassName("U5abbc")[0].style.display="none";
    document.getElementsByClassName("U5abbc")[1].style.display="none";
    document.getElementsByClassName("U6babcc")[0].style.display="block";
    document.getElementsByClassName("U6babcc")[1].style.display="block";
}

function eleanor(){
    document.getElementsByClassName("U5acbb")[0].style.display="none";
    document.getElementsByClassName("U5acbb")[1].style.display="none";
    document.getElementsByClassName("U6acbba")[0].style.display="block";
    document.getElementsByClassName("U6acbba")[1].style.display="block";
}

function daphne(){
    document.getElementsByClassName("U5acbb")[0].style.display="none";
    document.getElementsByClassName("U5acbb")[1].style.display="none";
    document.getElementsByClassName("U6acbbb")[0].style.display="block";
    document.getElementsByClassName("U6acbbb")[1].style.display="block";
}

function mildred(){
    document.getElementsByClassName("U5acbb")[0].style.display="none";
    document.getElementsByClassName("U5acbb")[1].style.display="none";
    document.getElementsByClassName("U6acbbc")[0].style.display="block";
    document.getElementsByClassName("U6acbbc")[1].style.display="block";
}

//----------------------------------------------------------------------------------------------
//----------------------------- end unicorn narrative functions --------------------------------
//----------------------------------------------------------------------------------------------


//----------------------------------------------------------------------------------------------
//---------------------------- begin dragon narrative functions --------------------------------
//----------------------------------------------------------------------------------------------


function seeKnight(){
    document.getElementsByClassName("D1")[0].style.display="none";
    document.getElementsByClassName("D1")[1].style.display="none";
    document.getElementsByClassName("D2a")[0].style.display="block";
    document.getElementsByClassName("D2a")[1].style.display="block";
}
function seeBard(){
    document.getElementsByClassName("D1")[0].style.display="none";
    document.getElementsByClassName("D1")[1].style.display="none";
    document.getElementsByClassName("D4abc")[0].style.display="none";
    document.getElementsByClassName("D4abc")[1].style.display="none";
    document.getElementsByClassName("D2b")[0].style.display="block";
    document.getElementsByClassName("D2b")[1].style.display="block";
}
function seeMerchant(){
    document.getElementsByClassName("D1")[0].style.display="none";
    document.getElementsByClassName("D1")[1].style.display="none";
    document.getElementsByClassName("D2c")[0].style.display="block";
    document.getElementsByClassName("D2c")[1].style.display="block";
}

function lookEmblem(){
    document.getElementsByClassName("D2a")[0].style.display="none";
    document.getElementsByClassName("D2a")[1].style.display="none";
    document.getElementsByClassName("D3aa")[0].style.display="block";
    document.getElementsByClassName("D3aa")[1].style.display="block";
}
function readScroll(){
    document.getElementsByClassName("D2a")[0].style.display="none";
    document.getElementsByClassName("D2a")[1].style.display="none";
    document.getElementsByClassName("D3ab")[0].style.display="block";
    document.getElementsByClassName("D3ab")[1].style.display="block";
}
function joinQuest(){
    document.getElementsByClassName("D2a")[0].style.display="none";
    document.getElementsByClassName("D2a")[1].style.display="none";
    document.getElementsByClassName("D3ac")[0].style.display="block";
    document.getElementsByClassName("D3ac")[1].style.display="block";
}

function buyScroll(){
    document.getElementsByClassName("D3ab")[0].style.display="none";
    document.getElementsByClassName("D3ab")[1].style.display="none";
    document.getElementsByClassName("D4aba")[0].style.display="block";
    document.getElementsByClassName("D4aba")[1].style.display="block";
}

function stealScroll(){
    document.getElementsByClassName("D3ab")[0].style.display="none";
    document.getElementsByClassName("D3ab")[1].style.display="none";
    document.getElementsByClassName("D4abb")[0].style.display="block";
    document.getElementsByClassName("D4abb")[1].style.display="block";
}

function makeSong(){
    document.getElementsByClassName("D3ab")[0].style.display="none";
    document.getElementsByClassName("D3ab")[1].style.display="none";
    document.getElementsByClassName("D4abc")[0].style.display="block";
    document.getElementsByClassName("D4abc")[1].style.display="block";
}

function declineOffer(){
    document.getElementsByClassName("D3ac")[0].style.display="none";
    document.getElementsByClassName("D3ac")[1].style.display="none";
    document.getElementsByClassName("D1")[0].style.display="block";
    document.getElementsByClassName("D1")[1].style.display="block";
}

function acceptSquire(){
    document.getElementsByClassName("D3ac")[0].style.display="none";
    document.getElementsByClassName("D3ac")[1].style.display="none";
    document.getElementsByClassName("D4acb")[0].style.display="block";
    document.getElementsByClassName("D4acb")[1].style.display="block";
}

function setupCamp(){
    document.getElementsByClassName("D4acb")[0].style.display="none";
    document.getElementsByClassName("D4acb")[1].style.display="none";
    document.getElementsByClassName("D4cbb")[0].style.display="none";
    document.getElementsByClassName("D4cbb")[1].style.display="none";
    document.getElementsByClassName("D5acba")[0].style.display="block";
    document.getElementsByClassName("D5acba")[1].style.display="block";
}
function captureElephant(){
    document.getElementsByClassName("D5acba")[0].style.display="none";
    document.getElementsByClassName("D5acba")[1].style.display="none";
    document.getElementsByClassName("D6acbaa")[0].style.display="block";
    document.getElementsByClassName("D6acbaa")[1].style.display="block";
}
function befriendElephant(){
    document.getElementsByClassName("D5acba")[0].style.display="none";
    document.getElementsByClassName("D5acba")[1].style.display="none";
    document.getElementsByClassName("D6acbab")[0].style.display="block";
    document.getElementsByClassName("D6acbab")[1].style.display="block";
}

function aimHead(){
    document.getElementsByClassName("D6acbab")[0].style.display="none";
    document.getElementsByClassName("D6acbab")[1].style.display="none";
    document.getElementsByClassName("D7acbaba")[0].style.display="block";
    document.getElementsByClassName("D7acbaba")[1].style.display="block";
}

function aimTail(){
    document.getElementsByClassName("D6acbab")[0].style.display="none";
    document.getElementsByClassName("D6acbab")[1].style.display="none";
    document.getElementsByClassName("D7acbabb")[0].style.display="block";
    document.getElementsByClassName("D7acbabb")[1].style.display="block";
}

function dragonEnd(){
    document.getElementsByClassName("D7acbabb")[0].style.display="none";
    document.getElementsByClassName("D7acbabb")[1].style.display="none";
    document.getElementsByClassName("D7ccbacb")[0].style.display="none";
    document.getElementsByClassName("D7ccbacb")[1].style.display="none";
    document.getElementsByClassName("dragonEnd")[0].style.display="block";
    document.getElementsByClassName("dragonEnd")[1].style.display="block";
}

function laughOpenly(){
    document.getElementsByClassName("D2b")[0].style.display="none";
    document.getElementsByClassName("D2b")[1].style.display="none";
    document.getElementsByClassName("D3ba")[0].style.display="block";
    document.getElementsByClassName("D3ba")[1].style.display="block";
}

function acceptOffer(){
    document.getElementsByClassName("D2b")[0].style.display="none";
    document.getElementsByClassName("D2b")[1].style.display="none";
    document.getElementsByClassName("D3bb")[0].style.display="block";
    document.getElementsByClassName("D3bb")[1].style.display="block";
}

function goSolo(){
    document.getElementsByClassName("D3bb")[0].style.display="none";
    document.getElementsByClassName("D3bb")[1].style.display="none";
    document.getElementsByClassName("D4bba")[0].style.display="block";
    document.getElementsByClassName("D4bba")[1].style.display="block";
}

function leaveQuietly(){
    document.getElementsByClassName("D3bb")[0].style.display="none";
    document.getElementsByClassName("D3bb")[1].style.display="none";
    document.getElementsByClassName("D3cb")[0].style.display="block";
    document.getElementsByClassName("D3cb")[1].style.display="block";
}

function unspunWool(){
    document.getElementsByClassName("D2c")[0].style.display="none";
    document.getElementsByClassName("D2c")[1].style.display="none";
    document.getElementsByClassName("D3ca")[0].style.display="block";
    document.getElementsByClassName("D3ca")[1].style.display="block";
}

function tradeLute(){
    document.getElementsByClassName("D2c")[0].style.display="none";
    document.getElementsByClassName("D2c")[1].style.display="none";
    document.getElementsByClassName("D4bbb")[0].style.display="none";
    document.getElementsByClassName("D4bbb")[1].style.display="none";
    document.getElementsByClassName("D3cb")[0].style.display="block";
    document.getElementsByClassName("D3cb")[1].style.display="block";
}

function tradeScroll(){
    document.getElementsByClassName("D2c")[0].style.display="none";
    document.getElementsByClassName("D2c")[1].style.display="none";
    document.getElementsByClassName("D4abb")[0].style.display="none";
    document.getElementsByClassName("D4abb")[1].style.display="none";
    document.getElementsByClassName("D3cc")[0].style.display="block";
    document.getElementsByClassName("D3cc")[1].style.display="block";
}

function ironBroadsword(){
    document.getElementsByClassName("D3cb")[0].style.display="none";
    document.getElementsByClassName("D3cb")[1].style.display="none";
    document.getElementsByClassName("D4cba")[0].style.display="block";
    document.getElementsByClassName("D4cba")[1].style.display="block";
}

function infoDragons(){
    document.getElementsByClassName("D3cb")[0].style.display="none";
    document.getElementsByClassName("D3cb")[1].style.display="none";
    document.getElementsByClassName("D4cbb")[0].style.display="block";
    document.getElementsByClassName("D4cbb")[1].style.display="block";
}

function tradeLance(){
    document.getElementsByClassName("D3cc")[0].style.display="none";
    document.getElementsByClassName("D3cc")[1].style.display="none";
    document.getElementsByClassName("D4cca")[0].style.display="block";
    document.getElementsByClassName("D4cca")[1].style.display="block";
}

function tradeMirror(){
    document.getElementsByClassName("D3cc")[0].style.display="none";
    document.getElementsByClassName("D3cc")[1].style.display="none";
    document.getElementsByClassName("D4ccb")[0].style.display="block";
    document.getElementsByClassName("D4ccb")[1].style.display="block";
}

function huntingEast(){
    document.getElementsByClassName("D4ccb")[0].style.display="none";
    document.getElementsByClassName("D4ccb")[1].style.display="none";
    document.getElementsByClassName("D4cbb")[0].style.display="none";
    document.getElementsByClassName("D4cbb")[1].style.display="none";
    document.getElementsByClassName("D5ccba")[0].style.display="block";
    document.getElementsByClassName("D5ccba")[1].style.display="block";
}

function aloneWest(){
    document.getElementsByClassName("D4ccb")[0].style.display="none";
    document.getElementsByClassName("D4ccb")[1].style.display="none";
    document.getElementsByClassName("D5ccbb")[0].style.display="block";
    document.getElementsByClassName("D5ccbb")[1].style.display="block";
}

function useSpear(){
    document.getElementsByClassName("D5ccba")[0].style.display="none";
    document.getElementsByClassName("D5ccba")[1].style.display="none";
    document.getElementsByClassName("D6ccbaa")[0].style.display="block";
    document.getElementsByClassName("D6ccbaa")[1].style.display="block";
}

function useCoil(){
    document.getElementsByClassName("D5ccba")[0].style.display="none";
    document.getElementsByClassName("D5ccba")[1].style.display="none";
    document.getElementsByClassName("D6ccbab")[0].style.display="block";
    document.getElementsByClassName("D6ccbab")[1].style.display="block";
}

function useHandMirror(){
    document.getElementsByClassName("D5ccba")[0].style.display="none";
    document.getElementsByClassName("D5ccba")[1].style.display="none";
    document.getElementsByClassName("D6ccbac")[0].style.display="block";
    document.getElementsByClassName("D6ccbac")[1].style.display="block";
}

function sellPanther(){
    document.getElementsByClassName("D6ccbac")[0].style.display="none";
    document.getElementsByClassName("D6ccbac")[1].style.display="none";
    document.getElementsByClassName("D7ccbaca")[0].style.display="block";
    document.getElementsByClassName("D7ccbaca")[1].style.display="block";
}

function trapDragon(){
    document.getElementsByClassName("D6ccbac")[0].style.display="none";
    document.getElementsByClassName("D6ccbac")[1].style.display="none";
    document.getElementsByClassName("D7ccbacb")[0].style.display="block";
    document.getElementsByClassName("D7ccbacb")[1].style.display="block";
}






//----------------------------------------------------------------------------------------------
//----------------------------- end dragon narrative functions ---------------------------------
//----------------------------------------------------------------------------------------------


function winGame() {
    //If the button, winBoat is clicked. "Hide" the previous elements and "show" the .win elements
    document.getElementById("content").style.display="none";

    //document.getElementById("navigation").style.display="none";
    //document.getElementsByClassName("pa2")[1].style.display="none";
    //document.getElementsByClassName("pa3")[0].style.display="none";
    //document.getElementsByClassName("pa3")[1].style.display="none";
    document.getElementsByClassName("win")[0].style.display="block";
    document.getElementsByClassName("win")[1].style.display="block";
}

function loseGame() {
    //If the button, winBoat is clicked. "Hide" the previous elements and "show" the .win elements
    document.getElementsByClassName("pa2")[0].style.display="none";
    document.getElementsByClassName("pa2")[1].style.display="none";
    document.getElementsByClassName("pa3")[0].style.display="none";
    document.getElementsByClassName("pa3")[1].style.display="none";
    document.getElementsByClassName("lose")[0].style.display="block";
    document.getElementsByClassName("lose")[1].style.display="block";
}

//-------------------------------------------------------------------------------------------------
//------------------------------- PROGRESS BAR ----------------------------------------------------
//-------------------------------------------------------------------------------------------------
var widthD = 0;
function move(increment, reset) {
    if (reset == true){widthD = 0;}
    var elem = document.getElementById("myBarD");
    widthD = widthD + increment; 
    elem.style.width = widthD + '%'; 
    elem.innerHTML = widthD * 1  + '%';
  }

var widthU = 0;
function moveU(increment, reset) {
    if (reset == true){widthU = 0;}
    var elem = document.getElementById("myBarU");
    widthU = widthU + increment; 
    elem.style.width = widthU + '%'; 
    elem.innerHTML = widthU * 1  + '%';
  }
