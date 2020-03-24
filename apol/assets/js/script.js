function openTab(tabName,elmnt) {
  var i, tabcontent, tablinks;
  tabcontent = document.getElementsByClassName("tabcontent");
  for (i = 0; i < tabcontent.length; i++) {
    if(tabName!=tabcontent[i].id){
      tabcontent[i].style.display = "none";
    }
    else{
      tabcontent[i].style.display = "block";
    }
  }

  tablinks = document.getElementsByClassName("tablink");
  for (i = 0; i < tablinks.length; i++) {
    tablinks[i].className="tablink";
  }
  elmnt.className="tablink active";
}

window.onload = function() {
  var tablinks = document.getElementsByClassName("tablink");
  var tabcontent = document.getElementsByClassName("tabcontent");
  console.log(tablinks.length)
  for (i = 0; i < tablinks.length; i++) {
    if(tablinks[i].className=="tablink active"){
      tabcontent[i].style.display = "block";
    }
    else{
      tabcontent[i].style.display = "none";
    }

  }
};

function togglePW(){
  document.querySelector('.eye').classList.toggle('slash');
  var x = document.getElementById("psw");
  var y = document.getElementById("conf");
  if (x.type === "password" || y.type === "password") {
    x.type = "text";
    y.type = "text";
  } else {
    x.type = "password";
    y.type = "password";
  }
}