
let userData = JSON.parse(localStorage.getItem("hoteldata")) || []

let  subm=(event)=>{

event.preventDefault()

window.location.reload(true)

let title = document.getElementById("destination").value;

   let image = document.getElementById("villa").value;

   let price = document.getElementById("price").value;
   
   let rating = document.getElementById("rating").value;

   let ac = document.getElementById("ac").value;

   let rooms =document.getElementById("rooms").value;
   
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



let Title =  document.createElement("p");
Title.innerText = ` Destination - ${title}`;
Title.style.color = "white";
Title.style.textAlign = "center"
Title.style.fontFamily = "Segoe UI ,Roboto, Helvetica Neue ,Arial,sans-serif";
Title.style.fontSize = "20px"

let Price =  document.createElement("p");
Price.innerText = ` Booking Price    -  ${price}`;
Price.style.color = "white";
Price.style.textAlign = "center";
Price.style.fontFamily = "Segoe UI ,Roboto, Helvetica Neue ,Arial,sans-serif";
Price.style.fontSize = "20px"


let Rating = document.createElement("p");
Rating.innerText = `Rating  by  guests -  ${rating}` 
Rating.style.color = "white";
Rating.style.textAlign = "center";
Rating.style.PaddingLeft = "100px"
Rating.style.fontFamily = "Segoe UI ,Roboto, Helvetica Neue ,Arial,sans-serif";
Rating.style.fontSize = "20px";


let Rooms =  document.createElement("p");
Rooms.innerText =  `Rooms  Available  -   ${rooms}`;
Rooms.style.color = "white";
Rooms.style.textAlign = "center";
Rooms.style.fontFamily = "Segoe UI ,Roboto, Helvetica Neue ,Arial,sans-serif";
Rooms.style.fontSize = "20px"


let Ac =  document.createElement("p");
Ac.innerText = `Air Conditioner  -   ${ac}`;
Ac.style.color = "white";
Ac.style.textAlign = "center";
Ac.style.fontFamily = "Segoe UI ,Roboto, Helvetica Neue ,Arial,sans-serif";
Ac.style.fontSize = "20px"




card.append(Image,Title,Rooms,Price,Rating,Ac)
booking.append(card);

});
}


renderDom(userData)

 
