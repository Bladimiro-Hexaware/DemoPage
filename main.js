$("#QATitle").attr("title", "Hover the title of each cards to get instructions of what to do");
$("#validateTitle").attr("title", "This card validate the two words in the inputs boxes");
$("#textModalTitle").attr("title", "Type any text. The Clear button will empty the text area and the Done button will open a modal with the written text");
$("#formModal").attr("title", "Complete the form to open a new window");
$("#pageCommentsTitle").attr("title", "Type any comment you have about the page (not required)");
$("#emailTitle").attr("title", "Type a valid email address (required)");
$("#rangeTitle").attr("title", "Move the range (not required)");
$("#dragandDropTitle").attr("title", "Drag the Hexaware Logo into the green area");
$("#rangeTitle").attr("title", "Move the range (not required)");
$("#knowledgeTitlte").attr("title", "Select all the technologies that you domain and press the button Ok");
$("#mapsTitle").attr("title", "Click on the button to open a modal with a location inside an iFrame");
$("#hobbies").attr("title", "Select all your hobbies");


function calculateDays() {
    var days = document.getElementById("datepicker").value;
    var d = new Date();
    var month = d.getMonth() + 1;
    var day = d.getDate();
    var output = d.getFullYear() + '-' +
        (month < 10 ? '0' : '') + month + '-' +
        (day < 10 ? '0' : '') + day;


    if (days != "") {
        var fecha1 = moment(days);
        var fecha2 = moment(output);
        var dif = fecha2.diff(fecha1, 'days');

        if (dif < 0)
            dif = dif * -1;

        $("#selectedDate").text(dif + " days left for your birthday");
    }
    else
        $("#selectedDate").text("Specify a date");

}

function readSelect() {
    var values = $(".domtopics").val();
    $(".selectOutput").val(values)
}

function Login() {
    const e = "QA_Team@hexaware.com";
    const p = "Hexaware123";
    var email = document.getElementById("exampleInputEmail1").value;
    var pass = document.getElementById("exampleInputPassword1").value;

    if (email == e && pass == p) {
        window.open("./actions.html", "_self");
    } else {
        alert("Invalid Data");
    }
}

function allowDrop(ev) {
    ev.preventDefault();
}

function drag(ev) {
    ev.dataTransfer.setData("text", ev.target.id);
}

function drop(ev) {
    ev.preventDefault();
    var data = ev.dataTransfer.getData("text");
    ev.target.appendChild(document.getElementById(data));
}

function Validate() {
    var label = $("#valid").text("");
    var password = $("#password").val();
    var verify = $("#verifyPass").val();

    if (password == "" || verify == "") {
        label.text("Empty values");
    } else {
        if (password == verify) {
            label.text("Password Matched");
        } else {
            label.text("Password not match");
        }
    }
}

function Clear() {
    document.getElementById("areaText").value = "";
}

function Done() {
    var texto = document.getElementById("areaText").value;
    document.getElementById("text").innerHTML = texto;
}


document.getElementById("userData").addEventListener("submit", function (event) {
    event.preventDefault();

    email = document.getElementById("exampleFormControlInput1").value;
    var radios = document.getElementsByName("exampleRadios");
    for (var i = 0; i < radios.length; i++) {
        if (radios[i].checked) {
            gender = radios[i].value;
        }
    }
    var select = document.getElementById("inputGroupSelect01");
    var selectedOption = select[select.selectedIndex].value;

    review = document.getElementById("exampleFormControlTextarea1").value;

    if (email != ""
        && gender != ""
        && selectedOption != "") {
        window.open("./newWindow.html");
    } else {
        alert("Missing fields in Form");
    }

});

function setResult(value) {
    document.getElementById('result').innerHTML = value;
}
function getResult() {
    return (document.getElementById('result').innerHTML);
}
function add(key) {
    var result = getResult();
    if (result != '0' || isNaN(key)) setResult(result + key);
    else setResult(key);
}
function calc() {
    var result = eval(getResult());
    setResult(result);
}
function del() {
    setResult(0);
}






// We need to use jQuery for the following:

var player1 = 'Player 1'//prompt("Player One: Enter Your Name , you will be Blue");
var player1Color = 'rgb(86, 151, 255)';

