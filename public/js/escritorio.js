const escritorioNombre = document.querySelector("h1");
const btnButtom = document.querySelector("buttom");

const socket = io();

const searchPArams = new URLSearchParams(window.location.search);

if (!searchPArams.has("escritorio")) {
  window.location = "index.html";
  throw new Error(`El escritorio es obligatorio`);
}

const escritorio = searchPArams.get("escritorio");
escritorioNombre.innerText = escritorio;

socket.on("connect", () => {
  btnButtom.disable = false;
});

socket.on("disconnect", () => {
  btnButtom.disable = true;
});

btnButtom.addEventListener("click", () => {});
