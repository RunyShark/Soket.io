const path = require("path");
const fs = require("fs");

class Ticket {
  constructor(numero, escritorio) {
    this.numero = numero;
    this.escritorio = escritorio;
  }
}

class TicketContro {
  constructor() {
    this.ultimo = 0;
    this.hoy = new Date().getDate();
    this.ticktes = [];
    this.ultimosCuatro = [];
    this.init();
  }
  get toJson() {
    return {
      ultimo: this.ultimo,
      hoy: this.hoy,
      ticktes: this.ticktes,
      ultimosCuatro: this.ultimosCuatro,
    };
  }

  init() {
    const { hoy, ultimo, ticktes, ultimosCuatro } = require("../db/data.json");
    if (hoy === this.hoy) {
      this.ticktes = ticktes;
      this.ultimo = ultimo;
      this.ultimosCuatro = ultimosCuatro;
    } else {
      this.guardarDB();
    }
  }

  guardarDB() {
    const dbPath = path.join(__dirname, "../db/data.json");
    fs.writeFileSync(dbPath, JSON.stringify(this.toJson));
  }
  siguiente() {
    this.ultimo += 1;
    const ticket = new Ticket(this.ultimo, null);
    this.ticktes.push(ticket);
    this.guardarDB();
  }
}

module.exports = TicketContro;
