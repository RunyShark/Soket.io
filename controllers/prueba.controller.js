const { request, response } = require("express");

const prueva = (req = request, res = response) => {
  res.json({ msg: "ok" });
};

module.exports = {
  prueva,
};
