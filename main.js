const slides = document.querySelectorAll(".slide");
const arrows = document.querySelectorAll(".arrow");
const arrowLeft = document.getElementById("left");
const arrowRight = document.getElementById("right");
const contador = document.querySelector(".contador");
let currentSlide = 0;

showSlide(currentSlide);

function showSlide(index) {
  slides.forEach((slide) => {
    slide.classList.remove("active");
  });

  const body = document.body;

  if (slides[index] === slides[0]) {
    arrowLeft.style.display = "none";
    arrowRight.style.display = "none";
  }
  // else {
  //   arrowLeft.style.display = "block";
  // }

  slides[index].classList.add("active");

  if (slides[index] === slides[1]) {
    contador.style.display = "block";
    slides[index].style.height = "90%";
    slides[index].style.top = "49%";
    body.style.overflow = "hidden";
    arrowLeft.style.display = "none";
  }

  if (slides[index] === slides[2]) {
    contador.style.display = "block";
    slides[index].style.height = "90%";
    slides[index].style.top = "49%";
    body.style.overflow = "hidden";
    arrowLeft.style.display = "none";
  }

  if (slides[index] === slides[3]) {
    contador.style.display = "block";
    slides[index].style.height = "90%";
    slides[index].style.top = "49%";
    body.style.overflow = "hidden";
    arrowLeft.style.display = "none";
  }

  if (slides[index] === slides[4]) {
    contador.style.display = "block";
    slides[index].style.height = "90%";
    slides[index].style.top = "49%";
    body.style.overflow = "hidden";
    arrowLeft.style.display = "none";
  }

  if (slides[index] === slides[5]) {
    contador.style.display = "block";
    slides[index].style.height = "90%";
    slides[index].style.top = "49%";
    body.style.overflow = "hidden";
    arrowLeft.style.display = "none";
  }

  if (slides[index] === slides[6]) {
    contador.style.display = "block";
    slides[index].style.height = "90%";
    slides[index].style.top = "49%";
    body.style.overflow = "hidden";
    arrowLeft.style.display = "none";
  }

  if (slides[index] === slides[7]) {
    contador.style.display = "block";
    slides[index].style.height = "90%";
    slides[index].style.top = "49%";
    body.style.overflow = "hidden";
    arrowLeft.style.display = "none";
  }

  if (slides[index] === slides[8]) {
    contador.style.display = "block";
    slides[index].style.height = "90%";
    slides[index].style.top = "49%";
    body.style.overflow = "hidden";
    arrowLeft.style.display = "none";
  }

  if (slides[index] === slides[9]) {
    contador.style.display = "block";
    slides[index].style.height = "90%";
    slides[index].style.top = "49%";
    body.style.overflow = "hidden";
    arrowLeft.style.display = "none";
  }

  if (slides[index] === slides[10]) {
    contador.style.display = "block";
    slides[index].style.height = "90%";
    slides[index].style.top = "49%";
    body.style.overflow = "hidden";
    arrowLeft.style.display = "none";
  }

  if (slides[index] === slides[11]) {
    contador.style.display = "block";
    slides[index].style.height = "90%";
    slides[index].style.top = "49%";
    body.style.overflow = "hidden";
    arrowLeft.style.display = "none";
  }

  if (slides[index] === slides[12]) {
    body.style.overflow = "scroll";
    contador.style.display = "block";
    slides[index].style.height = "100%";
    slides[index].style.top = "60%";
    arrowLeft.style.display = "none";
    contador.style.bottom = "10px";
  }

  if (slides[index] === slides[13]) {
    contador.style.display = "block";
    slides[index].style.top = "60%";
    arrowLeft.style.display = "none";
    arrowRight.style.display = "block";
    contador.style.bottom = "10px";
  }

  if (slides[index] === slides[14]) {
    contador.style.display = "block";
    slides[index].style.height = "90%";
    slides[index].style.top = "60%";
    arrowLeft.style.display = "none";
    arrowRight.style.display = "block";
    contador.style.bottom = "10px";
  }

  if (slides[index] === slides[slides.length - 1]) {
    arrowRight.style.display = "block";
  }
}

