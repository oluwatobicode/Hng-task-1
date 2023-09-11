// NAVBAR

const navbarLinks = document.getElementById("navbar-links");
const openButton = document.getElementById("open");
const closeButton = document.getElementById("close");
const day = document.querySelector(".day-of-the-week");
const utc = document.querySelector(".utc-time-in-milliseconds");
const currentDay = new Date();

openButton.addEventListener("click", function () {
  if ((openButton.style.display = "block")) {
    closeButton.style.display = "block";
    navbarLinks.style.display = "flex";
    openButton.style.display = "none";
  } else {
    console.log("error");
  }
});

closeButton.addEventListener("click", function () {
  if ((closeButton.style.display = "block")) {
    openButton.style.display = "block";
    closeButton.style.display = "none";
    navbarLinks.style.display = "none";
  } else {
    console.log("error");
  }
});

const days = [
  "Sunday",
  "Monday",
  "Tuesday",
  "Wednesday ",
  "Thursday",
  "Friday",
  "Saturday",
];

console.log(days[1]);

day.innerHTML = `${days[currentDay.getDay()]}`;
utc.innerHTML = `${currentDay.getUTCMilliseconds()}`;

AOS.init();
