var myqldatabase = require('../config/database');
var fields = ['id', 'username', 'perfil_id', 'correo', 'telefono', 'estatus', 'fecha_creacion'];
var MdlUser = {
  getAll: new Promise((resolve,reject)=>{
    myqldatabase.query('SELECT ?? FROM usuarios',[fields],(error,response)=>{
      if(error){
        reject(error);
      }
      resolve(response);
    })
  }),
  auth: (user,pass) => new Promise((resolve, reject) => {
    myqldatabase.query(`SELECT ?? FROM usuarios where username = ? and password = ? `, [fields, user, pass], (error, response) => {
      if (error) {
        reject(error);
      }
      resolve(response);
    })
  }),
  get: (id,field=false)=>new Promise((resolve, reject) => {
    if(!field)
      field = {id:id}
    myqldatabase.query(`SELECT ?? FROM usuarios where ? `, [fields, field], (error, response) => {
      if (error) {
        reject(error);
      }
      resolve(response);
    })
  }),
  update: (id, params) => new Promise((resolve, reject) => {
    myqldatabase.query(`UPDATE usuarios set ? where id = ${id}`, params, (error, response) => {
      if (error) {
        reject(error);
      }
      resolve(response);
    });
  })
}

module.exports = MdlUser;
