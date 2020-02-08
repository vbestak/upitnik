module.exports = function (express, pool) {
    let router = express.Router();
    let idGen = require("shortid");

    router.route('/').get(async function (req, res) {
        console.log(req.originalUrl, "get request");
        res.end();
    }).post(async function (req, res) {
        let body = req.body;
        let sifra = idGen.generate();
        console.log(body, "tijelo - kreiraj formu");

        try {
            let conn = await (await pool).getConnection();
            let rowsUpitnik = await conn.query('INSERT INTO upitnik(upit, sifra, idKorisnik) VALUES (?, ?, ?);', [body.naslov, sifra, req.decoded.idKorisnik]);
            
            body.opcije.forEach( async (opcija)=> {
                await conn.query('INSERT INTO opcije(idUpitnik, opcija) VALUES (?, ?);', [rowsUpitnik.insertId, opcija]);
            });
            
            res.status(200) ;
            res.json({id:sifra});
            
            conn.release();
        } catch (e) {
            console.log(e);
        }
        
        res.end();
    }).put(async function (req, res) {
        console.log(req.originalUrl, "put request");
        res.end();
    }).delete(async function (req, res) {
        console.log(req.originalUrl, "delete request");
        res.end();
    });

    return router;
}