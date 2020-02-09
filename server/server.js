const express = require('express');
const app = express({mergeParams: true});
const bodyParser = require('body-parser');
const mysql = require('promise-mysql');
const path = require('path');
const bcrypt = require('bcryptjs');
const jwt = require('jsonwebtoken');
const config = require('./config');
const port = config.port;
const secret = config.secret;

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

//connection pool
let pool=mysql.createPool(config.pool);

app.use(bodyParser.urlencoded({ extended: true }));
app.use(bodyParser.json());

app.use(express.static(__dirname+'/public/app'));

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
const commentRouter = require("./app/routes/comment")(express, pool);

app.use('/rlogin', loginRouter);
app.use('/rregister', registerRouter);

app.use('/rform-create', tokenCheck, fcRouter);
app.use('/rform-vote', tokenCheck, fvRouter);
app.use('/rmy-forms', tokenCheck, myFormsRouter);
app.use('/rcomment', tokenCheck, commentRouter);

app.get('*', function(req, res) {
    console.log("send file");
    res.sendFile(path.join(__dirname + '/public/app/index.html'));
});

app.listen(port);
console.log('Running on port ' + port,);