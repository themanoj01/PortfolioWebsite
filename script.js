function toggleMenu() {
  var menu = document.getElementById("menu");
  menu.classList.toggle("show-menu");
}

document.addEventListener("click", function (event) {
  var menu = document.getElementById("menu");
  var menuBtn = document.getElementById("menu-btn");

  if (!menu.contains(event.target) && !menuBtn.contains(event.target)) {
    menu.classList.remove("show-menu");
  }
});

function validateform() {
  var name = document.forms["feedbackform"]["name"].value;
  var email = document.forms["feedbackform"]["email"].value;
  var phone = document.forms["feedbackform"]["phone"].value;
  var message = document.forms["feedbackform"]["message"].value;
  if (name == "" || email == "" || phone == "" || message == "") {
    alert("please fill the form completely.");
  } else {
    alert("Thank you for your feedback.");
  }
}
