let per_guest_charge = 2000;

let cont = document.getElementById("container");

let div = document.createElement("div");
div.setAttribute("id", "main");

let div1 = document.createElement("div");
div1.setAttribute("id", "div1");

let starting = document.createElement("h3");
starting.textContent = "Starting";
starting.setAttribute("id", "start");

let price = document.createElement("h1");
price.textContent = "$PriceValue";
price.setAttribute("id", "price");

let prc_per_night = document.createElement("h3");
prc_per_night.textContent = "per night";
prc_per_night.setAttribute("id", "ppn");

div1.append(starting, price, prc_per_night);

let div2 = document.createElement("div");
div2.setAttribute("id", "div2");
// icon_alert.src =
//   "https://as1.ftcdn.net/v2/jpg/03/08/40/00/1000_F_308400098_B4iQBlb5Bc0vZFnZbcnzorrTWQTIW0jY.jpg";
// icon_alert.setAttribute("id", "icon_alert");
// let p = document.createElement("h4");
// p.textContent = "Select dates";
// p.setAttribute("id", "p");
// p.style.color = " #f0506e";
// div2.append(icon_alert, p);
// div2.style.backgroundColor = "#fef4f6";

let div3 = document.createElement("div");
div3.setAttribute("id", "div3");
let check_in = document.createElement("input");
check_in.setAttribute("id", "checkin");
check_in.setAttribute("type", "date");

let check_out = document.createElement("input");
check_out.setAttribute("id", "checkout");
check_out.setAttribute("type", "date");
div3.append(check_in, check_out);

let div4 = document.createElement("div");
div4.setAttribute("id", "div4");
let diamond = document.createElement("img");
diamond.src =
  "https://as2.ftcdn.net/v2/jpg/01/61/22/57/1000_F_161225768_oyvTE6fuoP2n0fECXr9rPbu2H20ZBtEp.jpg";
diamond.setAttribute("id", "diamond");

let selected_g = document.getElementById("Select_guests");
selected_g.onchange = () => {
  selectG();
};
let selectG = () => {
  //   console.log("ok");
  let selected_g = +document.getElementById("Select_guests").value;
  if (selected_g === null) {
    let division7 = document.getElementById("div7");
    division7.setAttribute("disabled", true);
  } else if (
    selected_g == 1 ||
    selected_g == 2 ||
    selected_g == 3 ||
    selected_g == 4 ||
    selected_g == 5
  ) {
    let division7 = document.getElementById("div7");
    division7.setAttribute("disabled", false);
    let set_guests = selected_g;
    localStorage.setItem("guests", set_guests);
  }
};

div4.append(selected_g, diamond);

let h4 = document.createElement("h5");
h4.textContent = "Rateplan: Morning Breakfast (Continental Plan)";
h4.setAttribute("id", "h4");

let div7 = document.createElement("div");
div7.setAttribute("id", "div7");
let div5 = document.createElement("div");
let total = document.createElement("h3");
total.textContent = "Total";

let includes = document.createElement("p");
includes.textContent = "Includes taxes & fees";

div5.append(total, includes);

let div6 = document.createElement("div");

//let gdata = localStorage.getItem("guests", set_guests);

let total_price = "$local_storage_price_value * gdata * per_guest_charge";

let view_dtl = document.createElement("p");
view_dtl.innerText = "View details";
view_dtl.style.color = "#1e87f0";

div6.append(total_price, view_dtl);
div7.append(div5, div6);

let instantBook_btn = document.createElement("button");
instantBook_btn.innerText = "INSTANT BOOK";
instantBook_btn.setAttribute("id", "instantBook_btn");
// instantBook_btn.setAttribute("disabled", true);

let policy = document.createElement("p");
policy.innerText = "Stringent Cancellation Policy";
policy.style.color = "#1e87f0";

div.append(div1, div2, div3, div4, div7, instantBook_btn);

cont.append(div);

// let selectG = () => {
//   console.log("ok");
//   let selected_g = +document.getElementById("Select_guests").value;
//   if (selected_g == null) {
//     let division5 = document.getElementById("div5");
//     division5.setAttribute("disabled", true);
//   } else if (
//     selected_g == 1 ||
//     selected_g == 2 ||
//     selected_g == 3 ||
//     selected_g == 4 ||
//     selected_g == 5
//   ) {
//     let division5 = document.getElementById("div5");
//     division5.setAttribute("disabled", false);
//     let set_guests = selected_g;
//     localStorage.setItem("guests", set_guests);
//   }
// };

let check_in_dt = document.getElementById("checkin").value;
let check_out_dt = document.getElementById("checkout").value;

if (check_in_dt === null && check_out_dt === null) {
  instantBook_btn.setAttribute.disabled
} else {
  let obj = {
    check_in_dt,
    check_out_dt,
  };
  localStorage.setItem("booked_dates", JSON.stringify(obj));

  let tick = document.createElement("img");
  tick.src =
    "https://www.freeiconspng.com/thumbs/check-tick-icon/tick-icon-16.png";
  tick.setAttribute("id", "tick");
  let p1 = document.createElement("button");
  p1.textContent = "Your dates are available to book";
  p1.setAttribute("id", "p");
  p1.style.color = "#32d296";
  div2.style.backgroundColor = "#edfbf6";
  div2.append(tick, p1);
  //instantBook_btn.setAttribute("disabled", false);
  document.getElementById("checkin").value = null;
  document.getElementById("checkout").value = null;

  instantBook_btn.onclick = () => {
    book();
  };
}

function book() {
  console.log("ok");
  window.location.href = "checkout.html";
}

// let previous_btn = document.getElementById("previous");
// const previousBtn = () => {
//   if (page === 1) {
//     previous_btn.disabled = true;
//   }
//   page--;
//   next_btn.disabled = false;
//   getData(page);
// };
