require('dotenv').config()
const express = require('express');
const routes = require('./controllers');

const sequelize = require('./config/connection');

const app = express();
const PORT = process.env.PORT || 8080;


app.use(express.json());
app.use(express.urlencoded({extended: true}));
app.use(express.static(path.join(__dirname, 'public')));

app.use(routes);

sequelize.sync().then(()=> {
    app.listen(PORT, () => console.log('app running on port ' + PORT))
})