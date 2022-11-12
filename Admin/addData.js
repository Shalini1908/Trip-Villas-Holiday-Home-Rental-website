
let userData = JSON.parse(localStorage.getItem("hoteldata")) || []

// function user (t,i,p,r,a,rs){

//     this.title = t;
//     this.image = i;
//     this.price = p;
//     this.rating= r;
//     this.ac= a;
//     this.rooms = rs;
    
    
//     }

// //form


let  subm=(event)=>{

event.preventDefault()

let title = document.getElementById("title").value;

   let image = document.getElementById("images").value;

   let price = document.getElementById("price").value;
   
   let rating = document.getElementById("rating").value;

   let ac = document.getElementById("ac").value;

   let rooms =document.getElementById("rooms").value;
   
// let users = new user(image,title,price,rating,AC,rooms)
//  console.log(users)
let obj = {

title,
image,
price,
rating,
ac,
rooms



}

 userData.push(obj)
 localStorage.setItem("hoteldata",JSON.stringify(userData))

   }

   

function renderDom(data){

let booking = document.getElementById("append")
booking.innerHTML = null

data.forEach(({image,title,price,rating,rooms,ac}) => {
    
let card = document.createElement("div");
card.setAttribute("id","hotel");

let Image =  document.createElement("img");
Image.src = image;



let Title =  document.createElement("h4");
Title.innerText = title;
Title.style.color = "white";
Title.style.textAlign = "center"

let Price =  document.createElement("p");
Price.innerText = `Price    -  ${price}`;
Price.style.color = "white";
Price.style.textAlign = "center"


let Rating = document.createElement("p");
Rating.innerText = `Rating   -  ${rating}` 
Rating.style.color = "white";
Rating.style.textAlign = "center"


let Rooms =  document.createElement("p");
Rooms.innerText =  `Rooms    -   ${rooms}`;
Rooms.style.color = "white";
Rooms.style.textAlign = "center"


let Ac =  document.createElement("p");
Ac.innerText = `AC  -   ${ac}`;
Ac.style.color = "white";
Ac.style.textAlign = "center"




card.append(Image,Title,Rooms,Price,Rating,Ac)
booking.append(card);

});
}


renderDom(userData)

 
