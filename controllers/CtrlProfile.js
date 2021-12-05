'use strict'
var profilemodel = require('../models/MdlProfile');
var CtrlProfile = {
  all: async (req, res) => {
    try {
      let users = await profilemodel.getAll;
      return res.status(200).send(users);
    } catch (error) {
      return res.status(401).send(error);
    }
  },
  get: async (req, res) => {
    try {
      let id = req.params.id
      let users = await profilemodel.get(id);
      return res.status(200).send(users);
    } catch (error) {
      return res.status(401).send(error);
    }
  },
  update: (req, res) => {
    req.on('data', async (chunk) => {
      try {
        let id = req.params.id;
        let body = JSON.parse(chunk);
        let update = await profilemodel.update(id, body);
        return res.status(200).send(update);
      } catch (error) {
        return res.status(401).send(error);
      }
    });
  },
  delete: async(req, res) => {
    try {
      let id = req.params.id;
      let update = await profilemodel.update(id, {estatus:0});
      return res.status(200).send(update);
    } catch (error) {
      return res.status(401).send(error);
    }
  },
};

module.exports = CtrlProfile;