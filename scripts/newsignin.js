import getnavbar from "../components/navbar.js";

let nav = document.getElementById("navbarImp");
nav.innerHTML = getnavbar();

let signupls = JSON.parse(localStorage.getItem("signupData")) || [];
let signinls = JSON.parse(localStorage.getItem("signinData")) || [];
console.log(signupls);

let newB_btn = (document.getElementById("newB").onclick = () => {
  let mob = document.getElementById("newMob").value;
  let pwd = document.getElementById("newPass").value;

  let obj = {
    mob,
    pwd,
  };
  console.log(obj);

  for (let i = 0; i < signupls.length; i++) {
    if (signupls[i].mobile === obj.mob && signupls[i].pass === obj.pwd) {
      window.location.href = "./index.html";
      break;
    } else {
      alert("Wrong Credentials");
      break;
    }
  }

  document.getElementById("newMob").value = null;
  document.getElementById("newPass").value = null;
});
