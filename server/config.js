
module.exports={

    port:  process.env.PORT || 8081,
    pool: {
        connectionLimit : 100,
        host     : 'remotemysql.com',
        user     : 'SUQGahZRto',
        password : 'ISW2L9P9uK',
        database : 'SUQGahZRto',
        debug    :  false
    },
    secret:'loremipsum7725'

}
