
module.exports={

    port:  process.env.PORT || 8081,
    pool: {
        connectionLimit : 100,
        host     : 'localhost',
        user     : 'root',
        password : '',
        database : 'upitnik',
        debug    :  false
    },
    secret:'loremipsum7725'

}
