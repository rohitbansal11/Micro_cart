const express = require('express')
const app = express()
const port = process.env.PORT||8081

app.get('/', (req, res) => {
  res.send('Hello Form Cart!')
})

app.listen(port, () => {
  console.log(`Example app listening on port ${port}`)
})