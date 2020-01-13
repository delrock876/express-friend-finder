
const path = require('path')
const express = require('express')
const app = express()

// middleware
app.use(express.urlencoded({ extended: true }));
app.use(express.json())

//routes
require('./app/routing/apiRoutes')(app)
require('./app/routing/htmlRoutes')(app)

const PORT = process.env.PORT || 3000

app.listen(PORT)
