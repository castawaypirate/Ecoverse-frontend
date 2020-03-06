function togglePW(){
  document.querySelector('.eye').classList.toggle('slash');
  var x = document.getElementById("psw");
  var y = document.getElementById("conf");
  if (x.type === "password" || y.type === "password") {
    x.type = "text";
    y.type = "text"
  } else {
    x.type = "password";
    y.type = "password"
  }
}