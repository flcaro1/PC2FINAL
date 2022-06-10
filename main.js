const express = require('express');
const app = express();
let Esquema = null;

app.use(express.urlencoded({ extended: true }));
app.use(express.json());

app.get("/con", (req, res) => {
    Esquema = require('./database');
    return res.send("OK");
});

app.listen(4000, () => {
    console.log('listenning');
})