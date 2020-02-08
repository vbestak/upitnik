module.exports = function (express, pool, jwt, secret, bcrypt) {
    let authRouter = express.Router();

    authRouter.get('/', async function (req, res) {
        let token = req.params.token;
        
        jwt.verify(token, secret, function (err, decoded){
            if (err){
                return res.status(403).send({
                    success:false,
                    message:'Wrong token'
                });
            } else {
                console.log("user", decoded);
                
                res.write(decoded);
                res.end();
            }
        });
        
        
    });

    authRouter.post('/', async function (req, res) {
        try {

            let conn = await (await pool).getConnection();
            let rows = await conn.query('SELECT idKorisnik, ime, lozinka, email, razina FROM korisnik WHERE ime=?;', req.body.username);
            conn.release();

            if (rows.length == 0) {

                res.json({
                    status: 'NOT OK',
                    description: 'Username doesnt exist'
                });

            }

            let compare = await bcrypt.compare(req.body.password, rows[0].lozinka);
            delete rows[0].lozinka;

            if (compare) {
                delete rows[0]['lozinka'];
                const token = jwt.sign({
                    idKorisnik: rows[0].idKorisnik,
                    ime: rows[0].ime,
                    email: rows[0].email,
                    razina: rows[0].razina
                }, secret, {
                    expiresIn: 1440
                });

                res.json({
                    status: 'OK',
                    description:"Success",
                    token: token,
                    user: rows[0]
                });

            } else if (rows.length > 0) {

                res.json({
                    status: 'NOT OK',
                    description: 'Wrong password'
                });

            }

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


    return authRouter;

};