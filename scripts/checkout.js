//const url = "https://masai-api.herokuapp.com/hotels/search?city=goa";
let ccs = JSON.parse(localStorage.getItem("checkin_checkout_selectg"));
console.log(ccs);
let bookingData = JSON.parse(localStorage.getItem("detail"));
//console.log(bookingData);

let renderDOM = () => {
  let div = document.getElementById("container4");
  let image = document.createElement("img");

  image.src = bookingData.Image;
  image.setAttribute("id", "hotel_img");

  let div1 = document.createElement("div");
  div1.setAttribute("id", "div1");

  let refernce_id = document.createElement("p");
  refernce_id.innerText = `Property Ref Id ${bookingData.id}`;

  let title = document.createElement("h1");
  title.textContent = bookingData.Title;

  let location = document.createElement("p");
  location.textContent = bookingData.place;
  location.setAttribute("id", "locate");

  let texts = document.createElement("div");
  texts.setAttribute("class", "texts");

  let text1 = document.createElement("p");
  text1.innerText = bookingData.btn_1;

  let text2 = document.createElement("p");
  text2.innerText = bookingData.btn_2;

  let text3 = document.createElement("p");
  text3.innerText = bookingData.btn_3;

  let text4 = document.createElement("p");
  text4.innerText = bookingData.btn_4;
  texts.append(text1, text2, text3, text4);

  div1.append(refernce_id, title, location, texts);
  div.append(image, div1);
};
renderDOM();

let renderDOM2 = () => {
  let container3 = document.getElementById("container3");
  //get the dates data from the local storage

  let chkin = document.createElement("div");
  let checkin_div = document.createElement("h4");
  checkin_div.innerText = ccs.checkindt;
  let txt1 = document.createElement("p");
  txt1.innerText = "Check In";
  chkin.append(checkin_div, txt1);

  let chkout = document.createElement("div");
  let checkout_div = document.createElement("h4");
  checkout_div.innerText = ccs.checkoutdt;
  let txt2 = document.createElement("p");
  txt2.innerText = "Check Out";
  chkout.append(checkout_div, txt2);

  let gsts = document.createElement("div");
  let guest_div = document.createElement("h4");
  guest_div.innerText = ccs.select_g;
  let txt3 = document.createElement("p");
  txt3.innerText = "Guests";
  gsts.append(guest_div, txt3);

  let unit = document.createElement("div");
  let units_div = document.createElement("h4");
  units_div.innerText = "1";
  let txt4 = document.createElement("p");
  txt4.innerText = "Units";
  unit.append(units_div, txt4);

  container3.append(chkin, chkout, gsts, unit);
};
renderDOM2();

let sum = 0;

let sub_total = document.getElementById("sub_total");

let bookedprc = bookingData.price;
sub_total.append(bookedprc);

let dis = document.getElementById("dis");
let dicnt = 500;
dis.append(dicnt);

let tax = document.getElementById("tax");
let taxfee = 2500;
tax.append(taxfee);

let cf = document.getElementById("cf");
let cleanfee = 1000;
cf.append(cleanfee);

let total = document.getElementById("total");
sum = dicnt + taxfee + cleanfee;
console.log(sum);

total.append(sum);


