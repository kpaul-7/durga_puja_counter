var navopenicon = document.querySelector("#mobile_nav_open");
var navbar = document.querySelector(".navbar");
var counter_h2 = document.querySelector(".counter_h2");
var scheduler = document.querySelector(".schedule");
function navopen() {
  navopenicon.classList.add("close");
  navbar.classList.add("nav_menu_open");
}
function navClose() {
  navbar.classList.remove("nav_menu_open");
  navopenicon.classList.remove("close");
}
document
  .querySelector(".mobile_schedule")
  .addEventListener("click", function () {
    scheduler.classList.add("mobile_schedule_open");
  });
document
  .querySelector("#mobile_schedule_close")
  .addEventListener("click", function () {
    scheduler.classList.remove("mobile_schedule_open");
  });

document.querySelector("#mute").addEventListener("click", function () {
  document.querySelector("#mute").style.display = "none";
  document.querySelector("#play").style.display = "block";
  document.querySelector("#audio").play();
});
document.querySelector("#play").addEventListener("click", function () {
  document.querySelector("#play").style.display = "none";
  document.querySelector("#mute").style.display = "block";
  document.querySelector("#audio").pause();
});
calculatetime = () => {
  var pujoDate = new Date("11/01/2022");
  var date2 = new Date();
  var diff = pujoDate.getTime() - date2.getTime();
  const totalseconds = Math.round(diff / 1000);
  let seconds = Math.round(totalseconds % 60);
  const totalminutes = Math.round((totalseconds - seconds) / 60);
  let minutes = Math.round(totalminutes % 60);
  const totalhours = Math.round((totalminutes - minutes) / 60);
  let hours = Math.round(totalhours % 24);
  let days = Math.round(totalhours / 24);
  seconds = seconds < 10 ? "0" + seconds : seconds;
  minutes = minutes < 10 ? "0" + minutes : minutes;
  hours = hours < 10 ? "0" + hours : hours;
  days = days < 10 ? "0" + days : days;
  counter_h2.innerHTML =
    days +
    " days " +
    hours +
    " hours " +
    minutes +
    " minutes " +
    seconds +
    " seconds.";
  setTimeout(() => {
    calculatetime();
  }, 1000);
};
calculatetime();
