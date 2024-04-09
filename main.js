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
  } else {
    arrowLeft.style.display = "block";
  }

  if (slides[index] === slides[slides.length - 1]) {
    arrowRight.style.display = "none";
  }

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

startButton.addEventListener("click", () => {
  header.style.zIndex = 0;
  header.style.opacity = 0;
  header.style.pointerEvents = "none";
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

clearButton.addEventListener("click", clearCanvas);

let contadorValue = 0;
const contadorValueCont = document.querySelector(".contador-value");
contadorValueCont.textContent = contadorValue;

const preguntabuttons = document.querySelectorAll(".pregunta-button");
arrowRight.addEventListener("click", () => {
  arrowRight.style.display = "none";
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
  });
  arrowRight.style.display = "block";
}
