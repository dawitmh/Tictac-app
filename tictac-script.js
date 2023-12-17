var orgiboard;
const hubplayer = "o";
const aiplayer ="x";
const Wincombos = [
    [0,1,2]
    [3,4,5]
    [6,7,8]
    [0,3,6]
    [0,4,7]
    [2,5,8]
    [0,4,8]
    [6,4,2]
]
const cells = document.querySelectorAll(".cell")
startgame()
function  startgame(){
    document.querySelector(".endgame").computedStyleMap.display = "none";
    orgiboard = Array.from(Array(9).keys());
    console.log(orgiboard)
}