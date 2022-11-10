
let bookingData = JSON.parse(localStorage.getItem("detail")) || [];

function renderDom(data){


     let booking = document.getElementById("container")
     booking.innerHTML = null;

 
    data.forEach((el) => {

     let card = document.createElement("div");
     card.setAttribute("id","parent");

    let btn_card = document.createElement("div");
    btn_card.setAttribute("id","text");

    let image =  document.createElement("img");
    image.src = el.Image;
    image.style.cursor = "pointer";
 
     card.append(image)
     booking.append(card)

    
    })
    
    }
    
     renderDom(bookingData)