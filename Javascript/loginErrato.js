$(function () {
    var overlay = $('<div id="overlay"></div>');
    overlay.show();
    overlay.appendTo(document.body);
    $(".popup").show();
    $(".close").click(function () {
      window.location.href = "login.html";
      return false;
    });
    $(".close").click(function () {
      window.location.href = "login.html";
      overlay.appendTo(document.body).remove();
      return false;
    });
  });