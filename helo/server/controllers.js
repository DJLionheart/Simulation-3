module.exports = {

    register: (req, res, next) => {
        const { username, password } = req.body;
        let profilePic = `https://robohash.org/${username}.png`; 
        const db = req.app.get('db');

        db.create_user( username, password, profilePic).then( user => {
            res.status(200).send(user[0]);
        }).catch(err => console.log(err));
    },

    login: (req, res, next) => {
        const { username, password } = req.body;
        const db = req.app.get('db');

        db.find_user(username, password).then( user => {
 
            res.status(200).send(user[0])
        }).catch(err => console.log(err));
    },

    getPosts: (req, res, next) => {
        const db = req.app.get('db');
        
        const { userposts, search } = req.query;

        switch( req.query ) {
            case req.query.userposts && req.:

            default:
                db.get_all_posts().then( posts => {
                    res.status(200).send(posts)
                }).catch(err => console.log(err));
        }


    }
}





//(Math.random().toString(36).replace(/[^a-z]+/g, '').substr(0, 15)