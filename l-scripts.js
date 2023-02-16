// login authentication using callback functions
function Login(Validate) {
  let username = document.getElementById("username").value;
  let password = document.getElementById("password").value;
  Validate(username, password);
}

function Validate(uname, pwd) {
  if (uname == "admin" && pwd == "12345") {
    alert("Valid Login creditals...!");

    document.querySelector("form").action = "To-Do-List.html";
  } else {
    alert("Please enter valid login detials !!");
  }
}

function LoginValidate() {
  Login(Validate);
}

// AJAX call to fetch api

function display() {
  const xhr = new XMLHttpRequest();
  xhr.onreadystatechange = function () {
    if (xhr.readyState == 4 && xhr.status == 200) {
      let myobj = JSON.parse(this.responseText);
      TableSet(myobj);
    }
  };
  xhr.open("GET", "https://jsonplaceholder.typicode.com/todos", true);
  xhr.send();
}

function TableSet(obj) {
  document.getElementById("TodoBtn").style.display = "none";
  let table1 = "<tr><th>TITLE</th><th>STATUS</th></tr>";
  for (let i = 0; i < obj.length; i++) {
    table1 += "<tr>";
    if (obj[i].completed == true) {
      table1 +=
        "<td>" +
        obj[i].title +
        "</td><td><input type=checkbox checked disabled></td>";
    } else {
      table1 +=
        "<td>" +
        obj[i].title +
        "</td><td><input type=checkbox id=checking onclick=checkcounter()></td>";
    }
    table1 += "</tr>";
  }
  table1 += "</table>";
  document.getElementById("TableList").innerHTML = table1;
}

// Couting the checkboxes with promise

function checkcounter() {
  let checked = document.querySelectorAll(
    'input[id="checking"]:checked'
  ).length;
  PromiseCount(checked);
}

function PromiseCount(val) {
  let Myprom = new Promise(function (resolve, reject) {
    if (val == 5) {
      resolve(val);
    } else {
      reject(val);
    }
  });

  Myprom.then(
    function (value) {
      alert("congrats" + value + "Tasks have been Successfully Completed");
    },
    function (error) {
      console.log(error + "completed");
    }
  );
}
