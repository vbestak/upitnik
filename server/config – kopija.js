
module.exports={

    port:  process.env.PORT || 8081,
    pool: {
        connectionLimit : 100,
        host     : 'localhost',
        user     : 'root',
        password : 'tvz12',
        database : 'upitnik',
        debug    :  false
    },
    secret:'loremipsum7725'

}