
//const NINE_HOURS_MILLISECONDS = 32400000;
const clock = document.querySelector(".clock");

function getTime() {
  
  const xmasDay = new Date("2020-12-24:00:00:00+0900");
  const now = new Date();
  const count = xmasDay - now;

  /*
  second = 1000;
  minutes = 1000*60;
  hour = 1000*60*60
  day = 1000*60*60*24
  */

  let days = Math.floor(count / (1000 * 60 * 60 * 24));
  let hours = Math.floor((count / (1000 * 60 * 60)) % 24);
  let minutes = Math.floor((count / (1000 * 60)) % 60);
  let seconds = Math.floor((count / 1000) % 60);

  clock.innerText = `${days < 10 ? `0${days}` : days}d ${
    hours < 10 ? `0${hours}` : hours
  }h ${minutes < 10 ? `0${minutes}` : minutes}m ${
    seconds < 10 ? `0${seconds}` : seconds
  }s`;
}

function init() {
  getTime();
  setInterval(getTime, 1000);
}
init();
