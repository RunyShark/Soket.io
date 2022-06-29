require("colors");

const socketController = (socket) => {
  console.log(`${"cliente conectado".yellow} ID: ${socket.id.green}`);

  socket.on("disconnect", () => {
    console.log("Cliente desconectado".red, socket.id);
  });
  socket.on("enviar-mensaje", (payload, callback) => {
    const id = 123123;
    callback(id);
    socket.broadcast.emit("enviar-mensaje", payload);
  });
};

module.exports = {
  socketController,
};
