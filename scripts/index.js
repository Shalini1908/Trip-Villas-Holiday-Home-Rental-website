let dataappend1 = document.getElementById("row6_footer_inner");
let dataappend2 = document.getElementById("row6_footer_inner2");
let dataappend3 = document.getElementById("row6_footer_inner3");
let dataappend4 = document.getElementById("row6_footer_inner4");
let dataappend5 = document.getElementById("row6_footer_inner5");
let dataappend6 = document.getElementById("row6_footer_inner6");

const asia = () => {
  dataappend1.style.display = "block";
  dataappend1.style.display = "grid";
  dataappend1.style.gridTemplate = "columns";
  dataappend2.style.display = "none";
  dataappend3.style.display = "none";
  dataappend4.style.display = "none";
  dataappend5.style.display = "none";
  dataappend6.style.display = "none";
};

const europe = () => {
  dataappend1.style.display = "none";
  dataappend2.style.display = "block";
  dataappend2.style.display = "grid";
  dataappend2.style.gridTemplate = "columns";
  dataappend3.style.display = "none";
  dataappend4.style.display = "none";
  dataappend5.style.display = "none";
  dataappend6.style.display = "none";
};

const NA = () => {
  dataappend1.style.display = "none";
  dataappend2.style.display = "none";
  dataappend3.style.display = "block";
  dataappend3.style.display = "grid";
  dataappend3.style.gridTemplate = "columns";
  dataappend4.style.display = "none";
  dataappend5.style.display = "none";
  dataappend6.style.display = "none";
};

const SA = () => {
  dataappend1.style.display = "none";
  dataappend2.style.display = "none";
  dataappend3.style.display = "none";
  dataappend4.style.display = "block";
  dataappend4.style.display = "grid";
  dataappend4.style.gridTemplate = "columns";
  dataappend5.style.display = "none";
  dataappend6.style.display = "none";
};

const africa = () => {
  dataappend1.style.display = "none";
  dataappend2.style.display = "none";
  dataappend3.style.display = "none";
  dataappend4.style.display = "none";
  dataappend5.style.display = "block";
  dataappend5.style.display = "grid";
  dataappend5.style.gridTemplate = "columns";
  dataappend6.style.display = "none";
};

const oceania = () => {
  dataappend1.style.display = "none";
  dataappend2.style.display = "none";
  dataappend3.style.display = "none";
  dataappend4.style.display = "none";
  dataappend5.style.display = "none";
  dataappend6.style.display = "block";
  dataappend6.style.display = "grid";
  dataappend6.style.gridTemplate = "columns";
};

let search = document.getElementById("search-btn");

search.onclick = () => {
  search_again();
};
let search_again = () => {
  let data_country = document.getElementById("country").value;
  if (data_country == "mumbai") {
    window.location.href = "./";
  } else if (data_country == "goa") {
    window.location.href = "./";
  } else {
    alert("Sorry For Inconvenience this place is not available");
  }
};

let redirect = document.getElementById("goa_redirect");
redirect.onclick = () => {
  window.location.href = "./";
};
