const express = require('express');
var bodyParser = require('body-parser')

const app = express()
const port = 3000
app.use(bodyParser.json()); 
app.use(bodyParser.urlencoded({ extended: true }));


app.get('/', (req, res) => {
res.json({message:"hello word"})
})

app.listen(3000, () =>{
    console.log("Server is running on port 3000")
})