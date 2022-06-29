const lblNuevoTicket = document.querySelector("#lblNuevoTicket");
const crearButton = document.querySelector("button");
const socket = io();

socket.on("connect", () => {
  console.log("Conectado");
  crearButton.disabled = false;
});

socket.on("disconnect", () => {
  crearButton.disabled = true;
});

socket.on("ultimo-ticket", (ultimo) => {
  lblNuevoTicket.innerText = "Ticket " + ultimo;
});

crearButton.addEventListener("click", () => {
  socket.emit("siguiente-ticket", null, (ticket) => {
    lblNuevoTicket.innerText = ticket;
  });
});
