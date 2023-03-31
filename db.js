// import {db as MyDB} from "" // export const gibi yaparsan boyle import edersin
// import EsraninKeyfineGoreDB from "" // export default gibi yaparsan boyle import edersin

const { Sequelize } = require('sequelize')

const db = new Sequelize({
  dialect: 'postgres',
  database: 'nodejs-case',
  username: 'postgres',
  password: '123123',
  host: 'localhost',
  port:5432
})

module.exports = {
  db,
}
