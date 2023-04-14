let users = JSON.parse(localStorage.getItem("Users")) || [];
let books = JSON.parse(localStorage.getItem("Books")) || [];

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






// Books




function createBook(){
  var bookData={
    bookName:document.getElementById("bname").value,
    authorName:document.getElementById("aname").value,
    bookPrice:document.getElementById("bprice").value,
    bookDescription:document.getElementById("descrip").value,
    bookBuy:[]
  }
  validateBookData(bookData);
  
}

function validateBookData(bookData){
  books = JSON.parse(localStorage.getItem("Books"))|| [];
  if (bookData) {
    let bookN;
    let authorN;
    let bookP;
    let bookD;
    if (bookData.bookName === 0) {
      document.getElementById("error-bname").innerHTML =
        "Book name is required";
      document.getElementById("error-bname").style.color = "red";
      document.getElementById("error-bname").style.fontWeight = "bold";
      document.getElementById("bname").style.border = "3px solid red";
    }
    else if(books.find((item)=>item.bookName===bookData.bookName)){
      document.getElementById("error-bname").innerHTML =
        "Book Name is Already Stored";
      document.getElementById("error-bname").style.color = "red";
      document.getElementById("error-bname").style.fontWeight = "bold";
      document.getElementById("bname").style.border = "3px solid red";
    } 
    else {
      document.getElementById("bname").style.border = "3px solid green";
      document.getElementById("error-bname").style.display = "none";
      bookN = 1;
    }
    if (bookData.authorName == 0) {
      document.getElementById("error-aname").innerHTML =
        "Author name is required";
      document.getElementById("error-aname").style.color = "red";
      document.getElementById("error-aname").style.fontWeight = "bold";
      document.getElementById("aname").style.border = "3px solid red";
    } else {
      document.getElementById("aname").style.border = "3px solid green";
      document.getElementById("error-aname").style.display = "none";
      authorN = 1;
    }
    if (bookData.bookPrice == 0) {
      document.getElementById("error-bprice").innerHTML =
        "Book price is required";
      document.getElementById("error-bprice").style.color = "red";
      document.getElementById("error-bprice").style.fontWeight = "bold";
      document.getElementById("bprice").style.border = "3px solid red";
    } else {
      document.getElementById("bprice").style.border = "3px solid green";
      document.getElementById("error-bprice").style.display = "none";
      bookP = 1;
    }
    if (bookData.bookDescription == 0) {
      document.getElementById("error-descrip").innerHTML =
        "Book Description is required";
      document.getElementById("error-descrip").style.color = "red";
      document.getElementById("error-descrip").style.fontWeight = "bold";
      document.getElementById("descrip").style.border = "3px solid red";
    } else {
      document.getElementById("descrip").style.border = "3px solid green";
      document.getElementById("error-descrip").style.display = "none";
      bookD = 1;
    }
    if (bookN && authorN && bookP && bookD===1) {
      successAlert(bookData); 
      }
      
    }
}
function successAlert(bookData){
  Swal.fire({
    title: 'success',
    text: 'Book Details Are Saved',
    icon: 'success',
  }).then(() => {
    var uname = bookData.bookName;
        var url = "admin.html";
        url += "?bookName=" + encodeURIComponent(uname);
        window.location.href = url;
          books.push(bookData);
          localStorage.setItem("Books", JSON.stringify(books));
});
}
function onLoadAdmin() {
  let bookNames = JSON.parse(localStorage.getItem("Books"));
  const tbody = document.querySelector("tbody");
      bookNames.forEach((item)=>{
      if(item){
        tbody.innerHTML+=`
        <tr>
        <td>${item.bookName}</td>
        <td>${item.authorName}</td>
        <td>${item.bookPrice}</td>
        <td>${item.bookDescription}</td>
        <td>${item.bookBuy}</td>
        `
      }
      })
}
function onLoad() {
  const myUrl2 = new URL(window.location.toLocaleString());
  const urlParams = new URL(myUrl2).searchParams;
  let findd = books.map((item) => { return item.bookName });
  const username = urlParams.get("userName");
  const tbody = document.querySelector("tbody");
  const select = document.getElementById("select");
  let findUser = books.map((item) => {
    if (item.bookBuy.includes(username)) {
      return item;
    }
  });

  findd.forEach((item) => {
    if (item) {
      const option = document.createElement("option");
      option.value = item;
      option.textContent = item;
      select.appendChild(option);
    }
  });

  findUser.forEach((item) => {
    if (item) {
      tbody.innerHTML += `
      <tr>
      <td>${item.bookName}</td>
      <td>${item.authorName}</td>
      <td>${item.bookPrice}</td>
      <td>${item.bookDescription}</td>
      </tr>
      `
    }
  });
}

function purchaseBook(){
  books = JSON.parse(localStorage.getItem("Books"));
  const myUrl2 = new URL(window.location.toLocaleString());
  const urlParams = new URL(myUrl2).searchParams;
  const username = urlParams.get("userName");  
  let selectedData={
    buyedBook:document.getElementById("select").value,
    findBooks:books.find((item)=>{return item.bookBuy}),
    usernameKey:username
  }
  if(selectedData.buyedBook==="none"){
    Swal.fire({
      title: 'error',
      text: 'You Not Selected Any Book',
      icon: 'error',
    });
  }
  else{
    let selectedBook = books.find((book) => book.bookName === selectedData.buyedBook);
    if (selectedBook && selectedBook.bookBuy.includes(selectedData.usernameKey)) {
      Swal.fire({
        title: 'error',
        text: 'You Already Purchased This Book',
        icon: 'error',
      });
    }
    else {
      Swal.fire({
        title: 'Are you sure?',
        text: "You want to buy this book",
        icon: 'warning',
        showCancelButton: true,
        confirmButtonColor: '#3085d6',
        cancelButtonColor: '#d33',
        confirmButtonText: 'Yes, I confirm!'
      }).then((result) => {
        if (result.isConfirmed) {
          let selectedBook = books.find((book) => book.bookName === selectedData.buyedBook);
          if (selectedBook) {
            selectedBook.bookBuy.push(selectedData.usernameKey);
            localStorage.setItem("Books", JSON.stringify(books));
          }
          Swal.fire(
            'Buyed Success!',
            'Your Book is Buyed Successfully',
            'success'
          )
        }
      })
    }
  }
}
  