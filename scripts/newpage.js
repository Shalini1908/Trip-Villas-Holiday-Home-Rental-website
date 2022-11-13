import getnavbar from "../components/navbar.js";

let nav = document.getElementById("navbarImp");
nav.innerHTML = getnavbar();

let signupls = JSON.parse(localStorage.getItem("signupData")) || []

let newB_btn = document.getElementById("newB").addEventListener("click",signedup)
function signedup() {
    let name = document.getElementById("firstN").value;
    let lastname = document.getElementById("lastN").value;
    let mobile = document.getElementById("newMob").value;
    let email = document.getElementById("newMail").value;
    let pass = document.getElementById("newPass").value;


    if(name == "" || lastname == "" || email == "" || pass == "" || mobile == ""){
        
        return;
    }else{
        let obj = {
            name,
            lastname,
            mobile,
            email,
            pass
        }
    signupls.push(obj);

    localStorage.setItem("signupData",JSON.stringify(signupls));

    window.location.href="./newsignin.html";
    
    }
    
    document.getElementById("firstN").value = null;
    document.getElementById("lastN").value = null;
    document.getElementById("newMob").value = null;
    document.getElementById("newMail").value = null;
    document.getElementById("newPass").value = null;

}