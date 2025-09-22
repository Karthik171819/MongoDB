const express = require('express');
const app = express();
const bodyparser = require('body-parser');
const exhbs = require('express-handlebars');

//configuration, views used for templating engine purpose
app.engine('hbs', exhbs.engine());
app.set('view engine', 'hbs');
app.set('views', 'views');