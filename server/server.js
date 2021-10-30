
var express = require('express')
var cors = require('cors')
var app = express()
const PORT = 1234
app.use(cors())






app.listen(PORT, function () {
  console.log('wWeb server listening on port 80')
})