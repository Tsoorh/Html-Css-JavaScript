var player1CubeResult = Math.floor(1 + Math.random() * 6);
console.log("player1CubeResult : " + player1CubeResult);
var player2CubeResult = Math.floor(1 + Math.random() * 6);
console.log("player2CubeResult : " + player2CubeResult);


checkWinner();
setCube(player1CubeResult, 1);
setCube(player2CubeResult, 2);


function checkWinner() {
  if (player1CubeResult > player2CubeResult) {
    document.querySelector("h1").innerHTML = "Player 1 Wins!";
  } else if (player2CubeResult > player1CubeResult) {
    document.querySelector("h1").innerHTML = "Player 2 Wins!";
  } else {
    //equals
    document.querySelector("h1").innerHTML = "Tie! no one Wins!";
  }
}

function setCube(cubeResult, playerNumber) {
  if (playerNumber === 1) {
    var player = document.querySelector(".player1-cube");
    var cubeNumberArray = document.querySelectorAll(".player1-cube .number");
  } else {
    var player = document.querySelector(".player2-cube");
    var cubeNumberArray = document.querySelectorAll(".player2-cube .number");
  }
  if (cubeResult === 1) {
    player.classList.add("align-one");
    for(var i=0  ; i < 6 ;i++){
        if(i===0){
            cubeNumberArray[i].classList.add("visible");
        } else {
            cubeNumberArray[i].classList.add("hidden");
        }
    }
  } else if (cubeResult === 2) {
    for(var i=0  ; i < 6 ;i++){
        if(i===0 || i===1){
            cubeNumberArray[i].classList.add("visible");
        } else {
            cubeNumberArray[i].classList.add("hidden");
        }
    }
  } else if (cubeResult === 3) {
    player.classList.add("align-three-five");
    for(var i=0  ; i < 6 ;i++){
        if(i===0 || i===1 || i===2 ){
            cubeNumberArray[i].classList.add("visible");
            if(i===1){
                cubeNumberArray[i].classList.add("center");
            }
            if(i===2){
                cubeNumberArray[i].classList.add("bottom-right");
            }
        } else {
            cubeNumberArray[i].classList.add("hidden");
        }
    }
  } else if (cubeResult === 4) {
    for(var i=0  ; i < 6 ;i++){
        if(i===0 || i===1 || i===2 ||i===3){
            cubeNumberArray[i].classList.add("visible");
        } else {
            cubeNumberArray[i].classList.add("hidden");
        }
    }
} else if (cubeResult === 5) {
    player.classList.add("align-three-five");
    for(var i=0  ; i < 6 ;i++){
        if(i===0 || i===1 || i===2 || i===3 || i=== 4){
            cubeNumberArray[i].classList.add("visible");
            if(i===1){
                cubeNumberArray[i].classList.add("bottom-right");
            }
            if(i===2){
                cubeNumberArray[i].classList.add("center");
            }
            if(i===3){
                cubeNumberArray[i].classList.add("top-right");
            }
            if(i===4){
                cubeNumberArray[i].classList.add("bottom-left");
            }
        } else {
            cubeNumberArray[i].classList.add("hidden");
        }
    }

  } else { // cube = 6
    var i = 0;
    while (i < 6) {
      cubeNumberArray[i].classList.add("visible");
      i++;
    }
  }
}
