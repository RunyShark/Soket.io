const lblTicket1 = document.querySelector("#lblTicket1");
const lblEscritorio1 = document.querySelector("#lblEscritorio1");
const lblTicket2 = document.querySelector("#lblTicket2");
const lblEscritorio2 = document.querySelector("#lblEscritorio2");
const lblTicket3 = document.querySelector("#lblTicket3");
const lblEscritorio3 = document.querySelector("#lblEscritorio3");
const lblTicket4 = document.querySelector("#lblTicket4");
const lblEscritorio4 = document.querySelector("#lblEscritorio4");

const socket = io();

socket.on("estado-actual", (payload) => {
  const [ticket0, ticket1, ticket2, ticket3] = payload;
  if (ticket0) {
    lblTicket1.innerText = "tickec " + ticket0.numero;
    lblEscritorio1.innerText = ticket0.escritorio;
  }
  if (ticket1) {
    lblTicket2.innerText = "tickec " + ticket1.numero;
    lblEscritorio2.innerText = ticket1.escritorio;
  }
  if (ticket2) {
    lblTicket3.innerText = "tickec " + ticket2.numero;
    lblEscritorio3.innerText = ticket2.escritorio;
  }
  if (ticket3) {
    lblTicket3.innerText = "tickec " + ticket3.numero;
    lblEscritorio3.innerText = ticket3.escritorio;
  }
});
