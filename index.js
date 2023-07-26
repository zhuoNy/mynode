let express = require('express')
let app = express()

app.get('/', function (res, rep) {

  rep.send('Hello world')
})

app.listen(3000)

