require('dotenv').config()
const express = require('express');
const app = express();
const routes = require('./routes');

const sequelize = require('./config/connection');
const PORT = process.env.PORT || 8080;


app.use(express.json());
app.use(express.urlencoded({extended: true}));
if (process.env.NODE_ENV === "production") {
    app.use(express.static("client/build"));
  }

app.use(routes);

sequelize.sync().then(()=> {
    app.listen(PORT, () => console.log('app running on port ' + PORT))
})