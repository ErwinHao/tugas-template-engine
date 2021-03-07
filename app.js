const path = require('path');
const express = require('express');
const engine = require('ejs-mate');
const chalk = require('chalk');

const routes = require('./routes')

const app = express()

app.engine('ejs', engine);
app.set('view engine', 'ejs')
app.set('views', path.join(__dirname, 'views'));
app.use(express.static(path.join(__dirname, 'public')))

app.use(routes)

app.listen(3000, () => {
  console.log(chalk.blue('App is running in port 3000'))
})