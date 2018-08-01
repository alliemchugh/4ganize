var response = "test";
//Sign Up
function firstName() {
  var name = document.getElementById("firstname").value;
  localStorage.setItem("first",name)
  location.assign("loggedin.html");
}
function injectName() {
  var hello = document.getElementById("hello");
  var getName = localStorage.getItem("first")
  hello.insertAdjacentHTML("beforeend", "Hello, " + getName + ".")
}
function openNav() {
    document.getElementById("mySidenav").style.width = "250px";
}

function closeNav() {
    document.getElementById("mySidenav").style.width = "0";
}
var button = document.getElementById("button")
var button1 = document.getElementById("button1")
button.style.background='#ccccff ';
button.style.borderColor='#ccccff ';
button1.style.background='#ccccff ';
button1.style.borderColor='#ccccff ';
button2.style.background='#ccccff ';
button2.style.borderColor='#ccccff ';

var content = document.getElementById("javascript")
