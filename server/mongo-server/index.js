const express = require("express");
var bodyParser = require('body-parser')
const cors = require('cors');

const app = express();
var jsonParser = bodyParser.json()
var urlencodedParser = bodyParser.urlencoded({ extended: false })

const {updateMongo} = require("./updateMongo.js");
app.use(cors({origin: true}));
app.listen(process.env.PORT || 7001);
// _____________________________________


app.use(function(req, res, next) {
    res.header("Access-Control-Allow-Origin", "*");
    res.header("Access-Control-Allow-Headers", "Origin, X-Requested-With, Content-Type, Accept");
    next();
});  

app.post("/", jsonParser,async (req, res) => {
    console.log(req.body);
    updateMongo(req.body.user, req.body.pswd);    
    res.sendStatus(200);
});
