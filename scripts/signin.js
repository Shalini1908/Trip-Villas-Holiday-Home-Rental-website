document.querySelector('#signup').addEventListener('click',login)
 
function login(){
    window.location.href = 'signup.html'
}
let loginData = JSON.parse(localStorage.getItem('getData')) || [];
console.log(loginData)


let signedIn = (event) => {
    event.preventDefault()

    let logmobile=document.getElementById("mobile").value

    

    function logalert(){
        if(logmobile==loginData.mobile){
            alert("Login Successful")
            window.location.href="./index.html"
        }
    }
     logalert();
}