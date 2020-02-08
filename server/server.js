const express = require('express');
const app = express({mergeParams: true});
const bodyParser = require('body-parser');
const mysql = require('promise-mysql');
const path = require('path');
const bcrypt = require('bcryptjs');
const jwt = require('jsonwebtoken');
const port = process.env.PORT || 8081;

var tokenCheck = function (req, res, next) {
    const token = req.body.token || req.params.token || req.headers['x-access-token'];
    if(token == undefined){
        //pocetni cors upit
        res.end();
    }else{
        if (token){
            jwt.verify(token, secret, function (err, decoded){
                if (err){
                    return res.status(403).send({
                        success:false,
                        message:'Wrong token'
                    });
                } else {
                    req.decoded=decoded;
                    next();
                }
            });
        } else {
            return res.status(403).send({
                success:false,
                message:'No token'
            });
        }
    }
  }

const secret="loremipsum7725";

//connection pool
let pool=mysql.createPool({
    connectionLimit : 100,
    host     : 'localhost',
    user     : 'root',
    password : 'tvz12',
    database : 'upitnik',
    debug    :  false
});

app.use(bodyParser.urlencoded({ extended: true }));
app.use(bodyParser.json());

app.use(express.static(__dirname+'/public'));

app.use(function(req, res, next) {
    res.setHeader('Access-Control-Allow-Origin', '*');
    res.setHeader('Access-Control-Allow-Methods', 'GET, POST, PUT, DELETE');
    res.setHeader('Access-Control-Allow-Headers', 'X-Requested-With,content-type, \ x-access-token');
    res.setHeader('Access-Control-Allow-Credentials', true);
    next();
});


const fcRouter = require("./app/routes/form-create.js")(express, pool);
const fvRouter = require("./app/routes/form-vote.js")(express, pool, jwt, secret);
const loginRouter = require("./app/routes/login.js")(express, pool, jwt, secret, bcrypt);
const registerRouter = require("./app/routes/register.js")(express, pool, jwt, secret, bcrypt);
const myFormsRouter = require("./app/routes/my-forms.js")(express, pool);

app.use('/login', loginRouter);
app.use('/register', registerRouter);

app.use(tokenCheck);

app.get('/whoAmI', function(req,res){
    res.json(req.decoded);
});

app.use('/form-create', fcRouter);
app.use('/form-vote', fvRouter);
app.use('/my-forms', myFormsRouter);

/* app.get('*', function(req, res) {
    res.sendFile(path.join(__dirname + '/index4.html'));
}); */

app.listen(port);
console.log('Running on port ' + port,);