var myqldatabase = require('../config/database');
var fields = ['id', 'nombre', 'descripcion', 'estatus', 'fecha_creacion'];
var MdlProfile = {
  getAll: new Promise((resolve, reject) => {
    myqldatabase.query('SELECT ?? FROM perfiles', [fields], (error, response) => {
      if (error) {
        reject(error);
      }
      resolve(response);
    })
  }),
  get: (id) => new Promise((resolve, reject) => {
    myqldatabase.query(`SELECT ?? FROM perfiles where id = ?`, [fields, id], (error, response) => {
      if (error) {
        reject(error);
      }
      resolve(response);
    })
  }),
  update: (id, params) => new Promise((resolve, reject) => {
    myqldatabase.query(`UPDATE perfiles set ? where id = ${id}`, params, (error, response) => {
      if (error) {
        reject(error);
      }
      resolve(response);
    });
  })
}

module.exports = MdlProfile;
