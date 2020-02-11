module.exports = function (express, pool) {
    let router = express.Router();

    router.delete('/:id', async (req, res)=>{
        try {
            let conn = await (await pool).getConnection();
            let komentari = await conn.query("delete from komentari where idUpitnik = ?;", [req.params['id']]);
            let odgovori = await conn.query(`
                DELETE FROM odgovori 
                WHERE idOpcije IN (SELECT idOpcije FROM opcije WHERE idUpitnik = ?);`, [req.params['id']]);
            let opcije = await conn.query("DELETE FROM opcije WHERE idUpitnik = ?;", [req.params['id']]);
            let upitnici = await conn.query("DELETE FROM upitnik WHERE idUpitnik = ?;", [req.params['id']]);
            
            
            console.log("delete---", req.params['id']);
            res.json(upitnici); 
            conn.release();
        } catch (e) {
            console.log(e);
        }
        
        res.end();
    })

    router.get('/upitnici', async (req, res)=>{
        //get all upitnici
        try {
            let conn = await (await pool).getConnection();
            let upitnici = await conn.query("SELECT idUpitnik, upit AS naslov, sifra, idKorisnik FROM upitnik WHERE idKorisnik=?;", [req.decoded.idKorisnik]);

            res.json(upitnici); 
            conn.release();
        } catch (e) {
            console.log(e);
        }
        
        res.end();
    });



    return router;
};