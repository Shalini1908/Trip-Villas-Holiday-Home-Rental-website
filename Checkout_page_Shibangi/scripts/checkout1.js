// let per_guest_charge = 2000;

// let cont = document.getElementById("container");

// let div = document.createElement("div");
// div.setAttribute("id", "main");

// let div1 = document.createElement("div");
// div1.setAttribute("id", "div1");

// let starting = document.createElement("h3");
// starting.textContent = "Starting";
// starting.setAttribute("id", "start");

// let price = document.createElement("h1");
// price.textContent = "$PriceValue";
// price.setAttribute("id", "price");

// let prc_per_night = document.createElement("h3");
// prc_per_night.textContent = "per night";
// prc_per_night.setAttribute("id", "ppn");

// div1.append(starting, price, prc_per_night);

// let div2 = document.createElement("div");
// div2.setAttribute("id", "div2");

// let div3 = document.createElement("div");
// let checkin = document.getElementById("checkin");
// let checkout = document.getElementById("checkout");
// div3.append(checkin, checkout);
// div3.setAttribute("id", "div3");

// let div4 = document.createElement("div");
// div4.setAttribute("id", "div4");
// let diamond = document.createElement("img");
// diamond.src =
//   "https://as2.ftcdn.net/v2/jpg/01/61/22/57/1000_F_161225768_oyvTE6fuoP2n0fECXr9rPbu2H20ZBtEp.jpg";
// diamond.setAttribute("id", "diamond");

// //div4.append(selected_g, diamond);

// let h4 = document.createElement("h5");
// h4.textContent = "Rateplan: Morning Breakfast (Continental Plan)";
// h4.setAttribute("id", "h4");

// let div7 = document.createElement("div");
// div7.setAttribute("id", "div7");
// let div5 = document.createElement("div");
// let total = document.createElement("h3");
// total.textContent = "Total";

// let includes = document.createElement("p");
// includes.textContent = "Includes taxes & fees";

// div5.append(total, includes);

// let div6 = document.createElement("div");

// //let gdata = localStorage.getItem("guests", set_guests);

// let total_price = "$local_storage_price_value * gdata * per_guest_charge";

// let view_dtl = document.createElement("p");
// view_dtl.innerText = "View details";
// view_dtl.style.color = "#1e87f0";

// div6.append(total_price, view_dtl);
// div7.append(div5, div6);

// let policy = document.createElement("p");
// policy.innerText = "Stringent Cancellation Policy";
// policy.style.color = "#1e87f0";

// div.append(div1, div2, div3, div4, div7);

// cont.append(div);
























function bookDate_guests() {
  let check_in_dt = document.getElementById("checkin").value;
  let check_out_dt = document.getElementById("checkout").value;
  let selected_g = +document.getElementById("Select_guests").value;
  if (check_in_dt === null || check_out_dt === null || selected_g == null) {
    instantBook_btn.disabled = true;
    div2.disabled = true;
  } else if (
    selected_g == 1 ||
    selected_g == 2 ||
    selected_g == 3 ||
    selected_g == 4 ||
    selected_g == 5
  ) {
    let obj = {
      check_in_dt,
      check_out_dt,
      selected_g,
    };
    localStorage.setItem("booked_dates", JSON.stringify(obj));
  }
  bookDate_guests();



































  // let tick = document.createElement("img");
  // tick.src =
  //   "https://www.freeiconspng.com/thumbs/check-tick-icon/tick-icon-16.png";
  // tick.setAttribute("id", "tick");
  // let p1 = document.createElement("button");
  // p1.textContent = "Your dates are available to book";
  // p1.setAttribute("id", "p");
  // p1.style.color = "#32d296";
  // p1.style.backgroundColor = "#edfbf6";
  // div2.style.backgroundColor = "#edfbf6";
  // div2.append(p1);
  // instantBook_btn.setAttribute("disabled", false);
  // document.getElementById("checkin").value = null;
  // document.getElementById("checkout").value = null;
  // div2.disabled = false;
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
