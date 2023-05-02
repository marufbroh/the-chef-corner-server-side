const express = require('express')
const app = express()
const port = process.env.PORT || 5000

const chefData = require('./chef_data.json')

app.get('/', (req, res) => {
  res.send('Hello World!')
})

app.get('/chef-data', (req, res) => {
    res.send(chefData)
})

app.listen(port, () => {
  console.log(`Example app listening on port ${port}`)
})