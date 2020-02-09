module.exports = function (express, pool) {
    let router = express.Router();

    router.delete('/:id', async (req, res)=>{
        try {
            let conn = await (await pool).getConnection();
            let upitnici = await conn.query("CALL deleteUpitnik(?);", [req.params['id']]);
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