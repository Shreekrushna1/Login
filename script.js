let users = JSON.parse(localStorage.getItem("Users")) || [];

function adminLogout() {
  loginNavigate();
}
function logOut() {
  users = JSON.parse(localStorage.getItem("Users"));
  let actionfind = users.find((item) => item.action === true);

  if (actionfind.action) {
    actionfind.action = false;
  }
  localStorage.setItem("Users", JSON.stringify(users));
  window.location.href = "index.html";
}

function checkData(loginData) {
  if (loginData.username == 0) {
    document.getElementById("error-username").innerHTML =
      "Username is required";
    document.getElementById("error-username").style.color = "red";
    document.getElementById("error-username").style.fontWeight = "bold";
    document.getElementById("username").style.border = "3px solid red";
  } else {
    document.getElementById("username").style.border = "3px solid green";
    document.getElementById("error-username").style.display = "none";
  }
  if (loginData.password == 0) {
    document.getElementById("error-password").innerHTML =
      "password is required";
    document.getElementById("error-password").style.color = "red";
    document.getElementById("error-password").style.fontWeight = "bold";
    document.getElementById("password").style.border = "3px solid red";
  } else {
    document.getElementById("password").style.border = "3px solid green";
    document.getElementById("error-password").style.display = "none";
  }
}
function findUsername() {
  const myUrl2 = new URL(window.location.toLocaleString());
  const urlParams = new URL(myUrl2).searchParams;
  const urname = urlParams.get("userName");
  let currentUserLogin = users.find((item) => item.username === urname);
  if (currentUserLogin) {
    document.getElementById("f-name").innerHTML = currentUserLogin.firstName;
    document.getElementById("l-name").innerHTML = currentUserLogin.lastName;
  } else {
    alert("not matched");
  }
}
function userLogin() {
  let loginData = {
    username: document.getElementById("username").value,
    password: document.getElementById("password").value,
  };
  let loginUser = users.find(
    (item) =>
      item.username === loginData.username &&
      item.password === loginData.password
  );
  if (loginUser) {
    if (loginUser.role === "User") {
      userPanel();
      var uname = loginUser.username;
      var url = "user.html";
      url += "?userName=" + encodeURIComponent(uname);
      window.location.href = url;
      alert("User Log-In Successful");
      loginUser.action = true;
      localStorage.setItem("Users", JSON.stringify(users));
    } else {
      adminPanel();
      alert("Admin Log-In Successful");
    }
  } else {
    alert("User/Admin Not Found");
    checkData(loginData);
  }
}
function validateData(userData) {
  if (userData) {
    let nameFirst;
    let nameLast;
    let userName;
    let email;
    let password;
    let cpassword;
    if (userData.firstName == 0) {
      document.getElementById("error-name").innerHTML =
        "First name is required";
      document.getElementById("error-name").style.color = "red";
      document.getElementById("error-name").style.fontWeight = "bold";
      document.getElementById("f-name").style.border = "3px solid red";
    } else {
      document.getElementById("f-name").style.border = "3px solid green";
      document.getElementById("error-name").style.display = "none";
      nameFirst = 1;
    }
    if (userData.lastName == 0) {
      document.getElementById("error-l-name").innerHTML =
        "last name is required";
      document.getElementById("error-l-name").style.color = "red";
      document.getElementById("error-l-name").style.fontWeight = "bold";
      document.getElementById("l-name").style.border = "3px solid red";
    } else {
      document.getElementById("l-name").style.border = "3px solid green";
      document.getElementById("error-l-name").style.display = "none";
      nameLast = 1;
    }

    if (userData.username == 0) {
      document.getElementById("error-username").innerHTML =
        "Username is required";
      document.getElementById("error-username").style.color = "red";
      document.getElementById("error-username").style.fontWeight = "bold";
      document.getElementById("username").style.border = "3px solid red";
    } else {
      document.getElementById("username").style.border = "3px solid green";
      document.getElementById("error-username").style.display = "none";
      userName = 1;
    }
    if (userData.email == 0) {
      document.getElementById("error-email").innerHTML = "Email is required";
      document.getElementById("error-email").style.color = "red";
      document.getElementById("error-email").style.fontWeight = "bold";
      document.getElementById("email").style.border = "3px solid red";
    } else if (!userData.email.includes("@gmail.com")) {
      document.getElementById("error-email").innerHTML = "Email is Invalid";
      document.getElementById("error-email").style.color = "red";
      document.getElementById("error-email").style.fontWeight = "bold";
      document.getElementById("email").style.border = "3px solid red";
    } else {
      document.getElementById("email").style.border = "3px solid green";
      document.getElementById("error-email").style.display = "none";
      email = 1;
    }
    if (userData.password == 0) {
      document.getElementById("error-password").innerHTML =
        "Password is required";
      document.getElementById("error-password").style.color = "red";
      document.getElementById("error-password").style.fontWeight = "bold";
      document.getElementById("password").style.border = "3px solid red";
    } else {
      document.getElementById("password").style.border = "3px solid green";
      document.getElementById("error-password").style.display = "none";
      password = 1;
    }
    if (userData.cpassword == 0) {
      document.getElementById("error-cpassword").innerHTML =
        "Confirm Password is required";
      document.getElementById("error-cpassword").style.color = "red";
      document.getElementById("error-cpassword").style.fontWeight = "bold";
      document.getElementById("cpassword").style.border = "3px solid red";
    } else if (userData.password !== userData.cpassword) {
      document.getElementById("error-cpassword").innerHTML =
        "Confirm Password Is Not Matched";
      document.getElementById("error-cpassword").style.color = "red";
      document.getElementById("error-cpassword").style.fontWeight = "bold";
      document.getElementById("cpassword").style.border = "3px solid red";
    } else {
      document.getElementById("cpassword").style.border = "3px solid green";
      document.getElementById("error-cpassword").style.display = "none";
      cpassword = 1;
    }
    if (nameFirst && nameLast && userName && email && password && cpassword) {
      if (userData.role === "Admin") {
        window.location.href = "admin.html";
        adminPanel();
        alert("Admin log In Success");
      } else {
        var uname = userData.username;
        var url = "user.html";
        url += "?userName=" + encodeURIComponent(uname);
        window.location.href = url;
        userData.action = true;
        alert("User Log in success");
      }

      users.push(userData);
      localStorage.setItem("Users", JSON.stringify(users));
    }
  }
}
function registerUser() {
  var userData = {
    firstName: document.getElementById("f-name").value,
    lastName: document.getElementById("l-name").value,
    email: document.getElementById("email").value,
    username: document.getElementById("username").value,
    password: document.getElementById("password").value,
    cpassword: document.getElementById("cpassword").value,
    role: document.getElementById("select").value,
    action: false,
  };
  validateData(userData);
}

function registerNavigate() {
  window.location.href = "register.html";
}
function loginNavigate() {
  window.location.href = "index.html";
}
function adminPanel() {
  window.location.href = "admin.html";
}
function userPanel() {
  window.location.href = "user.html";
}
