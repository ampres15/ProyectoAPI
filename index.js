const express = require('express')
const Sequelize = require('sequelize')
const sequelize = new Sequelize('postgres://postgres:admin@localhost:5432/postgres')
const app = express()
const port = 8081
app.use(express.json());
sequelize.authenticate().then(() => {
    console.log('Connection has been established successfully.');
}).catch(err => {
    console.error('Unable to connect to the database:', err);
});
app.get('/', (req, res) => res.json({message: 'test api'}))
app.listen(port, () => console.log(`Ejecutando api en puerto ${port}`))