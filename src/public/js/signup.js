console.log("Signup frontend javascript file");

$(function () {
  $("input").click(function () {
    $(".member-phone").toggle();
  });
});

function validateSignupForm() {
  const memberNick = $(".member-nick").val();
  const memberPhone = $(".member-phone").val();
  const memberPassword = $(".member-password").val();
  const confirmPassword = $("confirm-password").val();

  if (memberNick === "" || memberPhone === "" || memberPassword === "" || confirmPassword === "") {
    alert("please insert all required inputs!");
    return false;
  }
  if (memberPassword !== confirmPassword) {
    alert("password differs, please check!");
    return false;
  }
}
