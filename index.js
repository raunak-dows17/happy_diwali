AOS.init();

function yes() {
  document.querySelector(".yes").style.display = "none";
  document.querySelector(".no").style.display = "none";
  document.querySelector(".nameInput").style.display = "unset";
  document.querySelector(".please").style.display = "none";
}

function no() {
  document.querySelector(".yes").style.display = "none";
  document.querySelector(".no").style.display = "none";
  document.querySelector(".please").style.display = "unset";
}

function submit() {
  document.querySelector(".main2").style.display = "unset";
  document.querySelector(".main").style.display = "none";
  let username = document.querySelector(".name").value;

  setTimeout(() => {
    document.querySelector(".preloader").style.display = "none";
    document.querySelector(".message").innerHTML =
      "<h2 data-aos='zoom-in' data-aos-delay='700'>Happy Diwali " + username + " 🥳 </h2>";
  }, 2000);
  // console.log(username);
}

setInterval(() => {
  let date = new Date();
  let hours = date.getHours() > 12 ? date.getHours() - 12 : date.getHours();
  let am_pm = date.getHours() >= 12 ? "PM" : "AM";
  hours = hours < 10 ? "0" + hours : hours;
  let minutes =
    date.getMinutes() < 10 ? "0" + date.getMinutes() : date.getMinutes();
  let seconds =
    date.getSeconds() < 10 ? "0" + date.getSeconds() : date.getSeconds();
  time = hours + ":" + minutes + ":" + seconds + " " + am_pm;
  let lblTime = document.querySelector(".clock");
  lblTime.innerHTML = time;
}, 1000);

function randomBorder() {
  let red = Math.floor(Math.random() * 256) + 69;
  let green = Math.floor(Math.random() * 256) + 69;
  let blue = Math.floor(Math.random() * 256) + 69;

  let border = `rgb(${red}, ${green}, ${blue})`;

  document.querySelector(".clock").style.border = `2px solid ${border}`;
}
