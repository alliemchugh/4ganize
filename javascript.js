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

// var content = document.getElementById("javascript")