arrows.forEach((arrow) => {
  arrow.addEventListener("click", () => {
    if (arrow.classList.contains("arrow-left")) {
      currentSlide--;
      if (currentSlide < 0) {
        currentSlide = slides.length - 1;
      }
    } else if (arrow.classList.contains("arrow-right")) {
      currentSlide++;
      if (currentSlide === slides.length) {
        currentSlide = 0;
      }
    }

    showSlide(currentSlide);
  });
});

const startButton = document.querySelector(".header-button");
const header = document.querySelector(".header");
const passwordContainer = document.querySelector(".password-container");

startButton.addEventListener("click", () => {
  passwordContainer.classList.add("active");
  header.style.filter = "blur(5px)";
});

const buttonNo = document.querySelector(".no");
const buttonYes = document.querySelector(".yes");
const signPad = document.getElementById("signature-pad");
const sign = document.querySelector(".sign");
const tratoContainer = document.querySelector(".trato-container");
const saveButton = document.getElementById("save");

buttonYes.addEventListener("click", () => {
  sign.style.display = "block";
  tratoContainer.style.marginTop = "20px";
  window.scrollTo({
    top: document.body.scrollHeight,
    behavior: "smooth",
  });
});

saveButton.addEventListener("click", () => {
  arrowRight.style.display = "block";
  window.scrollTo({
    top: 0,
    behavior: "smooth",
  });
});

let scale = 1;

buttonNo.addEventListener("click", () => {
  scale += 0.1;
  buttonYes.style.transform = `scale(${scale})`;
  if (scale >= 2) {
    buttonNo.style.display = "none";
  }
});

function overflowOn() {
  document.body.style.overflow = "scroll";
}

// canvas

var canvas = document.getElementById("signature-pad");
var ctx = canvas.getContext("2d");

// Variables to hold touch position
var touchX, touchY;
var isDrawing = false;

// Function to start drawing
function startDrawing(e) {
  e.preventDefault(); // Prevent default touch behavior
  isDrawing = true;
  var rect = canvas.getBoundingClientRect();
  touchX = e.touches[0].clientX - rect.left;
  touchY = e.touches[0].clientY - rect.top;
}

// Function to draw lines
function drawLine(e) {
  e.preventDefault(); // Prevent default touch behavior
  if (isDrawing) {
    var rect = canvas.getBoundingClientRect();
    var newTouchX = e.touches[0].clientX - rect.left;
    var newTouchY = e.touches[0].clientY - rect.top;

    ctx.beginPath();
    ctx.moveTo(touchX, touchY);
    ctx.lineTo(newTouchX, newTouchY);
    ctx.stroke();

    touchX = newTouchX;
    touchY = newTouchY;
  }
}

// Function to stop drawing
function stopDrawing() {
  isDrawing = false;
}

// Event listeners for touch events
canvas.addEventListener("touchstart", startDrawing);
canvas.addEventListener("touchmove", drawLine);
canvas.addEventListener("touchend", stopDrawing);
canvas.addEventListener("touchcancel", stopDrawing);

// Function to clear canvas
function clearCanvas() {
  ctx.clearRect(0, 0, canvas.width, canvas.height);
}

const clearButton = document.getElementById("clear");

let index = 0; // Declare the index variable
clearButton.addEventListener("click", clearCanvas);

let contadorValue = 0;
const contadorValueCont = document.querySelector(".contador-value");
contadorValueCont.textContent = contadorValue;

const preguntabuttons = document.querySelectorAll(".pregunta-button");
arrowRight.addEventListener("click", () => {
  if (slides[index] === slides[slides.length - 2]) {
    arrowRight.style.display = "block";
  } else {
    arrowRight.style.display = "none";
  }
  preguntabuttons.forEach((button) => {
    button.style.pointerEvents = "auto";
    button.style.backgroundColor = "#e5e5e5";
  });
});

arrowLeft.addEventListener("click", () => {
  arrowRight.style.display = "block";
});

