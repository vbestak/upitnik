module.exports = function (express, pool) {
    let router = express.Router();

    router.route('/vote').get(async function (req, res) {
        console.log(req.originalUrl, "get request");
        res.end();
    }).post(async function (req, res) {
        //GLASAJ
        console.log(req.originalUrl, "post request");
        let body = req.body;

        try {
            let conn = await (await pool).getConnection();
            let rowsUpitnik = await conn.query("INSERT INTO odgovori(idKorisnik, idOpcije) VALUES(?, ?);", [req.decoded.idKorisnik, body.opcije]);
            
            res.status(200).write("OK");

            conn.release();
        } catch (error) {
            console.log(error)
        }

        res.end();
    }).put(async function (req, res) {
        console.log(req.originalUrl, "put request");
        res.end();
    }).delete(async function (req, res) {
        console.log(req.originalUrl, "delete request");
        res.end();
    });
    
    router.route('/upitnik/:sifra').get(async function (req, res) {
        //DOHVATI UPITNIK S xY SIFROM
        let upitnik;
        let sifra = req.params.sifra;
        /* console.log(JSON.stringify(req.headers));
        console.log();  */
        
        console.log(sifra, "sifra - dohvati formu");

        try {
            let conn = await (await pool).getConnection();
            let rowsUpitnik = await conn.query("SELECT idUpitnik, upit AS naslov, sifra, idKorisnik FROM upitnik WHERE sifra=?;", [sifra]);
            let rowsOpcije = await conn.query(`SELECT opcije.idOpcije, opcije.opcija, COUNT(odgovori.idOdgovori) AS glasovi 
                                                FROM opcije LEFT JOIN odgovori ON opcije.idOpcije = odgovori.idOpcije 
                                                WHERE idUpitnik=?
                                                GROUP BY opcije.idOpcije, opcije.opcija;`, [rowsUpitnik[0].idUpitnik]);
            upitnik = rowsUpitnik[0];
            upitnik.opcije = rowsOpcije;
           
            res.write(JSON.stringify(upitnik));
            res.status(200); 
            conn.release();
        } catch (e) {
            console.log(e);
        }
        
        res.end();
    }).post(async function (req, res) {
        console.log(req.originalUrl, "post request");
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