function Login(){
    const e = "QA_Team@hexaware.com";
    const p = "Hexaware123";
    var email = document.getElementById("exampleInputEmail1").value;
    var pass = document.getElementById("exampleInputPassword1").value;

    if(email == e && pass == p){
        window.open("./actions.html","_self");
    }else{
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
    var password = document.getElementById("password").value;
    var verify = document.getElementById("verifyPass").value;

    if (password == "" || verify == "") {
        alert("empty input");
    } else {
        if (password == verify) {
            alert("Password Matching");
        } else {
            alert("Password not match");
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

    if(email != ""
    && gender != "" 
    && selectedOption != ""){
        window.open("./newWindow.html");
    }else{
        alert("Missing fields in Form");
    }
    
});



$('#draggable').draggable();
