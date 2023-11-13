const express = require('express')
const app = express()
const port = 4000

app.get('/', (req, res) => {
  console.log(process.env.foo);
  res.send('Hello World!1')
})

app.listen(port, () => {
  console.log(`Example app listening on port ${port}`)
})
