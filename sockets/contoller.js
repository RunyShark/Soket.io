require("colors");

const TicketContro = require("../models/tockectControl");

const ticketContro = new TicketContro();

const socketController = (socket) => {
  console.log(`${"cliente conectado".yellow} ID: ${socket.id.green}`);

  socket.emit("ultimo-ticket", ticketContro.ultimo);

  socket.emit("estado-actual", ticketContro.ultimosCuatro);

  socket.on("disconnect", () => {
    console.log("Cliente desconectado".red, socket.id);
  });

  socket.on("estado-actual", (payload) => {});

  socket.on("siguiente-ticket", (payload, callback) => {
    const siguiente = ticketContro.siguiente();
    callback(siguiente);
    //TODO: Notificar
  });

  socket.on("atender-ticket", ({ escritorio }, callback) => {
    if (!escritorio) {
      return callback({
        ok: false,
        msg: "el escritorio es obligarotio",
      });
    }

    const ticket = ticketContro.atenderTicket(escritorio);
    socket.emit("estado-actual", ticketContro.ultimosCuatro);
    if (!ticket) {
      callback({
        ok: false,
        msg: "Ya no hay tickets",
      });
    } else {
      callback({
        ok: true,
        ticket,
      });
    }
  });
};

module.exports = {
  socketController,
};
