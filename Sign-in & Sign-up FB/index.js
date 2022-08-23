let form = document.getElementById("form_sign-in");
let email = "phongka@gmail.com";
let password = "123123412345";
console.log(form);
form.onsubmit = function (event) {
  event.preventDefault();
  if (form.email.value == "") {
    document.getElementById("error-email").innerHTML =
      "Email nhập chưa chính xác hoặc bỏ trống";
  }
  if (form.password.value == "") {
    document.getElementById("error-password").innerHTML =
      "Password nhập chưa chính xác hoặc bỏ trống";
  }
  if (form.email.value !== "" || form.password.value !== "") {
    if (form.email.value !== email) {
      document.getElementById("error-email").innerHTML =
        "Email nhập chưa chính xác hoặc bỏ trống";
    }
    if (form.password.value !== password) {
      document.getElementById("error-password").innerHTML =
        "Password nhập chưa chính xác hoặc bỏ trống";
    }
  }
  //   if (form.email.value == email && form.password.value == password) {
  //     document.getElementById("errorPassword").innerHTML =
  //       "Đăng nhập thành công ";
  //   }
  return;
};

let form2 = document.getElementById("form2");
form2.onsubmit = function (event) {
  event.preventDefault();
  if (form2.email.value == "") {
  }
};
