const lblOnline = document.querySelector("#lblOnline");
const lblOffline = document.querySelector("#lblOffline");
const txtMg = document.querySelector("#txtMg");
const btnEnviar = document.querySelector("#btnEnviar");
const socket = io();
socket.on("connect", () => {
  console.log("Conectado");

  lblOffline.style.display = "none";
  lblOnline.style.display = "";
});

socket.on("enviar-mensaje", (payload) => {
  socket.on("enviar-mensaje", payload);
  console.log(payload);
});

socket.on("disconnect", () => {
  console.log("Desconectado del servidor");
  lblOnline.style.display = "none";
  lblOffline.style.display = "";
});
btnEnviar.addEventListener("click", () => {
  const msg = txtMg.value;
  const payload = {
    msg,
    id: "uuid",
    fecha: new Date().getTime(),
  };
  socket.emit("enviar-mensaje", payload);
});
