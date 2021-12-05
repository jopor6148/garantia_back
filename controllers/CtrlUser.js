'use strict'
var usermodel = require('../models/MdlUser');
var UsersController = {
  all: async (req,res)=>{
    try {
      let users = await usermodel.getAll;
      return res.status(200).send(users);
    } catch (error) {
      return res.status(401).send(error);
    }
  },
  get: async (req, res) => { 
    try {
      let id = req.params.id
      let users = await usermodel.get(id);
      return res.status(200).send(users);
    } catch (error) {
      return res.status(401).send(error);
    }
  },
  update:(req, res) => {
      req.on('data', async (chunk) => {
        try {
          let id = req.params.id;
          let body = JSON.parse(chunk);
          let update = await usermodel.update(id, body);
          return res.status(200).send(update);
        } catch (error) {
          return res.status(401).send(error);
        }
      });
  },
};

module.exports = UsersController;