var player2 = 'Player 2'//prompt("Player Two: Enter Your Name, you will be Red");
var player2Color = 'rgb(237, 45, 73)';

var game_on = true;
var table = $('.board tr');

// http://stackoverflow.com/questions/6139407/getting-td-by-index-with-jquery
function reportWin(rowNum,colNum) {
  console.log("You won starting at this row,col");
  console.log(rowNum);
  console.log(colNum);
}
// Change the color of a button
function changeColor(rowIndex,colIndex,color) {
  return table.eq(rowIndex).find('td').eq(colIndex).find('button').css('background-color',color);
}

// Report Back to current color of a button
function returnColor(rowIndex,colIndex) {
  return table.eq(rowIndex).find('td').eq(colIndex).find('button').css('background-color');
}

// Take in column index, returns the bottom row that is still gray
function checkBottom(colIndex) {
  var colorReport = returnColor(5,colIndex);
  for (var row = 5; row > -1; row--) {
    colorReport = returnColor(row,colIndex);
    if (colorReport === 'rgb(128, 128, 128)') {
      return row
    }
  }
}

// Check to see if 4 inputs are the same color
function colorMatchCheck(one,two,three,four){
  return (one===two && one===three && one===four && one !== 'rgb(128, 128, 128)' && one !== undefined);
}

// Check for Horizontal Wins
function horizontalWinCheck() {
  for (var row = 0; row < 6; row++) {
    for (var col = 0; col < 4; col++) {
      if (colorMatchCheck(returnColor(row,col), returnColor(row,col+1) ,returnColor(row,col+2), returnColor(row,col+3))) {
        console.log('horiz');
        reportWin(row,col);
        return true;
      }else {
        continue;
      }
    }
  }
}

// Check for Vertical Wins
function verticalWinCheck() {
  for (var col = 0; col < 7; col++) {
    for (var row = 0; row < 3; row++) {
      if (colorMatchCheck(returnColor(row,col), returnColor(row+1,col) ,returnColor(row+2,col), returnColor(row+3,col))) {
        console.log('vertical');
        reportWin(row,col);
        return true;
      }else {
        continue;
      }
    }
  }
}

// Check for Diagonal Wins
function diagonalWinCheck() {
  for (var col = 0; col < 5; col++) {
    for (var row = 0; row < 7; row++) {
      if (colorMatchCheck(returnColor(row,col), returnColor(row+1,col+1) ,returnColor(row+2,col+2), returnColor(row+3,col+3))) {
        console.log('diag');
        reportWin(row,col);
        return true;
      }else if (colorMatchCheck(returnColor(row,col), returnColor(row-1,col+1) ,returnColor(row-2,col+2), returnColor(row-3,col+3))) {
        console.log('diag');
        reportWin(row,col);
        return true;
      }else {
        continue;
      }
    }
  }
}

// Game End
function gameEnd(winningPlayer) {
  for (var col = 0; col < 7; col++) {
    for (var row = 0; row < 7; row++) {
        $('h3').fadeOut('fast');
        $('h2').fadeOut('fast');
        $('h1').text(winningPlayer+" has won! Refresh your browser to play again!").css("fontSize", "50px")
    }
  }
}

// Start with Player One
var currentPlayer = 1;
var currentName = player1;
var currentColor = player1Color;

// Start with Player One
$('.init').text(player1+": it is your turn, please pick a column to drop your blue chip.");

$('.board button').on('click',function() {

  // Recognize what column was chosen
  var col = $(this).closest("td").index();

  // Get back bottom available row to change
  var bottomAvail = checkBottom(col);

  // Drop the chip in that column at the bottomAvail Row
  changeColor(bottomAvail,col,currentColor);

  // Check for a win or a tie.
  if (horizontalWinCheck() || verticalWinCheck() || diagonalWinCheck()) {
    gameEnd(currentName);
  }

  // If no win or tie, continue to next player
  currentPlayer = currentPlayer * -1 ;

  // Re-Check who the current Player is.
  if (currentPlayer === 1) {
    currentName = player1;
    $('.init').text(currentName+": it is your turn, please pick a column to drop your blue chip.");
    currentColor = player1Color;
  }else {
    currentName = player2
    $('.init').text(currentName+": it is your turn, please pick a column to drop your red chip.");
    currentColor = player2Color;
  }

})


