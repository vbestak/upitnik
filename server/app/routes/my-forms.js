module.exports = function (express, pool) {
    let router = express.Router();

    router.delete('/:id', async (req, res)=>{
        //delete upitnik
    })

    router.get('/', async (req, res)=>{
        //get all upitnici
    });



    return router;
};