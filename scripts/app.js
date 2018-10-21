// tic tac toe v0.2, revised on 20th October, 2018;

var turn = 0; //is used for checking players turns...
var box = document.getElementsByClassName("box"); // one variable for all nine boxes...
var board = document.getElementById("board");

var modalParent = document.getElementById('modal-container');
var modal = modalParent.getElementsByClassName('custom-modal')[0];

//this function rotates the board randomly ...
function rotateBoard() {
    var rotator = ["transform:rotate(0deg)", "transform:rotate(90deg)", "transform:rotate(180deg)", "transform:rotate(270deg)"];
    board.setAttribute("style", rotator[Math.floor(Math.random() * 4)]);
}

//  this function will check which palyer wins....
//	when we set the value of each X to 2, all winning chances are here like this.
//  result of each row/column/slash is 6 when X wins.
//	
//      6    6    6    6
//      "    "    "  //        
//	    2 |  2  | 2   =  6
//	 -----+-----+----
//	    2 |  2  | 2   =  6
//	 -----+-----+----
//      2 |  2  | 2   =  6
//      
// setting all O to value 5 will make a winning number to 15 from all sides, unless these seven results 
// is equal to 6 or 15 , its a tie match. lets see if the function works or not ....
//
//	   15    15   15   15 
//	    "    "    "  //
//	    5 |  5  | 5    = 15
//	 -----+-----+----
//	    5 |  5  | 5    = 15
//	 -----+-----+----
//      5 |  5  | 5    = 15


// this function handles the win results inside a popup;
var popUpWindow = function (playerImagePosition) {
    modalParent.style.opacity = '1';
    modalParent.style.zIndex = '100';
    modal.style.zIndex = '200';
    if (playerImagePosition === 'tie') {
        modal.getElementsByTagName('h2')[0].innerHTML = "It's a Tie";
    } else {
        modal.getElementsByClassName('player-won')[0].style.backgroundPositionX = playerImagePosition;
    }
    modal.getElementsByTagName('button')[0].addEventListener('click', function () {
        window.location.reload(true);
    });
};

function winCheck() {
    var rowOne
        = parseInt(box[0].dataset.playerType)
        + parseInt(box[1].dataset.playerType)
        + parseInt(box[2].dataset.playerType);
    var rowTwo
        = parseInt(box[3].dataset.playerType)
        + parseInt(box[4].dataset.playerType)
        + parseInt(box[5].dataset.playerType);
    var rowThree
        = parseInt(box[6].dataset.playerType)
        + parseInt(box[7].dataset.playerType)
        + parseInt(box[8].dataset.playerType);
    var colOne
        = parseInt(box[0].dataset.playerType)
        + parseInt(box[3].dataset.playerType)
        + parseInt(box[6].dataset.playerType);
    var colTwo
        = parseInt(box[1].dataset.playerType)
        + parseInt(box[4].dataset.playerType)
        + parseInt(box[7].dataset.playerType);
    var colThree
        = parseInt(box[2].dataset.playerType)
        + parseInt(box[5].dataset.playerType)
        + parseInt(box[8].dataset.playerType);
    var backSlash
        = parseInt(box[0].dataset.playerType)
        + parseInt(box[4].dataset.playerType)
        + parseInt(box[8].dataset.playerType);
    var forwardSlash
        = parseInt(box[2].dataset.playerType)
        + parseInt(box[4].dataset.playerType)
        + parseInt(box[6].dataset.playerType);

    var possibilities = [rowOne, rowTwo, rowThree, colOne, colTwo, colThree, backSlash, forwardSlash];

    // like explained above comments with diagram, any item from the above array should return 1 or 2 if a player
    // wins, it can return 2 because a player can sometimes win from 2 possible lines maximum;
    var xWin = possibilities.filter(scope => scope === 6);
    var oWin = possibilities.filter(scope => scope === 15);
    var tie  = possibilities.filter(scope => isNaN(scope));

    // now take care of who won the game
    if (xWin.length === 1 || xWin.length === 2) {
        popUpWindow('200%');
    } else if (oWin.length === 1 || oWin.length === 2) {
        popUpWindow('100%');
    } else if (tie.length === 0 && xWin.length === 0 && oWin.length === 0) {
        popUpWindow('tie');
    }

}

var turnCheck = function (event) {
    if (event.target.classList.contains('box')) {
        if (event.target.getAttribute('data-player-type') === null) {
            event.target.setAttribute('data-player-type', (turn % 2 === 0) ? 2 : 5);
            event.target.style.backgroundPosition = (turn % 2 === 0) ? '200% 0' : '100% 0';
            turn++;
            winCheck();
        }
    }
};

board.addEventListener('click', turnCheck);

// only for personal portfolio page;
document.body.addEventListener("dblclick", function reload() {
    location.reload(true);
});

// rotate the board when window loads;
rotateBoard();
