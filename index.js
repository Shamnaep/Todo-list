const express = require('express')
var cors = require('cors')
const app = express()
const port = 3000

app.use(cors())

// For parsing application/json for taking body of a request
app.use(express.json());

const todos =[]

app.get('/', (req, res) => {
  res.json(todos)
})
app.post('/', (req, res) => {
  const newtodos = (req.body.todo)
  todos.push(newtodos)
  res.json({ 
    status:"success",
    data: newtodos
    })

})
app.listen(port, () => {
  console.log(`Example app listening on port ${port}`)
})