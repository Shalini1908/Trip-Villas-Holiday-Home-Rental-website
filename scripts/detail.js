let bookingData = JSON.parse(localStorage.getItem("detail"));
let values = JSON.parse(localStorage.getItem("checkin_checkout_selectg"));

function renderDom(data) {
  let box1 = document.getElementById("box1");
  box1.innerHTML = null;

  let box2 = document.getElementById("box2");
  box2.innerHTML = null;

  let booking = document.getElementById("container");
  booking.innerHTML = null;

  let box = document.createElement("div");
  box.setAttribute("class", "adding");

  let card = document.createElement("div");
  card.setAttribute("id", "parent");

  let btn_card = document.createElement("div");
  btn_card.setAttribute("id", "text");

  let image = document.createElement("img");
  image.src = data.Image;
  image.style.cursor = "pointer";

  let title = document.createElement("h4");
  title.innerText = data.Title;
  title.style.marginTop = "40px";
  title.style.color = "#262626";
  title.style.cursor = "pointer";
  title.style.fontSize = "35px";

  let lct_plc = document.createElement("div");
  lct_plc.setAttribute("class", "lct_plc");
  let location_icon = document.createElement("img");
  location_icon.src =
    "https://as1.ftcdn.net/v2/jpg/01/37/16/18/1000_F_137161878_Ka9d9KIVySbkf2VrFGZl5auZciBcO7zY.jpg";

  location_icon.setAttribute("class", "lctn_icon");

  let place = document.createElement("p");
  place.innerText = data.place;
  place.style.marginTop = "20px";
  place.style.cursor = "pointer";

  let rt_sv = document.createElement("div");
  rt_sv.setAttribute("id", "rt_sv");

  let rating_txt = document.createElement("h4");
  rating_txt.innerText = bookingData.rating;
  rating_txt.setAttribute("id", "rating_txt");

  let seeReview = document.createElement("h4");
  seeReview.innerText = "See Reviews";
  seeReview.setAttribute("class", "seereview");

  let btn_1 = document.createElement("button");
  btn_1.innerText = data.btn_1;
  btn_1.style.padding = "0 15px";
  btn_1.style.lineHeight = "28px";
  btn_1.style.fontSize = ".875rem";
  btn_1.style.cursor = "pointer";
  btn_1.style.marginRight = "20px";
  btn_1.style.backgroundColor = "transparent";
  btn_1.style.color = "blue";
  btn_1.style.border = "1px solid blue";

  let btn_2 = document.createElement("button");
  btn_2.innerText = data.btn_2;
  btn_2.style.padding = "0 15px";
  btn_2.style.lineHeight = "28px";
  btn_2.style.fontSize = ".875rem";
  btn_2.style.cursor = "pointer";
  btn_2.style.marginRight = "20px";
  btn_2.style.backgroundColor = "transparent";
  btn_2.style.color = "blue";
  btn_2.style.border = "1px solid blue";

  let btn_3 = document.createElement("button");
  btn_3.innerText = data.btn_3;
  btn_3.style.padding = "0 15px";
  btn_3.style.lineHeight = "28px";
  btn_3.style.fontSize = ".875rem";
  btn_3.style.cursor = "pointer";
  btn_3.style.marginRight = "20px";
  btn_3.style.backgroundColor = "transparent";
  btn_3.style.color = "blue";
  btn_3.style.border = "1px solid blue";

  let btn_4 = document.createElement("button");
  btn_4.innerText = data.btn_4;
  btn_4.style.padding = "0 15px";
  btn_4.style.lineHeight = "28px";
  btn_4.style.fontSize = ".875rem";
  btn_4.style.cursor = "pointer";
  btn_4.style.marginRight = "20px";
  btn_4.style.backgroundColor = "transparent";
  btn_4.style.color = "blue";
  btn_4.style.border = "1px solid blue";

  card.append(image);

  box1.append(card);
  lct_plc.append(location_icon, place);
  rt_sv.append(rating_txt, seeReview);
  btn_card.append(title, lct_plc, rt_sv, btn_1, btn_2, btn_3, btn_4);
  box2.append(btn_card);
  box.append(card, btn_card);

  booking.append(box);
}

renderDom(bookingData);

let h1 = (document.getElementById(
  "show_price"
).innerHTML = `₹ ${bookingData.price}`);

let book_btn = document.getElementById("request_to_book");

book_btn.onclick = () => {
  let checkindt = document.getElementById("checkin").value;
  let checkoutdt = document.getElementById("checkout").value;
  let select_g = +document.getElementById("choose_guests").value;

  if (checkindt === "" && checkoutdt === "") {
    return;
  } else {
    let obj = {
      checkindt,
      checkoutdt,
      select_g,
    };
    localStorage.setItem("checkin_checkout_selectg", JSON.stringify(obj));
    window.location.href = "checkout.html";
  }
};

let sum = 0;
let no_of_guests = values.select_g;

let perhead = 2000;

sum = bookingData.price * no_of_guests * perhead;

let price_in_rs = document.getElementById("price_in_rs");
price_in_rs.innerText = `₹${sum}`;

let ref_no = document.getElementById("ref_no");
ref_no.innerText = bookingData.id;

let villa_nm_div = document.querySelector(".villa_nm");
villa_nm_div.innerText = bookingData.btn_1;

let no_bed = document.getElementById("no_bed");
no_bed.innerText = `${bookingData.btn_2}'S`;

let no_bath = document.getElementById("no_bath");
no_bath.innerText=`${bookingData.btn_3}'S`
