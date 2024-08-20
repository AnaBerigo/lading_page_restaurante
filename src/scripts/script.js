$(document).ready(function () {
  $("#mobile__btn").on("click", function () {
    $("#mobile__menu").toggleClass("active");
    $("#mobile__btn").find("i").toggleClass("fa-x");
  });
});
