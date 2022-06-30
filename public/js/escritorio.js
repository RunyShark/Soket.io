const escritorioNombre = document.querySelector("h1");
const btnButtom = document.querySelector("button");
const lblTicket = document.querySelector("small");
const divAlerta = document.querySelector(".alert");
const encolar = document.querySelector("#lblPendientes");

const socket = io();

const searchPArams = new URLSearchParams(window.location.search);

if (!searchPArams.has("escritorio")) {
  window.location = "index.html";
  throw new Error(`El escritorio es obligatorio`);
}

const escritorio = searchPArams.get("escritorio");
escritorioNombre.innerText = escritorio;

divAlerta.style.display = "none";

socket.on("connect", () => {
  btnButtom.disable = false;
});

socket.on("disconnect", () => {
  btnButtom.disable = true;
});

btnButtom.addEventListener("click", () => {
  socket.emit("atender-ticket", { escritorio }, ({ ok, ticket, msg }) => {
    if (!ok) {
      lblTicket.innerText = "Nadie";
      return (divAlerta.style.display = "");
    }

    lblTicket.innerText = "Ticket " + ticket.numero;
    // textPrimary.innerText = `Atendiendo el ticket: ${ticket.numero}`;
    // res.msg
    //   ? (textPrimary.innerText = `${msg}...`)
    //   : (textPrimary.innerText = `Atendiendo el ticket: ${ticket.numero}`);
  });
});