// Pregunta 1
const respuesta11 = document.getElementById("11");
const respuesta12 = document.getElementById("12");
const respuesta13 = document.getElementById("13");
const respuesta14 = document.getElementById("14");
const respuestas10 = document.querySelectorAll(".pregunta-button10");

// Correcta 13
respuesta11.addEventListener("click", () => {
  contadorValue--;
  contadorValueCont.textContent = contadorValue + " / 8";
  showAnswer10();
});

respuesta12.addEventListener("click", () => {
  contadorValue--;
  contadorValueCont.textContent = contadorValue + " / 8";
  showAnswer10();
});

respuesta13.addEventListener("click", () => {
  contadorValue++;
  contadorValueCont.textContent = contadorValue + " / 8";
  showAnswer10();
});

respuesta14.addEventListener("click", () => {
  contadorValue--;
  contadorValueCont.textContent = contadorValue + " / 8";
  showAnswer10();
});

function showAnswer10() {
  respuestas10.forEach((respuesta) => {
    if (respuesta !== respuesta13) {
      respuesta.style.pointerEvents = "none";
      respuesta13.style.pointerEvents = "none";
      respuesta.style.backgroundColor = "red";
    } else {
      respuesta13.style.backgroundColor = "#91ff02";
    }
    respuesta.style.color = "#fff";
  });
  arrowRight.style.display = "block";
}

// Pregunta 2
const respuesta21 = document.getElementById("21");
const respuesta22 = document.getElementById("22");
const respuesta23 = document.getElementById("23");
const respuesta24 = document.getElementById("24");
const respuestas20 = document.querySelectorAll(".pregunta-button20");

// Correcta 22
respuesta21.addEventListener("click", () => {
  contadorValue--;
  contadorValueCont.textContent = contadorValue + " / 8";
  showAnswer20();
});

respuesta22.addEventListener("click", () => {
  contadorValue++;
  contadorValueCont.textContent = contadorValue + " / 8";
  showAnswer20();
});

respuesta23.addEventListener("click", () => {
  contadorValue--;
  contadorValueCont.textContent = contadorValue + " / 8";
  showAnswer20();
});

respuesta24.addEventListener("click", () => {
  contadorValue--;
  contadorValueCont.textContent = contadorValue + " / 8";
  showAnswer20();
});

function showAnswer20() {
  respuestas20.forEach((respuesta) => {
    if (respuesta !== respuesta22) {
      respuesta.style.pointerEvents = "none";
      respuesta22.style.pointerEvents = "none";
      respuesta.style.backgroundColor = "red";
    } else {
      respuesta22.style.backgroundColor = "#91ff02";
    }
    respuesta.style.color = "#fff";
  });
  arrowRight.style.display = "block";
}

// Pregunta 3
const respuesta31 = document.getElementById("31");
const respuesta32 = document.getElementById("32");
const respuesta33 = document.getElementById("33");
const respuesta34 = document.getElementById("34");

// Correcta 33
respuesta31.addEventListener("click", () => {
  contadorValue--;
  contadorValueCont.textContent = contadorValue + " / 8";
  showAnswer30();
});

respuesta32.addEventListener("click", () => {
  contadorValue--;
  contadorValueCont.textContent = contadorValue + " / 8";
  showAnswer30();
});

respuesta33.addEventListener("click", () => {
  contadorValue++;
  contadorValueCont.textContent = contadorValue + " / 8";
  showAnswer30();
});

respuesta34.addEventListener("click", () => {
  contadorValue--;
  contadorValueCont.textContent = contadorValue + " / 8";
  showAnswer30();
});

function showAnswer30() {
  const respuestas30 = document.querySelectorAll(".pregunta-button30");
  respuestas30.forEach((respuesta) => {
    if (respuesta !== respuesta33) {
      respuesta.style.pointerEvents = "none";
      respuesta33.style.pointerEvents = "none";
      respuesta.style.backgroundColor = "red";
    } else {
      respuesta33.style.backgroundColor = "#91ff02";
    }
    respuesta.style.color = "#fff";
  });
  arrowRight.style.display = "block";
}

