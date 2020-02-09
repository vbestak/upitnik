module.exports = function (express, pool) {
    let cRouter = express.Router();

    cRouter.get('/comments/:idUpitnik', async function (req, res) {
        try {
            let idUpitnik = req.params.idUpitnik;
            console.log(idUpitnik, "idupitnik");
            
            let conn = await (await pool).getConnection();
            let rows = await conn.query(`
                SELECT idKomentar, korisnik.idKorisnik, ime as imeKorisnik, komentar as comment, datum
                FROM komentari
                JOIN korisnik ON korisnik.idKorisnik = komentari.idKorisnik
                WHERE komentari.idUpitnik = ?;`, [idUpitnik]);
           
            conn.release();
            
            res.json({comments:rows});
            res.end;

        } catch (e) {
            try {
                return res.json({
                    "code": 100,
                    "status": "Error with query",
                    "description":"Error, please try again"
                });
            } catch (error) {
                
            } 
        }
    });

    cRouter.post('/', async function (req, res) {
        try {
            let comment = req.body.comment;
            let idUpitnik = req.body.idUpitnik;
            let user = req.decoded;
            
            let conn = await (await pool).getConnection();
            let rows = await conn.query(`
                INSERT INTO komentari(idKorisnik, idUpitnik, datum, komentar)
                VALUES (?, ?, NOW(), ?);`, [user.idKorisnik, idUpitnik, comment]);
           
            conn.release();

           return res.json({code:"200", status:"OK", description:"comment successfully added"});

        } catch (e) {
            try {
                return res.json({
                    "code": 100,
                    "status": "Error with query",
                    "description":"Error, please try again"
                });
            } catch (error) {
                
            } 
        }

    });

    cRouter.put('/', async function (req, res) {
        try {
            let comment = req.body;
            
            let conn = await (await pool).getConnection();
            
            let rows = await conn.query(`
                UPDATE komentari
                SET komentar = ?
                WHERE idKomentar = ?;`, [comment.comment, comment.idKomentar]);
           
            conn.release();

           return res.json({code:"200", status:"OK", description:"comment successfully edited"});

        } catch (e) {
            try {
                return res.json({
                    "code": 100,
                    "status": "Error with query",
                    "description":"Error, please try again"
                });
            } catch (error) {
                
            } 
        }

    });

    cRouter.delete('/:id', async function (req, res) {
        try {
            let id = req.params.id;
            
            let conn = await (await pool).getConnection();
            let rows = await conn.query(`
                DELETE FROM komentari
                WHERE idKomentar = ?;`, [id]);
           
            conn.release();

           return res.json({code:"200", status:"OK", description:"comment successfully deleted"});

        } catch (e) {
            try {
                return res.json({
                    "code": 100,
                    "status": "Error with query",
                    "description":"Error, please try again"
                });
            } catch (error) {
                
            } 
        }

    });


    return cRouter;

};