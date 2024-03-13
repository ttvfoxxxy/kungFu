// KF Panda Search

// HTML variables
// let charNameEl = document.getElementById("char-name").value.toLowerCase();
// let charQuoteEl = document.getElementById("char-quote");
// Button Event Listenener
document.getElementById("btn").addEventListener("click", btnClicked);
document.getElementById("theme-btn").addEventListener("click", themeBtnClicked);
// function themeBtnClicked() {
//  let themeIn = document.getElementById("theme-in").value;
//  themeIn.toLowerCase().value;
//   if (themeIn === "dark" || themeIn === "black") {
//   Body.style.backgroundcolor = "rgba(0 , 0, 0, 0.7)";
// } else if (themeIn === "light" || themeIn === "white") {
//  Body.style.backgroundcolor = "rgba(255 , 255 , 255 , 0.7)";
function btnClicked() {
  let name = document.getElementById("char-in").value.toLowerCase();

  if (name === "po" || name === "dragon warrior" || name === "kung fu panda") {
    document.getElementById("char-name").innerHTML = "Po";
    document.getElementById("char-quote").innerHTML =
      " Buddy , I am the Dragon Warrior! ";
    document.getElementById("char-img").src = "img/po.png";
  } else if (name === "tigress" || name === "master tigress") {
    document.getElementById("char-name").innerHTML = "Tigress";
    document.getElementById("char-quote").innerHTML = " That was hardcore! ";
    document.getElementById("char-img").src = "img/tigress.png";
  } else if (name === "mantis") {
    document.getElementById("char-name").innerHTML = "Mantis";
    document.getElementById("char-quote").innerHTML = " Fear the Bug! ";
    document.getElementById("char-img").src = "img/mantis.png";
  } else if (name === "viper") {
    document.getElementById("char-name").innerHTML = "Viper";
    document.getElementById("char-quote").innerHTML =
      " I dont need to bite to fight! ";
    document.getElementById("char-img").src = "img/viper.png";
  } else {
    console.log("?");
    document.getElementById("char-name").innerHTML = "????";
    document.getElementById("char-quote").innerHTML = " ------- ";
    document.getElementById("char-img").src = "img/question-mark.png";
  }
}

function themeBtnClicked() {
  let themeIn = document.getElementById("theme-in").value;
  let matRan1 = Math.ceil(Math.random() * 255);
  let matRan2 = Math.ceil(Math.random() * 255);
  let matRan3 = Math.ceil(Math.random() * 255);
  themeIn.toLowerCase().value;
  if (themeIn === "dark" || themeIn === "black") {
    document.getElementById("body").style.color = "white";
    document.getElementById("body").style.background = "rgba(0 , 0, 0, 0.7)";
  } else if (themeIn === "white" || themeIn === "light") {
    document.getElementById("body").style.color = "black";
    document.getElementById("body").style.background =
      " rgba(255 , 255 , 255 , 0.7)";
  } else if (themeIn === "random" || themeIn === "Random") {
    let randomColor = `rgb(${matRan1},${matRan2},${matRan3})`;
    let randomFontColor = `rgb(${matRan3},${matRan1},${matRan2})`;
    body.style.background = `${randomColor}`;
    div.style.color = `${randomFontColor}`;
    body.style.color = `${randomFontColor}`;
  }
}

// rgba(255 , 255 , 255 , 0.7)