// Pregunta 4
const respuesta41 = document.getElementById("41");
const respuesta42 = document.getElementById("42");

// Correcta 41
respuesta41.addEventListener("click", () => {
  contadorValue++;
  contadorValueCont.textContent = contadorValue + " / 8";
  showAnswer40();
});

function showAnswer40() {
  const respuestas40 = document.querySelectorAll(".pregunta-button40");
  respuestas40.forEach((respuesta) => {
    if (respuesta === respuesta41) {
      respuesta.style.pointerEvents = "none";
      respuesta41.style.pointerEvents = "none";
      respuesta42.style.pointerEvents = "none";
      respuesta41.style.backgroundColor = "#91ff02";
      respuesta42.style.backgroundColor = "red";
      arrowRight.style.display = "block";
    }
    respuesta.style.color = "#fff";
  });
}

// Pregunta 5
const respuesta51 = document.getElementById("51");
const respuesta52 = document.getElementById("52");
const respuesta53 = document.getElementById("53");
const respuesta54 = document.getElementById("54");

// Correcta all

respuesta51.addEventListener("click", () => {
  contadorValue++;
  contadorValueCont.textContent = contadorValue + " / 8";
  showAnswer50();
});

respuesta52.addEventListener("click", () => {
  contadorValue++;
  contadorValueCont.textContent = contadorValue + " / 8";
  showAnswer50();
});

respuesta53.addEventListener("click", () => {
  contadorValue++;
  contadorValueCont.textContent = contadorValue + " / 8";
  showAnswer50();
});

respuesta54.addEventListener("click", () => {
  contadorValue++;
  contadorValueCont.textContent = contadorValue + " / 8";
  showAnswer50();
});

function showAnswer50() {
  const respuestas50 = document.querySelectorAll(".pregunta-button50");
  respuestas50.forEach((respuesta) => {
    respuesta.style.color = "#fff";
    respuesta.style.pointerEvents = "none";
    respuesta.style.backgroundColor = "#91ff02";
    arrowRight.style.display = "block";
  });
}

// Pregunta 6
const respuesta61 = document.getElementById("61");
const respuesta62 = document.getElementById("62");
const respuesta63 = document.getElementById("63");
const respuesta64 = document.getElementById("64");

// Correcta 63
respuesta61.addEventListener("click", () => {
  contadorValue--;
  contadorValueCont.textContent = contadorValue + " / 8";
  showAnswer60();
});

respuesta62.addEventListener("click", () => {
  contadorValue--;
  contadorValueCont.textContent = contadorValue + " / 8";
  showAnswer60();
});

respuesta63.addEventListener("click", () => {
  contadorValue++;
  contadorValueCont.textContent = contadorValue + " / 8";
  showAnswer60();
});

respuesta64.addEventListener("click", () => {
  contadorValue--;
  contadorValueCont.textContent = contadorValue + " / 8";
  showAnswer60();
});

function showAnswer60() {
  const respuestas60 = document.querySelectorAll(".pregunta-button60");
  respuestas60.forEach((respuesta) => {
    if (respuesta !== respuesta63) {
      respuesta.style.pointerEvents = "none";
      respuesta63.style.pointerEvents = "none";
      respuesta.style.backgroundColor = "red";
    } else {
      respuesta63.style.backgroundColor = "#91ff02";
    }
    respuesta.style.color = "#fff";
  });
  arrowRight.style.display = "block";
}

// Pregunta 7
const respuesta71 = document.getElementById("71");
const respuesta72 = document.getElementById("72");
const respuesta73 = document.getElementById("73");
const respuesta74 = document.getElementById("74");

// Correcta 71 y 74
respuesta71.addEventListener("click", () => {
  contadorValue++;
  contadorValueCont.textContent = contadorValue + " / 8";
  showAnswer70();
});

respuesta72.addEventListener("click", () => {
  contadorValue--;
  contadorValueCont.textContent = contadorValue + " / 8";
  showAnswer70();
});

respuesta73.addEventListener("click", () => {
  contadorValue--;
  contadorValueCont.textContent = contadorValue + " / 8";
  showAnswer70();
});

