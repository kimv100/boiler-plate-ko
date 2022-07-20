const express = require('express')
const app = express()
const port = 5000

const mongoose = require('mongoose')

mongoose.connect('mongodb+srv://kimv100:Mongodb100@boilerplate.ojmz0.mongodb.net/?retryWrites=true&w=majority', {
  //useNewUrlParse: true, useUnifiedTopology: true, useCreateIndex: true, useFindAndModify: false
}).then(() => console.log('MongoDB Connected...'))
  .catch(err => console.log(err) )


  app.get('/', (req, res) => {
  res.send('Hello World!~~~ 안녕하세유~!')
})

app.listen(port, () => {
  console.log(`Example app listening on port ${port}`)
})
