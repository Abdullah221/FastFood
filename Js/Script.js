function login(){
    let username = document.getElementById("INPUT-TEXT").value;
    let password = document.getElementById("INPUT-PASSWORD").value;
    let correctname = "Abdullah";
    let correctPassword = "LA58@";
    let correctname2 = "Hashim Malik", password2 = "HM36@"
    if (username == correctname && password == correctPassword || username == correctname2 && password == password2) {
        window.location.href="main.html";
    }else {
        alert("Please Enter Correct Username or Password");
    }
}