respuesta74.addEventListener("click", () => {
  contadorValue++;
  contadorValueCont.textContent = contadorValue + " / 8";
  showAnswer70();
});

function showAnswer70() {
  const respuestas70 = document.querySelectorAll(".pregunta-button70");
  respuestas70.forEach((respuesta) => {
    if (respuesta === respuesta71 || respuesta === respuesta74) {
      respuesta.style.pointerEvents = "none";
      respuesta71.style.pointerEvents = "none";
      respuesta74.style.pointerEvents = "none";
      respuesta71.style.backgroundColor = "#91ff02";
      respuesta74.style.backgroundColor = "#91ff02";
    } else {
      respuesta.style.backgroundColor = "red";
    }
    respuesta.style.color = "#fff";
  });
  arrowRight.style.display = "block";
}

// Pregunta 8
const respuesta81 = document.getElementById("81");
const respuesta82 = document.getElementById("82");
const respuesta83 = document.getElementById("83");
const respuesta84 = document.getElementById("84");

// Correcta 81
respuesta81.addEventListener("click", () => {
  contadorValue++;
  contadorValueCont.textContent = contadorValue + " / 8";
  showAnswer80();
});

respuesta82.addEventListener("click", () => {
  contadorValue--;
  contadorValueCont.textContent = contadorValue + " / 8";
  showAnswer80();
});

respuesta83.addEventListener("click", () => {
  contadorValue--;
  contadorValueCont.textContent = contadorValue + " / 8";
  showAnswer80();
});

respuesta84.addEventListener("click", () => {
  contadorValue--;
  contadorValueCont.textContent = contadorValue + " / 8";
  showAnswer80();
});

function showAnswer80() {
  const respuestas80 = document.querySelectorAll(".pregunta-button80");
  respuestas80.forEach((respuesta) => {
    if (respuesta === respuesta81) {
      respuesta.style.pointerEvents = "none";
      respuesta81.style.pointerEvents = "none";
      respuesta82.style.pointerEvents = "none";
      respuesta83.style.pointerEvents = "none";
      respuesta84.style.pointerEvents = "none";
      respuesta81.style.backgroundColor = "#91ff02";
      respuesta82.style.backgroundColor = "red";
      respuesta83.style.backgroundColor = "red";
      respuesta84.style.backgroundColor = "red";
      arrowRight.style.display = "block";
    }
    respuesta.style.color = "#fff";
  });
}

// Pregunta 9
const respuesta91 = document.getElementById("91");
const respuesta92 = document.getElementById("92");
const respuesta93 = document.getElementById("93");
const respuesta94 = document.getElementById("94");

// Correcta all
respuesta91.addEventListener("click", () => {
  contadorValue++;
  contadorValueCont.textContent = contadorValue + " / 8";
  showAnswer90();
});

respuesta92.addEventListener("click", () => {
  contadorValue++;
  contadorValueCont.textContent = contadorValue + " / 8";
  showAnswer90();
});

respuesta93.addEventListener("click", () => {
  contadorValue++;
  contadorValueCont.textContent = contadorValue + " / 8";
  showAnswer90();
});

respuesta94.addEventListener("click", () => {
  contadorValue++;
  contadorValueCont.textContent = contadorValue + " / 8";
  showAnswer90();
});

function showAnswer90() {
  const respuestas90 = document.querySelectorAll(".pregunta-button90");
  respuestas90.forEach((respuesta) => {
    respuesta.style.color = "#fff";
    respuesta.style.pointerEvents = "none";
    respuesta.style.backgroundColor = "#91ff02";
    arrowRight.style.display = "block";
  });
}

// Pregunta 10
const respuesta101 = document.getElementById("101");
const respuesta102 = document.getElementById("102");
const respuesta103 = document.getElementById("103");
const respuesta104 = document.getElementById("104");

// Correcta 104
respuesta101.addEventListener("click", () => {
  contadorValue--;
  contadorValueCont.textContent = contadorValue + " / 8";
  showAnswer100();
});

