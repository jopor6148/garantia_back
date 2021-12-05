'use strict'
var usermodel = require('../models/MdlUser');
var Auth = {
  run: (req, res) => {
    req.on('data', async (chunk) => {
      try {
        let body = JSON.parse(chunk);
        console.log(body);
        let update = await usermodel.auth(body.username, body.password);
        return res.status(200).send(update);
      } catch (error) {
        console.log(error);
        return res.status(401).send(error);
      }
    });
  }
}

module.exports = Auth
