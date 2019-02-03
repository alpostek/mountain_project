document.addEventListener("DOMContentLoaded", function(){

  var menu_icon = document.getElementById("menu_icon")
  menu_icon.addEventListener("click", show)

  function show(){
    var menu = document.getElementById("top_navbar");
     if (menu.className === "navbar") {
       menu.className += " responsive";
     } else {
       menu.className = "navbar";
     }
  }

  var modal = document.getElementById("modalLogin");
  var open_popup = document.getElementById("open_popup");


  function showModal(){
    modalLogin.style.display = "block";
  }

  open_popup.addEventListener("click", showModal);

  window.onclick = function(event) {
  if (event.target == modal) {
    modal.style.display = "none";
  }
}

var form = document.getElementById("form_post");

form.onsubmit = function (e){
  e.preventDefault();
  var login_data = {};
  for (var i = 0, j = form.length; i < j; ++i ){
    var input = form[i];
    if (input.name){
      login_data[input.name] = input.value;
    }
  }

  var post_data = new XMLHttpRequest();
  post_data.open(form.method, form.action, true);

  post_data.setRequestHeader('Content-Type', 'application/json');

  post_data.send(JSON.stringify(login_data));
  console.log(JSON.stringify(login_data));

  post_data.onloadend = function () {
   console.log(this.responseText);
  };
}


  })
