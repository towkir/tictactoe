

//declaring all used variables at first ....

var counter = Math.random(); //needed for rotating the board...
var turn = 0; //is used for checking players turns...

var box = document.getElementsByClassName("box"); // one variable for all nine boxes...
var board = document.getElementById("board");
var resetButton = document.getElementById("reset");
var exitButton = document.getElementById("exit");
//this function rotates the board randomly ...
function rotateBoard() {
    var rotator = ["transform:rotate(0deg)","transform:rotate(90deg)","transform:rotate(180deg)","transform:rotate(270deg)"];
        board.setAttribute("style", rotator[Math.floor(Math.random()*4)]);
}

//puts them two together to load while window loads.......
function startup() {
    rotateBoard();
}

//  this function will check which palyer wins....
//	when we set the value of each X to 2, wll winning chances are here like this . result of each row/column/slash is 6 when X wins.
//	
//      6    6    6    6
//      "    "    "  //        
//	    2 |  2  | 2   =  6
//	 -----+-----+----
//	    2 |  2  | 2   =  6
//	 -----+-----+----
//      2 |  2  | 2   =  6
//      
// setting all O to value 5 will make a winning number to 15 from all sides, unless this seven result becomes any of 6
// or 15 , its a tie match. lets see if the function works or not ....
//
//	   15    15   15   15 
//	    "    "    "  //
//	    5 |  5  | 5    = 15
//	 -----+-----+----
//	    5 |  5  | 5    = 15
//	 -----+-----+----
//      5 |  5  | 5    = 15


function reload(){
	location.reload(true);
}


function winCheck(){
	var rowOne  	 = box[0].value + box[1].value + box[2].value;
	var rowTwo   	 = box[3].value + box[4].value + box[5].value;
	var rowThree  	 = box[6].value + box[7].value + box[8].value;
	var colOne  	 = box[0].value + box[3].value + box[6].value;
	var colTwo  	 = box[1].value + box[4].value + box[7].value; 
	var colThree 	 = box[2].value + box[5].value + box[8].value;
	var backSlash 	 = box[0].value + box[4].value + box[8].value;
	var forwardSlash = box[2].value + box[4].value + box[6].value;
	
	var X_wins = "X wins the game !";
	var O_wins = "O wins the game !";
	function crawler(){
		
	//this function will check if player X or player O wins or is the game a tie  ......
		if ( rowOne == 6 ) {
			alert(X_wins);
			reload();
		} else if ( rowTwo == 6 ) {
			alert(X_wins);
			reload();
		} else if ( rowTwo == 6 ) {
			alert(X_wins);
			reload();
		} else if ( rowThree == 6 ) {
			alert(X_wins);
			reload();
		} else if ( colOne == 6 ) {
			alert(X_wins);
			reload();
		} else if ( colTwo == 6 ) {
			alert(X_wins);
			reload();
		} else if ( colThree == 6) {
			alert(X_wins);
			reload();
		} else if ( backSlash == 6 ) {
			alert(X_wins);
			reload();
		} else if ( forwardSlash == 6 ) {
			alert(X_wins);
			reload();
		} else {
			if ( rowOne == 15 ) {
				alert(O_wins);
				reload();
			} else if ( rowTwo == 15 ) {
				alert(O_wins);
				reload();
			} else if ( rowThree == 15 ) {
				alert(O_wins);
				reload();
			} else if ( colOne == 15 ) {
				alert(O_wins);
				reload();
			} else if ( colTwo == 15 ) {
				alert(O_wins);
				reload();
			} else if ( colThree == 15 ) {
				alert(O_wins);
				reload();
			} else if ( backSlash == 15 ) {
				alert(O_wins);
				reload();
			} else if ( forwardSlash == 15 ) {
				alert(O_wins);
				reload();
			} else {
				if (
					!isNaN(rowOne) && !isNaN(rowTwo) &&
					!isNaN(rowThree) && !isNaN(colOne) &&
					!isNaN(colTwo) && !isNaN(colThree) &&
					!isNaN(backSlash) && !isNaN(forwardSlash)
					){
						if (
						rowOne != 6 && rowOne != 15 &&
						rowTwo != 6 && rowTwo != 15 &&
						rowThree != 6 && rowThree != 15 &&
						colOne != 6 && colOne != 15 &&
						colTwo != 6 && colTwo != 15 &&
						colThree != 6 && colThree != 15 &&
						backSlash != 6 && backSlash != 15 &&
						forwardSlash != 6 && forwardSlash != 15
						){
						alert("Its a tie");
						reload();
						}	
				
				}
			}
		}
		
	}
	
	if ( ! isNaN(rowOne) ) {
		crawler();		
	} else if ( !isNaN(rowTwo) ) {
		crawler();
	} else if ( !isNaN(rowThree) ) {
		crawler();
	} else if ( !isNaN(colOne) ) {
		crawler();
	} else if ( !isNaN(colTwo) ) {
		crawler();
	} else if ( !isNaN(colThree) ) {
		crawler();
	} else if ( !isNaN(backSlash) ) {
		crawler();
	} else if ( !isNaN(forwardSlash) ) {
		crawler();		
	} else {
		//left empty ....
		
		
	}
	
}

