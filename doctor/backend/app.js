const express = require('express');
const cors = require('cors');
var routes = require("./routers/index");
const app = express();
app.use(express.json());
app.use(cors())


app.use("/api", routes);


app.get('/', (req, res) => {
    res.send({message:'Welcome to Homepage!'})
})





// unHandler routes
app.all('*', (req, res) => {
    res.send({message:'Not found'})
});

module.exports = app;
