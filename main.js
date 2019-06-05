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
        var dif = fecha2.diff(fecha1,'days');

        if(dif < 0)
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
    return(document.getElementById('result').innerHTML);
}
function add(key) { 
    var result = getResult();
    if (result!='0' || isNaN(key)) setResult(result + key);
    else setResult(key);
}
function calc() {
    var result = eval(getResult()); 
    setResult(result);
}
function del() { 
    setResult(0);
}