var status_X = '<div class="x"> </div> has played.<br/>' +
'<div style="display:inline;float:left;">It is turn for </div> <div class="o"> </div>';
var status_O = '<div class="o"> </div> is done.<br/>  <div class="x"> </div> will play now ...';
function turnCheck(){		
		if (turn == 0 || turn == 2 || turn == 4 || turn == 6 || turn == 8){   //checks if the boxes are clicked as odd serial or even serial.
			if(this.value == undefined){  //checks if the boxes are clicked double time...
				this.setAttribute("style","background-position: 200% 0");   //sets background image for boxes...
				turn = turn + 1;	//increases the turn number ...
				this.value = 2;		//tells that this box is already clicked ...				
				winCheck();
				document.getElementById("status").innerHTML = status_X;
				
			}
					
		} else { //comes here when turn number is an odd number...
			if (turn<9) { //checks if it is under total turn number ( 9 ) ...
				if (this.value == undefined){  //checks if the boxes are clicked double time...
				this.setAttribute("style","background-position: 100% 0");
				turn = turn + 1;  //increases the turn number ...
				this.value = 5;	  //tells that this box is already clicked ...				
				winCheck();
				document.getElementById("status").innerHTML = status_O;
				}				 
			}
		}
	}
	

//executes function for rotating the mainboard ......
window.addEventListener("load", startup);

//executes check while clicking the boxes ......
for (var i = 0; i<box.length; i++){
    box[i].addEventListener("click", turnCheck);
}

resetButton.addEventListener("click", reload);


//---------------------------------------------------



//======================================================
// functions for drawer opening and closing  -----------

var drawer = "closed";
var drawerPane = document.getElementById("drawer");
var menuButton = document.getElementById("menu");
var gameField = document.getElementById("gamefield");
var resetButton = document.getElementById("reset");

var scoresButton = document.getElementById("scores");
var scoresField = document.getElementById("scoresField");
var settingButton = document.getElementById("settings");
var settingField = document.getElementById("settingsField");
var helpButton = document.getElementById("help");
var helpField = document.getElementById("helpField");
var aboutButton = document.getElementById("about");
var aboutField = document.getElementById("aboutField");
var exitButton = document.getElementById("exit");
var gameButton = document.getElementById("game");

var scores = [scoresButton, scoresField];
var settings = [settingButton, settingField];
var help = [helpButton, helpField];
var about = [aboutButton, aboutField];

var menuItems = [scores, settings, help, about];

var drawerOption = function(){
  if (drawer == "closed"){
  drawerPane.setAttribute("style","left: 0;");
  gameField.setAttribute("style","margin-left:65%;");
  menuButton.setAttribute("style","background-position: -100% 0%;");
  drawer = "opened";
  } else if (drawer == "opened"){
  drawerPane.setAttribute("style","left:-65%;");
  gameField.setAttribute("style","margin-left: 0;");
    menuButton.setAttribute("style","background-position: 0 0;");
  drawer = "closed";
  }
};

menuButton.addEventListener("click", drawerOption);
resetButton.addEventListener("click", reload);
gameButton.addEventListener("click", drawerOption);
menuItems[0][0].addEventListener("click",function showMenu(){menuItems[0][1].setAttribute("style","left:0;");drawerOption()});
menuItems[1][0].addEventListener("click",function showMenu(){menuItems[1][1].setAttribute("style","left:0;");drawerOption()});
menuItems[2][0].addEventListener("click",function showMenu(){menuItems[2][1].setAttribute("style","left:0;");drawerOption()});
menuItems[3][0].addEventListener("click",function showMenu(){menuItems[3][1].setAttribute("style","left:0;");drawerOption()});

function closePopMenu(){
    menuItems[0][1].setAttribute("style","left:100%;");
    menuItems[1][1].setAttribute("style","left:100%;");
    menuItems[2][1].setAttribute("style","left:100%;");
    menuItems[3][1].setAttribute("style","left:100%;");
    
};
var ticks = document.getElementsByClassName("done");
for(i=0;i<ticks.length;i++){
    ticks[i].addEventListener("click",closePopMenu);
}

var exit = function() {
  if (confirm("Are you sure to exit ?")){
    window.close();
  }
}

exitButton.addEventListener("click",exit);