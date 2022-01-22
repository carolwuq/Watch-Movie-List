const express = require('express');
const app= express();


app.get('/', (req, res) => {
    res.send("Hello")
})

const Port = 8080;
app.listen(Port, () =>{
    console.log(`I am listening on port ${Port}`)
})

