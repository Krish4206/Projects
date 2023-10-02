// The code begins with a console.log() statement that logs the message "Welcome to Tic Tac Toe" to the console.
console.log("Welcome to Tic Tac Toe");

// The code creates instances of the Audio object for three audio files: "gamestart.mp3", "ting.mp3", and "gameover.mp3". These audio files will be used for game sound effects.

let music = new Audio("gamestart.mp3");
let audioTurn = new Audio("ting.mp3");
let gameover = new Audio("gamover.mp3");

// Two variables are declared: turn is set to "X" to represent the current turn in the game, and isgameover is set to false to indicate that the game is not over yet.
let turn = "X";
let isgameover = false;

// The changeTurn() function is defined. It checks the current value of turn and returns "0" if it is "X", or "X" if it is "0". This function is used to toggle the turn between "X" and "0".

//Function to chnage the turn
const changeTurn = () => {
  return turn === "X" ? "0" : "X";
};

// The checkWin() function is defined. It checks for a winning condition by comparing the inner text of certain elements with predefined winning combinations. If a winning condition is met, it updates the game information, sets isgameover to true, and adjusts the size of an image.

//Function to check for a win

// The code selects all elements with the class "box" and assigns them to the boxes variable.


const checkWin = () => {
  let boxtext = document.getElementsByClassName("boxtext");
  let wins = [
    [0, 1, 2],
    [3, 4, 5],
    [6, 7, 8],
    [0, 3, 6],
    [1, 4, 7],
    [2, 5, 8],
    [0, 4, 8],
    [2, 4, 6],
  ];

  // A loop iterates over each element in boxes using the forEach() method. For each element, an event listener is added to listen for a click event. When a box is clicked, if it does not already have inner text, the turn symbol (either "X" or "0") is set, the turn is toggled, the audio effect for the turn is played, and the checkWin() function is called. If the game is not over, the game information is updated to display the next turn.
  wins.forEach((e) => {
    if (
      boxtext[e[0]].innerText === boxtext[e[1]].innerText &&
      boxtext[e[2]].innerText === boxtext[e[1]].innerText &&
      boxtext[e[0]].innerText !== ""
    ) {
      document.querySelector(".info").innerText =
        boxtext[e[0]].innerText + "Won";
      isgameover = true;
      document
        .querySelector(".imgbox")
        .getElementsByTagName("img")[0].style.width = "200px";
    }
  });
};
// The music.play() statement plays the background music.
//Game Logic
music.play();
let boxes = document.getElementsByClassName("box");
Array.from(boxes).forEach((element) => {
  let boxtext = element.querySelector(".boxtext");
  element.addEventListener("click", () => {
    if (boxtext.innerText === "") {
      boxtext.innerText = turn;
      turn = changeTurn();
      audioTurn.play();
      checkWin();
      if (!isgameover) {
        document.getElementsByClassName("info")[0].innerText =
          "Turn for" + turn;
      }
    }
  });
});

// An event listener is added to the "reset" button. When the button is clicked, it resets the inner text of all box elements, sets the turn to "X", sets isgameover to false, updates the game information, and resets the size of the image.
//add onclick listner to reset button
reset.addEventListener("click", () => {
  let boxtext = document.querySelectorAll(".boxtext");
  Array.from(boxtext).forEach((element) => {
    element.innerText = "";
  });
  turn = "X";
  isgameover = false;
  document.getElementsByClassName("info")[0].innerText = "Turn for" + turn;
  document.querySelector(".imgbox").getElementsByTagName("img")[0].style.width =
    "0px";
});

// In summary, the JavaScript code sets up the game logic for Tic Tac Toe. It handles changing turns, checking for a win, playing audio effects, updating the game state, and resetting the game.














