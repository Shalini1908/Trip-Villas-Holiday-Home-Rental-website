setTimeout(function(){
    let ind =document.getElementById("currency")
    let dropdown=document.getElementById("allCurr")
    ind.addEventListener("click",function()
    {
        dropdown.style.display="grid"
    
    })
    let call = document.querySelectorAll(".opt")
    call.forEach(ele =>{
        ele.addEventListener("click",function(){
            let name=ele.innerText;
            document.getElementById("india").innerText=name;
            setTimeout(function(){
                dropdown.style.display="none" 
            },1000);
        })
    })
    let sign=document.getElementById("sign")
    let signin=document.getElementById("signin")
    signin.addEventListener("click",function(){
        sign.style.display="block"
    })
   
},3000)

    let sign=document.getElementById("sign")
    let sign1=document.getElementById("signin_page")
    let sign2=document.getElementById("signup_page")
    sign1.addEventListener("click",function(){
        setTimeout(function(){
            sign.style.display="none"
        },1000)
    })
    sign2.addEventListener("click",function(){
        setTimeout(function(){
            sign.style.display="none"
        },1000)
    })

let l=0;
document.querySelector("#signin_page").addEventListener("click", function(){
    if (l==0) {
        document.querySelector("#sigin").classList.add("flag");
        document.querySelector(".signup_div").classList.remove("opendiv");
        document.querySelector("#sign").style.display="none"
        l=1;
    } else {
        document.querySelector("#sigin").classList.remove("flag");
        l=0;
    }
})

let n=0;
document.querySelector("#signup_page").addEventListener("click", function(){
    if (n==0){
        document.querySelector(".signup_div").classList.add("opendiv");
        document.querySelector("#sigin").classList.remove("flag");
        n=1;
    } else {
        document.querySelector(".signup_div").classList.remove("opendiv");
        n=0;
    }
})

document.querySelector(".signup_submit").addEventListener("click", function(event){
    event.preventDefault();
    let name=document.querySelector("#name")
    localStorage.setItem("username",name.value);
    document.querySelector(".otp_verify").classList.add("opendiv_otp");
    document.querySelector(".signup_div").classList.remove("opendiv");
    n=0;
    
})

    
document.querySelector(".submit_otp").addEventListener("click",gotosignup)
function gotosignup(){
    let otp=document.getElementById("otp").value
    if(otp==1234){
        let name=localStorage.getItem("username");
        document.querySelector("#name1").innerText=name;
        document.querySelector(".otp_verify").classList.remove("opendiv_otp");
       alert("Signup Successful")
    }else{
        alert("wrong Credential")
        
    }
}
document.querySelector('#cancel').addEventListener('click',login)

function login(){
 window.location.href = 'signup.html'
}