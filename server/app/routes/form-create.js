module.exports = function (express, pool) {
    let router = express.Router();
    let idGen = require("shortid");
    
    router.post('/', async function (req, res) {
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
    });
    
    return router;
}