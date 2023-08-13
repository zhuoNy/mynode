let express = require('express')
let app = express()
const port = 3000;

app.get('/', function (res, rep) {

  rep.send('Hello world!')
 })

app.listen(port, () => {

  console.log(`Example app listening on port ${port}`)
})

