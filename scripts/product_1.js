import ProductData from "../Data/data1.js";
let product_array = ProductData;

import getnavbar from "../components/navbar.js";

let navbar = document.getElementById("navbar").innerHTML = getnavbar();

localStorage.setItem("detail",JSON.stringify(product_array))

function renderDom(data) {

    let box1 = document.createElement("div");
    box1.innerHTML = null;
    box1.setAttribute("id","box1")

    let box2 = document.createElement("div");
    box2.innerHTML = null;
    box2.setAttribute("id","box2")

  

    let booking = document.getElementById("container")
    booking.innerHTML = null;


    data.forEach((el) => {

        let box = document.createElement("div");
        box.setAttribute("class", "adding");

        box.onclick = () => {

            boxing(el)
        }


        let card = document.createElement("div");
        card.setAttribute("id", "parent");

        let btn_card = document.createElement("div");
        btn_card.setAttribute("id", "text");

        let image = document.createElement("img");
        image.src = el.Image;
        image.style.cursor = "pointer";

        let ref = document.createElement("p");
        ref.innerText = ` Ref Id - ${el.id}`;
        ref.style.marginTop = "4px";

        let title = document.createElement("h4");
        title.innerText = el.Title;
        title.style.marginTop = "20px"
        title.style.color = "#262626";
        title.style.cursor = "pointer";
        title.style.fontSize = "18px";

        let place = document.createElement("p");
        place.innerText = el.place;
        place.style.marginTop = "20px";
        place.style.cursor = "pointer";

        let btn_1 = document.createElement("button");
        btn_1.innerText = el.btn_1;
        btn_1.style.padding = "0 15px";
        btn_1.style.lineHeight = "28px";
        btn_1.style.fontSize = ".875rem";
        btn_1.style.cursor = "pointer";
        btn_1.style.marginRight = "20px";
        btn_1.style.backgroundColor = "transparent";
        btn_1.style.color = "#333";
        btn_1.style.border = "1px solid #1e87f0";

        let btn_2 = document.createElement("button");
        btn_2.innerText = el.btn_2;
        btn_2.style.padding = "0 15px";
        btn_2.style.lineHeight = "28px";
        btn_2.style.fontSize = ".875rem";
        btn_2.style.cursor = "pointer";
        btn_2.style.marginRight = "20px";
        btn_2.style.backgroundColor = "transparent";
        btn_2.style.color = "#333";
        btn_2.style.border = "1px solid #1e87f0";



        let btn_3 = document.createElement("button");
        btn_3.innerText = el.btn_3
        btn_3.style.padding = "0 15px";
        btn_3.style.lineHeight = "28px";
        btn_3.style.fontSize = ".875rem";
        btn_3.style.cursor = "pointer";
        btn_3.style.marginRight = "20px";
        btn_3.style.backgroundColor = "transparent";
        btn_3.style.color = "#333";
        btn_3.style.border = "1px solid #1e87f0";



        let btn_4 = document.createElement("button");
        btn_4.innerText = el.btn_4;
        btn_4.style.padding = "0 15px";
        btn_4.style.lineHeight = "28px";
        btn_4.style.fontSize = ".875rem";
        btn_4.style.cursor = "pointer";
        btn_4.style.marginRight = "20px";
        btn_4.style.backgroundColor = "transparent";
        btn_4.style.color = "#333";
        btn_4.style.border = "1px solid #1e87f0";



        let price = document.createElement("h4");
        price.innerText = ` ₹ ${el.price} per night`;
        price.style.marginTop = "20px";
        price.style.color = "#262626";
        price.style.cursor = "pointer";
       
        let rating = document.createElement("p");
        rating.innerText = el.rating;
        rating.style.marginTop = "20px";
        rating.style.color = "#1e87f0";
        rating.style.cursor = "pointer";



        card.append(image)

        box1.append(card)
        btn_card.append(ref, title, place, btn_1, btn_2, btn_3, btn_4, price,rating)
        box2.append(btn_card);
        box.append(card, btn_card)



        booking.append(box)


    })

}

renderDom(product_array)


let boxing = (el) => {

    localStorage.setItem("detail", JSON.stringify(el));
    window.location.href = "detail.html";
}


 
document.getElementById("ac").addEventListener("click", ac_filt);

function ac_filt() {

  var product_array = JSON.parse(localStorage.getItem("detail")) || [];
  let f1 = product_array.filter(function (el) {
    return el.btn_2 == "AC";
  });
 
  renderDom(f1)

}


document.getElementById("nonac").addEventListener("click", nonac_filt);

function nonac_filt() {

  var product_array = JSON.parse(localStorage.getItem("detail")) || [];
  let f1 = product_array.filter(function (el) {
    return el.btn_2 == "NON AC";
  });
 
  renderDom(f1)

}


let sort_lth = document.getElementById("app");

sort_lth.onclick = () => {
  var product_array = JSON.parse(localStorage.getItem("detail")) || [];
 

  product_array.sort((a, b) => a.price - b.price);

  localStorage.setItem("detail", JSON.stringify(product_array));
  renderDom(product_array)
};

let sort_htl = document.getElementById("mod");

sort_htl.onclick = () => {
  var product_array = JSON.parse(localStorage.getItem("detail")) || [];

  product_array.sort((a, b) => b.price - a.price);

  localStorage.setItem("detail", JSON.stringify(product_array));
  renderDom(product_array)
};






