//const url = "https://masai-api.herokuapp.com/hotels/search?city=goa";

let hotels = {
  Title: "Ginger Goa Panjim",
  Images: {
    one: "https://r1imghtlak.mmtcdn.com/bd735e8cff9011e8a6110242ac110003.jpg?&output-quality=75&downsize=910:612&crop=910:612;0,24&output-format=jpg",
    two: "https://r1imghtlak.mmtcdn.com/1c32b6bcf87e11e886bd0242ac110003.jpg?downsize=377:200&crop=377:200",
  },
  Rooms: 19,
  Price: 3700,
  Ac: true,
  Rating: 3.8,
};

let renderDOM = () => {
  let div = document.getElementById("container4");
  let image = document.createElement("img");
  image.src = hotels.Images.one;
  image.setAttribute("id", "hotel_img");
  let div1 = document.createElement("div");
  div1.setAttribute("id", "div1");
  let refernce_id = document.createElement("p");
  refernce_id.innerText = "Property Ref Id #17755154";
  let title = document.createElement("h1");
  title.textContent = hotels.Title;
  let location = document.createElement("p");
  location.textContent = "Candolim, Goa, INDIA";
  let text = document.createElement("p");
  text.innerText =
    "Villa | Accommodates max 11 guests | 4 Bedroom(s) | 4 Bathroom(s)";
  div1.append(refernce_id, title, location, text);
  div.append(image, div1);
};
renderDOM();

let renderDOM2 = () => {
  let container3 = document.getElementById("container3");
  //get the dates data from the local storage

  let chkin = document.createElement("div");
  let checkin_div = document.createElement("h4");
  checkin_div.innerText = "checkin value from LS";
  let txt1 = document.createElement("p");
  txt1.innerText = "Check In";
  chkin.append(checkin_div, txt1);

  let chkout = document.createElement("div");
  let checkout_div = document.createElement("h4");
  checkout_div.innerText = "checkout value from LS";
  let txt2 = document.createElement("p");
  txt2.innerText = "Check Out";
  chkout.append(checkout_div, txt2);

  let gsts = document.createElement("div");
  let guest_div = document.createElement("h4");
  guest_div.innerText = "guests value from LS";
  let txt3 = document.createElement("Guests");
  gsts.append(guest_div, txt3);

  let unit = document.createElement("div");
  let units_div = document.createElement("h4");
  units_div.innerText = "units value from LS";
  let txt4 = document.createElement("p");
  txt4.innerText = "Units";
  unit.append(units_div, txt4);

  container3.append(chkin, chkout, gsts, unit);
};
renderDOM2();

function work() {
  let cc = document.getElementById("country_code").value;
  let mob = document.getElementById("mn").value;
  let otp = document.getElementById("otp").value;
}


