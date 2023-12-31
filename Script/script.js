function toggleMenu() {
  var menu = document.getElementById("menu");
  var menuBtn = document.querySelector(".menu-btn");
  var body = document.body;

  menu.classList.toggle("show-menu");
  if (menu.classList.contains("show-menu")) {
    menuBtn.style.display = "none";
    body.classList.add("menu-opened");
  } else {
    menuBtn.style.display = "block";
    body.classList.remove("menu-opened");
  }

  var menuItems = document.querySelectorAll(".menu-btn");
  menuItems.forEach(function (item) {
    item.addEventListener("click", function () {
      menu.classList.remove("show-menu");
    });
  });
}

function validateform() {
  var name = document.forms["feedbackform"]["name"].value;
  var email = document.forms["feedbackform"]["email"].value;
  var phone = document.forms["feedbackform"]["phone"].value;
  var message = document.forms["feedbackform"]["message"].value;
  if (name == "" || email == "" || phone == "" || message == "") {
    alert("please fill the form completely.");
  } else {
    window.open("../html/thankyou.html");
  }
}