respuesta102.addEventListener("click", () => {
  contadorValue--;
  contadorValueCont.textContent = contadorValue + " / 8";
  showAnswer100();
});

respuesta103.addEventListener("click", () => {
  contadorValue--;
  contadorValueCont.textContent = contadorValue + " / 8";
  showAnswer100();
});

respuesta104.addEventListener("click", () => {
  contadorValue++;
  contadorValueCont.textContent = contadorValue + " / 8";
  showAnswer100();
});

function showAnswer100() {
  const respuestas100 = document.querySelectorAll(".pregunta-button100");
  respuestas100.forEach((respuesta) => {
    if (respuesta !== respuesta104) {
      respuesta.style.pointerEvents = "none";
      respuesta104.style.pointerEvents = "none";
      respuesta.style.backgroundColor = "red";
    } else {
      respuesta104.style.backgroundColor = "#91ff02";
    }
    respuesta.style.color = "#fff";
  });
  arrowRight.style.display = "block";
}

// Pregunta 11
const respuesta111 = document.getElementById("111");
const respuesta112 = document.getElementById("112");
const respuesta113 = document.getElementById("113");
const respuesta114 = document.getElementById("114");

// Correcta 112

respuesta111.addEventListener("click", () => {
  contadorValue--;
  contadorValueCont.textContent = contadorValue + " / 8";
  showAnswer110();
});

respuesta112.addEventListener("click", () => {
  contadorValue++;
  contadorValueCont.textContent = contadorValue + " / 8";
  showAnswer110();
});

respuesta113.addEventListener("click", () => {
  contadorValue--;
  contadorValueCont.textContent = contadorValue + " / 8";
  showAnswer110();
});

respuesta114.addEventListener("click", () => {
  contadorValue--;
  contadorValueCont.textContent = contadorValue + " / 8";
  showAnswer110();
});

function showAnswer110() {
  const respuestas110 = document.querySelectorAll(".pregunta-button110");
  respuestas110.forEach((respuesta) => {
    if (respuesta !== respuesta112) {
      respuesta.style.pointerEvents = "none";
      respuesta112.style.pointerEvents = "none";
      respuesta.style.backgroundColor = "red";
    } else {
      respuesta112.style.backgroundColor = "#91ff02";
    }
    respuesta.style.color = "#fff";
  });
  document.body.style.overflowX = "scroll";
  arrowRight.style.display = "block";
}

const numericInput = document.getElementById("numericInput");
const sendButton = document.getElementById("sendButton");
const intentosValue = document.querySelector(".intentos-value");
let intentos = 3;
intentosValue.textContent = intentos;

sendButton.addEventListener("click", () => {
  const numericValue = numericInput.value;
  if (numericValue === "2224") {
    contadorValue++;
    contadorValue++;
    contadorValue++;
    contadorValueCont.textContent = "120923" + " / 8";
    numericInput.style.pointerEvents = "none";
    numericInput.style.backgroundColor = "#91ff02";
    sendButton.style.pointerEvents = "none";
    sendButton.style.backgroundColor = "#91ff02";
    arrowRight.style.display = "block";
  } else {
    intentos--;
    numericInput.value = "";
    intentosValue.textContent = intentos;
    if (intentos === 0) {
      numericInput.style.pointerEvents = "none";
      numericInput.style.backgroundColor = "red";
      sendButton.style.pointerEvents = "none";
      sendButton.style.backgroundColor = "red";
      contadorValueCont.textContent = "120923" + " / 8";
      arrowRight.style.display = "block";
    }
  }
});

const passcodeInput = document.getElementById("passcode");
const submitButton = document.getElementById("passcode-button");
const correctPasscode = "i feel like a millionaire";

submitButton.addEventListener("click", () => {
  const enteredPasscode = passcodeInput.value.toLowerCase();
  if (enteredPasscode === correctPasscode) {
    passwordContainer.classList.remove("active");
    header.style.filter = "none";
    header.style.visibility = "hidden";
    overflowOn();
  } else {
    passcodeInput.value = "";
    passcodeInput.placeholder = "Nop :(";
  }
});
