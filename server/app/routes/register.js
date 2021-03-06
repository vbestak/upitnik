module.exports = function (express, pool, jwt, secret, bcrypt) {
    let authRouter = express.Router();

    authRouter.post('/', async function (req, res) {
        try {
            let body = req.body;
            let description = {
                username: "",
                email: ""
            };
            let flag = false;
            let conn = await (await pool).getConnection();
            let rowsUsername = await conn.query('SELECT ime FROM korisnik WHERE ime=?;', req.body.username);
            let rowsEmail = await conn.query('SELECT email FROM korisnik WHERE email=?;', req.body.email);

            console.log("Unos novog korisnika", body.username)

            if (rowsUsername.length != 0) {
                description.username = "Username already in use!";
                flag = true;
            }

            if (rowsEmail.length != 0) {
                description.email = "Email already in use!";
                flag = true;
            }

            if (flag){
                console.log("Korisnik vec postoji");
                
                res.send({
                    status: "NOT OK",
                    description: description
                });
            } else {
                let hash = await bcrypt.hash(body.password, 10);
                let rowsAddUser = await conn.query(`INSERT INTO korisnik(ime, email, lozinka, datumKreiranja, razina)
                                         VALUES (?, ?, ?, NOW(), 0);`, [body.username, body.email, hash]);

                let rows = await conn.query('SELECT idKorisnik, ime, email, razina FROM korisnik WHERE ime=?;', body.username);

                const token = jwt.sign({
                    idKorisnik: rows[0].idKorisnik,
                    ime: rows[0].ime,
                    email: rows[0].email,
                    razina: rows[0].razina
                }, secret, {
                    expiresIn: 1440
                });

                res.send({
                    status: "OK",
                    description: "Success",
                    user: rows[0],
                    token: token
                });
            }

            conn.release();
        } catch (e) {

            try {
                return res.json({
                    "code": 100,
                    "status": "Error with query",
                    "description": "Error, please try again"
                });
            } catch (error) {

            }
        }



    });


    return authRouter;
};