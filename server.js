var express = require('express')
var bodyParser = require('body-parser')
var app = express()
var cors = require('cors')
const scanner = require('node-wifi-scanner')

app.use(cors())
app.use(bodyParser.json())

app.set('port', (process.env.PORT || 4000))
app.use(bodyParser.urlencoded({extended: false}))
app.use(bodyParser.json())

app.get('/', function (req, res) {
  scanner.scan((err, networks) => {
    if (err) console.error(err)
    res.send(networks)
  })
})

app.listen(app.get('port'), function () {
  console.log('run at port', app.get('port'))
})
