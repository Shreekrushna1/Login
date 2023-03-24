let users = [];
function Login() {
  users = JSON.parse(localStorage.getItem("Users"));
  let b = {
    username: document.getElementById("username").value,
    password: document.getElementById("password").value,
  };
  console.log(JSON.parse(localStorage.getItem("Users")));
  let loginUser = users.find(
    (item) => item.username === b.username && item.password === b.password
  );
  if (loginUser && loginUser.role === "User") {
    UserPanel();
    alert("User Log-in Successful");
  } else if (loginUser && loginUser.role === "Admin") {
    AdminPanel();
    alert("Admin Log-In Successful");
  } else {
    alert("User/Admin Not Found");
  }
}



function Register() {
  let a = {
    firstName: document.getElementById("f-name").value,
    lastName: document.getElementById("l-name").value,
    email: document.getElementById("email").value,
    username: document.getElementById("username").value,
    password: document.getElementById("password").value,
    cpassword: document.getElementById("cpassword").value,
    role: document.getElementById("select").value,
  };
   

  // if (users.find((item) => item.username === a.username)) {
  //   alert("Username Already Taken");
  // }else if(a.role==="Admin"){
  //   console.log(a);
  //   users.push(a);
  //   localStorage.setItem("Users", JSON.stringify(users));
  //   window.location.href = "admin.html";
  // }else {
  //   console.log(a);
  //   users.push(a);
  //   localStorage.setItem("Users", JSON.stringify(users));
  //   window.location.href = "user.html";
  // }
}
function RegisterNavigate() {
  window.location.href = "register.html";
}
function LoginNavigate() {
  window.location.href = "index.html";
}
function AdminPanel() {
  window.location.href = "admin.html";
}
function UserPanel() {
  window.location.href = "user.html";
}
