require("colors");

const TicketContro = require("../models/tockectControl");

const ticketContro = new TicketContro();

const socketController = (socket) => {
  console.log(`${"cliente conectado".yellow} ID: ${socket.id.green}`);

  socket.emit("ultimo-ticket", ticketContro.ultimo);

  socket.on("disconnect", () => {
    console.log("Cliente desconectado".red, socket.id);
  });
  socket.on("siguiente-ticket", (payload, callback) => {
    const siguiente = ticketContro.siguiente();
    callback(siguiente);
    //TODO: Notificar
  });
};

module.exports = {
  socketController,
};
