document.getElementById("cancel").addEventListener("click",getindex)
    function getindex(){
     window.location.href="./index.html";
      
    };

    let signArr= []
    document
        .getElementById("submit")
        .addEventListener("click", getAlert);

    function getAlert() {
        event.preventDefault()
        window.location.href = './otp.html'
        alert("your OTP is generated");

    }
    

    document.querySelector("#form").addEventListener("click", signup)
    function signup(event) {
        event.preventDefault()  
        let name = document.getElementById("name").value;
        
        let mobile = document.getElementById("mobile").value; 
        
        let singnobj = {
            
            name,
            mobile
        }
        
        localStorage.setItem('getData',JSON.stringify(singnobj))
    }